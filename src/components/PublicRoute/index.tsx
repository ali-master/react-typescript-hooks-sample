import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { RouteProps } from "react-router";
import { useAppState } from "state/index.app";
// Hooks and Utilities

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
interface IProps extends RouteProps {
	path: string;
	component: React.ElementType;
	props?: any;
	/**
	 * restricted = false meaning public route
	 * restricted = true meaning protected route
	 */
	restricted: boolean;
}
const PublicRoute: React.FC<IProps> = ({
	component: Component,
	restricted,
	props: unauthenticatedRouteProps,
	...rest
}) => {
	const state = useAppState();

	return (
		<Route
			{...rest}
			render={props =>
				// @ts-ignore
				state.isLoggedIn && restricted ? (
					<Redirect to="/dashboard" />
				) : (
						<Component {...props} {...unauthenticatedRouteProps} />
					)
			}
		/>
	);
};

export default PublicRoute;
