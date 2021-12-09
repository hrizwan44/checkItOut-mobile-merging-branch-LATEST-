import React, { useEffect, useState, useContext } from "react";
import { View, BackHandler } from "react-native";
import { SafeAreaView, Text, ScrollView } from "react-native";
import { Searchbar } from "../../../../components";
import getStyles from "./styles";
import { BaseColor, BaseStyle } from "../../../../config";
import InternalHeader from "../../../../components/Header/InternalHeader";
import Category from "./Category";
import HelpCenterHighlights from "../HelpCenterHighlights";
import HelpCenterDetails from "../HelpCenterDetails";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { categories } from "../../../../util/data";
import NavigationService from "../../../../navigation/NavigationService";
import { ThemeContext } from "../../../../context/ThemeContext";
import Loader from "../../../../components/LoaderScreen";
import { NavigationEvents } from "react-navigation";
const helpCenterData = [
	{
		title: "Shipping",
		highlights: [
			{
				title: "How to find your order status?",
				description: {
					title: "How purchase protection and filing a claim works ",
					text: "Whether you choose Make an Offer or Buy Now with a community seller, or Buy Now with a Verified Shop, you can easily track the status of your purchase. To check the status of your recent order, follow these steps",
				},
			},
			{ title: "What is the verified shop" },
			{
				title: "How to request a refund from a verified shop",
			},
		],
	},

	{ title: "Buying" },
	{ title: "Selling" },
	{ title: "Account" },
	{ title: "Rules & Policies" },
	{ title: "Legal" },
	{ title: "Payments" },
	{ title: "Check it Out" },
];
const HelpCenterCategories = (props) => {
	const [currentPage, setCurrentPage] = useState("Main");
	const [previousPage, setPreviousPage] = useState("Profile");
	const [helpCenters, setHelpCenters] = useState();
	const [title, setTitle] = useState("Categories");
	const [currentHelpCenter, setCurrentHelpCenter] = useState();
	const [currentDescription, setCurrentDescription] = useState();
	const pageFallbacks = {
		Main: () => props.navigation.navigate("Profile"),
		Highlights: () => setCurrentPage("Main"),
		Description: () => setCurrentPage("Highlights"),
	};
	const _handlePage = (page, title, helpCenter) => {
		setPreviousPage(currentPage);
		setCurrentPage(page);
		setTitle(title);
		setCurrentHelpCenter(helpCenter);
	};
	const _handleDescription = (description) => {
		setCurrentPage("Description");
		setTitle(null);
		setCurrentDescription(description);
		setPreviousPage("Highlights");
	};
	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);

	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		console.log("CURRENT PAGE", currentPage);
		setHelpCenters(helpCenterData);
		setCurrentHelpCenter(helpCenterData[0]);
		//Back Handler
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction
		);
		const unsubscribe = props.navigation.addListener("didFocus", () => {
			BackHandler.addEventListener("hardwareBackPress", backAction);
		});
		const onBlurScreen = props.navigation.addListener("didBlur", () => {
			console.log("UNFOCUSED");
			backHandler.remove();
		});
		return () => {
			unsubscribe;
			onBlurScreen;
			backHandler.remove();
		};
	}, [tempState]);
	const backAction = async () => {
		pageFallbacks[currentPage]();
		return true;
	};
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<SafeAreaView style={styles.container}>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					<InternalHeader
						title="Help Center"
						background={styles.container.backgroundColor}
						leftIcon={
							<EntypoIcon
								name="chevron-thin-left"
								size={25}
								color={BaseColor.primaryLightColor}
							/>
						}
						handleLeft={() => {
							pageFallbacks[currentPage]();
							// if (currentPage == "Main"){
							// NavigationService.navigate(previousPage)}
							// else{
							//   const tempCurrentPage = currentPage
							//   setCurrentPage(previousPage);
							//   setPreviousPage(tempCurrentPage);
							// }
						}}
					/>
					<Searchbar width="80%" height={47} margin={25} />
					{/* <Text style={styles.title}>{title}</Text> */}
					{currentPage === "Highlights" && (
						<HelpCenterHighlights
							helpCenter={currentHelpCenter}
							handleDescription={_handleDescription}
						/>
					)}
					{currentPage === "Main" && (
						<ScrollView
							keyboardShouldPersistTaps="handled"
							contentContainerStyle={styles.categoriesContainer}
						>
							{helpCenters?.map((helpCenter, index) => (
								<Category
									key={index}
									handleClick={_handlePage}
									helpCenter={helpCenter}
								/>
							))}
						</ScrollView>
					)}
					{currentPage === "Description" && (
						<HelpCenterDetails description={currentDescription} />
					)}
				</SafeAreaView>
			)}
		</>
	);
};

export default HelpCenterCategories;
