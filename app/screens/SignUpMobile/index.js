import { Formik } from "formik";
import React, { Component, useState, useEffect, useContext } from "react";
import {
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	View,
	Image,
	Platform,
} from "react-native";
import { connect } from "react-redux";
import * as Yup from "yup";
import {
	Button,
	CustomTextInput,
	Error,
	Header,
	Icon,
	Text,
} from "../../components";
import { BaseColor, BaseStyle, PurpleColor, YellowColor } from "../../config";
import styles from "./styles";
import { signUp } from "../../api/auth/signUp";
import {
	GoogleSignin,
	GoogleSigninButton,
} from "@react-native-community/google-signin";
import { LoginManager, Settings, AccessToken } from "react-native-fbsdk-next";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { extractFbData } from "../../api/auth/socialMedia";
import { storeData } from "../../util/helpers";
import { AuthContext } from "../../context/authContext";
import Fontisto from "react-native-vector-icons/Fontisto";
import Loader from "../../components/LoaderScreen";
import NavigationService from "../../navigation/NavigationService";

import BackButtonSvg from "../../assets/icons/back-button-arrow-white.svg";
import BackButtonBlack from "../../assets/icons/backButtonBlack";
import config from "react-native-config";
import { backendServer } from "../../config";

export default function SignUp(props) {
	const { userAuth, theme, setTheme, userSession, setUserSession } =
		useContext(AuthContext);
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);
	const [googleError, setGoogleError] = useState("");
	const [isScreenLoading, setScreenLoading] = useState(false);

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required("Enter Name"),
		phone: Yup.string()
			.required("Enter number")
			.matches(
				/^((\+92)?)(3)([0-9]{9})$/gm,
				"Enter Valid number ('+92XXXXXXXXX')"
			),
		password: Yup.string()
			.required("Enter Password")
			.min(
				8,
				"Password length should be 8 with 1 upppercase, 1 lowercase, 1 digit and one special character"
			)
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
				"Password length should be 8 with 1 upppercase, 1 lowercase, 1 digit and one special character"
			),
	});

	const _handleSignUp = async (firstName, password, phone) => {
		const headers = { "Content-Type": "application/json" };
		const body = JSON.stringify({
			name: firstName,
			password: password,
			phoneNumber: phone,
		});
		console.log(body);
		try {
			setIsloading(true);
			const request = await fetch(
				"https://checkitoutdev.herokuapp.com/v1/auth/register-with-mobile",
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
				const phoneNumber = requestData.user.phoneNumber;
				const reset = false;
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
		// NavigationService.navigate("Dashboard");
	};

	const { navigation } = props;
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
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={{ height: "100%" }}
				>
					<Header
						title="Sign Up"
						titleStyle={styles.title}
						whiteColor
						style={{
							// backgroundColor: BaseColor.backgroundColor,
							height: 100,
						}}
						renderLeft={() => {
							return (
								<View style={styles.backButtonContainer}>
									{theme == "Dark" ? <BackButtonSvg /> : <BackButtonBlack />}
								</View>
							);
						}}
						onPressLeft={() => {
							navigation.goBack(null);
						}}
					/>

					<Formik
						onSubmit={(values) => {
							_handleSignUp(values.firstName, values.password, values.phone);
						}}
						initialValues={{
							firstName: "",
							password: "",
							phone: "",
						}}
						validationSchema={validationSchema}
					>
						{(formik) => {
							return (
								<ScrollView
									keyboardShouldPersistTaps="handled"
									// style={{ backgroundColor: BaseColor.backgroundColor }}
									contentContainerStyle={{ minHeight: "85%" }}
								>
									<View style={styles.root}>
										<View style={styles.contain}>
											<View
												style={{
													width: "100%",
													justifyContent: "space-between",
												}}
											>
												<Text label semibold style={styles.label}>
													Name
												</Text>
												<CustomTextInput
													style={styles.textInput}
													inputStyle={{
														paddingLeft: 10,
														fontSize: 17,
														fontFamily: "Sogoe-UI",
														width: "100%",
													}}
													autoCorrect={false}
													placeholder="John Doe"
													placeholderTextColor="#676767"
													onChangeText={formik.handleChange("firstName")}
													onBlur={formik.handleBlur("firstName")}
													value={formik.values.firstName}
													hitSlop={{ top: 32, bottom: 8, left: 0, right: 500 }}
													selectionColor={BaseColor.grayColor}
												/>

												{formik.touched.firstName &&
													formik.errors.firstName && (
														<Error message={formik.errors.firstName} />
													)}
												<Text label semibold style={styles.label}>
													Phone Number
												</Text>
												<CustomTextInput
													style={styles.textInput}
													autoCorrect={false}
													placeholder="+1-123-456-789"
													placeholderTextColor="#676767"
													keyboardType="email-address"
													inputStyle={{
														paddingLeft: 10,
														fontSize: 17,
														fontFamily: "Sogoe-UI",
														width: "100%",
													}}
													onChangeText={formik.handleChange("phone")}
													onBlur={formik.handleBlur("phone")}
													value={formik.values.phone}
												/>
												{formik.touched.phone && formik.errors.phone && (
													<Error message={formik.errors.phone} />
												)}
												<Text label semibold style={styles.label}>
													Password
												</Text>

												<CustomTextInput
													style={styles.textInput}
													inputStyle={{
														paddingLeft: 10,
														fontSize: 17,
														fontFamily: "Sogoe-UI",
														width: "100%",
													}}
													autoCorrect={false}
													placeholder="Pick a strong password"
													placeholderTextColor="#676767"
													secureTextEntry
													onChangeText={formik.handleChange("password")}
													onBlur={formik.handleBlur("password")}
													value={formik.values.password}
												/>
												{formik.touched.password && formik.errors.password && (
													<Error message={formik.errors.password} />
												)}
												{error && <Error message={error} />}
											</View>
										</View>
									</View>
									<View style={styles.bottomContainer}>
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
											// onPress={() => props.navigation.navigate("Otp")}
										>
											Create Account
										</Button>
										<View
											style={{ flexDirection: "row", justifyContent: "center" }}
										>
											<Text label semibold style={styles.loginText}>
												Already have an account?
											</Text>
											<TouchableOpacity
												onPress={() =>
													props.navigation.navigate("SignInMobile")
												}
											>
												<Text label semibold style={styles.loginLink}>
													Login
												</Text>
											</TouchableOpacity>
										</View>
									</View>
								</ScrollView>
							);
						}}
					</Formik>
				</ScrollView>
			)}
		</SafeAreaView>
	);
}
