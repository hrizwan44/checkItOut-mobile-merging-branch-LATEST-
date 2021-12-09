import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const bottomContainerHeight = 68;
const headerHeight = 125;
const styles = StyleSheet.create({
	video: {
		height: height - headerHeight - bottomContainerHeight,
		width: width,
		backgroundColor: "#000",
	},
	header: {
		width: width,
		height: 50,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 0,
		flexDirection: "row",
	},
	titleContainer: {
		position: "absolute",
		top: 15,
		marginLeft: 15,
	},
	title: {
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
		textShadowColor: "black",
		fontSize: 36,
		fontWeight: "bold",
		color: "#fff",
	},
	subTitle: {
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
		textShadowColor: "black",
		fontSize: 12,
		color: "#fff",
		marginTop: 0,
	},
	price: {
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
		textShadowColor: "black",
		fontSize: 22,
		color: "#fff",
		marginTop: 0,
		fontWeight: "bold",
	},
	text: {
		color: "#fff",
		fontSize: 17,
		marginRight: 15,
	},
	videoMainContainer: {
		height: "58%",
		flexDirection: "row",
		width: width,
		position: "absolute",
		bottom: 0,
	},
	innerLeft: {
		width: "80%",
		height: "100%",
	},
	innerRight: {
		width: "20%",
		height: "100%",
		alignItems: "center",
		paddingBottom: 50,
	},
	profile: {
		height: 34,
		width: 34,
		alignItems: "center",
		borderColor: "#707070",
		borderWidth: 1,
		marginTop: 20,
	},
	iconsContainer: {
		width: "100%",
		alignItems: "center",
		position: "absolute",
		bottom: 22,
	},
	iconContainer: {
		marginBottom: 7,
	},
	icon: {
		width: 42,
		height: 42,
	},
	btn: {
		backgroundColor: "#ff5b77",
		width: 20,
		height: 20,
		borderRadius: 10,
		elevation: 5,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: -10,
	},
	dataContainer: {
		width: "100%",
		position: "absolute",
		bottom: 5,
		paddingLeft: 20,
	},
	description: {
		color: "#e5e5e5",
		marginBottom: 10,
	},
	sellerTitleContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	sellerTitle: {
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
		textShadowColor: "black",
		color: "#fff",
		fontSize: 13,
		fontFamily: "Segoe-UI-Bold",
		marginLeft: 10,
	},
	views: {
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 10,
		textShadowColor: "black",
		color: "white",
		fontSize: 14,
		fontWeight: "bold",
		paddingBottom: 0,
		paddingTop: 5,
	},
	question: {
		color: "white",
		fontSize: 14,
	},
	tagsContainer: {
		flexDirection: "row",
	},
	bottomContainer: {
		backgroundColor: "black",
		flexDirection: "row",
		height: bottomContainerHeight,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
});

export default styles;
