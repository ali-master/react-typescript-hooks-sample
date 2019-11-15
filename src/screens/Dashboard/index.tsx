import * as React from "react";
// UI Framework
import { Layout } from "antd";
// Shared components
import PageTitle from "components/PageTitle";
// Styles
import styles from "./index.module.scss";

const Dashboard: React.FC = () => {
	const { Content: LayoutContent } = Layout;
	return (
		<Layout>
			<PageTitle title="Dashboard" />
			<Layout>
				<LayoutContent className={styles["dashboard-content"]}>
					salam
				</LayoutContent>
			</Layout>
		</Layout>
	);
};

export default Dashboard;
