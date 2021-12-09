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

const { width, height } = Dimensions.get("window");
const forgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email("Enter Correct Email").required("Enter Email"),
});
const ForgotPassword = (props) => {
	const { userAuth, theme, setTheme } = useContext(AuthContext);
	const [isLoading, setIsloading] = useState(false);
	const [isScreenLoading, setScreenLoading] = useState(false);
	const [error, setError] = useState("");
	const [isSuccess, setSuccess] = useState(false);
	const [alert, setAlert] = useState(false);

	const _ForgotPassword = async (email) => {
		setIsloading(true);
		setSuccess(false);
		forgotPassword(email)
			.then((res) => {
				setIsloading(false);
				setSuccess(true);
			})
			.catch(async (err) => {
				const errorApi = await err.json();
				console.log(errorApi);
				setError(errorApi.message);
				setIsloading(false);
			});
	};

	return (
		<SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: "always" }}>
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
							_ForgotPassword(values.email);
						}}
						initialValues={{
							email: "",
						}}
						validationSchema={forgotPasswordSchema}
					>
						{(formik) => {
							return (
								<ScrollView
									keyboardShouldPersistTaps="handled"
									style={{ backgroundColor: BaseColor.backgroundColor }}
									contentContainerStyle={{ height: "100%" }}
								>
									<View style={styles.root}>
										<Text header style={styles.signInText}>
											Enter your email address to receive a link to reset
											password
										</Text>
									</View>

									<View style={styles.contain}>
										<Text label semibold style={styles.label}>
											Email
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
											onChangeText={formik.handleChange("email")}
											onBlur={() => {
												formik.handleBlur("email");
												setError(null);
											}}
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors.email && (
											<Error message={formik.errors.email} />
										)}
										{isSuccess && (
											<Success message="Email sent successfully." />
										)}
									</View>
									<View
										style={{
											width: "100%",
											paddingHorizontal: 20,
											position: "absolute",
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
										{error ? <Error message={error} /> : null}
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
export default ForgotPassword;
