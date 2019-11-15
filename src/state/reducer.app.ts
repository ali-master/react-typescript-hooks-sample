// import * as R from "ramda";

type AppActionType = "INITIAL" | string;
export interface AppAction {
	type: AppActionType,
	payload?: any;
}

export const appInitialState = {
	isLoggedIn: false,
};
export type AppState = typeof appInitialState;
export const appReducer = (state: AppState, action: AppAction): AppState => {

	// const updateState = R.merge(state);
	switch (action.type) {
		default:
			return state;
	}
};
