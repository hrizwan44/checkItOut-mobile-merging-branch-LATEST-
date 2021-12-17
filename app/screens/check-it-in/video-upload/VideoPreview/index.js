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
	StyleSheet,
	ScrollView,
	ActivityIndicator,
	Image,
	Alert,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import { RNCamera, FaceDetector } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import Video from "react-native-video";
import RNFetchBlob from "rn-fetch-blob";
import RNFS from "react-native-fs";
import styles from "./styles";
import { retrieveData, storeData } from "../../../../util/helpers";
import { Button } from "../../../../components";
import CrossIcon from "../../../../assets/icons/Cross.svg";
import SubmitButton from "../../../../assets/icons/submit-button.svg";
import DownloadIcon from "../../../../assets/icons/download.svg";
import { BaseColor } from "../../../../config";
import NavigationService from "../../../../navigation/NavigationService";
import { uploadVideo } from "../../../../api/check-it-in/Product";
import Loader from "../../../../components/LoaderScreen";
import { AuthContext } from "../../../../context/authContext";
const VideoPreview = ({ navigation }) => {
	const { setVideoUriContext } = useContext(AuthContext);
	const [videoUri, setVideoUri] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [recording, setRecording] = useState(false);
	const [paused, setPaused] = useState(false);
	const [startTime, setStartTime] = useState(0);
	const [endTime, setEndTime] = useState(2000);
	const [showTrimmer, setShowTrimmer] = useState(false);
	const [trimmedVideoUri, setTrimmedVideoUri] = useState("");
	const [videoPreview, setVideoPreview] = useState("");
	const cameraRef = useRef();
	const videoPlayerRef = useRef();
	useEffect(() => {
		console.log("props");
		console.log(navigation);
		retrieveData("videoData").then((uri) => setVideoUri(uri));
	}, []);
	const getPreview = (source) => {
		getPreviews(source).then((previews) => {
			console.log(previews.length);
			let previewTime = 1000;
			previews.map((preview, index) => {
				setTimeout(() => {
					setVideoPreview(preview);
				}, previewTime);
				previewTime = previewTime + 500;
			});
		});
	};
	const _handleSubmit = () => {
		setIsLoading(true);
		console.log("details", videoUri.uri);
		setVideoUriContext(videoUri.uri);
		uploadVideo("video.mp4", videoUri.uri)
			.then((res) => {
				setIsLoading(false);
				console.log(res.data);
				retrieveData("productData")
					.then((data) => {
						data = { ...data, videoUrl: res.data?.data };
						storeData("productData", data);
						NavigationService.navigate("AddListing", {
							previousScreen: "VideoPreview",
						});
					})
					.catch((err) => {
						const data = { videoUrl: res.data?.data };
						storeData("productData", data);
						NavigationService.navigate("AddListing", {
							previousScreen: "VideoPreview",
						});
					});
			})
			.catch((err) => {
				console.log(err);
				console.log("FILE TOO LARGE2", err)
				setIsLoading(false);
				// Alert.alert("File too large!");
			});
	};
	return (
		<>
			{isLoading ? (
				<Loader loadingText="submitting video" />
			) : (
				<View style={styles.container}>
					<Text style={styles.title}>Preview</Text>
					<Button
						// loading={isLoading}
						style={styles.createButton}
						styleText={styles.buttonText}
						// disabled={!(formik.isValid && formik.dirty && !isLoading)}
						onPress={() => NavigationService.navigate("VideoUpload")}
					>
						Retry
					</Button>
					<View style={styles.rightIcon}>
						<CrossIcon
							onPress={() => NavigationService.navigate("AddListing")}
						/>
					</View>
					<View style={styles.header} />
					<Video
						ref={videoPlayerRef}
						source={videoUri}
						style={styles.backgroundVideo}
						paused={paused}
						onEnd={() => setPaused(true)}
						// controls={true}
						// onProgress={(data) => {
						//   console.log("current time: ", parseInt(data.currentTime));
						//   console.log("end time: ", parseInt(endTime));
						//   if (parseInt(data.currentTime) === parseInt(endTime)) {
						//     setPaused(true);
						//   }
						// }}
						repeat={true}
						volume={0}
					/>
					<View style={styles.footer}>
						<View style={styles.capture} />
					</View>

					<TouchableOpacity style={styles.submit} onPress={_handleSubmit}>
						<SubmitButton />
					</TouchableOpacity>
					<View style={styles.download}>
						<DownloadIcon />
					</View>
				</View>
			)}
		</>
	);
};

export default VideoPreview;
