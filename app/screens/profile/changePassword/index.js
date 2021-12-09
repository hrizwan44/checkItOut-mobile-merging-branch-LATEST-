import React, { useEffect, useState, useContext } from "react";

import { SafeAreaView, View, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Text } from "../../../components";
import { Button } from "../../../components";
import Header from "../../../components/Header";
import { BaseColor } from "../../../config";
import getStyles from "./styles";

import Arrow from "../../../assets/icons/Arrow.svg";
import CustomeTextInput from "../../../components/CustomTextInput";
import NavigationService from "../../../navigation/NavigationService";
import Error from "../../../components/Error";
import { Success } from "../../../components";
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../../../context/authContext";

const axios = require("axios");
const Api = axios.create();
import config from "react-native-config";
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1";

const ChangePassword = (props) => {
	const { userSession, setUserSession } = useContext(AuthContext);

	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState();
	const [success, setSuccess] = useState();
	const editSchema = Yup.object().shape({
		currentPassword: Yup.string().required("Enter Password"),
		newPassword: Yup.string().required("Enter Password"),
		rePassword: Yup.string()
			.oneOf([Yup.ref("newPassword"), null], "Passwords must match")
			.required("Re-enter Password"),
	});
	const phone = props.navigation.getParam("phone");
	const code = props.navigation.getParam("code");
	const _handleChangePassword = async (password) => {
		setIsloading(true);
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer " + userSession.tokens.access.token,
		};
		const body = JSON.stringify({
			password: password,
		});
		console.log;
		Api.patch(
			`${backendServer}/${routeBase}/users/${userSession.user.id}`,
			body,
			{ headers: headers }
		)
			.then((res) => {
				console.log(res.status);
				setIsloading(false);
				setError();
				setSuccess("Password updated successfully");
			})
			.catch((error) => {
				setIsloading(false);
				console.log(error.response);
				if (error.response.status == "400") {
					setSuccess();
					setError("password already taken try another one");
				}
				console.log("errors", error.response);
			});
	};
	useEffect(() => {
		console.log("Edit");
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header
				title="Change Password"
				titleStyle={styles.headerTitle}
				whiteColor
				style={{
					borderBottomWidth: 2,
					backgroundColor: theme ? BaseColor.backgroundColor : "#fff",
					height: 65,
					shadowColor: "#000000",
					shadowOffset: { width: 0, height: 3 },
					shadowOpacity: 0.2,
					elevation: 6,
				}}
				renderLeft={() => {
					return <Arrow />;
				}}
				onPressLeft={() => {
					props.navigation.goBack(null);
				}}
			/>

			<Formik
				onSubmit={(values) => {
					_handleChangePassword(values.newPassword);
				}}
				initialValues={{
					currentPassword: "",
					newPassword: "",
					rePassword: "",
				}}
				validationSchema={editSchema}
			>
				{(formik) => {
					return (
						<ScrollView>
							<View
								style={{
									flex: 1,
									justifyContent: "center",
									padding: 29,
								}}
							>
								<Text label semibold style={styles.label}>
									Current Password
								</Text>
								<CustomeTextInput
									style={styles.textInputCurrent}
									autoCorrect={false}
									inputStyle={{
										paddingLeft: 10,
										fontSize: 17,
										fontFamily: "Sogoe UI",
										width: "100%",
										borderRadius: 100,
									}}
									secureTextEntry
									onChangeText={formik.handleChange("currentPassword")}
									onBlur={formik.handleBlur("currentPassword")}
									value={formik.values.currentPassword}
								/>

								{formik.touched.currentPassword &&
									formik.errors.currentPassword && (
										<Error message={formik.errors.currentPassword} />
									)}

								<Text label semibold style={styles.label}>
									New Password
								</Text>
								<CustomeTextInput
									style={styles.textInput}
									autoCorrect={false}
									inputStyle={{
										paddingLeft: 10,
										fontSize: 17,
										fontFamily: "Sogoe UI",
										width: "100%",
										borderRadius: 100,
									}}
									secureTextEntry
									onChangeText={formik.handleChange("newPassword")}
									onBlur={formik.handleBlur("newPassword")}
									value={formik.values.newPassword}
								/>
								{formik.touched.newPassword && formik.errors.newPassword && (
									<Error message={formik.errors.newPassword} />
								)}

								<Text label semibold style={styles.label}>
									Re-enter Password
								</Text>
								<CustomeTextInput
									style={styles.textInput}
									autoCorrect={false}
									secureTextEntry
									inputStyle={{
										paddingLeft: 10,
										fontSize: 17,
										fontFamily: "Segoe UI",
										width: "100%",
										borderRadius: 100,
									}}
									onChangeText={formik.handleChange("rePassword")}
									onBlur={formik.handleBlur("rePassword")}
									value={formik.values.rePassword}
								/>
								{formik.touched.rePassword && formik.errors.rePassword && (
									<Error message={formik.errors.rePassword} />
								)}
								{error && <Error message={error} />}
								{success && <Success message={success} />}
								<View style={{ width: "100%", paddingVertical: 45 }}>
									<Button
										loading={isLoading}
										style={styles.createButton}
										disabled={!(formik.isValid && formik.dirty && !isLoading)}
										onPress={formik.handleSubmit}
									>
										Submit
									</Button>
								</View>
							</View>
						</ScrollView>
					);
				}}
			</Formik>
		</SafeAreaView>
	);
};
export default ChangePassword;
