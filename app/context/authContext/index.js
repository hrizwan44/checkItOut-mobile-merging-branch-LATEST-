import React, { createContext, useState, useEffect } from "react";
import { storeData, retrieveData, removeData } from "../../util/helpers";
import useStateRef from "react-usestateref";
import { signUp } from "../../api/auth/signUp";
import { signIn, logout as logoutAPI } from "../../api/auth/logInOut";
import { socialMediaAuth } from "../../api/auth/socialMedia";
import NavigationService from "../../navigation/NavigationService";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [userSession, setUserSession, userSessionRef] = useStateRef(0);
	const [videoUriContext, setVideoUriContext] = useState("");
	const [titleContext, setTitleContext] = useState("");
	const [theme, setTheme] = useState("Dark");
	const [edit, setEdit] = useState(false);
	const [product, setProduct] = useState({});
	const userAuth = (type, data) =>
		new Promise((resolve, reject) => {
			if (type == "signUp") {
				signUp(data)
					.then((res) => {
						console.log("Response: ", res);
						storeData("userData", res);
						setUserSession(res);
						NavigationService.navigate("Dashboard");
						resolve(res);
					})
					.catch((err) => {
						reject(err);
					});
			} else if (type == "signIn") {
				signIn(data)
					.then((res) => {
						console.log("Response: ", res);
						storeData("userData", res);
						setUserSession(res);
						NavigationService.navigate("Dashboard");
						resolve(res);
					})
					.catch((err) => {
						reject(err);
					});
			} else if (type == "socialMediaAuth") {
				socialMediaAuth(data)
					.then((res) => {
						console.log(res);
						storeData("userData", res);
						setUserSession(res);
						NavigationService.navigate("Dashboard");
						resolve(res);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
	const logout = () => {
		const refreshToken = userSession.tokens.refresh.token;
		console.log("Refresh Token:   ", refreshToken);
		logoutAPI(refreshToken);
		removeData("userData");
		setUserSession(null);
		NavigationService.navigate("AuthHome");
	};
	useEffect(() => {
		retrieveData("userData")
			.then((data) => {
				setUserSession(data);
			})
			.catch(console.log("Data is not retrieved"));
	}, []);
	return (
		<>
			<AuthContext.Provider
				value={{
					titleContext,
					setTitleContext,
					videoUriContext,
					setVideoUriContext,
					userSession,
					setUserSession,
					userAuth,
					logout,
					theme,
					setTheme,
					edit,
					setEdit,
					product,
					setProduct,
				}}
			>
				{children}
			</AuthContext.Provider>
		</>
	);
};
export default AuthProvider;
