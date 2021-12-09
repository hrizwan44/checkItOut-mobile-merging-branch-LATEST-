import React, { useEffect, useState, useContext } from "react";

import { SafeAreaView, View, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Text } from "../../components";
import { Button } from "../../components";
import Header from "../../components/Header";
import { BaseColor } from "../../config";
import getStyles from "./styles";

import Arrow from "../../assets/icons/Arrow.svg";
import CustomeTextInput from "../../components/CustomTextInput";
import Error from "../../components/Error";
import { ThemeContext } from "../../context/ThemeContext";
import NavigationService from "../../navigation/NavigationService";

const ChangePassword = (props) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);
	const editSchema = Yup.object().shape({
		// currentPassword: Yup.string().required("Enter Password"),
		newPassword: Yup.string().required("Enter Password"),
		rePassword: Yup.string()
			.oneOf([Yup.ref("newPassword"), null], "Passwords must match")
			.required("Re-enter Password"),
	});
	const phone = props.navigation.getParam("phone");
	const code = props.navigation.getParam("code");
	const _handleChangePassword = async (code, phone, password) => {
		const headers = { "Content-Type": "application/json" };
		const body = JSON.stringify({
			code: code,
			phoneNumber: phone,
			password: password,
		});
		console.log(body);
		try {
			setIsloading(true);
			const request = await fetch(
				"https://checkitoutdev.herokuapp.com/v1/auth/reset-password-with-mobile",
				{
					method: "POST",
					body,
					headers,
				}
			);
			if (request.status == 204) {
				setIsloading(false);

				NavigationService.navigate("SignInMobile");
			} else {
				setIsloading(false);

				const requestData = await request.json();
				console.log("asdadsasdasd", requestData);

				setError(requestData.message);
			}
		} catch (errors) {
			setIsloading(false);
			setError(errors.message);
		}
		// NavigationService.navigate("Dashboard");
	};
	useEffect(() => {
		console.log("Edit", themeContext);
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header
				title="Reset Password"
				titleStyle={styles.title}
				whiteColor
				style={{
					backgroundColor: BaseColor.backgroundColor,
					height: 100,
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
					_handleChangePassword(phone, code, values.newPassword);
				}}
				initialValues={{
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
									Type your new password
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
									Confirm your new password
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
								<View style={{ width: "100%", paddingVertical: 45 }}>
									<Button
										loading={isLoading}
										style={styles.createButton}
										// disabled={!(formik.isValid && formik.dirty && !isLoading)}
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
