/* eslint-disable react-native/no-inline-styles */
import React, { Component, useState, useEffect, useRef } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
	Image,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import { RNCamera, FaceDetector } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import Video from "react-native-video";
import RNFetchBlob from "rn-fetch-blob";
import RNFS from "react-native-fs";
import styles from "./styles";
import LikeSvg from "../../../assets/icons/like.svg";
import CommentIcon from "../../../assets/icons/comment.svg";
import SaveIcon from "../../../assets/icons/SaveIcon.svg";
import HammerIcon from "../../../assets/icons/hammer.svg";
import ShareIcon from "../../../assets/icons/share.svg";
import NavigationService from "../../../navigation/NavigationService";
import LikeIconSmall from "../../../assets/icons/LikeIconSmall.svg";
const ProductDescription = ({ navigation }) => {
	return (
		<ScrollView
			keyboardShouldPersistTaps="handled"
			contentContainerStyle={styles.contentContainer}
			style={styles.container}
		>
			<View style={styles.containerWrapper}>
				<Video
					source={{
						uri: navigation.state?.params?.product?.videoUrl,
					}}
					// source={navigation.state?.params?.product?.video}
					repeat
					style={styles.video}
					resizeMode="cover"
					volume={0}
				/>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						{navigation.state?.params?.product?.title}
					</Text>
					<Text style={styles.subTitle}>
						{navigation.state?.params?.product?.description}
					</Text>
					<Text style={styles.price}>{navigation.state?.params?.product?.bidItNowPrice}</Text>
				</View>
				<View style={styles.videoMainContainer}>
					<View style={styles.innerLeft}>
						<View style={styles.dataContainer}>
							<TouchableOpacity
								style={styles.sellerTitleContainer}
								onPress={() => NavigationService.navigate("OthersProfile")}
							>
								<Image
									source={navigation.state?.params?.product?.profilePic}
									style={styles.profile}
									borderRadius={25}
									borderWidth={1}
									borderColor="#fff"
								/>
								<Text style={styles.sellerTitle}>
									{navigation.state?.params?.product?.user?.name}{" "}
									<Text style={{ fontSize: 30 }}>.</Text> Follow
								</Text>
							</TouchableOpacity>
							<View style={{ flexDirection: "row" }}>
								<LikeIconSmall />

								<Text style={styles.views}>
									{navigation.state?.params?.product?.likes}
									{" likes"}
								</Text>
							</View>
							{/* {navigation.state?.params?.product?.questions?.map(
                (question, index) => {
                  return <Text style={styles.question}>{question}</Text>;
                }
              )} */}
						</View>
					</View>

					<View style={styles.innerRight}>
						<View style={styles.iconsContainer}>
							<View style={styles.iconsContainer}>
								<View style={styles.iconContainer}>
									<LikeSvg />
								</View>
								<View style={styles.iconContainer}>
									<CommentIcon />
								</View>
								<View style={styles.iconContainer}>
									<SaveIcon />
								</View>
								<TouchableOpacity style={styles.iconContainer}>
									<HammerIcon />
								</TouchableOpacity>

								<View style={styles.iconContainer}>
									<ShareIcon />
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Text style={styles.porductDescription}>
				{navigation.state?.params?.product?.description}
			</Text>
		</ScrollView>
	);
};

export default ProductDescription;
