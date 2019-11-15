import * as R from "ramda";

type AppActionType = "LOGGED_IN";
export interface AppAction {
	type: AppActionType;
	payload?: any;
}

export const appInitialState = {
	isLoggedIn: false,
};
export type AppState = typeof appInitialState;
export const appReducer = (state: AppState, action: AppAction): AppState => {
	const updateState = R.merge<AppState>(state);
	switch (action.type) {
		case "LOGGED_IN":
			return updateState({
				isLoggedIn: true,
			});
		default:
			return state;
	}
};
