import * as R from "ramda";
import { IFame } from "helpers/endpoints";

type AppActionType = "LOGGED_IN" | "ADD_FAMES" | "RESET";
export interface AppAction {
	type: AppActionType;
	payload?: any;
}

export interface AppState {
	fames: IFame[];
	isLoggedIn: boolean;
}
export const appInitialState = {
	isLoggedIn: false,
	fames: [],
};
export const appReducer = (state: AppState, action: AppAction): AppState => {
	const updateState = R.merge<AppState>(state);
	switch (action.type) {
		case "LOGGED_IN":
			return updateState({
				isLoggedIn: true,
			});
		case "ADD_FAMES":
			return updateState({
				fames: action.payload.fames,
			});
		case "RESET":
			return updateState({
				fames: [],
				isLoggedIn: false,
			});
		default:
			return state;
	}
};
