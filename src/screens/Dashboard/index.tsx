import * as React from "react";
// UI Framework and Global Components
import { Row, Col, Modal, Button } from "antd";
import { Switch, Route } from "react-router";
// Shared components
import PageTitle from "components/PageTitle";
// Local components
import Fame from "./screens/Fame";
import Actor from "./components/Actor";
// Utilities and hooks
import * as R from "ramda";
import cs from "classnames";
import useUser from "hooks/useUser";
import { push } from "helpers/history";
import { fetchFames, IFame } from "helpers/endpoints";
import { useAppDispatch, useAppState } from "state/index.app";
// Styles
import styles from "./index.module.scss";

const { confirm } = Modal;

const Dashboard: React.FC = () => {
	const dispatch = useAppDispatch();
	const state = useAppState();
	const user = useUser();

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

	function showConfirm() {
		confirm({
			title: "Are you sure you want to sign-out?",
			async onOk() {
				await user.logout();
			},
		});
	}

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
			<Button onClick={() => showConfirm()} icon="poweroff" className={styles["dashboard__signoutBtn"]}>
				Sign out
			</Button>
		</div>
	);
};

export default Dashboard;
