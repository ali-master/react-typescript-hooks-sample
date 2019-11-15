import * as React from "react";
// UI Framework
import { Layout } from "antd";
//Shared components
import PageTitle from "components/PageTitle";
// Local components
import Sider from "./components/Sider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

const Dashboard: React.FC = () => {
	return (
		<Layout>
			<PageTitle title="صفحه اصلی داشبورد" />
			<Sider />
			<Layout>
				<Header />
				<Content />
				<Footer />
			</Layout>
		</Layout>
	);
};

export default Dashboard;
