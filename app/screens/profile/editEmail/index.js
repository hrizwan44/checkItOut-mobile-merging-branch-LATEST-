import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Text } from "../../../components";
import { Button } from "../../../components";
import Header from "../../../components/Header";
import { BaseColor } from "../../../config";
import getStyles from "./styles";
import Arrow from "../../../assets/icons/Arrow.svg";
import CustomeTextInput from "../../../components/CustomTextInput";
import Error from "../../../components/Error";
import { Success } from "../../../components";
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../../../context/authContext";

const axios = require("axios");
const Api = axios.create();
import config from "react-native-config";
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1";

const EditEmail = (props) => {
	const { userSession, setUserSession } = useContext(AuthContext);

	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [error, setError] = useState();
	const [success, setSuccess] = useState();

	const [isLoading, setIsloading] = useState(false);
	const editSchema = Yup.object().shape({
		email: Yup.string().email("Enter correct email").required("Enter Email"),
	});
	const _handleEmail = (email) => {
		setIsloading(true);
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer " + userSession.tokens.access.token,
		};
		const body = JSON.stringify({
			email: email,
		});
		console.log(
			`${backendServer}/${routeBase}/users/${userSession.user.id}?sendVerification=true`
		);
		Api.patch(
			`${backendServer}/${routeBase}/users/${userSession.user.id}?sendVerification=true`,
			body,
			{ headers: headers }
		)
			.then((res) => {
				console.log(res.status);
				setIsloading(false);
				const phoneNumber = res.data.phoneNumber;
				userSession.user.email = res.data.email;
				console.log(userSession);
				setUserSession(userSession);
				setError();
				setSuccess("Email updated successfully");
				console.log("updatePhone", res.data);
				// props.navigation.navigate("Otp", { phone: phoneNumber });
			})
			.catch((error) => {
				setIsloading(false);
				if (error.response.status == "400") {
					setSuccess();
					setError("Email already taken try another one");
				} else {
					// setError(error.response.data.message);
				}
				console.log("errors", error.response);
			});
	};
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
		console.log("Edit", userSession.user.id);
	}, [theme]);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header
				title="Verify Email"
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
					_handleEmail(values.email);
				}}
				initialValues={{
					email: "",
				}}
				validationSchema={editSchema}
			>
				{(formik) => {
					return (
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								padding: 29,
							}}
						>
							<Text label semibold style={styles.topText}>
								You will receive a confirmation link on your email account.
							</Text>
							<Text label semibold style={styles.label}>
								Email Address
							</Text>
							<CustomeTextInput
								style={styles.textInput}
								autoCorrect={false}
								placeholder="daxhunter110@gmail.com"
								keyboardType="email-address"
								inputStyle={{
									paddingLeft: 10,
									fontSize: 17,
									fontFamily: "Sogoe UI",
									width: "100%",
									borderRadius: 100,
								}}
								onChangeText={formik.handleChange("email")}
								onBlur={formik.handleBlur("email")}
								value={formik.values.email}
							/>
							{formik.touched.email && formik.errors.email && (
								<Error message={formik.errors.email} />
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
									Send Confirmation
								</Button>
							</View>
						</View>
					);
				}}
			</Formik>
		</SafeAreaView>
	);
};
export default EditEmail;
