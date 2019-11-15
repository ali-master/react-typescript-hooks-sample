import * as React from "react";
// UI Frameworks
import { Form, Input, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";
// Local shared components
import Main from "screens/Auth/components/Main";
//Services
import showNotify from "helpers/notify";

// Styles
import styles from "./index.module.scss";

const Login: React.FC<FormComponentProps> = props => {
	const [loading, setLoading] = React.useState(false);
	const { getFieldDecorator } = props.form;
	/**
	 *
	 * @param e
	 */
	function handleSubmit(e: React.FormEvent): void {
		e.preventDefault();
		props.form.validateFields(async (err, values) => {
			if (!err) {
				try {
					setLoading(true);
					// await login(values);
					showNotify({ text: " Logged-in successfully", duration: 3000 });
					setLoading(false);
				} catch (error) {
					setLoading(false);

					throw error;
				}
			}
		});
	}

	return (
		<Main>
			<Form className={styles["login"]} onSubmit={(e: any) => handleSubmit(e)}>
				<Form.Item label="Username">
					{getFieldDecorator("username", {
						rules: [
							{
								required: true,
								message: "Enter username",
								transform: value => (value ? value.trim() : value),
							},
						],
					})(<Input />)}
				</Form.Item>
				<Form.Item label="Password">
					{getFieldDecorator("password", {
						rules: [
							{
								required: true,
								transform: value => (value ? value.trim() : value),
								message: "Enter password",
							},
						],
					})(<Input type="password" />)}
				</Form.Item>
				<Form.Item className="button-center">
					<Button htmlType="submit" loading={loading}>
						Login
					</Button>
				</Form.Item>
			</Form>
		</Main>
	);
};

export default Form.create({ name: "login" })(Login);
