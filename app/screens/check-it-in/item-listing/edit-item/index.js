/* eslint-disable react-native/no-inline-styles */
import React, {
	Component,
	useState,
	useEffect,
	useRef,
	useContext,
} from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	FlatList,
	BackHandler,
} from "react-native";
import Video from "react-native-video";
import { NavigationEvents } from "react-navigation";
import Loader from "../../../../components/LoaderScreen";
import { ThemeContext } from "../../../../context/ThemeContext";
import NavigationService from "../../../../navigation/NavigationService";
import { getProductById } from "../../../../api/check-it-in/Product";
import { AuthContext } from "../../../../context/authContext";

import getStyles from "./style";

const EditItem = (props) => {
	const [description, setDescription] = useState(
		"Alloy Rims. Inside out fully original. Complete original file is\
	availble. Complete service history available. Totally driven on\
	petrol. Just like a Zero Meter car. New tires installed recently.\
	Never been into any accident. Original book is available as well.\
	Price is flexible."
	);
	const { product, setProduct, edit, setEdit } = useContext(AuthContext);
	const [heading, setHeading] = useState("Audi A4");
	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);
	const backAction = () => {
		props.handle("default", {});
	};
	useEffect(() => {
		console.log("product", product);
		getProductById(props.product.ItemId).then((res) => {
			setProduct(res.data);
			setEdit(true);
		});
		console.log("Product", props.product.ItemId);

		setStyles(getStyles(themeContext.isDarkMode));
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction
		);

		return () => backHandler.remove();
	}, [tempState]);
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<View style={styles.mainContainer}>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					<View style={styles.imageContainer}>
						{/* <Image source={{uri: props.product?.videoUrl}} /> */}
						<Video
							resizeMode={"cover"}
							style={{ width: "49%", height: 300 }}
							source={{ uri: props.product?.videoUrl }}
						/>
					</View>
					<TouchableOpacity
						style={styles.headingContainer}
						onPress={() => NavigationService.navigate("AddListing")}
					>
						<Text style={styles.heading}>{props.product?.title}</Text>
						<Image source={require("../../../../assets/icons/editPen.png")} />
					</TouchableOpacity>
					<View style={styles.textContainer}>
						<Text style={styles.text}>{props.product?.description}</Text>
					</View>
				</View>
			)}
		</>
	);
};
export default EditItem;
