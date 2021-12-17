/* eslint-disable react-native/no-inline-styles */
import React, {
	Component,
	useState,
	useEffect,
	useRef,
	useContext,
} from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	FlatList,
} from "react-native";
import { RNCamera, FaceDetector } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import { DashboardHeader } from "../../../components/Header/DashboardHeader";
import { Filters } from "../../../components";
import { TitledList } from "../../../components";
// import { videoData } from "../../../util/data";
import ItemList from "../../../components/check-it-in/items/index";
import Edit from "../../../assets/icons/EditGroup.svg";
import EditItem from "../item-listing/edit-item/index";
import getStyles from "./style";
import { ThemeContext } from "../../../context/ThemeContext";
import Loader from "../../../components/LoaderScreen";
import { NavigationEvents } from "react-navigation";
import { getUserProduct } from "../../../api/check-it-in/Product";
const ItemListing = ({ navigateHadler, navigation }) => {
	console.log("ITEM LISTING ", navigation)
	const mode = "cio";
	const [activeMode, setActiveMode] = useState("cii");
	const [displayMode, setDisplayMode] = useState("default");
	const _handleMode = (mode, selectedItem) => {
		setSelectedProduct(selectedItem);
		displayMode == mode ? setDisplayMode("default") : setDisplayMode(mode);
	};
	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);
	const [videoData, setVideoData] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState();
	useEffect(() => {
		// _handleMode("Dashboard")

		setStyles(getStyles(themeContext.isDarkMode));
		// getUserProduct().then((res) => {
		// 	console.log("res", res);
		// 	setVideoData(res.data.results);
		// });
	}, [tempState]);

	const handler = () => {
		console.log("ITEM LISTING1")
		navigateHadler()
	}

	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<ScrollView
					keyboardShouldPersistTaps="handled"
					style={styles.mainContainer}
				>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					{displayMode == "default" && (

						<FlatList
							data={[{ uid: 1, videoUrl: '', title: "Rizwan", description: 'This is my item' }]}
							// data={videoData}
							pagingEnabled={true}
							renderItem={({ item, index }) => {
								return (
									<ItemList
										handle={_handleMode}
										navigateHadler={handler}
										navigation={navigation}
										ItemId={item.uid}
										imageUrl={item.videoUrl}
										title={item.title}
										description={item.description}
									/>
								);
							}}
						/>
					)}

					{displayMode == "category" && (
						<View style={styles.innerContainer}>
							<TitledList
								title="Categories"
								dataList={categories}
								itemType="touchable"
								label="title"
								value="id"
								_handleItemPress={(id) => console.log(id)}
							/>
						</View>
					)}
					{displayMode == "filter" && (
						<View style={styles.innerContainer}>
							<Filters />
						</View>
					)}
					{displayMode == "details" && (
						<EditItem handle={_handleMode} product={selectedProduct} />
					)}
				</ScrollView>
			)}
		</>
	);
};

export default ItemListing;
