import axios from "axios";
import config from "react-native-config";
import EncryptedStorage from "react-native-encrypted-storage";
import { retrieveData, storeData } from "../util/helpers";
const backendUrl = 'https://checkitoutdev.herokuapp.com';
const routeBase = "/v1";
const BASE_URL = backendUrl + routeBase;
console.log("BASE_URL", BASE_URL);
const API = axios.create({
	baseURL: BASE_URL,
	headers: { Accept: "application/json", "Content-Type": "application/json" },
});
API.interceptors.response.use(
	(response) => {
		console.log("BACKEND URL", backendUrl)

		return response;
	},
	async (error) => {
		console.log("BACKEND URL", backendUrl)
		if (error.config.url.includes("/auth")) {
			return axios(error.config);
		}
		const originalRequest = error.config;
		console.log("ERROR Config", error);
		console.log("ERROR Config", error.config);
		console.log("ERROR Config", error.response);
		if (error?.response?.status === 401 && !originalRequest?._retry) {
			try {

				//get new access token using refresh token
				let res = await refreshAccessToken();
				console.log("Refresh Res: ", res.data);
				if (res.status === 200 || res.status === 201) {
					//update tokens in store

					await retrieveData("userData").then((data) => {
						console.log(data);
						if (data) {
							data.tokens.access.token = res.data.access.token;
							storeData("userData", data);
						}
					});

					// continues the request with new access token
					originalRequest.headers[
						"Authorization"
					] = `Bearer ${res.data.access.token}`;
					return axios(originalRequest);
				} else {
					store.dispatch({
						type: types.LOGOUT_REQUEST,
					});
					NavigationService.resetAndNavigate("SignIn");
					showMessage({
						message: "Please login and try again",
						type: "danger",
					});
					return Promise.reject(error);
				}
			} catch (error) {
				return Promise.reject(error);
			}
		}

		return Promise.reject(error);
	}
);
export default API;

const refreshAccessToken = async () => {
	let data = await EncryptedStorage.getItem("userData");
	data = JSON.parse(data);
	const refreshToken = data.tokens.refresh.token;
	var config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await axios.post(
		`${BASE_URL}/auth/refresh-tokens`,
		JSON.stringify({
			refreshToken,
		}),
		config
	);
	return response;
};
