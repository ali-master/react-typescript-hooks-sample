/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
// UI Frameworks
import { Icon, Typography, Avatar } from "antd";
// Hooks
import { useParams } from "react-router";
import { useAppState } from "state/index.app";
// Utilities
import { IFame } from "helpers/endpoints";
// Styles
import styles from "./index.module.scss";
import showNotify from "helpers/notify";
import { Link } from "react-router-dom";
import { push } from "helpers/history";

const { Title, Text } = Typography;

const Fame = () => {
	const params = useParams<{ id: string }>();
	const state = useAppState();
	const [fame, setFame] = useState<Partial<IFame>>({});

	useEffect(() => {
		const fame = state.fames.find(({ id }) => id === params.id);
		if (fame) {
			setFame(fame);
		} else {
			push("/dashboard");
			showNotify({ text: "There is no fame" });
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className={styles.fame}>
			<div className={styles["fame__back"]}>
				<Link to="/dashboard">
					<Icon type="arrow-left" />
				</Link>
			</div>
			<div className={styles["fame__content"]}>
				<Title>{fame.name}</Title>
				<Text code>Birthday: {fame.dob}</Text>
				<br />
				<br />
				<Avatar src={fame.image} size={250} />
			</div>
		</div>
	);
};

export default Fame;
