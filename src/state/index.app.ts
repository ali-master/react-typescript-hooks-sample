import { createContext, useContext } from "react";
import { AppAction, appInitialState, AppState } from "./reducer.app";

// Create contexts
export const AppStateContext = createContext(appInitialState as AppState);
export const AppDispatchContext = createContext((() => 0) as React.Dispatch<AppAction>);

// Use contexts
export const useAppDispatch = () => useContext(AppDispatchContext);
export const useAppState = () => {
	const state: AppState = useContext(AppStateContext);

	return state;
};
