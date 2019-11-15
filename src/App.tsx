import * as React from "react";
import { Router, Switch, Redirect } from "react-router-dom";
// Shared components
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";
// Local components
import Auth from "screens/Auth";
import Dashboard from "screens/Dashboard";
// Utilities and hooks
import history from "helpers/history";
import { read } from "helpers/localStorage";
import { appReducer, appInitialState } from "state/reducer.app";
import { AppDispatchContext, AppStateContext } from "state/index.app";
// Styles
import "./styles/app.scss";

const App: React.FC = () => {
	const [appState, appDispatch] = React.useReducer(appReducer, appInitialState);

	React.useEffect(() => {
		if (read("token")) {
			appDispatch({
				type: "LOGGED_IN",
			});
		}
	}, []);

	return (
		<div className="App">
			<Router history={history}>
				<AppDispatchContext.Provider value={appDispatch}>
					<AppStateContext.Provider value={appState}>
						<Switch>
							<Redirect path="/" to="/auth/login" exact />
							<PublicRoute restricted path="/auth" component={Auth} />
							<PrivateRoute path="/dashboard" component={Dashboard} />
						</Switch>
					</AppStateContext.Provider>
				</AppDispatchContext.Provider>
			</Router>
		</div>
	);
};

export default App;
