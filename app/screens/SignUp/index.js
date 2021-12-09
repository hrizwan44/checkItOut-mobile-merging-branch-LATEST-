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

export default function SignUp(props) {
	const { userAuth, theme, setTheme } = useContext(AuthContext);
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);
	const [googleError, setGoogleError] = useState("");
	const [isScreenLoading, setScreenLoading] = useState(false);

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required("Enter Name"),
		email: Yup.string().email("Enter Correct Email").required("Enter Email"),
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

	const _handleSignUp = (firstName, password, email, phone) => {
		const name = firstName;
		const phoneNumber =
			"123" +
			Math.floor(Math.random() * 10) +
			Math.floor(Math.random() * 10) +
			Math.floor(Math.random() * 10) +
			Math.floor(Math.random() * 10) +
			Math.floor(Math.random() * 10);
		console.log(phoneNumber);
		setIsloading(true);
		userAuth("signUp", { name, email, password, phoneNumber })
			.then((res) => {
				console.log(res);
				setIsloading(false);
			})
			.catch((err) => {
				console.log(err.message);
				setIsloading(false);
				setError(err.message);
			});
		// NavigationService.navigate("Dashboard");
	};

	const { navigation } = props;
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
				color: theme == "Dark" ? "white" : "blue",
			}}
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
						title="Sign Up"
						titleStyle={styles.title}
						whiteColor
						style={{
							backgroundColor: BaseColor.backgroundColor,
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
							_handleSignUp(
								values.firstName,
								values.password,
								values.email,
								values.phone
							);
						}}
						initialValues={{
							email: "",
							password: "",
							confirmPassword: "",
							phone: "",
							firstName: "",
						}}
						validationSchema={validationSchema}
					>
						{(formik) => {
							return (
								<ScrollView
									keyboardShouldPersistTaps="handled"
									style={{ backgroundColor: BaseColor.backgroundColor }}
									contentContainerStyle={{ minHeight: "85%" }}
								>
									<View style={styles.root}>
										{/* <Text header style={styles.signUpText}>
                      Sign up with one of the following options
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
                        onPress={_handleSignUpWithGoogle}
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
                          onPress={_handleSignUpWithGoogle}
                        />
                      )}
                      <Button
                        icon={
                          // <View style={{backgroundColor: "white", borderRadius: 1000, }}>
                          <Image
                            source={require("../../assets/images/facebook.png")}
                            style={{ width: "60%", height: "60%" }}
                            resizeMode="contain"
                          />
                          // </View>
                        }
                        style={styles.socialButton}
                        onPress={_handleSignUpWithFacebook}
                      />
                    </View>
                     */}
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
														fontFamily: "Sogoe UI",
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
														paddingLeft: 10,
														fontSize: 17,
														fontFamily: "Sogoe UI",
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
												{/* Testing */}
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
											Create Account
										</Button>
										<View
											style={{ flexDirection: "row", justifyContent: "center" }}
										>
											<Text label semibold style={styles.loginText}>
												Already have an account?
											</Text>
											<TouchableOpacity
												onPress={() => props.navigation.navigate("SignIn")}
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
