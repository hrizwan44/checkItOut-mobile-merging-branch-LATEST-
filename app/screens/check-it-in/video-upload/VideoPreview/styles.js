import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const headerHeight = 60;
const bottomContainerHeight = 55;
const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  mainContainerContentStyle: {
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundVideo: {
    width: width,
    height: height,
  },
  header: {
    position: "absolute",
    top: 0,
    width: width,
    height: 60,
    backgroundColor: "#2B2B2B",
    opacity: 0.5,
    zIndex: 1,
    justifyContent: "center"
  },
  title: {
    position: "absolute",
    top: 17 ,
    color: "#FFFFFF",
    fontSize: 16,
    zIndex: 1000,
  },
  createButton: {
    position: "absolute",
    top: 17 ,
    left: 21,
    borderRadius: 22,
    width:66,
    height: 26,
    zIndex: 1000,
    borderColor: "#00FFE5",
    borderWidth: 1,
    backgroundColor: "#FFFFFF"
  },
  rightIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1000

  },
  buttonText: {
    fontSize: 10,
    color: "black"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: 88,
    backgroundColor: "#2B2B2B",
    opacity: 0.5,
    zIndex: 1000,
    justifyContent: "center"
  },

  submit: {
    position: "absolute",
    bottom: 10,
    zIndex: 1000,
  },
  download: {
    position: "absolute",
    bottom: 32,
    right: 25,
    zIndex: 1000,
  },


  button: {
    backgroundColor: "green",
    height: 50,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderRadius: 10,
    margin: 10,
  },
  preview: {
    height: 180,
    width: 320,
    backgroundColor: "blue",
  },
  flashlight: {

    alignSelf: "flex-start",
    opacity: 100,
    zIndex: 1000,
    position: "absolute",
    bottom: 29,
    left: width * 0.08
  },
  capture: {
    width: 56,
    height: 56,
    borderRadius: 100,
    alignSelf: "center",
    opacity: 100,
    zIndex: 1000,
    position: "absolute",
    bottom: 19,
  },
  cameraswap: {
    alignSelf: "flex-end",
    opacity: 100,
    zIndex: 1000,
    position: "absolute",
    bottom: 29,
    right: width * 0.08
  }
});

export default styles;
