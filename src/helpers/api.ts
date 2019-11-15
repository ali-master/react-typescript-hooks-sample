import axios, { AxiosInstance } from "axios";
import * as R from "ramda";

const baseURL = window.location.origin;
// a new instance of axios with a custom config.
const instance: AxiosInstance = axios.create({
	baseURL,
});

instance.interceptors.response.use(response => {
	return R.pathOr(response, ["data"])(response);
});

export default instance;
