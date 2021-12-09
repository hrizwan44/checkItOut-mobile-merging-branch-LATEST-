import { Formik } from "formik";
import React, { Component, useState, useEffect, useContext } from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	View,
	TouchableOpacity,
	Platform,
	AsyncStorage,
	PermissionsAndroid,
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
import { signIn } from "../../api/auth/logInOut";
import { NavigationActions, StackActions } from "react-navigation";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import { AuthContext } from "../../context/authContext";

import {
	LoginManager,
	Settings,
	Profile,
	AccessToken,
} from "react-native-fbsdk-next";
import { socialMediaAuth, extractFbData } from "../../api/auth/socialMedia";
import { storeData } from "../../util/helpers";
import config from "react-native-config";
import Loader from "../../components/LoaderScreen";
import FacebookSvg from "../../assets/icons/facebook.svg";
import GoogleSvg from "../../assets/icons/google.svg";
import AppleSvg from "../../assets/icons/apple.svg";
import MailSvg from "../../assets/icons/mail.svg";
GoogleSignin.configure({
	androidClientId: config.ANDROID_CLIENT_ID,
});
Settings.initializeSDK();

const loginSchema = Yup.object().shape({
	email: Yup.string().email("Enter Correct Email").required("Enter Email"),
	password: Yup.string().required("Enter Password"),
});

export default function Home(props) {
	const { userAuth } = useContext(AuthContext);
	const [isLoading, setIsloading] = useState(false);
	const [id, setId] = useState(true);
	const [password, setPassword] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState();
	const [isScreenLoading, setScreenLoading] = useState(false);

	useEffect(() => {
		userPermissionsForReadExternalStorage()
		userPermissionsForWriteExternalStorage()
		userPermissionsForLocation()
	}, [])

	const setUserID = async (id) => {
		try {
			await AsyncStorage.setItem("userId", id);
			const data = {}
			await AsyncStorage.setItem("bookmark", JSON.stringify(data));
		} catch (error) {
			console.log(error)
		}
	}

	const userPermissionsForLocation = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: "Location Access Required",
					message: "This App needs to Access your location",
				}
			);

		} catch (error) {

		}
	}

	const userPermissionsForReadExternalStorage = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
				{
					title: "Storage Read Access Required",
					message: "This App needs to Access your Storage",
				}
			);

		} catch (error) {

		}
	}

	const userPermissionsForWriteExternalStorage = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
				{
					title: "Storage Write Access Required",
					message: "This App needs to Access your storage",
				}
			);

		} catch (error) {

		}
	}

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
					console.log("Response DATA =====>>>", res);
					setUserID(res.user.id)
					setScreenLoading(false);
				})
				.catch((err) => {
					// user already registered with this account. need to show to user
					console.log(err);
					setIsloading(false);
					setError("Server Internal Error");
					setScreenLoading(false);
				});
		} catch (error) {
			// google internal error. just show "Google Internal Error" user
			console.error(error);
			setError("Google Internal Error");
			setScreenLoading(false);
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
										console.log(res);
										setScreenLoading(false);
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
								setScreenLoading(false);
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

	// the following line is commented because client needed complete desing irrespective of the platform

	// const googelButtonWidth = Platform.OS === "ios" ? "50%" : "100%";
	const googelButtonWidth = "50%";
	return (
		<SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: "always" }}>
			{isScreenLoading ? (
				<Loader />
			) : (
				<>
					<ScrollView
						keyboardShouldPersistTaps="handled"
						style={styles.container}
						contentContainerStyle={styles.contentContainer}
					>
						<Image
							source={require("@assets/images/logo1.png")}
							style={styles.logo}
							resizeMode="contain"
						/>
						<View style={styles.bottomContainer}>
							<Text style={styles.continueText}>Continue with</Text>
							<View style={styles.buttonsContainer}>
								<Button
									icon={
										<View style={styles.iconContainer}>
											<GoogleSvg />
											<Text style={styles.iconLabel}>Google</Text>
										</View>
										// <AntDesign
										//   name="google"
										//   size={30}
										//   color="white"
										//   // style={{ marginRight: 25 }}
										// />
									}
									style={[styles.loginButton, { width: googelButtonWidth }]}
									onPress={_handleSignInWithGoogle}
								/>
								{/* {Platform.OS === "ios" && ( */}
								<Button
									icon={
										<View style={styles.iconContainer}>
											<AppleSvg />

											<Text style={styles.iconLabel}>Apple ID</Text>
										</View>
									}
									style={styles.loginButton}
									onPress={_handleSignInWithGoogle}
								/>
								{/* )} */}
							</View>
							<View style={styles.buttonsContainer}>
								<Button
									icon={
										<View style={styles.iconContainer}>
											<FacebookSvg />
											{/* <Entypo
                        name="facebook-with-circle"
                        size={35}
                        color="#1A77F3"
                      /> */}

											<Text style={styles.iconLabel}>Facebook</Text>
										</View>
									}
									style={styles.loginButton}
									onPress={_handleSignInWithFacebook}
								/>

								<Button
									icon={
										<View style={styles.iconContainer}>
											<MailSvg />

											<Text style={styles.iconLabel}>Email</Text>
										</View>
									}
									style={styles.loginButton}
									onPress={() => props.navigation.navigate("SignIn")}
								></Button>
							</View>
							<View
								style={{
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "row",
								}}
							>
								<Text style={styles.mobileText}>or continue with </Text>
								<TouchableOpacity
									style={{ justifyContent: "center", alignItems: "center" }}
									onPress={() => props.navigation.navigate("SignInMobile")}
								>
									<Text
										style={[
											styles.mobileText,
											{ textDecorationLine: "underline" },
										]}
									>
										mobile number
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.bottomDescriptionContainer}>
							<Text style={styles.bottomDescription}>
								By Signing Up for Check it out, you agree to our Terms of
								Service. Learn how we process your data in our Privacy Policy
								and Cookies Policy
							</Text>
						</View>
					</ScrollView>
				</>
			)}
		</SafeAreaView>
	);
}
