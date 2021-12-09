import React, { useState, useEffect, useCallback } from "react";
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

import getStyles from "./styles";
import { TouchableOpacity } from "react-native";
import Loader from "../../../../components/LoaderScreen";
import { ThemeContext } from "../../../../context/ThemeContext";
const ChatScreen = ({ isDarkMode }) => {
	const [messages, setMessages] = useState([]);
	const [styles, setStyles] = useState();
	useEffect(() => {
		setStyles(getStyles(isDarkMode));
	}, [isDarkMode]);

	useEffect(() => {
		setMessages([
			{
				_id: 5,
				text: "Ok!",
				// createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
			{
				_id: 4,
				text: "Ok Thank you!",
				// createdAt: new Date(),
				user: {
					_id: 1,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
			{
				_id: 3,
				text: "I was looking to buy it, but I have a limited budget",
				// createdAt: new Date(),
				user: {
					_id: 1,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
			{
				_id: 2,
				text: "Yes, it is available for sale",
				// createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
			{
				_id: 1,
				text: "Hi, Is this still available?",
				// createdAt: new Date(),
				user: {
					_id: 1,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
			{
				_id: 1,
				text: "Hi, Is this still available?",
				// createdAt: new Date(),
				user: {
					_id: 1,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
		]);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);

	const renderSend = (props) => {
		return (
			<Send {...props} containerStyle={{ marginBottom: 15, marginRight: "2%" }}>
				<SendIcon />
			</Send>
		);
	};

	const renderBubble = (props) => {
		return (
			<Bubble
				{...props}
				wrapperStyle={{
					right: {
						backgroundColor: "#007380",
						minHeight: 42,
						alignItems: "center",
						justifyContent: "center",
						borderTopRightRadius: 0,
						marginBottom: 5,
					},
					left: {
						minHeight: 42,
						alignItems: "center",
						justifyContent: "center",
						borderTopLeftRadius: 0,
						marginBottom: 5,
					},
				}}
				textStyle={{
					right: {
						color: "#FFFFFF",
						fontSize: 17,
					},
					left: {
						color: "#1A1A1A",
						fontSize: 17,
					},
				}}
				renderTime={() => <View />}
			/>
		);
	};
	const renderMessage = (props) => {
		return (
			<View style={{ backgroundColor: BaseColor.backgroundColor }}>
				<Text>mo</Text>
			</View>
		);
	};
	const scrollToBottomComponent = () => {
		return <FontAwesome name="angle-double-down" size={22} color="#333" />;
	};
	const renderDayAboveMessage = (props) => {
		const messageDate = props.currentMessage.createdAt;
		const today = new Date();
		const isToday = today.getDate() === messageDate.getDate();
		console.log(isToday);
		return (
			<>
				{props.currentMessage?.createdAt?.getDay() !==
				props.previousMessage?.createdAt?.getDay() ? (
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							marginBottom: 27,
						}}
					>
						<View
							style={{
								backgroundColor: "#FFFFFF",
								height: 32,
								width: 61,
								borderRadius: 16,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Text style={{ color: "#444444" }}>
								{isToday ? "Today" : props.currentMessage.createdAt.toString()}
							</Text>
						</View>
					</View>
				) : (
					<View />
				)}
			</>
		);
	};
	const renderInputToolbar = (props) => {
		return (
			<InputToolbar
				{...props}
				containerStyle={{
					height: 50,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 14,
					borderWidth: 1,
					// marginLeft: "8%",
					width: "92%",
					alignSelf: "center",
					// paddingBottom:
					fontSize: 13,
					marginHorizontal: "4%",
					paddingRight: "2%",
				}}
			/>
		);
	};

	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<View style={styles.container}>
					<View style={styles.innerContainer}>
						<View style={styles.imageContainer}>
							<Image
								style={styles.imageStyle}
								// resizeMode="stretch"
								source={require("../../../../assets/images/Avatar.png")}
								// PlaceholderContent={<ActivityIndicator color="white" />}
							/>
							<Text style={styles.username}>John Doe</Text>
						</View>

						<View style={styles.productContainer}>
							{/* <View style={styles.productImage}> */}
							<Image
								style={styles.productImage}
								// resizeMode="stretch"
								source={require("../../../../assets/images/product.png")}
								// PlaceholderContent={<ActivityIndicator color="white" />}
							/>
							{/* </View> */}
							<View style={styles.productInfoContainer}>
								<Text style={styles.productTitle}>Audi A4 2008</Text>
								<Text style={styles.productDescription}>Description</Text>
							</View>
							<Text style={styles.productPrice}>$20000</Text>
						</View>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								marginBottom: 15,
							}}
						>
							<View
								style={{
									backgroundColor: ThemeContext.isDarkMode
										? "#FFFFFF"
										: "#707070",
									height: 32,
									width: 61,
									borderRadius: 16,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text
									style={{
										color: ThemeContext.isDarkMode ? "#444444" : "white",
									}}
								>
									Today
								</Text>
							</View>
						</View>
						<GiftedChat
							messages={messages}
							onSend={(messages) => onSend(messages)}
							user={{
								_id: 1,
							}}
							renderBubble={renderBubble}
							alwaysShowSend
							renderSend={renderSend}
							scrollToBottom
							// scrollToBottomComponent={scrollToBottomComponent}
							placeholder="Type Something"
							renderAvatar={null}
							renderDay={renderDayAboveMessage}
							renderDay={() => <></>}
							renderInputToolbar={renderInputToolbar}
							textInputProps={{ placeholderTextColor: "#787878", height: 71 }}
							textInputStyle={{ width: 100, height: 410, margin: 0 }}
							renderAvatarOnTop={() => (
								<Text style={{ color: "white" }}>BLAH</Text>
							)}
							// minInputToolbarHeight={1002}
							isKeyboardInternallyHandled={false}
							bottomOffset={() => 0}
							messagesContainerStyle={{
								width: "86%",
								alignSelf: "center",
								paddingBottom: "2%",
							}}
						/>
					</View>
				</View>
			)}
		</>
	);
};

export default ChatScreen;
