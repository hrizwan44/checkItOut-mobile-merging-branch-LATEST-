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
// import { Text } from "../../components";
import { Button } from "../../../components";
import Header from "../../../components/Header";
import { BaseColor } from "../../../config";
import getStyles from "./styles";
import Arrow from "../../../assets/icons/Arrow.svg";
import ArrowCard from "../../../assets/icons/ArrowCard.svg";
import { TouchableOpacity } from "react-native";
import LinkCard from "../../../components/ProfileDetail/LinkCard";
import Logo from "../../../assets/icons/logo1.svg";
import { retrieveData, storeData } from "../../../util/helpers";
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../../../context/authContext";
import NavigationService from "../../../navigation/NavigationService";
import Loader from "../../../components/LoaderScreen";

const theme = "Light";
const ProfileSettings = (props) => {
	const [isDarkMode, setIsDarkMode] = useState();
	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);
	const { userSession } = useContext(AuthContext);
	const [user, setUser] = useState(userSession.user);
	const [tempState, setTempState] = useState(0);
	useEffect(() => {
		console.log(userSession.user);
		getCurrentMode();
		setStyles(getStyles(themeContext.isDarkMode));
		const unsubscribe = props.navigation.addListener("didFocus", () => {
			setTempState(tempState + 1);
		});
		return () => {
			unsubscribe;
		};
	}, [tempState]);
	const getCurrentMode = () => {
		retrieveData("isDarkMode")
			.then((mode) => {
				if (mode) {
					setIsDarkMode(true);
				} else {
					setIsDarkMode(false);
				}
			})
			.catch((err) => setIsDarkMode(true));
	};

	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<SafeAreaView style={styles.mainContainer}>
					<Header
						title="Settings"
						titleStyle={styles.headerTitle}
						whiteColor
						style={styles.header}
						renderLeft={() => {
							return <Arrow />;
						}}
						onPressLeft={() => {
							props.navigation.goBack(null);
						}}
					/>
					<ScrollView
						keyboardShouldPersistTaps="handled"
						contentContainerStyle={{ paddingBottom: 80 }}
					>
						<View style={{ paddingLeft: 41, paddingTop: 52 }}>
							<Text style={styles.sectionTitle}>Account</Text>
							<LinkCard
								title={userSession.user.name}
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Proxima Nova",
											color: BaseColor.designPrimaryColor,
										}}
									>
										Edit
									</Text>
								}
								onPressRight={() => {
									props.navigation.navigate("EditName");
								}}
							/>

							<LinkCard
								title={
									!userSession.user.phoneNumber &&
									!userSession.user.phoneNumberVerified
										? "Phone"
										: user.phoneNumber
								}
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Proxima Nova",
											color: BaseColor.designPrimaryColor,
										}}
									>
										Edit
									</Text>
								}
								onPressRight={() => {
									props.navigation.navigate("EditNumber");
								}}
							/>
							<LinkCard
								title={user.email ? user.email : "daxhunter@gmail.com"}
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Proxima Nova",
											color: BaseColor.designPrimaryColor,
										}}
									>
										Edit
									</Text>
								}
								onPressRight={() => {
									props.navigation.navigate("EditEmail");
								}}
							/>
							<LinkCard
								title="Connect Facebook"
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Proxima Nova",
											color: BaseColor.designPrimaryColor,
										}}
									>
										Add
									</Text>
								}
								onPressRight={() => {}}
							/>
							<LinkCard
								title="Password"
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Proxima Nova",
											color: BaseColor.designPrimaryColor,
										}}
									>
										Edit
									</Text>
								}
								onPressRight={() => {
									props.navigation.navigate("ChangePassword");
								}}
							/>
							<LinkCard
								title="Set Display Location"
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Proxima Nova",
											color: BaseColor.designPrimaryColor,
										}}
									>
										Edit
									</Text>
								}
								onPressRight={() => {
									props.navigation.navigate("Location");
								}}
							/>
						</View>
						<View style={{ paddingLeft: 41, paddingTop: 48 }}>
							<Text style={styles.sectionTitle}>Notifications</Text>
							<LinkCard
								title="Email"
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Proxima Nova",
											color: BaseColor.designPrimaryColor,
										}}
									>
										Edit
									</Text>
								}
								onPressRight={() => {
									props.navigation.navigate("EmailNotification");
								}}
							/>
							<LinkCard
								title="Push"
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Proxima Nova",
											color: BaseColor.designPrimaryColor,
										}}
									>
										Edit
									</Text>
								}
								onPressRight={() => {
									props.navigation.navigate("PushNotification");
								}}
							/>
						</View>

						<View style={{ paddingLeft: 41, paddingTop: 48 }}>
							<Text style={styles.sectionTitle}>Info</Text>
							<LinkCard
								title="About Check it out"
								titleStyle={styles.listItem}
								renderRightStyle={{ marginRight: 27 }}
								renderRight={
									<Logo />
									// <Image
									// 	source={require("@assets/images/logo1.svg")}
									// 	borderColor="#fff"
									// 	style={{
									// 		height: 30,
									// 		width: 90,
									// 		borderRadius: 100,
									// 		alignSelf: "center",
									// 	}}
									// />
								}
								onPressRight={() => {}}
							/>
						</View>
					</ScrollView>
				</SafeAreaView>
			)}
		</>
	);
};
export default ProfileSettings;
