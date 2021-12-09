import React from "react";
import { View } from "react-native";
import { SafeAreaView, Text, ScrollView } from "react-native";
import { Searchbar } from "../../../../components";
import styles from "./styles";
import { BaseStyle } from "../../../../config";
import InternalHeader from "../../../../components/Header/InternalHeader";
import Highlight from "./Highlight";

const HelpCenterHighlights = ({ helpCenter, handleDescription }) => {
	return (
		<ScrollView
			keyboardShouldPersistTaps="handled"
			style={styles.categoriesContainer}
		>
			{helpCenter?.highlights?.map((highlight, index) => (
				<Highlight
					key={index}
					highlight={highlight}
					handleDescription={handleDescription}
				/>
			))}
		</ScrollView>
	);
};

export default HelpCenterHighlights;
