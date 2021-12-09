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
	KeyboardAvoidingView,
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
const loginSchema = Yup.object().shape({
	email: Yup.string().email("Enter Correct Email").required("Enter Email"),
	password: Yup.string().required("Enter Password"),
});

export default function SignIn(props) {
	const { userAuth, theme, setTheme } = useContext(AuthContext);
	const [isLoading, setIsloading] = useState(false);
	const [id, setId] = useState(true);
	const [password, setPassword] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState();
	const [isScreenLoading, setScreenLoading] = useState(false);

	const _handleSignIn = (email, password) => {
		setIsloading(true);
		userAuth("signIn", { email, password })
			.then((res) => {
				console.log("Response: ", res);
				setIsloading(false);
			})
			.catch((err) => {
				console.log(err);
				setError(err.message);
				setIsloading(false);
			});
		// NavigationService.navigate("Dashboard");
	};
	const _handleSignInWithGoogle = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			console.log(userInfo);
			setScreenLoading(true);
			userAuth("socialMediaAuth", {
				socialMediaId: userInfo.user.id,
				socialMediaType: "GOOGLE",
				socialMediaToken: userInfo.idToken || "tempToken",
				email: userInfo.user.email,
				profilePicture: userInfo.user.photo,
				name: userInfo.user.givenName + " " + userInfo.user.familyName,
			})
				.then((res) => {
					console.log(res);
					setScreenLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setScreenLoading(false);

					setError("Server Internal Error");
				});
		} catch (error) {
			// google internal error. just show "Google Internal Error" user
			console.error(error);
			setScreenLoading(false);
			setError("Google Internal Error");
		}
	};
	const _handleSignInWithFacebook = () => {
		LoginManager.logInWithPermissions(["public_profile", "email"]).then(
			function (result) {
				if (result.isCancelled) {
					setError("Login cancelled");
					console.log("Login cancelled");
				} else {
					console.log(
						"Login success with permissions: " +
							result.grantedPermissions.toString()
					);
					setScreenLoading(true);
					AccessToken.getCurrentAccessToken().then((data) => {
						const accessToken = data?.accessToken.toString();
						extractFbData(data.accessToken.toString())
							.then((data) => {
								userAuth("socialMediaAuth", {
									socialMediaId: data.id,
									socialMediaType: "FACEBOOK",
									socialMediaToken: accessToken,
									email: data.email,
									profilePicture: data.picture.data.url,
									name: data.name,
								})
									.then((res) => {
										setScreenLoading(false);
										console.log(res);
									})
									.catch((err) => {
										// user already registered with this account. need to show to user
										console.log(err);
										setIsloading(false);
										setError("Server Internal Error");
										setScreenLoading(false);
									});
							})
							.catch((err) => {
								// facebook api error. just show "Facebook Internal Error" user
								console.log(err);
								setIsloading(false);
								setError(err.message);
							});
					});
				}
			},
			function (error) {
				// facebook internal error. just show "Facebook Internal Error" user
				console.log("Login fail with error: " + error);
				setIsloading(false);
				setError("Login fail with error: " + error);
			}
		);
	};
	useEffect(() => {}, [theme]);
	const { navigation } = props;

	return (
		<SafeAreaView
			style={[
				BaseStyle.safeAreaView,
				{
					height: height,
					backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
					// color: theme == "Dark" ? "white" : "#000",
				},
			]}
			forceInset={{ top: "always" }}
		>
			{isScreenLoading ? (
				<Loader />
			) : (
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={{ minHeight: "100%" }}
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
							_handleSignIn(values.email, values.password);
						}}
						initialValues={{
							email: "",
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
													Email
												</Text>
												<CustomTextInput
													style={styles.textInput}
													autoCorrect={false}
													placeholder="johndoe@email.com"
													placeholderTextColor="#676767"
													keyboardType="email-address"
													inputStyle={{
														paddingLeft: 10,
														fontSize: 17,
														fontFamily: "Sogoe UI",
														width: "100%",
													}}
													onChangeText={formik.handleChange("email")}
													onBlur={formik.handleBlur("email")}
													value={formik.values.email}
												/>
												{formik.touched.email && formik.errors.email && (
													<Error message={formik.errors.email} />
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
														props.navigation.navigate("ForgotPassword")
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
											style={{
												flexDirection: "row",
												justifyContent: "center",
											}}
										>
											<Text label semibold style={styles.loginText}>
												Don't have an account?
											</Text>
											<TouchableOpacity
												onPress={() => props.navigation.navigate("SignUp")}
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
