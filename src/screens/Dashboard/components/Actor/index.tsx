import React from "react";
// UI Frameworks
import { Card } from "antd";

const { Meta } = Card;

interface IProps {
	name: string;
	className?: string;
	dob: string;
	image: string;
}

const Actor: React.FC<IProps> = props => {
	return (
		<Card className={props.className} cover={<img alt="" src={props.image} />}>
			<Meta title={props.name} description={`Birthday: ${props.dob}`} />
		</Card>
	);
};

export default Actor;
