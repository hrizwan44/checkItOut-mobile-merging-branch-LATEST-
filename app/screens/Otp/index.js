import { Formik } from "formik";
import React, { Component, useState, useEffect, useContext } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, Error, Text, Success } from "../../components";
import { BaseColor, BaseStyle, PurpleColor, YellowColor } from "../../config";
import styles from "./styles";
import { AuthContext } from "../../context/authContext";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import NavigationService from "../../navigation/NavigationService";
import { storeData } from "../../util/helpers";

const axios = require("axios");
const Api = axios.create();
import config from "react-native-config";
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1";

export default function Otp({ route, navigation }) {
	// const { userSession, setUserSession } = useContext(AuthContext);
	const { userAuth, theme, setTheme, userSession, setUserSession } =
		useContext(AuthContext);
	const [code, setCode] = useState();
	const [phone, setPhone] = useState(navigation.getParam("phone"));
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const reset = navigation.getParam("reset");
	const change = navigation.getParam("change");
	console.log(change, reset);
	const _handleOTP = async (code, phone) => {
		const headers = { "Content-Type": "application/json" };
		const body = JSON.stringify({
			code: code,
			phoneNumber: phone,
		});
		console.log(body);
		try {
			setIsloading(true);
			const request = await fetch(
				"https://checkitoutdev.herokuapp.com/v1/auth/verify-mobile-number",
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
				storeData("userData", requestData);
				setUserSession(requestData);
				NavigationService.navigate("Dashboard");
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

	const _resendOTP = async (phone) => {
		const headers = {
			"Content-Type": "application/json",
		};
		const body = JSON.stringify({
			phoneNumber: phone,
		});
		console.log(body);
		try {
			setIsloading(true);
			const request = await fetch(
				"https://checkitoutdev.herokuapp.com/v1/auth/resend-otp",
				{
					method: "POST",
					body,
					headers,
				}
			);
			if (request.status == 201) {
				setIsloading(false);
				const requestData = await request.json();
				console.log(requestData);
				setError(null);
				setSuccess(requestData.message);
			} else {
				setIsloading(false);
				const requestData = await request.json();
				console.log(requestData.message);
				setError(requestData.message);
			}
		} catch (errors) {
			setIsloading(false);
			setError(errors.message);
		}
		// NavigationService.navigate("Dashboard");
	};

	const _resetPassword = (phone, code, reset) => {
		NavigationService.navigate("ResetPassordMobile", { phone, code, reset });
	};

	const _changePhone = (code, number) => {
		setIsloading(true);
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer " + userSession.tokens.access.token,
		};
		const body = JSON.stringify({
			code: code,
			phoneNumber: number,
		});
		console.log(body);
		Api.post(`${backendServer}/${routeBase}/users/verify-mobile-number`, body, {
			headers: headers,
		})
			.then((res) => {
				setIsloading(false);
				const phoneNumber = res.data.phoneNumber;
				console.log("updatePhone", res.data);
				setUserSession(res.data);
				NavigationService.navigate("ProfileSettings");
			})
			.catch((error) => {
				setIsloading(false);
				setError(error.response.data.message);
				console.log("errors", error.response.data);
			});
	};
	return (
		<SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: "always" }}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<View style={{ display: "flex", alignItems: "center" }}>
					<Text style={styles.verificationLabel}>
						Enter verification code sent to
					</Text>
					<Text style={styles.phoneNumber}>{phone}</Text>
					<OTPInputView
						style={{ width: "80%", height: 200 }}
						pinCount={6}
						// code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
						// onCodeChanged = {code => { this.setState({code})}}
						autoFocusOnLoad
						codeInputFieldStyle={styles.underlineStyleBase}
						codeInputHighlightStyle={styles.underlineStyleHighLighted}
						onCodeFilled={(code) => {
							setCode(code);
						}}
					/>
					{error && <Error message={error} />}
					{success && <Success message={success} />}
				</View>
				<View style={styles.buttonsContainer}>
					<Button
						loading={isLoading}
						style={styles.createButton}
						gradient
						gradientType="horizontalRight"
						gradientColor={[
							BaseColor.buttonPrimaryGradientStart,
							BaseColor.buttonPrimaryGradientEnd,
						]}
						disabled={!code && !isLoading}
						onPress={() => {
							if (reset) {
								_resetPassword(code, phone, reset);
							} else if (change) {
								_changePhone(code, phone);
							} else {
								_handleOTP(code, phone);
							}
						}}
						// onPress={formik.handleSubmit}
					>
						Submit
					</Button>

					{!reset && (
						<Button
							// loading={isLoading}
							style={styles.loginButton}
							// disabled={!(formik.isValid && formik.dirty && !isLoading)}
							onPress={() => _resendOTP(phone)}
						>
							<Text style={styles.loginText}>Resend Code</Text>
						</Button>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
