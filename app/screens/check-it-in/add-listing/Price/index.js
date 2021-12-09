import React, { useState, useContext, useEffect } from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import {
	CustomTextInput,
	TitledComponent,
	Button,
} from "../../../../components";
import getStyles from "./styles";
import PriceTagIcon from "../../../../assets/icons/price-tag";
import PriceTagIconLight from "../../../../assets/icons/price-tag-light";
import ToggleSwitch from "toggle-switch-react-native";
import { ScrollView } from "react-native";
import { BaseColor } from "../../../../config";
import { ThemeContext } from "../../../../context/ThemeContext";
import Loader from "../../../../components/LoaderScreen";
import { NavigationEvents } from "react-navigation";
import { retrieveData, storeData } from "../../../../util/helpers";
import { AuthContext } from "../../../../context/authContext";

const PriceEntity = ({ title, placeholder, styles, value, onChangeText }) => {
	return (
		<TitledComponent
			title={title}
			titleStyle={styles.title}
			containerStyle={styles.entityContainer}
			valueComponent={
				<CustomTextInput
					style={styles.input}
					inputStyle={styles.inputText}
					placeholder={placeholder}
					placeholderTextColor="#636363"
					textAlign={"center"}
					value={value}
					onChangeText={(text) => onChangeText(text)}
					keyboardType="numeric"
				/>
			}
		/>
	);
};

const Price = (props) => {
	const { edit, setEdit, product, setProduct } = useContext(AuthContext);

	const [toggle, setToggle] = useState(false);
	const [bid, setBid] = useState("");
	const [buy, setBuy] = useState("");
	const [inputFocusStyle, setInputFocusStyle] = useState();

	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);
	useEffect(() => {
		if (edit) {
			setBid(product.startingBid);
			setBuy(product.bidItNowPrice);
			setToggle(product.isFixedPrice);
		}
		setStyles(getStyles(themeContext.isDarkMode));
	}, [tempState]);
	const _handleNext = () => {
		retrieveData("productData").then((data) => {
			console.log(data);
			data = {
				...data,
				startingBid: parseInt(bid),
				bidItNowPrice: parseInt(buy),
				isFixedPrice: toggle,
			};
			storeData("productData", data);
		});
		props.jumpTo(4);
	};
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={styles.container}
				>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					<View style={{ width: "100%", height: 53 }} />
					{themeContext.isDarkMode ? <PriceTagIcon /> : <PriceTagIconLight />}

					<PriceEntity
						title="Starting Bid"
						placeholder="$0"
						styles={styles}
						value={bid}
						onChangeText={setBid}
					/>
					<PriceEntity
						title="Buy it now"
						placeholder="$0"
						styles={styles}
						value={buy}
						onChangeText={setBuy}
					/>

					<View style={styles.blockContainer}>
						<TitledComponent
							title="Fixed Price"
							titleStyle={styles.blockTitle}
							// subTitle="You won't be able to see each others' profile, send messages or offers."
							subTitleStyle={styles.blockSubTitle}
							titleContainerStyle={styles.blockTitleContainer}
							rightIcon={
								<ToggleSwitch
									isOn={toggle}
									onColor={BaseColor.primaryLightColor}
									offColor="gray"
									size="medium"
									onToggle={(state) => setToggle(!toggle)}
								/>
							}
							containerStyle={styles.titledContainer}
						/>
					</View>

					<Button
						// loading={isLoading}
						style={styles.createButton}
						gradient
						gradientType="horizontalRight"
						gradientColor={[
							BaseColor.buttonPrimaryGradientStart,
							BaseColor.buttonPrimaryGradientEnd,
						]}
						// disabled={!(formik.isValid && formik.dirty && !isLoading)}
						// onPress={formik.handleSubmit}
						onPress={_handleNext}
					>
						Next
					</Button>
				</ScrollView>
			)}
		</>
	);
};

export default Price;
