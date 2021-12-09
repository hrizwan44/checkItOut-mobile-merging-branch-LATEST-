import { Formik } from "formik";
import React, { Component, useState, useEffect, useContext } from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	View,
	TouchableOpacity,
	Platform,
	Dimensions,
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
import { login, toggleAuthMsg } from "../../Redux/store/actions/auth";
import StringsOfLanguages from "../../util/stringsOfLanguage";
import styles from "./styles";
import {
	GoogleSignin,
	GoogleSigninButton,
} from "@react-native-community/google-signin";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { AuthContext } from "../../context/authContext";
import {
	LoginManager,
	Settings,
	Profile,
	AccessToken,
} from "react-native-fbsdk-next";
import { extractFbData } from "../../api/auth/socialMedia";
import { storeData } from "../../util/helpers";
import config from "react-native-config";
import Loader from "../../components/LoaderScreen";
import NavigationService from "../../navigation/NavigationService";
import BackButtonSvg from "../../assets/icons/back-button-arrow-white.svg";
import BackButtonBlack from "../../assets/icons/backButtonBlack";

const { width, height } = Dimensions.get("window");
const phoneRegExp =
	"/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/";
const loginSchema = Yup.object().shape({
	phone: Yup.string()
		.required("Enter number")
		.matches(
			/^((\+92)?)(3)([0-9]{9})$/gm,
			"Enter Valid number ('+92XXXXXXXXX')"
		),
	password: Yup.string().required("Enter Password"),
});

export default function SignIn(props) {
	const { userAuth, theme, setTheme, userSession, setUserSession } =
		useContext(AuthContext);
	const [isLoading, setIsloading] = useState(false);
	const [id, setId] = useState(true);
	const [password, setPassword] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState();
	const [isScreenLoading, setScreenLoading] = useState(false);

	const _handleSignIn = async (phone, password) => {
		const headers = { "Content-Type": "application/json" };
		const body = JSON.stringify({
			password: password,
			phoneNumber: phone,
		});
		console.log(body);
		try {
			setIsloading(true);
			const request = await fetch(
				"https://checkitoutdev.herokuapp.com/v1/auth/login-with-mobile",
				{
					method: "POST",
					body,
					headers,
				}
			);
			if (request.status == 200) {
				setIsloading(false);
				const requestData = await request.json();
				console.log("asdadsasdasd", requestData);
				storeData("userData", requestData);
				setUserSession(requestData);
				NavigationService.navigate("Dashboard");
			} else {
				setIsloading(false);
				const requestData = await request.json();
				console.log("reject", requestData);
				setError(requestData.message);
			}
		} catch (errors) {
			setIsloading(false);
			setError(errors.message);
		}
	};

	const { navigation } = props;
	return (
		<SafeAreaView
			style={[
				BaseStyle.safeAreaView,
				{
					height: height,
					backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
					color: theme == "Dark" ? BaseColor.fieldColor : "#000",
				},
			]}
			forceInset={{ top: "always" }}
		>
			{isScreenLoading ? (
				<Loader />
			) : (
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={{
						minHeight: "100%",
						backgroundColor:
							theme == "Dark" ? BaseColor.backgroundColor : "#fff",
						color: theme == "Dark" ? "white" : "#000",
					}}
					keyboardShouldPersistTaps="handled"
				>
					<Header
						title="Log in"
						titleStyle={styles.title}
						whiteColor
						style={{
							backgroundColor: BaseColor.backgroundColor,
							height: 100,
						}}
						renderLeft={() => {
							return (
								<View style={styles.backButtonContainer}>
									{/* <AntDesign name="left" size={20} color="white" /> */}
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
							console.log(values);
							_handleSignIn(values.phone, values.password);
						}}
						initialValues={{
							phone: "",
							password: "",
						}}
						validationSchema={loginSchema}
					>
						{(formik) => {
							return (
								<ScrollView
									keyboardShouldPersistTaps="handled"
									// style={{ backgroundColor: BaseColor.backgroundColor }}
									contentContainerStyle={{ height: "100%" }}
									keyboardShouldPersistTaps="handled"
								>
									<View style={styles.root}>
										{/* <Text header style={styles.signInText}>
                      Log in with one of the following options
                    </Text> */}
										{/* <View style={styles.buttonsContainer}>
                      <Button
                        icon={
                          <Image
                            source={require("../../assets/images/google.png")}
                            style={{ width: "60%", height: "60%" }}
                            resizeMode="contain"
                          />
                        }
                        style={styles.socialButton}
                        onPress={_handleSignInWithGoogle}
                      />
                      {Platform.OS === "ios" && (
                        <Button
                          icon={
                            <AntDesign
                              name="apple1"
                              size={30}
                              color="white"
                              // style={{ marginRight: 25 }}
                            />
                          }
                          style={styles.socialButton}
                          onPress={_handleSignInWithGoogle}
                        />
                      )}
                      <Button
                        icon={
                          <Image
                            source={require("../../assets/images/facebook.png")}
                            style={{ width: "60%", height: "60%" }}
                            resizeMode="contain"
                          />
                        }
                        style={styles.socialButton}
                        onPress={_handleSignInWithFacebook}
                      />
                    </View> */}

										<View style={styles.contain}>
											<View
												style={{
													width: "100%",
													justifyContent: "space-between",
												}}
											>
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
														fontFamily: "Sogoe UI",
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
														fontSize: 17,
														fontFamily: "Sogoe UI",
														paddingLeft: 10,
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
											<View style={styles.forgotPassword}>
												<TouchableOpacity
													onPress={() =>
														props.navigation.navigate("ForgotPasswordMobile")
													}
												>
													<Text semibold style={styles.forgotPasswordText}>
														Forgot your password?
													</Text>
												</TouchableOpacity>
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
										>
											Continue
										</Button>

										<View
											style={{ flexDirection: "row", justifyContent: "center" }}
										>
											<Text label semibold style={styles.loginText}>
												Don't have an account?
											</Text>
											<TouchableOpacity
												onPress={() =>
													props.navigation.navigate("SignUpMobile")
												}
											>
												<Text label semibold style={styles.loginLink}>
													Sign Up
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
