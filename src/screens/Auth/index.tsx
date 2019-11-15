import * as React from "react";
import { Switch, Redirect } from "react-router-dom";

import PublicRoute from "components/PublicRoute";

import Login from "./screens/Login";

const Auth: React.FC = () => {
	return (
		<Switch>
			<Redirect exact from="/auth" to="/auth/login" />
			<PublicRoute restricted path="/auth/login" component={Login} />
		</Switch>
	);
};

export default Auth;
