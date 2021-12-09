import { Formik } from "formik";
import React, { Component, useState, useEffect, useContext } from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	View,
	TouchableOpacity,
	Platform,
	Alert,
	Dimensions,
} from "react-native";
import { connect } from "react-redux";
import * as Yup from "yup";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
	Button,
	CustomTextInput,
	Error,
	Header,
	Icon,
	Text,
	Success,
} from "../../components";
import { BaseColor, BaseStyle, PurpleColor, YellowColor } from "../../config";
import styles from "./styles";
import Loader from "../../components/LoaderScreen";
import { forgotPassword, _forgotPassword } from "../../api/auth/forgotPassword";
import { AuthContext } from "../../context/authContext";
import BackButtonSvg from "../../assets/icons/back-button-arrow-white.svg";
import NavigationService from "../../navigation/NavigationService";

const { width, height } = Dimensions.get("window");
const forgotPasswordSchema = Yup.object().shape({
	phone: Yup.string()
		.required("Enter number")
		.matches(
			/^((\+92)?)(3)([0-9]{9})$/gm,
			"Enter Valid number ('+92XXXXXXXXX')"
		),
});
const ForgotPasswordMobile = (props) => {
	const { userAuth, theme, setTheme } = useContext(AuthContext);
	const [isLoading, setIsloading] = useState(false);
	const [isScreenLoading, setScreenLoading] = useState(false);
	const [error, setError] = useState("");
	const [isSuccess, setSuccess] = useState(false);
	const [alert, setAlert] = useState(false);

	const _ForgotPassword = async (phone) => {
		const headers = { "Content-Type": "application/json" };
		const body = JSON.stringify({
			phoneNumber: phone,
		});
		console.log(body);
		try {
			setIsloading(true);
			const request = await fetch(
				"https://checkitoutdev.herokuapp.com/v1/auth/forgot-password-with-mobile",
				{
					method: "POST",
					body,
					headers,
				}
			);
			if (request.status == 201) {
				setIsloading(false);
				const requestData = await request.json();
				console.log("asdadsasdasd", requestData);
				const phoneNumber = phone;
				const reset = true;
				NavigationService.navigate("Otp", { phone, reset });
			} else {
				setIsloading(false);

				const requestData = await request.json();
				setError(requestData.message);
			}
		} catch (errors) {
			setIsloading(false);
			setError(errors.message);
		}
	};

	return (
		<SafeAreaView
			style={
				(BaseStyle.safeAreaView,
				{
					backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
				})
			}
			forceInset={{ top: "always" }}
		>
			{isScreenLoading ? (
				<Loader />
			) : (
				<>
					<Header
						title="Reset Password"
						titleStyle={styles.title}
						whiteColor
						style={{
							backgroundColor: BaseColor.backgroundColor,
							height: 100,
						}}
						renderLeft={() => {
							return (
								<View style={styles.backButtonContainer}>
									<BackButtonSvg />
								</View>
							);
						}}
						onPressLeft={() => {
							props.navigation.goBack(null);
						}}
						hideRight
					/>

					<Formik
						onSubmit={(values) => {
							console.log(values);
							_ForgotPassword(values.phone);
						}}
						initialValues={{
							phone: "",
						}}
						validationSchema={forgotPasswordSchema}
					>
						{(formik) => {
							return (
								<ScrollView
									style={{ backgroundColor: BaseColor.backgroundColor }}
									contentContainerStyle={{ height: "100%" }}
								>
									<View style={styles.root}>
										<Text header style={styles.signInText}>
											Enter your phone number to receive a code to reset
											password
										</Text>
									</View>

									<View style={styles.contain}>
										<Text label semibold style={styles.label}>
											Phone Number
										</Text>
										<CustomTextInput
											style={styles.textInput}
											autoCorrect={false}
											// placeholder="john@doe.com"
											keyboardType="email-address"
											inputStyle={{
												paddingLeft: 10,
												fontSize: 17,
												fontFamily: "Sogoe UI",
												width: "100%",
											}}
											onChangeText={formik.handleChange("phone")}
											onBlur={() => {
												formik.handleBlur("phone");
											}}
											value={formik.values.phone}
										/>
										{formik.errors.phone && (
											<Error message={formik.errors.phone} />
										)}
										{isSuccess && (
											<Success message="Email sent successfully." />
										)}
										{error ? <Error message={error} /> : null}
									</View>
									<View
										style={{
											width: "100%",
											paddingHorizontal: 20,
											bottom: 20,
										}}
									>
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
											Send
										</Button>
									</View>
								</ScrollView>
							);
						}}
					</Formik>
				</>
			)}
		</SafeAreaView>
	);
};
export default ForgotPasswordMobile;
