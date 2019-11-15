import * as React from "react";
// UI Framework and Global Components
import { Row, Col } from "antd";
import { Switch, Route } from "react-router";
// Shared components
import PageTitle from "components/PageTitle";
// Utilities and hooks
import cs from "classnames";
import { useAppDispatch, useAppState } from "state/index.app";
import { fetchFames, IFame } from "helpers/endpoints";
import * as R from "ramda";
// Styles
import styles from "./index.module.scss";
import Fame from "./screens/Fame";
import { push } from "helpers/history";
import Actor from "./components/Actor";

const Dashboard: React.FC = () => {
	const dispatch = useAppDispatch();
	const state = useAppState();

	React.useEffect(() => {
		// @ts-ignore
		if (state.fames.length === 0) {
			(async () => {
				try {
					const res = await fetchFames();
					const fames = res.data.list;

					dispatch({ type: "ADD_FAMES", payload: { fames } });
				} catch (error) {
					throw error;
				}
			})();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={cs("container", styles.dashboard)}>
			<Switch>
				<Route path="/dashboard" exact>
					<PageTitle title="Dashboard" />
					<Row gutter={20}>
						{R.map<IFame, React.ReactNode>(fame => {
							return (
								<Col
									onClick={() => push(`/dashboard/fame/${fame.id}`)}
									key={fame.id}
									span={8}
									style={{ marginBottom: 30 }}
								>
									<Actor
										name={fame.name}
										dob={fame.dob}
										image={fame.image}
										className={styles["dashboard__actors"]}
									/>
								</Col>
							);
						})(state.fames)}
					</Row>
				</Route>
				<Route path="/dashboard/fame/:id" component={Fame} />
			</Switch>
		</div>
	);
};

export default Dashboard;
