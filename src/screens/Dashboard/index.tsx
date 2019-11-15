import * as React from "react";
// UI Framework
import { Card, Row, Col } from "antd";
// Shared components
import PageTitle from "components/PageTitle";
// Utilities and hooks
import cs from "classnames";
import { useAppDispatch, useAppState } from "state/index.app";
import { fetchFames, Fame } from "helpers/endpoints";
import * as R from "ramda";
// Styles
import styles from "./index.module.scss";

const { Meta } = Card;

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
			<PageTitle title="Dashboard" />
			<Row gutter={20}>
				{R.map<Fame, React.ReactNode>(fame => {
					return (
						<Col key={fame.id} span={8} style={{ marginBottom: 30 }}>
							<Card className={styles["dashboard__actors"]} cover={<img alt="" src={fame.image} />}>
								<Meta title={fame.name} description={fame.dob} />
							</Card>
						</Col>
					);
				})(state.fames)}
			</Row>
		</div>
	);
};

export default Dashboard;
