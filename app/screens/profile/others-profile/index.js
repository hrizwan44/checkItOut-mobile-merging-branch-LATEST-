import React, { useEffect, useState, useContext } from "react";
import {
	SafeAreaView,
	View,
	ScrollView,
	Text,
	Image,
	ActivityIndicator,
	TouchableHighlight,
	BackHandler,
	Modal,
} from "react-native";
import { InternalHeader, Modal as CioModal } from "../../../components";
import EntypoIcon from "react-native-vector-icons/Entypo";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Stars from "../../../assets/icons/Stars.svg";
import Warning from "../../../assets/icons/warning.svg";
import { BaseColor } from "../../../config";
import NavigationService from "../../../navigation/NavigationService";
import ProfileMain from "./ProfileMain";

import getStyles from "./styles";
import Report1 from "./report-profile/ReportProfile1";
import Report2 from "./report-profile/ReportProfile2";

import Report3 from "./report-profile/ReportProfile3";
import { ThemeContext } from "../../../context/ThemeContext";
import Loader from "../../../components/LoaderScreen";
import { NavigationEvents } from "react-navigation";
const OthersProfile = (props) => {
	const [currentPage, setCurrentPage] = useState("Main");
	const [isModalVisible, setIsModalVisible] = useState(false);
	const pageFallbacks = {
		Main: () => props.navigation.navigate("Dashboard"),
		Report1: () => setCurrentPage("Main"),
		Report2: () => setCurrentPage("Report1"),
		Report3: () => setCurrentPage("Report2"),
	};

	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);
	const [tempState, setTempState] = useState(0);
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		//Back Handler
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction
		);
		const unsubscribe = props.navigation.addListener("didFocus", () => {
			BackHandler.addEventListener("hardwareBackPress", backAction);
		});
		const onBlurScreen = props.navigation.addListener("didBlur", () => {
			console.log("UNFOCUSED");
			backHandler.remove();
		});
		return () => {
			unsubscribe;
			onBlurScreen;
			backHandler.remove();
		};
	}, []);
	const backAction = async () => {
		pageFallbacks[currentPage]();
		return true;
	};
	const _handlePage = (page) => {
		setCurrentPage(page);
	};
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<ScrollView
					keyboardShouldPersistTaps="handled"
					style={styles.mainContainer}
					contentContainerStyle={{ paddingBottom: 50 }}
				>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					<Modal
						animationType="fade"
						transparent={true}
						visible={isModalVisible}
						onRequestClose={() => {}}
					>
						<CioModal
							content={
								<View style={styles.modalContainer}>
									<View style={styles.warning}>
										<Warning />
									</View>
									<Text style={styles.modalTitle}>
										You cannot see this profile
									</Text>
									<Text style={styles.modalSubTitle}>Learn More</Text>
								</View>
							}
							modalHeight={196}
							modalWidth="80%"
							hideModal={() => setIsModalVisible(false)}
						/>
					</Modal>
					<InternalHeader
						title={currentPage === "Main" ? "Profile" : "Report"}
						background={styles.container.backgroundColor}
						leftIcon={
							<EntypoIcon
								name="chevron-thin-left"
								size={25}
								color={BaseColor.primaryLightColor}
							/>
						}
						handleLeft={() => {
							pageFallbacks[currentPage]();
						}}
						rightIcon={
							<SimpleLineIcon
								name="options-vertical"
								size={20}
								color="white"
								color={
									themeContext.isDarkMode
										? "white"
										: BaseColor.primaryLightColor
								}
							/>
						}
						handleRight={() => {
							setCurrentPage("Report2");
						}}
					/>
					<View style={styles.container}>
						<View style={styles.imageContainer}>
							<Image
								style={styles.imageStyle}
								source={require("../../../assets/images/Avatar.png")}
								PlaceholderContent={<ActivityIndicator color="white" />}
							/>
						</View>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>Dex hunter</Text>
						</View>
						<View style={styles.ratingContainer}>
							<Stars />
							<Text style={styles.ratingText}>(0)</Text>
						</View>
						<View style={styles.infosContainer}>
							<View style={styles.infoContainer}>
								<Text style={styles.followerText}>Followers</Text>
								<Text style={styles.followingNumberText}>20</Text>
							</View>
							<View style={styles.infoContainer}>
								<Text style={styles.followingText}>Following</Text>
								<Text style={styles.followingNumberText}>74</Text>
							</View>
							<View style={styles.infoContainer}>
								<Text style={styles.followingText}>Bought</Text>
								<Text style={styles.followingNumberText}>2</Text>
							</View>
							<View style={styles.infoContainer}>
								<Text style={styles.followingText}>Sold</Text>
								<Text style={styles.followingNumberText}>50</Text>
							</View>
						</View>

						{currentPage === "Main" && <ProfileMain />}
						{currentPage === "Report1" && (
							<Report1
								handlePage={_handlePage}
								setIsModalVisible={setIsModalVisible}
							/>
						)}
						{currentPage === "Report2" && <Report2 handlePage={_handlePage} />}
						{currentPage === "Report3" && <Report3 handlePage={_handlePage} />}
					</View>
				</ScrollView>
			)}
		</>
	);
};

export default OthersProfile;
