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
import CameraSwapIcon from "../../../assets/icons/camera-swap.svg";
import FlashIcon from "../../../assets/icons/flash.svg";
import NavigationService from "../../../navigation/NavigationService";
import { storeData } from "../../../util/helpers";
import CrossIcon from "../../../assets/icons/Cross.svg";
const VideoUpload = (props) => {
	const [videoUri, setVideoUri] = useState("");
	const [recording, setRecording] = useState(false);
	const [paused, setPaused] = useState(false);
	const [startTime, setStartTime] = useState(0);
	const [endTime, setEndTime] = useState(2000);
	const [showTrimmer, setShowTrimmer] = useState(false);
	const [trimmedVideoUri, setTrimmedVideoUri] = useState("");
	const [videoPreview, setVideoPreview] = useState("");
	const [isFrontCamera, setIsFrontCamera] = useState(false);
	const [isTorchOn, setIsTorchOn] = useState(false);
	const cameraRef = useRef();
	const videoPlayerRef = useRef();
	const selectVideo = async () => {
		ImagePicker.launchImageLibrary(
			{ mediaType: "video", includeBase64: true },
			(response) => {
				console.log(response);
				if (response && response.assets) {
					console.log("IN path");
					console.log(response.assets[0]?.uri);
					RNFetchBlob.fs
						.stat(response.assets[0]?.uri)
						.then((stats) => {
							console.log('stats is ', stats);
							setVideoUri("file://" + stats.path);
							getPreview("file://" + stats.path);
						})
						.catch((err) => { });
				}
			}
		);
	};
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
	const startRecording = async () => {
		setRecording(true);
		setTimeout(() => stopRecording(), 6000);
		// default to mp4 for android as codec is not set
		const { uri, codec = "mp4" } = await cameraRef.current.recordAsync();
		storeData("videoData", { uri });
		console.log("camerea", uri);
		NavigationService.navigate("VideoPreview");
		// setVideoUri(uri);
	};
	const stopRecording = async () => {
		console.log("recording stopped");
		cameraRef.current.stopRecording();
		setRecording(false);
	};
	let button = (
		<TouchableOpacity onPress={startRecording} style={styles.button}>
			<Text style={{ fontSize: 14 }}> RECORD </Text>
		</TouchableOpacity>
	);
	if (recording) {
		button = (
			<TouchableOpacity onPress={stopRecording} style={styles.button}>
				<Text style={{ fontSize: 14 }}> STOP </Text>
			</TouchableOpacity>
		);
	}
	return (
		// <ScrollView
		// style={styles.mainContainer}
		// contentContainerStyle={styles.mainContainerContentStyle}>

		<View style={styles.container}>
			<View style={styles.header}></View>

			<Text style={styles.title}>Record</Text>
			<View style={styles.rightIcon}>
				<CrossIcon onPress={() => NavigationService.navigate("AddListing")} />
			</View>
			<RNCamera
				ref={cameraRef}
				style={styles.backgroundVideo}
				type={
					isFrontCamera
						? RNCamera.Constants.Type.front
						: RNCamera.Constants.Type.back
				}
				permissionDialogTitle={"Permission to use camera"}
				permissionDialogMessage={
					"We need your permission to use your camera phone"
				}
				flashMode={
					isTorchOn
						? RNCamera.Constants.FlashMode.torch
						: RNCamera.Constants.FlashMode.off
				}
			/>
			<View style={styles.footer}>
				<View style={styles.capture} />
			</View>

			<View style={styles.flashlight}>
				<TouchableOpacity onPress={() => setIsTorchOn(!isTorchOn)}>
					<FlashIcon />
				</TouchableOpacity>
			</View>

			<TouchableOpacity
				style={[
					styles.capture,
					{
						backgroundColor: recording ? "red" : "white",
					},
				]}
				onPress={recording ? stopRecording : startRecording}
			/>
			<View style={styles.cameraswap}>
				<TouchableOpacity onPress={() => setIsFrontCamera(!isFrontCamera)}>
					<CameraSwapIcon />
				</TouchableOpacity>
			</View>
		</View>
		//       <View
		//         style={{
		//           flex: 0,
		//           flexDirection: "row",
		//           justifyContent: "center",
		//           marginTop: 100,
		//         }}
		//       >
		//         {button}
		//       </View>
		//       {videoUri !== "" && (
		//         <>
		//           <Video
		//             ref={videoPlayerRef}
		//             source={{
		//               uri: videoUri,
		//             }}
		//             style={styles.backgroundVideo}
		//             paused={paused}
		//             onEnd={() => setPaused(true)}
		//             // controls={true}
		//             onProgress={(data) => {
		//               console.log("current time: ", parseInt(data.currentTime));
		//               console.log("end time: ", parseInt(endTime));
		//               if (parseInt(data.currentTime) === parseInt(endTime)) {
		//                 setPaused(true);
		//               }
		//             }}
		//           />
		//           <TouchableOpacity
		//             onPress={() => {
		//               setPaused(!paused);
		//             }}
		//             style={styles.button}
		//           >
		//             {paused ?
		//               <Icon
		//               name="play"
		//               color="white"
		//               size={25}
		//             />
		//             :
		//             <Icon
		//             name="pause"
		//             color="white"
		//             size={25}
		//           />
		// }
		//           </TouchableOpacity>

		//           <Image
		//             source={{ uri: `data:image/png;base64,${videoPreview}` }}
		//             style={styles.backgroundVideo}
		//             controls={true}
		//           />
		//         </>
		//       )}

		//       <TouchableOpacity onPress={selectVideo} style={styles.button}>
		//         <Text style={{ color: "white" }}>Upload</Text>
		//       </TouchableOpacity>
		//       {videoUri !== "" && (
		//         <TouchableOpacity
		//           onPress={() => {
		//             setShowTrimmer(!showTrimmer);
		//           }}
		//           style={styles.button}
		//         >
		//           <Text style={{ color: "white" }}>
		//             {showTrimmer ? "Hide Trimmer" : "Show Trimmer"}
		//           </Text>
		//         </TouchableOpacity>
		//       )}
		//       {trimmedVideoUri !== "" && (
		//         <Video
		//           source={{
		//             uri: trimmedVideoUri,
		//           }}
		//           style={styles.backgroundVideo}
		//           // controls={true}
		//         />
		//       )}

		//       {videoUri !== "" && (
		//         <TouchableOpacity
		//           onPress={() => getPreview(videoUri, 1)}
		//           style={styles.button}
		//         >
		//           <Text style={{ color: "white" }}>Preview</Text>
		//         </TouchableOpacity>
		//       )}
		// </ScrollView>
	);
};

export default VideoUpload;
