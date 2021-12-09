import React, { useEffect, useState, useContext } from "react";

import {
	SafeAreaView,
	View,
	ScrollView,
	Text,
	Image,
	ActivityIndicator,
	TouchableHighlight,
	Modal,
} from "react-native";
// import { Text } from "../../components";
import { Button } from "../../../components";
import Header from "../../../components/Header";
import { BaseColor } from "../../../config";
import getStyles from "./styles";
import Video from "react-native-video";
import { Thumbnail } from "react-native-thumbnail-video";
import Arrow from "../../../assets/icons/Arrow.svg";
import ArrowCard from "../../../assets/icons/ArrowCard.svg";
import { TouchableOpacity } from "react-native";
import LinkCard from "../../../components/ProfileDetail/LinkCard";
import PlusIcon from "../../../assets/icons/PlusIcon.svg";
import HeartIcon from "../../../assets/icons/heartIcon.svg";
import SavedItemsModal from "../saveItemModal/index";
import LargeCross from "../../../assets/icons/LargeCross.svg";
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../../../context/authContext";

import { savedImagesApi } from "../../../api/check-it-in/Product";
import config from "react-native-config";

const axios = require("axios");
const Api = axios.create();
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1";
let padding = 70;
const SavedImages = (props) => {
	const { userSession, setUserSession } = useContext(AuthContext);
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState();
	const [success, setSuccess] = useState();
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [user, setUser] = useState({
		title: "Dax Hunter",
		phone: "03110110335",
		email: "daxhunter110@gmail.com",
	});

	const [savedItems, setSavedItems] = useState();
	const [addModal, setAddModal] = useState(false);
	const [activeDelete, setActiveDelete] = useState(false);
	const [activeDelete2, setActiveDelete2] = useState(false);
	const [opacity, setOpacity] = useState(1);
	const [opacity2, setOpacity2] = useState(1);
	const [allSaved, setAllSaved] = useState(null);


	const hideAddModal = () => {
		setAddModal(false);
	};

	const _getSavedImages = () => {
		setIsloading(true);
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer " + userSession.tokens.access.token,
		};
		Api.get(
			`${backendServer}/${routeBase}/product/saved`,

			{ headers: headers }
		)
			.then((res) => {
				console.log(res.status);
				setIsloading(false);
				setError();
				console.log("updatePhone", res.data.results);
				setSavedItems(res.data.results);
			})
			.catch((error) => {
				setIsloading(false);
				if (error.response.status == "400") {
					setSuccess();
					setError(error.message);
				}
				console.log("errors", error.response);
			});
	};

	const find_getSavedImages = (id, page) => {
		savedImagesApi(id, page).then((res) => {
			console.log("savedImagesApi", res.data.results);
			setSavedItems(res.data.results)
			// this.setState({ saved: !this.state.saved });
		});
	}
	useEffect(() => {
		// _getSavedImages();
		const { item } = props.navigation.state.params
		setAllSaved(item)
		find_getSavedImages(item?._id, 1)
		console.log("Profile Settings", item);
		if (activeDelete) {
			setOpacity(0.7);
		} else {
			setOpacity(1);
		}
		if (activeDelete2) {
			setOpacity2(0.7);
		} else {
			setOpacity2(1);
		}
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, [activeDelete, activeDelete2]);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<Header
				title={allSaved?.title}
				titleStyle={styles.headerTitle}
				whiteColor
				styleRight={{ paddingBottom: 12 }}
				style={styles.header}
				renderLeft={() => {
					return <Arrow />;
				}}
				onPressLeft={() => {
					props.navigation.goBack(null);
				}}
			/>
			<View style={{ flex: 1, minHeight: 100 }}>
				<ScrollView
					style={{ minHeight: 100 }}
					contentContainerStyle={{ paddingBottom: padding }}
				>
					<View style={styles.cardMainContainer}>
						{savedItems &&
							savedItems.map((Item) => {
								padding = padding + 30;
								return (
									<View style={styles.cardContainer}>
										<Text style={styles.cardTitle}>{Item.product.title}</Text>
										<Text style={styles.itemText}>{Item.product.condition}</Text>
										<TouchableOpacity
											activeOpacity={0.5}
											delayLongPress={10}
											onLongPress={() => {
												setActiveDelete(true);
												console.log("pressed");
											}}
											style={styles.cardSecondaryContainer}
										>
											{/* <Thumbnail
											url={Item.videoUrl}
											style={{
												height: "100%",
												width: "110%",
												overflow: "hidden",
												opacity: opacity,
											}}
										/> */}
											<Video
												source={{
													uri: Item.product.videoUrl,
												}}
												style={{
													height: "100%",
													width: "110%",
													overflow: "hidden",
													opacity: opacity,
												}}
												paused={false}
												resizeMode="cover"
											/>
											{/* <Image
											source={require("../../../assets/images/pic.png")}
											backfaceVisibility={true}
											style={{
												height: "100%",
												width: "110%",
												overflow: "hidden",
												opacity: opacity,
											}}
										/> */}
										</TouchableOpacity>
										<Text style={styles.itemText}>${Item.product.bidItNowPrice}</Text>

										{activeDelete && (
											<View
												style={{
													position: "absolute",
													alignSelf: "center",
													paddingTop: 70,
												}}
											>
												<LargeCross onPress={() => setActiveDelete(false)} />
											</View>
										)}
									</View>
								);
							})}
					</View>
				</ScrollView>
			</View>
			{/* <Modal
				animationType="fade"
				transparent={true}
				visible={addModal}
				onRequestClose={() => {}}
			>
				<SavedItemsModal
					handleSubmit={hideAddModal}
					hideAddModal={hideAddModal}
				/>
			</Modal> */}
		</SafeAreaView>
	);
};
export default SavedImages;
