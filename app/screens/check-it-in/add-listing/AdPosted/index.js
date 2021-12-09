import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import {
	CustomTextInput,
	TitledComponent,
	Button,
	InternalHeader,
} from "../../../../components";
import { BaseColor } from "../../../../config";
import getStyles from "./styles";
import EntypoIcon from "react-native-vector-icons/Entypo";
import NavigationService from "../../../../navigation/NavigationService";
import { ThemeContext } from "../../../../context/ThemeContext";
import Loader from "../../../../components/LoaderScreen";
import { NavigationEvents } from "react-navigation";
import { removeData, retrieveData } from "../../../../util/helpers";
import { AuthContext } from "../../../../context/authContext";
import Video from "react-native-video";
const AdPosted = (props) => {
	const {
		videoUriContext,
		product,
		setProduct,
		edit,
		setEdit,
		setVideoUriContext,
		setTitleContext,
	} = useContext(AuthContext);
	const [title, setTitle] = useState("");
	const [condition, setCondition] = useState("");
	const [videoUrl, setVideoUrl] = useState("");
	const [inputFocusStyle, setInputFocusStyle] = useState();
	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		retrieveData("productData").then((data) => {
			console.log(data);
			setTitle(data?.title);
			setCondition(data?.condition);
			setVideoUrl(data?.videoUrl);
		});
	}, [tempState]);
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={styles.container}
				>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					<InternalHeader
						title="Ad Posted!"
						background={styles.container.backgroundColor}
						rightIcon={
							<EntypoIcon
								name="cross"
								size={28}
								color={themeContext.isDarkMode ? "white" : "black"}
								onPress={() => NavigationService.navigate("Dashboard")}
							/>
						}
					/>
					<View style={styles.tabCurrent} />
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.condition}>{condition}</Text>
					<Video
						source={{
							uri: videoUriContext ? videoUriContext : videoUrl,
						}}
						// source={this.props.item?.videoUrl}
						repeat
						style={styles.thumbnail}
						// resizeMode="contain"
						muted={true}
						volume={0}
						resizeMode={"cover"}
					/>
					{/* <Image
						source={require("../../../../assets/images/logo.jpg")}
						style={styles.thumbnail}
					/> */}
					<Button
						// loading={isLoading}
						style={styles.greyButton}
						gradientType="horizontalRight"
						gradientColor={[
							BaseColor.buttonPrimaryGradientStart,
							BaseColor.buttonPrimaryGradientEnd,
						]}
						// disabled={!(formik.isValid && formik.dirty && !isLoading)}
						// onPress={formik.handleSubmit}
					>
						Promote
					</Button>
					<Button
						// loading={isLoading}
						style={styles.greyButton}
						gradientType="horizontalRight"
						gradientColor={[
							BaseColor.buttonPrimaryGradientStart,
							BaseColor.buttonPrimaryGradientEnd,
						]}
						// disabled={!(formik.isValid && formik.dirty && !isLoading)}
						// onPress={formik.handleSubmit}
					>
						Share
					</Button>
					<Button
						// loading={isLoading}
						style={styles.createButton}
						gradient
						gradientType="horizontalRight"
						gradientColor={[
							BaseColor.buttonPrimaryGradientStart,
							BaseColor.buttonPrimaryGradientEnd,
						]}
						// disabled={!(formik.isValid && formik.dirty && !isLoading)}
						onPress={() => {
							setVideoUriContext();
							setTitleContext();
							removeData("productData");
							NavigationService.resetAndNavigate("BottomTabNav");
						}}
					>
						Done
					</Button>
				</ScrollView>
			)}
		</>
	);
};

export default AdPosted;
