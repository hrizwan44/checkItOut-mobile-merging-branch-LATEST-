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

const theme = "Light";
const PushNotification = (props) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [isLoading, setIsloading] = useState(false);
	const [hndCheck, setHndCheck] = useState(false);
	const [searchAlert, setSearchAlert] = useState(false);
	const [itemRec, setItemRec] = useState(false);
	const [sellerItem, setSellerItem] = useState(false);

	const _handelPushNotification = (name = "Xyz") => {
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
				title="Push Notification"
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
						status={hndCheck ? "checked" : "unchecked"}
						uncheckedColor={"#696969"}
						onPress={() => {
							setHndCheck(!hndCheck);
						}}
					/>
					<Text label semibold style={styles.label}>
						Highlights and deals
					</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Checkbox
						status={searchAlert ? "checked" : "unchecked"}
						uncheckedColor={"#696969"}
						onPress={() => {
							setSearchAlert(!searchAlert);
						}}
					/>
					<Text label semibold style={styles.label}>
						Search Alerts
					</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Checkbox
						status={itemRec ? "checked" : "unchecked"}
						uncheckedColor={"#696969"}
						onPress={() => {
							setItemRec(!itemRec);
						}}
					/>
					<Text label semibold style={styles.label}>
						Item recommendations
					</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Checkbox
						boxType="round"
						status={sellerItem ? "checked" : "unchecked"}
						uncheckedColor={"#696969"}
						onPress={() => {
							setSellerItem(!sellerItem);
						}}
					/>
					<Text label semibold style={styles.label}>
						New items from sellers you follow
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
export default PushNotification;
