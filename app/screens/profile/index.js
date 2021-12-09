import React, { useEffect, useState, useContext } from "react";
import {
	SafeAreaView,
	View,
	ScrollView,
	Text,
	Image,
	ActivityIndicator,
	TouchableHighlight,
} from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { LoginManager, Settings, AccessToken } from "react-native-fbsdk-next";
// import { Text } from "../../components";
import { Button } from "../../components";
import Header from "../../components/Header/ProfileHeader/index";
import { BaseColor } from "../../config";
import Arrow from "../../assets/icons/Arrow.svg";
import Stars from "../../assets/icons/Stars.svg";
import ArrowCard from "../../assets/icons/ArrowCard.svg";
import LinkCard from "../../components/ProfileDetail/LinkCard";
import { AuthContext } from "../../context/authContext";
import VerifyAccountSvg from "../../assets/icons/verify-account.svg";
import getStyles from "./styles";
import { TouchableOpacity } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { retrieveData, storeData } from "../../util/helpers";

import Loader from "../../components/LoaderScreen";
import NavigationService from "../../navigation/NavigationService";
const Profile = (props) => {
	const { userSession, logout } = useContext(AuthContext);
	const user = userSession.user;
	const themeContext = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(themeContext.isDarkMode);
	const [toggle, setToggle] = useState(false);
	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		const unsubscribe = props.navigation.addListener("didFocus", () => {
			setTempState(tempState + 1);
		});
		return () => {
			unsubscribe;
		};
	}, [tempState]);
	const _handleTheme = () => {
		setStyles(getStyles(!isDarkMode));
		themeContext.setIsDarkMode(!isDarkMode);
		storeData("isDarkMode", !isDarkMode);
		setIsDarkMode(!isDarkMode);
	};
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<SafeAreaView style={styles.mainContainer}>
					<ScrollView
						keyboardShouldPersistTaps="handled"
						style={styles.container}
					>
						<View style={styles.imageContainer}>
							<Image
								style={styles.imageStyle}
								// resizeMode="stretch"
								source={require("../../assets/images/Avatar.png")}
								PlaceholderContent={<ActivityIndicator color="white" />}
							/>
						</View>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>{user.name}</Text>
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
								<Text style={styles.followerText}>Following</Text>
								<Text style={styles.followingNumberText}>3</Text>
							</View>
						</View>
						{/* <View style={styles.followingContainer}>
					<Text style={styles.followerText}>Followers</Text>
					<Text style={styles.followingText}>Following</Text>
				</View>
				<View style={styles.numbersContainer}>
					<View style={styles.followerNumberContainer}>
						<Text style={styles.followerNumberText}>{"20"}</Text>
					</View>

					<View style={styles.followingNumberContainer}>
						<Text style={styles.followingNumberText}>{"3"}</Text>
					</View>
				</View> */}
						{/* <TouchableOpacity style={styles.buttonContainer}>
              <VerifyAccountSvg
                onPress={() => props.navigation.navigate("VerifyAccount")}
              /> */}
						{themeContext.isDarkMode ? (
							<View style={{ alignSelf: "center" }}>
								<VerifyAccountSvg
									onPress={() => props.navigation.navigate("VerifyAccount")}
								/>
							</View>
						) : (
							<Button
								round
								gradient
								gradientType="horizontalRight"
								gradientColor={["#00EBD3", "#007380"]}
								style={styles.buttonStyle}
								styleText={{
									fontFamily: "Proxima Nova Semibold",
									fontSize: 24,
								}}
								onPress={() => props.navigation.navigate("VerifyAccount")}
							>
								Verify your account
							</Button>
						)}

						{/* </TouchableOpacity> */}
						<View
							style={styles.listContainer}
							contentContainerStyle={styles.scrollContent}
						>
							<View>
								<Text style={styles.listFirstHeading}>Transactions</Text>
								<LinkCard
									profile={true}
									title={"Purchases & Sales"}
									titleStyle={styles.titleStyle}
									renderRightStyle={{ marginRight: 42.5 }}
									renderRight={<ArrowCard />}
									onPressRight={() => {}}
								/>
							</View>
							<View>
								<Text style={styles.listHeading}>Saved</Text>
								<LinkCard
									profile={true}
									title={"Saved Items"}
									titleStyle={styles.titleStyle}
									renderRight={<ArrowCard />}
									renderRightStyle={{ marginRight: 42.5 }}
									onPressRight={() => {
										props.navigation.navigate("SavedItems");
									}}
								/>
								<LinkCard
									profile={true}
									title={"Search Alert"}
									titleStyle={styles.titleStyle}
									renderRight={<ArrowCard />}
									renderRightStyle={{ marginRight: 42.5 }}
									onPressRight={() => {
										props.navigation.navigate("SavedAlerts");
									}}
								/>
							</View>
							<View>
								<Text style={styles.listHeading}>Account</Text>
								<LinkCard
									profile={true}
									title={"Account Settings"}
									titleStyle={styles.titleStyle}
									renderRight={<ArrowCard />}
									renderRightStyle={{ marginRight: 42.5 }}
									onPressRight={() => {
										props.navigation.navigate("ProfileSettings");
									}}
								/>
								<LinkCard
									profile={true}
									title={"Profile"}
									titleStyle={styles.titleStyle}
									renderRight={<ArrowCard />}
									renderRightStyle={{ marginRight: 42.5 }}
									onPressRight={() => {}}
								/>
								<LinkCard
									profile={true}
									title={"Promote Plus"}
									titleStyle={styles.titleStyle}
									renderRight={<ArrowCard />}
									renderRightStyle={{ marginRight: 42.5 }}
									onPressRight={() => {
										props.navigation.navigate("Subscription");
									}}
								/>
								<LinkCard
									profile={true}
									title={"Change Theme"}
									titleStyle={styles.titleStyle}
									renderRight={
										<>
											<ToggleSwitch
												isOn={isDarkMode}
												onColor={BaseColor.primaryLightColor}
												offColor="gray"
												size="medium"
												onToggle={_handleTheme}
											/>
										</>
									}
									renderRightStyle={{ marginRight: 42.5 }}
									onPressRight={() => {}}
								/>
							</View>
							<View>
								<Text style={styles.listHeading}>Help</Text>
								<LinkCard
									profile={true}
									title={"Help Center"}
									titleStyle={styles.titleStyle}
									renderRight={<ArrowCard />}
									renderRightStyle={{ marginRight: 42.5 }}
									onPressRight={() => {
										props.navigation.navigate("HelpCenterCategories");
									}}
								/>
								{/* <LinkCard
									title={"Community Actions"}
									titleStyle={styles.titleStyle}
									renderRight={<ArrowCard />}
									renderRightStyle={{ marginRight: 42.5 }}
									onPressRight={() => {}}
								/> */}
							</View>
							<View>
								<TouchableOpacity
									onPress={() => {
										if (user.socialMediaType == "FACEBOOK") {
											LoginManager.logOut();
											logout();
										} else {
											logout();
										}
									}}
								>
									<Text style={styles.logout}>Log out</Text>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>

					{/* <Header
        title={"Profile"}
        titleStyle={{ alignText: "center", color: BaseColor.fieldColor }}
        style={{
          backgroundColor: BaseColor.backgroundColor,
          height: 50,
          alignText: "center",
        }}
        renderLeft={() => {
          return (
            <View style={{ padding: 5 }}>
              <Arrow />
            </View>
          );
        }}
      /> */}
				</SafeAreaView>
			)}
		</>
	);
};
export default Profile;
