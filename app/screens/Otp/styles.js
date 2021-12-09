import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../config";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
	container: {
		backgroundColor: BaseColor.backgroundColor,
		width: width,
	},
	contentContainer: {
		display: "flex",
		alignItems: "center",
		backgroundColor: BaseColor.backgroundColor,
		width: width,
		height: "100%",
	},
	logo: {
		width: 175,
		height: 170,
		marginTop: 166,
		marginBottom: 80,
	},
	bottomContainer: {
		// position: 'absolute',
		// bottom: 100,
		alignItems: "center",
	},
	continueText: {
		color: "white",
		fontSize: 21,
		marginBottom: 20,
	},
	buttonsContainer: {
		flex: 1,
		display: "flex",
		// flexDirection: "row",
		width: "100%",
		alignItems: "center",
		marginTop: "55%",
		// alignContent: "flex-end",
		// position: "absolute",
		bottom: 59,
	},
	buttonIcon: {},
	textInput: {
		height: 46,
		backgroundColor: BaseColor.fieldColor,
		borderRadius: 5,
		marginTop: 10,
		padding: 10,
		width: "100%",
	},
	contain: {
		alignItems: "center",
		padding: 20,
		width: "100%",
		flex: 1,
	},
	bgImage: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		backgroundColor: "white",
	},
	registerText: {
		flexDirection: "row",
		alignSelf: "flex-start",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},
	registerButtonStyle: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 7,
		paddingTop: 7,
		margin: 1,
		backgroundColor: "white",
		borderRadius: 5,
		alignItems: "center",
		flexDirection: "row",
	},
	mobileText: {
		color: "#FFFFFF",
		fontSize: 18,
	},
	bottomDescriptionContainer: {
		marginTop: 186,
		marginBottom: 28,
		alignItems: "center",
		justifyContent: "center",
		width: "80%",
	},
	bottomDescription: {
		color: "#FFFFFFAD",
		fontSize: 12,
		textAlign: "center",
	},
	iconContainer: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	iconLabel: {
		color: "#FFFFFF",
		fontSize: 14,
		marginTop: 6,
	},

	createButton: {
		// marginTop: 10,
		justifyContent: "center",
		borderRadius: 14,
		height: 60,
		width: "87%",
		marginBottom: 22,
	},
	loginButton: {
		// marginTop: 10,
		justifyContent: "center",
		borderRadius: 14,
		height: 60,
		width: "87%",
		borderWidth: 1,
		borderColor: "#00FFA8",

		backgroundColor: "#2B2B2B",
	},
	loginText: {
		fontSize: 17,
		color: "#FFFFFF",
	},

	// otp styles
	borderStyleBase: {
		width: 30,
		height: 45,
	},

	borderStyleHighLighted: {
		borderColor: "#03DAC6",
	},

	underlineStyleBase: {
		width: 50,
		height: 65,
		borderRadius: 11,
		borderColor: "#00FFE5",
		borderWidth: 1,
		color: "white",
	},

	underlineStyleHighLighted: {
		borderColor: "#03DAC6",
	},
	verificationLabel: {
		color: "#FFFFFF",
		fontSize: 21,
		marginTop: 125,
	},
	phoneNumber: {
		color: "#00FFE5",
		fontSize: 19,
	},
});
