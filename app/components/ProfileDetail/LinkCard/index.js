import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ArrowCard from "../../../assets/icons/ArrowCard.svg";
import { BaseColor } from "../../../config";
import styles from "./styles";

const LinkCard = (props) => {
	const {
		titleStyle,
		onPressRight,
		renderRight,
		title,
		renderRightStyle,
		subTitle,
		subTitleStyle,
		profile,
	} = props;
	return (
		<View>
			<View
				style={
					profile
						? {
								flexDirection: "row",
								justifyContent: "space-between",
								paddingTop: 13,
						  }
						: styles.container
				}
			>
				<View>
					<Text style={(styles.title, titleStyle)}>{title}</Text>
					{subTitle && (
						<Text style={(styles.subTitle, subTitleStyle)}>{subTitle}</Text>
					)}
				</View>

				<TouchableOpacity onPress={onPressRight}>
					<View style={renderRightStyle}>{renderRight}</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default LinkCard;
