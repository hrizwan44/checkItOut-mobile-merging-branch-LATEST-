import React, { useState, useEffect, useCallback, useContext } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import {
	Bubble,
	GiftedChat,
	Send,
	InputToolbar,
} from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
	InternalHeader,
	Button,
	CustomTextInput,
} from "../../../../components";
import { BaseColor } from "../../../../config";
import EntypoIcon from "react-native-vector-icons/Entypo";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import SendIcon from "../../../../assets/icons/send-chat.svg";
import { ThemeContext } from "../../../../context/ThemeContext";
import getStyles from "./styles";
import { TouchableOpacity } from "react-native";

const chats = [
	{
		title: "John Doe",
		dp: require("../../../../assets/images/Avatar.png"),
		topMessage: "Ok!",
		time: "2h",
	},
	{
		title: "John Doe",
		dp: require("../../../../assets/images/Avatar.png"),
		topMessage: "Still available sir",
		time: "4h",
	},
];
const Chat = ({ title, dp, topMessage, time, handleScreen }) => {
	const { isDarkMode } = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(isDarkMode));

	useEffect(() => {
		setStyles(getStyles(isDarkMode));
	}, [isDarkMode]);

	return (
		<TouchableOpacity
			style={styles.chatContainer}
			onPress={() => handleScreen("chat")}
		>
			<View style={styles.dpContainer}>
				<Image source={dp} style={styles.dp} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.message}>{topMessage}</Text>
			</View>
			<View style={styles.timeContainer}>
				<Text style={styles.time}>{time}</Text>
			</View>
		</TouchableOpacity>
	);
};
const Inbox = ({ handleScreen, styleSheet }) => {
	const { isDarkMode } = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(isDarkMode));

	useEffect(() => {
		setStyles(getStyles(isDarkMode));
	}, [isDarkMode]);
	return (
		<View style={styles.container}>
			{/* <View style={styles.topBarContainer}>
        <Text style={[styles.messageText, { color: styleSheet?.title?.color }]}>
          Messages
        </Text>
        <Text style={styles.notificationText}>Notifications</Text>
      </View> */}
			{/* <Button
        style={styles.messageTextBottom}
        gradient
        gradientType="horizontalRight"
        gradientColor={[
          BaseColor.buttonPrimaryGradientStart,
          BaseColor.buttonPrimaryGradientEnd,
        ]}
        // disabled={!(formik.isValid && formik.dirty && !isLoading)}
        // onPress={formik.handleSubmit}
      ></Button> */}
			{chats.map((chat, index) => {
				return (
					<Chat
						title={chat.title}
						dp={chat.dp}
						topMessage={chat.topMessage}
						time={chat.time}
						handleScreen={handleScreen}
					/>
				);
			})}
		</View>
	);
};

export default Inbox;
