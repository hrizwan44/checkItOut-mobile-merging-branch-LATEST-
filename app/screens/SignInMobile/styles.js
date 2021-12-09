import { Dimensions, StyleSheet } from "react-native";
import { BaseColor, DesignColor } from "../../config";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
	contain: {
		alignItems: "center",

		width: "100%",
	},
	title: {
		fontFamily: "Segoe-UI-Bold",
		color: "white",
		fontSize: 35,
		fontWeight: "bold",
		alignSelf: "center",
	},
	backButtonContainer: {
		// borderColor: "aquamarine",
		// borderWidth: 2,
		// borderRadius: 10,
		// padding: 10,
		alignItems: "center",
		justifyContent: "center",
		width: 60,
		height: 60,
	},
	textInput: {
		height: 55,
		backgroundColor: BaseColor.fieldColor,
		borderRadius: 10,
		borderColor: "#00FFE5",
		// borderWidth: 1.5,
		// marginBottom: 10,

		width: "100%",
	},
	root: {
		padding: 20,
		// height: height - 300,
		width: "100%",
		marginTop: 100,
	},
	signInText: {
		fontFamily: "Segoe UI",
		color: "white",
		fontSize: 17,
		marginBottom: 8,
		paddingLeft: 5,
	},
	buttonsContainer: {
		display: "flex",
		width: "100%",
	},
	socialButton: {
		marginBottom: 8,
		backgroundColor: BaseColor.buttonSecondaryColor,
		justifyContent: "center",
		borderRadius: 10,
		// padding: 10,
		width: "100%",
		height: 50,
	},
	createButton: {
		// marginTop: 10,
		justifyContent: "center",
		borderRadius: 10,
		// height: 60,
	},
	label: {
		fontFamily: "Segoe UI",
		fontSize: 20,
		marginTop: 15,
		paddingBottom: 7,
		paddingLeft: 5,
		textAlign: "left",
		color: BaseColor.fieldColor,
	},
	loginText: {
		paddingTop: 20,
		paddingBottom: 30,
		textAlign: "center",
		fontFamily: "Segoe UI",
		color: "white",
		fontSize: 17,
	},
	loginLink: {
		fontFamily: "Segoe UI",
		fontSize: 17,
		paddingTop: 20,
		paddingBottom: 30,
		textAlign: "center",
		color: "aquamarine",
		paddingLeft: 6,
	},
	bar: {
		padding: 20,
		paddingLeft: 6,
		borderBottomColor: "aquamarine",
		borderBottomWidth: 1,
	},
	forgotPassword: {
		flexDirection: "row",
		alignSelf: "flex-start",
		marginTop: 18,
	},
	forgotPasswordText: {
		fontFamily: "Segoe UI",
		fontSize: 17,
		color: "#00FFA8",
		textAlign: "left",
		alignSelf: "flex-end",
		marginLeft: 10,
	},
	bottomContainer: {
		flex: 1,
		width: "100%",
		paddingHorizontal: 20,
		justifyContent: "flex-end",

		bottom: 0,
	},
});
