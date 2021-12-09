import React, { useEffect, useState, useContext } from "react";
import {
	SafeAreaView,
	View,
	ScrollView,
	Text,
	Image,
	ActivityIndicator,
	TouchableHighlight,
	TextInput,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import {
	Button,
	CustomTextInput,
	TitledComponent,
	ToggleButton,
} from "../../../../../components";
import { BaseColor } from "../../../../../config";
import getStyles from "./styles";
import { ThemeContext } from "../../../../../context/ThemeContext";
import ToggleSwitch from "toggle-switch-react-native";
import style from "../../../../../components/check-it-out/Filters/style";
const Report1 = ({ handlePage, setIsModalVisible }) => {
	const [isDarkMode, setIsDarkMode] = useState();
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	// const { userSession } = useContext(AuthProvider);

	const [isBlockUser, setIsBlockUser] = useState(false);

	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		console.log("Profile");
	}, []);
	return (
		<ScrollView
			keyboardShouldPersistTaps="handled"
			style={styles.contain}
			contentContainerStyle={styles.mainContainer}
		>
			<Text style={styles.reportUserTitle}>
				Why do you want to report this user?
			</Text>
			<View style={styles.noteContainer}>
				<TitledComponent
					containerStyle={styles.contain}
					title="Looks like a scammer"
					titleStyle={styles.noteTitle}
					titleContainerStyle={styles.noteTitleContainer}
					valueComponent={
						<CustomTextInput
							style={styles.textInput}
							autoCorrect={false}
							placeholder="Add a note (optional)"
							inputStyle={{
								paddingTop: 0,
								paddingLeft: 10,
								fontSize: 14,
								fontFamily: "Sogoe UI",
								width: "100%",
							}}
							multiline
							numberOfLines={5}
							textAlignVertical="top"
						/>
					}
					rightIcon={
						<EntypoIcon
							name="cross"
							size={20}
							color={BaseColor.primaryLightColor}
						/>
					}
				/>
			</View>
			<View style={styles.blockContainer}>
				<TitledComponent
					containerStyle={styles.contain}
					title="Block this user?"
					titleStyle={styles.blockTitle}
					subTitle="You won't be able to see each others' profile, send messages or offers."
					subTitleStyle={styles.blockSubTitle}
					titleContainerStyle={styles.blockTitleContainer}
					rightIcon={
						<ToggleSwitch
							isOn={isBlockUser}
							onColor={BaseColor.primaryLightColor}
							offColor="gray"
							size="medium"
							onToggle={(state) => setIsBlockUser(!isBlockUser)}
						/>
					}
				/>
			</View>

			<Button
				style={styles.reportButton}
				gradient
				gradientType="horizontalRight"
				gradientColor={[
					BaseColor.buttonPrimaryGradientStart,
					BaseColor.buttonPrimaryGradientEnd,
				]}
				onPress={() => setIsModalVisible(true)}
			>
				Report
			</Button>
		</ScrollView>
	);
};
export default Report1;
