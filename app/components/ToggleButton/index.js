import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions, BackHandler } from "react-native";
import {
	Button,
	CustomTextInput,
	Error,
	Header,
	Icon,
	CustomDropDown,
	TitledList,
	TitledComponent,
} from "../index";
import styles from "./style";

const ToggleButton = ({
	onPressState,
	title,
	style,
	textStyle,
	activeStyle,
	activeTextStyle,
}) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<Button
			style={isActive ? activeStyle : style}
			styleText={isActive ? activeTextStyle : textStyle}
			onPress={() => {
				setIsActive(!isActive);
				onPressState(isActive);
			}}
		>
			{title}
		</Button>
	);
};

export default ToggleButton;
