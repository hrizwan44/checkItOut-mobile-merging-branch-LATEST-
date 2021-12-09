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
import config from "react-native-config";
const axios = require("axios");
const Api = axios.create();
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1";

const EditName = (props) => {
	const themeContext = useContext(ThemeContext);
	const { userSession, setUserSession } = useContext(AuthContext);

	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));

	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState();
	const [success, setSuccess] = useState();

	const editSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, "Name must have 3 character")
			.max(15, "Name can have maximum 15 character")
			.required("Enter Name"),
	});

	useEffect(() => {
		console.log("Edit", userSession.user);
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);

	const _handleName = async (name) => {
		setIsloading(true);
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer " + userSession.tokens.access.token,
		};
		const body = JSON.stringify({
			name: name,
		});
		console.log(body);
		Api.patch(
			`${backendServer}/${routeBase}/users/${userSession.user.id}`,
			body,
			{ headers: headers }
		)
			.then((res) => {
				console.log(res.status);
				setIsloading(false);
				const phoneNumber = res.data.phoneNumber;
				userSession.user.name = res.data.name;
				setUserSession(userSession);
				console.log(userSession);
				setError();
				setSuccess("Name has been updated successfully");
				console.log("updatePhone", res.data);
				// props.navigation.navigate("Otp", { phone: phoneNumber });
			})
			.catch((error) => {
				setIsloading(false);
				if (error.response.status == "400") {
					setSuccess();
					setError(error.message);
				}
				console.log("errors", error.response);
			});
	};
	// try {
	// 	setIsloading(true);
	// 	const request = await fetch(
	// 		`${backendServer}/${routeBase}/users/${userSession.user.id}`,
	// 		{
	// 			method: "PATCH",
	// 			body,
	// 			headers,
	// 		}
	// 	);
	// 	if (request.status == 200) {
	// 		setIsloading(false);
	// 		const requestData = await request.json();
	// 		console.log("asdadsasdasd", requestData);
	// 		userSession.user = requestData;
	// 		setUserSession(userSession);
	// 		setSuccess("Number has been updated successfully");
	// 	} else {
	// 		setIsloading(false);
	// 		const requestData = await request.json();
	// 		console.log("reject", requestData);
	// 		setError(requestData.message);
	// 	}
	// } catch (errors) {
	// 	setIsloading(false);
	// 	setError(errors.message);
	// }

	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header
				title="Edit Name"
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
					_handleName(values.name);
				}}
				initialValues={{
					name: "",
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
							<Text label semibold style={styles.label}>
								Name
							</Text>
							<CustomeTextInput
								style={styles.textInput}
								autoCorrect={false}
								placeholder="Dax Hunter"
								keyboardType="email-address"
								inputStyle={{
									paddingLeft: 10,
									fontSize: 17,
									fontFamily: "Sogoe UI",
									width: "100%",
									borderRadius: 100,
								}}
								onChangeText={formik.handleChange("name")}
								onBlur={formik.handleBlur("name")}
								value={formik.values.name}
							/>
							{formik.errors.name && <Error message={formik.errors.name} />}
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
export default EditName;
