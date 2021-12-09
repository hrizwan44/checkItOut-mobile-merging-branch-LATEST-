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
// import { navigate } from "../../../navigation/NavigationService";

const theme = "Light";
const EditNumber = (props) => {
	const { userSession, setUserSession } = useContext(AuthContext);

	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [error, setError] = useState();
	const [success, setSuccess] = useState();

	const [isLoading, setIsloading] = useState(false);
	const editSchema = Yup.object().shape({
		number: Yup.string()
			.required("Enter number")
			.matches(
				/^((\+92)?)(3)([0-9]{9})$/gm,
				"Enter Valid number ('+92XXXXXXXXX')"
			)
			.min(12, "Enter complete number with country code"),
	});
	const _handleNumber = (number) => {
		// alert("Your Number has been successfully changed to " + "'" + number + "'");
		props.navigation.navigate("Otp", { change });
	};

	const updateNumber = (number) => {
		setIsloading(true);
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer " + userSession.tokens.access.token,
		};
		const body = JSON.stringify({
			phoneNumber: number,
		});
		Api.patch(
			`${backendServer}/${routeBase}/users/${userSession.user.id}?sendVerification=true`,
			body,
			{ headers: headers }
		)
			.then((res) => {
				setIsloading(false);
				const phoneNumber = number;
				console.log("updatePhone", res.data);
				if (res.data.phoneNumberVerified) {
					setError("PhoneNumber already exist try another one!");
					return;
				}
				userSession.user.id = res.data.id;
				console.log(userSession);
				setUserSession(userSession);
				props.navigation.navigate("Otp", { phone: phoneNumber, change: true });
			})
			.catch((error) => {
				setIsloading(false);
				setError(error.response.data.message);
				console.log("errors", error.response.data.message);
			});
	};

	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
		console.log("Edit", userSession);
	}, []);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header
				title="Add Phone"
				titleStyle={styles.headerTitle}
				whiteColor
				style={{
					backgroundColor: theme ? BaseColor.backgroundColor : "#fff",
					height: 65,
					borderBottomWidth: 2,
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
					updateNumber(values.number);
				}}
				initialValues={{
					number: "",
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
							<Text label semibold style={styles.topTextHeading}>
								Mobile Verification
							</Text>
							<Text label semibold style={styles.topText}>
								Add a phone number to further secure your account. You will
								receive a code.
							</Text>
							<Text label semibold style={styles.label}>
								Mobile Number
							</Text>
							<CustomeTextInput
								style={styles.textInput}
								autoCorrect={false}
								placeholder="(###) ###-####"
								keyboardType="email-address"
								inputStyle={{
									paddingLeft: 10,
									fontSize: 17,
									fontFamily: "Sogoe UI",
									width: "100%",
									borderRadius: 100,
								}}
								onChangeText={formik.handleChange("number")}
								onBlur={formik.handleBlur("number")}
								value={formik.values.name}
							/>
							{formik.errors.number && <Error message={formik.errors.number} />}
							{error && <Error message={error} />}
							{success && <Success message={success} />}
							<View style={{ width: "100%", paddingVertical: 45 }}>
								<Button
									loading={isLoading}
									style={styles.createButton}
									gradient
									gradientType="horizontalRight"
									gradientColor={[
										BaseColor.buttonPrimaryGradientStart,
										BaseColor.buttonPrimaryGradientEnd,
									]}
									disabled={!(formik.isValid && formik.dirty && !isLoading)}
									onPress={formik.handleSubmit}
								>
									Save
								</Button>
							</View>
						</View>
					);
				}}
			</Formik>
		</SafeAreaView>
	);
};
export default EditNumber;
