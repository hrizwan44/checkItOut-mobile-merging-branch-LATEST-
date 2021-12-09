import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../config";
const { width, height } = Dimensions.get("window");
import { create, PREDEF_RES } from "../../util/elementSizing";

const perfectSize = create(PREDEF_RES.infinix.px);

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
		marginTop: perfectSize(166),
		marginBottom: perfectSize(80),
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
		display: "flex",
		flexDirection: "row",
		width: "90%",
	},
	loginButton: {
		margin: "1.5%",
		backgroundColor: "#232323",
		justifyContent: "center",
		borderRadius: 10,
		// padding: 10,
		width: "50%",
		height: 79,
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
		paddingTop: "2.5%",
		color: "#FFFFFF",
		fontSize: 18,
	},
	bottomDescriptionContainer: {
		// marginTop: 186,
		position: "absolute",
		bottom: 28,
		paddingHorizontal: 2,
		alignItems: "center",
		justifyContent: "center",
		width: "80%",
	},
	bottomDescription: {
		color: "#FFFFFFAD",
		fontSize: 12,
		textAlign: "center",
		fontFamily: "Proxima Nova Light",
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
});
