// Utilities
import history, { push, getRedirectPath } from "helpers/history";
import * as R from "ramda";
import { remove, store } from "helpers/localStorage";
import { useAppDispatch } from "state/index.app";
import { login as LoginUser, ILogin } from "helpers/endpoints";

function useUser() {
	const dispatch = useAppDispatch();
	async function login({ username, password }: ILogin) {
		try {
			const res = await LoginUser({
				username,
				password,
			});

			const isSuccess = res.data.success;
			if (isSuccess) {
				store("token", "test-isSuccess");

				dispatch({
					type: "LOGGED_IN",
				});

				const redirectPath = R.pathOr(null, ["query", "redirect"])(history.location);
				if (redirectPath) {
					push(redirectPath);
					return;
				}

				push("/dashboard");
			} else {
				// eslint-disable-next-line no-throw-literal
				throw { message: "Something went wrong" };
			}
		} catch (error) {
			throw error;
		}
	}

	/**
	 * Logout the user from the application
	 * Steps:
	 * 1) Remove user token
	 * 2) Reset the user into the User store. TODO: THIS ONE SHOULD BE COMPLETED
	 * 3) Redirect user to login page
	 */
	async function logout() {
		remove("token");

		dispatch({ type: "RESET" });

		push(`/auth/login?redirect=${getRedirectPath()}`);
	}

	return {
		login,
		logout,
	};
}

export default useUser;
