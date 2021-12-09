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
import { ThemeContext } from "../../../context/ThemeContext";
import { retrieveData } from "../../../util/helpers";
import getStyles from "./styles";
import { Thumbnail } from "react-native-thumbnail-video";
import Video from "react-native-video";
const ItemList = (props) => {
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		console.log(props.imageUrl);
	}, []);

	return (
		<TouchableOpacity
			onPress={() =>
				props.handle("details", {
					title: props.title,
					description: props.description,
					videoUrl: props.imageUrl,
					ItemId: props.ItemId,
				})
			}
		>
			<View style={styles.cardContainer}>
				<View style={{ flex: 1 }}>
					<Video
						source={{
							uri: props.imageUrl,
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
				</View>
				<View style={styles.textContainer}>
					<View>
						<Text style={styles.heading}>{props.title}</Text>
					</View>
					<View>
						<Text numberOfLines={4} style={styles.text}>
							{props.description}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
export default ItemList;
