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
export interface Fame {
	id: string;
	name: string;
	dob: string;
	image: string;
}
export const fetchFame = (id?: string): Promise<BaseRequest<Fame>> => {
	return api.get(`fames/${id}`);
};
export const fetchFames = (): Promise<BaseRequest<{ list: Fame[] }>> => {
	return api.get("fames");
};
