import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../../config";
const { width, height } = Dimensions.get("window");
const bottomContainerHeight = 68;
const headerHeight = 140;
const styles = StyleSheet.create({
  container: {
    backgroundColor: BaseColor.backgroundColor,
  },
  contentContainer: {
    alignItems: "center",
  },
  porductDescription: {
    color: "white",
    width: "88%",
    paddingTop: 20,
    minHeight: height - bottomContainerHeight,
  },
  

  
  video: {
    height: height - bottomContainerHeight,
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
    top: 0,
    marginLeft: 15,
  },
  title: {
    marginTop: 20,
    // marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
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
  },
  profile: {
    height: 50,
    width: 50,
    alignItems: "center"
  },
  iconsContainer:{
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 22,
  },
  iconContainer:{
    marginBottom:7
  },
  icon: {
    width: 42,
    height: 42
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
    bottom: 20,
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
  views: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5
  },
  question:{
    color: "white",
    fontSize: 14
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
  containerWrapper: {
    height: height - bottomContainerHeight,
    width: width,

  },
	price: {
		fontSize: 22,
		color: "#fff",
		marginTop: 0,
		fontWeight: "bold",
	},
	subTitle: {
		fontSize: 12,
		color: "#fff",
		marginTop: 0,
	},

});
export default styles;
