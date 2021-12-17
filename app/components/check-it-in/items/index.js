import React, { Component, useState, useEffect, useContext } from "react";
import {
	View,
	TouchableOpacity,
	FlatList,
	Text,
	Dimensions,
	StyleSheet,
	Image,
	ImageBackground,
} from "react-native";
import navigate from '../../../navigation/NavigationService';
import { ThemeContext } from "../../../context/ThemeContext";
import { retrieveData } from "../../../util/helpers";
import getStyles from "./styles";
import { Thumbnail } from "react-native-thumbnail-video";
import Video from "react-native-video";
import { StackActions, NavigationActions } from 'react-navigation';
const ItemList = ({ navigateHadler, navigation, imageUrl, title, description, ItemId, handle }) => {
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	useEffect(() => {
		// navigation.popToTop()
		console.log("NAVIGATION", navigation)
		setStyles(getStyles(themeContext.isDarkMode));
		console.log(imageUrl);
	}, []);

	return (
		<TouchableOpacity
			onPress={() =>
				handle("details", {
					title: title,
					description: description,
					videoUrl: imageUrl,
					ItemId: ItemId,
				})
			}
		>
			<View style={styles.cardContainer}>
				<View style={{ flex: 1 }}>
					<Video
						source={{
							uri: imageUrl,
						}}
						// source={this.props.item?.videoUrl}
						repeat
						style={styles.profile}
						// resizeMode="contain"
						muted={true}
						volume={0}
						resizeMode={"cover"}
					/>
					{/* <Image
						source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
						style={styles.profile}
					/>  */}
					{/* <View>
						<Image style={{ width: 20, height: 20 }} source={require("../../../assets/icons/watchicon.jpg")} />
					</View> */}
				</View>
				<View style={styles.textContainer}>
					<View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
						<View>
							<Text style={styles.heading}>{title}</Text>
							<Text style={styles.heading1}>$2000</Text>
						</View>
						<View style={{ width: 70, height: 50, alignItems: 'center' }}>
							<TouchableOpacity onPress={() => navigation.navigate("BidScreen")}>
								<View style={{ width: 60, height: 30, backgroundColor: "#fff", borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
									<Text style={{ color: "#313131", fontSize: 14, fontWeight: 'bold', }}>Bids</Text>
									<View style={{ width: 20, height: 20, backgroundColor: "#ff6565", borderRadius: 50, position: 'absolute', top: -5, left: -10, justifyContent: 'center', alignItems: 'center' }}>
										<Text style={{ fontSize: 10, fontWeight: 'bold', color: "#fff", }}>99+</Text>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View>
						<Text numberOfLines={4} style={styles.text}>
							{description}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
export default ItemList;
