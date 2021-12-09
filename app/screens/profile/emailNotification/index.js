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
import { Checkbox } from "react-native-paper";
import { ThemeContext } from "../../../context/ThemeContext";

const EmailNotification = (props) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [isLoading, setIsloading] = useState(false);
	const [newsLetters, setNewsLetter] = useState(false);

	const _handleEmailNotification = (name = "Xyz") => {
		alert(
			"Your Settigns for notification has been successfully changed to " +
				"'" +
				name +
				"'"
		);
	};
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header
				title="Email Notification"
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

			<View
				style={{
					flex: 1,
					padding: 29,
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<Checkbox
						status={newsLetters ? "checked" : "unchecked"}
						uncheckedColor={"#696969"}
						onPress={() => {
							setNewsLetter(!newsLetters);
						}}
					/>
					<Text label semibold style={styles.label}>
						Newsletter
					</Text>
				</View>

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
						onPress={() => {}}
					>
						Done
					</Button>
				</View>
			</View>
		</SafeAreaView>
	);
};
export default EmailNotification;
