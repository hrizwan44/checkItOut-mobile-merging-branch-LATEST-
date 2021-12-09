import { StyleSheet } from "react-native";
import { useContext } from "react";
import { BaseColor, YellowColor } from "./color";
import { AuthContext } from "../context/authContext";

const theme = "Dark";
export const BaseStyle = StyleSheet.create({
	tabBar: {
		borderTopColor: "#707070",
		borderTopWidth: 0,
		backgroundColor: "#262626",
		shadowOffset: { height: 0, width: -2 },
		shadowColor: "transparent",
		shadowOpacity: 0,
		elevation: 0,
		height: 68,
		paddingBottom: 0,
		fontFamily: "Poppins-Regular",
	},
	bodyPaddingDefault: {
		paddingHorizontal: 20,
	},
	bodyMarginDefault: {
		marginHorizontal: 20,
	},
	textInput: {
		height: 40,
		backgroundColor: BaseColor.fieldColor,
		borderRadius: 5,
		padding: 10,
		width: "100%",
		justifyContent: "center",
	},
	textInputWithIcon: {
		minHeight: 50,
		backgroundColor: BaseColor.fieldColor,
		borderRadius: 5,
	},
	iconInputContainer: {
		borderRadius: 5,
		width: "100%",
		backgroundColor: BaseColor.fieldColor,
		flexDirection: "row",
		alignItems: "center",
	},
	safeAreaView: {
		flex: 1,
	},
	whiteHeader: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,

		elevation: 1,
		backgroundColor: "white",
	},
});
