/* eslint-disable @typescript-eslint/ban-ts-ignore */
import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { RouteProps } from "react-router";
// Utilities and hooks
import { getRedirectPath } from "helpers/history";
import { useAppState } from "state/index.app";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
interface IProps extends RouteProps {
	path: string;
	props?: any;
	component: React.ElementType;
}
const PrivateRoute: React.FC<IProps> = ({
	component: Component,
	props: authenticatedComponentProps,
	...rest
}) => {
	const state = useAppState();
	// Show the component only when the user is logged in
	// Otherwise, redirect the user to /auth/login page
	return (
		<Route
			{...rest}
			render={props => {
				// @ts-ignore
				const redirect = getRedirectPath(props);
				// @ts-ignore
				return state.isLoggedIn ? (
					<Component {...props} {...authenticatedComponentProps} />
				) : (
						<Redirect to={`/auth/login?redirect=${redirect}`} />
					);
			}}
		/>
	);
};

export default PrivateRoute;
