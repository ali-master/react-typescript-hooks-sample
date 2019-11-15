import api from "./api";

interface BaseRequest<T = {}> {
	data: T;
}
//////////// Authentication functions
export interface ILogin {
	username: string;
	password: string;
}
export const login = (user: ILogin): Promise<BaseRequest<{ success: boolean }>> => {
	return api.post("login", user);
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
