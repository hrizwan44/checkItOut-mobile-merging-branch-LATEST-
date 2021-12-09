import React, { Component, useState, useEffect, useContext } from "react";
import {
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	View,
	Image,
	Platform,
} from "react-native";
import {
	Button,
	CustomTextInput,
	Error,
	Header,
	Icon,
	Text,
} from "../../components";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { BaseColor, BaseStyle, PurpleColor, YellowColor } from "../../config";
import navigation from "../../navigation";
import NavigationService from "../../navigation/NavigationService";
import HelpCenter from "../general/help-center";
import { AuthContext } from "../../context/authContext";
import { storeData, retrieveData } from "../../util/helpers";

export default function SignUp(props) {
	const { theme, setTheme } = useContext(AuthContext);

	const [currentPage, setCurrentPage] = useState("Settings");
	const _handlePage = (page) => {
		setCurrentPage(page);
	};
	// if (currentPage == "HelpCenter") {
	//   return <HelpCenter />;
	// }
	// return (
	//   <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: "always" }}>
	//     <Header
	//       title="Settings"
	//       titleStyle={styles.title}
	//       whiteColor
	//       style={{
	//         backgroundColor: BaseColor.backgroundColor,
	//         height: 100,
	//       }}
	//       renderLeft={() => {
	//         return (
	//           <View style={styles.backButtonContainer}>
	//             <AntDesign name="left" size={20} color="white" />
	//           </View>
	//         );
	//       }}
	//       onPressLeft={() => {
	//         props.navigation.goBack(null);
	//       }}
	//     />
	//     <Button onPress={() => _handlePage("HelpCenter")}>Help Center</Button>
	//     <Button
	//       onPress={() =>
	//         NavigationService.navigate("HelpCenterHighlights", {
	//           helpCenterHighlight: "Shipping",
	//         })
	//       }
	//     >
	//       Help Center HelpCenterHighlights
	//     </Button>
	//     <Button
	//       onPress={() =>
	//         NavigationService.navigate("HepCenterDetails", {
	//           helpCenterDetails: {
	//             title: "How to find your order status?",
	//             content:
	//               "Text messages are used for personal, f\n\namily, r  business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to participate in online contests. Advertisers and service providers use direct text marketing to send messages to mobile users about promotions, payment due dates, and other notifications instead of using postal mail, email, or voicemail.",
	//           },
	//         })
	//       }
	//     >
	//       Help Center Details
	//     </Button>
	//   </SafeAreaView>
	// );
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 25,
			}}
		>
			<Text>Under Development</Text>
			{/* <Button
				style={{ width: "100%" }}
				onPress={() => {
					if (theme == "Dark") {
						setTheme("Light");
					} else {
						setTheme("Dark");
					}
				}}
			>
				Change Theme
			</Button> */}
		</View>
	);
}
