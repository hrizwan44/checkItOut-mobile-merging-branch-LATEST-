import React, { useEffect, useState, useContext } from "react";

import {
	SafeAreaView,
	View,
	StyleSheet,
	Dimensions,
	PermissionsAndroid,
} from "react-native";
import { Formik } from "formik";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Yup from "yup";
import Geolocation from "@react-native-community/geolocation";
import { Text } from "../../../components";
import { Button } from "../../../components";
import Header from "../../../components/Header";
import { BaseColor } from "../../../config";
import getStyles from "./styles";
import Arrow from "../../../assets/icons/Arrow.svg";
import CustomeTextInput from "../../../components/CustomTextInput";
import Error from "../../../components/Error";
import { ThemeContext } from "../../../context/ThemeContext";
import { RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get("window").width;
const theme = "Light";
const Location = (props) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [isLoading, setIsloading] = useState(false);
	const [address, setAddress] = useState();
	const [locationLoading, setIsLocationloading] = useState(false);
	const [locationStatus, setLocationStatus] = useState(false);
	const [currentLongitude, setCurrentLongitude] = useState("...");
	const [currentLatitude, setCurrentLatitude] = useState("...");
	const _handleLocation = (ZipCode) => {
		alert(
			"Your Location has been successfully changed to " + "'" + address + "'"
		);
	};
	const requestLocationPermission = async () => {
		if (Platform.OS === "ios") {
			getOneTimeLocation();
			subscribeLocationLocation();
		} else {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
					{
						title: "Location Access Required",
						message: "This App needs to Access your location",
					}
				);
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					//To Check, If Permission is granted
				} else {
					setLocationStatus("Permission Denied");
				}
			} catch (err) {
				console.warn(err);
			}
		}
	};
	const getOneTimeLocation = () => {
		if (locationStatus) {
			alert("Location already fetched please click apply to proceed");
		} else {
			setIsLocationloading(true);
			setLocationStatus("Getting Location ...");
			Geolocation.getCurrentPosition(
				//Will give you the current location
				(position) => {
					const currentLongitude = JSON.stringify(position.coords.longitude);
					const currentLatitude = JSON.stringify(position.coords.latitude);
					setAddress(currentLongitude, currentLatitude);

					setIsLocationloading(false);
				},
				(error) => {
					setLocationStatus(error.message);
					setIsLocationloading(false);
				},
				{
					enableHighAccuracy: false,
					timeout: 30000,
					maximumAge: 1000,
				}
			);
		}
	};
	useEffect(() => {
		requestLocationPermission();
		console.log("Edit");
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header
				title="Set Location"
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
					_handleLocation(values.ZipCode);
				}}
				initialValues={{
					ZipCode: "",
				}}
			>
				{(formik) => {
					return (
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								padding: 29,
								alignItems: "center",
								alignContent: "center",
							}}
						>
							<View
								style={{
									width: "70%",
									justifyContent: "center",
								}}
							>
								<Button
									loading={locationLoading}
									gradient
									gradientType="horizontalRight"
									gradientColor={["#00EBD3", "#0A8B7E"]}
									style={styles.locationButton}
									onPress={getOneTimeLocation}
								>
									Current Location
								</Button>
								<Text label semibold style={styles.label}>
									Or
								</Text>
							</View>
							<View style={{ height: 100 }}>
								<GooglePlacesAutocomplete
									placeholder="Search"
									onPress={(data, details = null) => {
										// 'details' is provided when fetchDetails = true
										console.log(data.description);
										setAddress(data.description);
									}}
									query={{
										key: "AIzaSyAUIl6OPxzezDdvFfsmNaX-8jIC_WwWDFc",
										language: "en",
										types: ["(cities)"], // default: 'geocode'
										// componentRestrictions: {country: 'pak'}
										country: "us",
									}}
									styles={style}
									filterReverseGeocodingByType={[
										"locality",
										"administrative_area_level_2",
									]}
								/>
							</View>

							{/* <CustomeTextInput
								style={styles.textInput}
								autoCorrect={false}
								placeholder="Enter Zip Code"
								textAlign={"center"}
								inputStyle={{
									alignItems: "center",
									fontSize: 17,
									fontFamily: "Sogoe UI",
									width: "100%",
									borderRadius: 100,
								}}
								onChangeText={formik.handleChange("ZipCode")}
								onBlur={formik.handleBlur("ZipCode")}
								value={formik.values.ZipCode}
							/>
							{formik.touched.ZipCode && formik.errors.ZipCode && (
								<Error message={formik.errors.ZipCode} />
							)} */}
							<View style={{ width: "100%", paddingVertical: 45 }}>
								<Button
									loading={isLoading}
									style={styles.createButton}
									// disabled={!(formik.isValid && formik.dirty && !isLoading)}
									onPress={formik.handleSubmit}
								>
									Apply
								</Button>
							</View>
						</View>
					);
				}}
			</Formik>
		</SafeAreaView>
	);
};
const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: "transparent",
		top: "5%",
		width: width,
		fontFamily: "Raleway-Regular",
	},
	textInputContainer: {
		backgroundColor: "#ffffff",
		borderRadius: 10,
		width: "60%",
		height: 50,
		justifyContent: "center",
		flexDirection: "row",
		borderBottomColor: "#253542",
		borderWidth: 1,
		fontFamily: "Raleway-Regular",
	},
	textInput: {
		marginLeft: 0,
		marginRight: 0,
		color: "black",
		backgroundColor: "transparent",
		fontSize: RFValue(16),
		borderRadius: 4,
		width: 300,
		height: 50,
		alignItems: "center",
		fontFamily: "Raleway-Regular",
	},
	predefinedPlacesDescription: {
		color: "red",
	},
	powered: {
		opacity: 0,
	},
	poweredContainer: {
		display: "none",
	},
	description: {
		fontFamily: "Raleway-Bold",
	},
	listView: {
		borderBottomColor: "transparent",
		backgroundColor: "#fff",
		borderRadius: 30,
		borderBottomWidth: 10,
		width: 300,
		marginBottom: 0,
		height: "auto",
		opacity: 1,
	},
});
export default Location;
