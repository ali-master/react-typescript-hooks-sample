import api from "./api";

interface BaseRequest<T = {}> {
	data: T;
}
///////Authentication functions
export interface ILogin {
	email: string;
	password: string;
}
export const login = (user: ILogin): Promise<BaseRequest<{ success: boolean }>> => {
	return api.post("login", { password: user.password, username: user.email });
};
export const logout = (): Promise<any> => {
	return api.post("logout");
};
///// Fames
export interface IFame {
	id: string;
	name: string;
	dob: string;
	image: string;
}
export const fetchFame = (id?: string): Promise<BaseRequest<IFame>> => {
	return api.get(`fames/${id}`);
};
export const fetchFames = (): Promise<BaseRequest<{ list: IFame[] }>> => {
	return api.get("fames");
};
