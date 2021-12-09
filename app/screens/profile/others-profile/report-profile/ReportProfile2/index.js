import React, { useEffect, useState, useContext } from "react";
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
import EntypoIcon from "react-native-vector-icons/Entypo";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import {
	Button,
	CustomDropDown,
	CustomTextInput,
	TitledComponent,
	ToggleButton,
} from "../../../../../components";
import { BaseColor } from "../../../../../config";
import { dropDownItems } from "../../../../../util/data";
import { ThemeContext } from "../../../../../context/ThemeContext";
import getStyles from "./styles";

const Report2 = ({ handlePage }) => {
	const [isDarkMode, setIsDarkMode] = useState();
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [isBlockUser, setIsBlockUser] = useState(false);

	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		console.log("Profile");
	}, []);
	return (
		<ScrollView
			keyboardShouldPersistTaps="handled"
			contentContainerStyle={styles.mainContainer}
		>
			<Text style={styles.reportUserTitle}>
				Why do you want to report this user?
			</Text>
			<View style={styles.dropDownContainer}>
				<CustomDropDown
					itemList={dropDownItems.reportUser}
					placeholder="Problem with items"
					style={styles.dropDownStyle}
					dropDownContainerStyle={styles.dropDownContainerStyle}
					handleSelected={(value) => console.log(value)}
					listMode="FLATLIST"
					listItem={({ label }) => (
						<TouchableOpacity style={styles.itemContainer}>
							<Text style={styles.label}>{label}</Text>
							<EntypoIcon
								name="chevron-right"
								size={20}
								color={BaseColor.primaryLightColor}
								onPress={() => handlePage("Report1")}
							/>
						</TouchableOpacity>
					)}
					keepDownArrow
					labelStyle={styles.labelStyle}
					arrowUpSize={20}
					arrowUpColor={BaseColor.primaryLightColor}
					arrowUpStyle={{ marginRight: 5 }}
					arrowDownSize={20}
					arrowDownColor={BaseColor.primaryLightColor}
					arrowDownStyle={{ marginRight: 5 }}
				/>
			</View>
			{/* <Button
        style={styles.reportButton}
        gradient
        gradientType="horizontalRight"
        gradientColor={[
          BaseColor.buttonPrimaryGradientStart,
          BaseColor.buttonPrimaryGradientEnd,
        ]}
        onPress={() => handlePage("Report3")}
      >
        Report
      </Button> */}
			<View style={styles.bottomThreshold} />
		</ScrollView>
	);
};
export default Report2;
