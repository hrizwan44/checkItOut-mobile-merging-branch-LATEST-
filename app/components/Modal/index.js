import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	View,
	ScrollView,
	Text,
	Image,
	ActivityIndicator,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";
// import { Text } from "../../components";
import { Button, Header, CustomTextInput } from "../index";
import { BaseColor } from "../../config";
import styles from "./styles";
import Cross from "../../assets/icons/Cross.svg";
const Modal = ({ content, hideModal, modalHeight, modalWidth }) => {
	const [user, setUser] = useState({
		title: "Dax Hunter",
		phone: "03110110335",
		email: "daxhunter110@gmail.com",
	});
	useEffect(() => {
		console.log("Profile Settings");
	});
	return (
		<View
			style={{
				lex: 1,
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				width: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.7)",
			}}
		>
			<View
				style={{
					height: modalHeight || 233,
					width: modalWidth || 298,
					backgroundColor: "#2B2B2B",
					borderRadius: 15,
				}}
			>
				<TouchableOpacity
					onPress={hideModal}
					style={{ marginTop: "5%", marginRight: "5%", alignSelf: "flex-end" }}
				>
					<Cross />
				</TouchableOpacity>
				<View
					style={{
						flex: 1,
						display: "flex",
						padding: "10%",
						justifyContent: "center",
					}}
				>
					{content}
				</View>
			</View>
		</View>
	);
};
export default Modal;
