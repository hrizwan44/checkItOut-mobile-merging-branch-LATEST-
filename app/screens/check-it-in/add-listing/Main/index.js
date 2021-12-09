import React, { useEffect, useState, useContext } from "react";
import RNFS from "react-native-fs";
import { View, SafeAreaView, ScrollView, Alert } from "react-native";
import * as ImagePicker from "react-native-image-picker";
import RNFetchBlob from "rn-fetch-blob";
import Video from "react-native-video";
import {
	Button,
	CustomTextInput,
	TitledComponent,
} from "../../../../components";
import { BaseColor, BaseStyle } from "../../../../config";
import getStyles from "./styles";
import DeleteIcon from "../../../../assets/icons/delete.svg";
import { TouchableOpacity } from "react-native";
import NavigationService from "../../../../navigation/NavigationService";
import { ThemeContext } from "../../../../context/ThemeContext";
import Loader from "../../../../components/LoaderScreen";
import { NavigationEvents } from "react-navigation";
import { retrieveData, storeData } from "../../../../util/helpers";
import { uploadVideo } from "../../../../api/check-it-in/Product";
import { AuthContext } from "../../../../context/authContext";
import { ProcessingManager, VideoPlayer } from 'react-native-video-processing';

const Main = (props) => {
	const {
		videoUriContext,
		titleContext,
		setTitleContext,
		product,
		setProduct,
		edit,
		setEdit,
	} = useContext(AuthContext);
	const [title, setTitle] = useState();
	const [inputFocusStyle, setInputFocusStyle] = useState();
	const [videoUri, setVideoUri] = useState("");
	const [videoName, setVideoName] = useState("");
	const [videoEncoded, setVideoEncoded] = useState("");
	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);
	// const [source, setSource] = useState("");
	const { userSession } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		console.log("Product add listing", product, edit);
		console.log("titleaaa", titleContext);
		setTitle(titleContext);
		setVideoUri(videoUriContext);
		if (edit) {
			setTitle(product.title);
			setVideoUri(product.videoUrl);
		}
		console.log(userSession.tokens.access.token);
		setStyles(getStyles(themeContext.isDarkMode));
	}, [tempState]);


	const trimVideo = (path) => {
		console.log("PATH ", path)
		try {
			setVideoUri(() => {
				const options = {
					// startTime: this.state.trimStart,
					startTime: 0,
					endTime: 6,
					// quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
					// saveToCameraRoll: true, // default is false // iOS only
					// saveWithCurrentDate: true, // default is false // iOS only
				};
				// const source = 'content://com.miui.gallery.open/raw/%2Fstorage%2Femulated%2F0%2FDCIM%2FCamera%2FVID_20211206_162512.mp4'
				// const source = '/storage/emulated/0/DCIM/Camera/VID_20211206_162512.mp4'

				ProcessingManager.trim(path, options) // like VideoPlayer trim options
					.then((data) => {
						console.log("Rizwan", data)

						setVideoUri(data)
						// setSource(data)
						// this.setState({ source: data })
						// this.setState({ loading: false, source: data }, () => this.getSourceInfos())
						// this.props.updateVideoSource(data)
						// this.props.updateModalStep(UPLOAD_STEP.uploadChoice)
						// this.props.saveVideoQuestion(data, UPLOAD_STEP.uploadChoice)
					})
					.catch(error => console.log('error in trimVideo 1', error));
			})
		} catch (error) {
			console.log('error in trimVideo', error)
		}
	}



	const _handleNext = () => {
		console.log("Bilal", videoName, videoUri);
		retrieveData("productData")
			.then((data) => {
				data = { ...data, title };
				storeData("productData", data);
				props.jumpTo(2);
			})
			.catch((err) => {
				setIsLoading(true);
				//storeData("productData", { title, videoUrl: product.videoUrl });
				uploadVideo(videoName, videoUri)
					.then((res) => {
						console.log('respons ei s', res);
						setIsLoading(false);
						const data = { title, videoUrl: res.data?.videoUrl, thumbnailUrl: res.data?.thumbnailUrl };
						console.log('data is ', data)
						storeData("productData", data);
						props.jumpTo(2);
					})
					.catch((err) => {
						console.log("FILE TOO LARGE", err)
						setIsLoading(false);
						alert("File too large!");
					});
			});
	};

	const selectVideo = async () => {
		try {
			ImagePicker.launchImageLibrary(
				{ mediaType: "video", includeBase64: true, videoQuality: "low" },
				(response) => {
					console.log(response);
					if (response?.assets) {
						console.log("IN path");
						console.log(response.assets[0]?.uri);
						console.log(response.assets[0]?.fileName);

						trimVideo(response.assets[0]?.fileName)
						// setSource(response.assets[0]?.fileName)
						// try {

						//   videoTriming(response?.assets[0]?.fileName)
						// } catch (error) {
						//   console.log("ERROR", error)
						// }

						//      content://com.miui.gallery.open/raw/%2Fstorage%2Femulated%2F0%2FDCIM%2FCamera%2FVID_20211206_162512.mp4
						//      /storage/emulated/0/DCIM/Camera/VID_20211206_162512.mp4

						// setVideoUri(response.assets[0]?.uri);
						// setVideoName(response.assets[0]?.fileName);

						// RNFetchBlob.fs
						//   .readFile(response.assets[0]?.uri, "base64")
						//   .then((data) => {
						//     console.log("BASE64 DATA");
						//     setVideoEncoded(data);
						//     console.log("BASE64 DATA END");
						//   });

						// .stat(response.assets[0]?.uri)
						// .then((stats) => {
						//   // setVideoUri("file://" + stats.path);
						//   RNFS.readFile(stats.path, 'base64')
						//   .then(res =>{
						//     console.log("BASE64 DATA");
						//     console.log(res);
						//     console.log("BASE64 DATA END");
						//   });

						// })
						// .catch((err) => {});
					}
				}
			);
		} catch (error) {
			console.log("ERROR", error)
		}
	}

	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<SafeAreaView style={BaseStyle.safeAreaView}>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					<ScrollView keyboardShouldPersistTaps="handled">
						<View style={styles.container}>
							<TitledComponent
								title="Title"
								subTitle="Eg. Brand, Model, Size etc."
								valueComponent={
									<CustomTextInput
										style={styles.input}
										inputStyle={[styles.inputText, inputFocusStyle]}
										autoCorrect={false}
										value={title}
										onChangeText={(text) => {
											console.log(text);
											setTitle(text);
											setTitleContext(text);
										}}
										onBlur={() => setInputFocusStyle(null)}
										onFocus={() => setInputFocusStyle(styles.inputFocus)}
									/>
								}
								containerStyle={styles.componentContainer}
								titleStyle={styles.componentTitle}
								subTitleStyle={styles.subTitle}
							/>

							{(!videoUri || videoUri == "") && (
								<View style={styles.headerRow}>
									<Button
										style={styles.btn}
										gradient
										gradientType="horizontalRight"
										gradientColor={["#113337", "#22564E"]}
										styleText={styles.buttonText}
										onPress={() => NavigationService.navigate("VideoUpload")}
									>
										Take a Video
									</Button>
									<Button
										style={styles.btn}
										gradient
										gradientType="horizontalRight"
										gradientColor={["#113337", "#22564E"]}
										styleText={styles.buttonText}
										onPress={selectVideo}
									>
										Share a Video
									</Button>
								</View>
							)}

							{videoUri !== "" && (
								<View style={styles.videoContainer}>
									<Video
										source={{
											uri: videoUri,
										}}
										style={styles.video}
										repeat
									/>
									<TouchableOpacity
										style={styles.icon}
										onPress={() => setVideoUri("")}
									>
										<DeleteIcon />
									</TouchableOpacity>
								</View>
							)}
						</View>
						<Button
							loading={isLoading}
							style={styles.nextButton}
							gradient
							gradientType="horizontalRight"
							gradientColor={[
								BaseColor.buttonPrimaryGradientStart,
								BaseColor.buttonPrimaryGradientEnd,
							]}
							onPress={_handleNext()}
						>
							Next
						</Button>
					</ScrollView>
				</SafeAreaView>
			)}
		</>
	);
};

export default Main;
