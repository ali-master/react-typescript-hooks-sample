import api from "./api";

//////////// Authentication functions
export interface ILogin {
	username: string;
	password: string;
}
export const login = (user: ILogin): Promise<any> => {
	return api.post("login", user);
};
