import React from "react";
// UI Frameworks
import { Col, Row, Typography } from "antd";
// Shared components
import PageTitle from "components/PageTitle";
// Utilities and hooks
import cs from "classnames";
// Styles
import styles from "./index.module.scss";
import Maybe from "components/Maybe";

interface IProps {
	title?: string;
	children: React.ReactNode;
}

const { Title } = Typography;
const Main: React.FC<IProps> = (props: IProps) => {
	return (
		<Row type="flex" className={styles["auth-wrapper"]}>
			<Col
				className={styles["auth-wrapper__auth-right"]}
				lg={{ span: 6, offset: 6, pull: 3 }}
				md={{ span: 10, offset: 2, pull: 8 }}
				xs={{ span: 20, offset: 2, pull: 2 }}
				sm={{ span: 10, offset: 2, pull: 8 }}
			>
				<PageTitle title={props.title} />
				<div className={cs(styles["auth-wrapper__auth-header"], styles["auth-header"])}>
					<div className={styles["auth-wrapper__auth-header__logo"]}></div>
					<Maybe condition={Boolean(props.title)}>
						<Title level={4}>{props.title}</Title>
					</Maybe>
				</div>
				<div>{props.children}</div>
			</Col>
			<Col className={styles["auth-wrapper__auth-left"]} lg={12}></Col>
		</Row>
	);
};
Main.defaultProps = {
	title: "Authentication",
};

export default Main;
