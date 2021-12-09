import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native-animatable";
import {
	CustomTextInput,
	TitledComponent,
	Button,
} from "../../../../components";
import Loader from "../../../../components/LoaderScreen";
import { BaseColor } from "../../../../config";
import { ThemeContext } from "../../../../context/ThemeContext";
import NavigationService from "../../../../navigation/NavigationService";
import getStyles from "./styles";
import { NavigationEvents } from "react-navigation";
import {
	createProduct,
	updateProduct,
} from "../../../../api/check-it-in/Product";
import { removeData, retrieveData } from "../../../../util/helpers";
import { AuthContext } from "../../../../context/authContext";
const Delivery = () => {
	const {
		edit,
		setEdit,
		product,
		setProduct,
		titleContext,
		setTitleContext,
		videoUriContext,
		setVideoUriContext,
	} = useContext(AuthContext);
	const [location, setLocation] = useState("");
	const [inputFocusStyle, setInputFocusStyle] = useState();
	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	const { userSession } = useContext(AuthContext);
	const themeContext = useContext(ThemeContext);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		if (edit) {
			setLocation(product.location);
		}
		console.log(userSession.tokens.access.token);
		setStyles(getStyles(themeContext.isDarkMode));
	}, [tempState]);

	const _handleNext = () => {
		setIsLoading(true);
		retrieveData("productData").then((data) => {
			console.log(data);
			delete data["videoUri"];
			console.log(data);
			if (edit) {
				updateProduct({ ...data, location }, product.uid)
					.then((res) => {
						console.log(res);
						setProduct({});
						setEdit(false);
						setIsLoading(false);
						NavigationService.navigate("AdPosted");
					})
					.catch((err) => {
						console.log(err.response?.data?.message);
						setIsLoading(false);
						alert(err.response?.data?.message);
					});
			} else {
				createProduct({ ...data, location })
					.then((res) => {
						console.log(res);
						setIsLoading(false);
						setProduct({});
						setTitleContext();
						setEdit(false);
						NavigationService.navigate("AdPosted");
					})
					.catch((err) => {
						console.log(err.response?.data?.message);
						setIsLoading(false);
						alert(err.response?.data?.message);
					});
			}
		});
	};
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<View style={styles.container}>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					<TitledComponent
						containerStyle={styles.detailContainer}
						// title="Type (optional)"
						titleStyle={styles.title}
						valueComponent={
							<CustomTextInput
								style={styles.textInput}
								placeholder="Choose a Location"
								placeholderTextColor="#101010"
								inputStyle={{
									paddingLeft: 10,
									minHeight: 10,
									fontSize: 17,
									borderRadius: 9,
									fontFamily: "Sogoe UI",
									width: "100%",
									borderRadius: 16,
								}}
								editable={false}
								value={location}
								onChangeText={(text) => setLocation(text)}
							/>
						}
					/>

					<Button
						loading={isLoading}
						style={styles.createButton}
						gradient
						gradientType="horizontalRight"
						gradientColor={[
							BaseColor.buttonPrimaryGradientStart,
							BaseColor.buttonPrimaryGradientEnd,
						]}
						// disabled={!(formik.isValid && formik.dirty && !isLoading)}
						onPress={_handleNext}
					>
						Next
					</Button>
				</View>
			)}
		</>
	);
};

export default Delivery;
