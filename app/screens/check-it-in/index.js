import React, { useEffect } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native";
import NavigationService from "../../navigation/NavigationService";
import AddListing from "./add-listing";
import ItemListing from "./item-listing";

const CheckItIn = ({ navigateHadler, navigation }) => {
	// console.log("NAVIGATION CHECK IT IN", navigation)
	//   return (
	//     <View>
	//       <Text>Coming Soon</Text>
	//     </View>
	//   );

	// useEffect(() => {
	// 	effect
	// 	return () => {
	// 		cleanup
	// 	}
	// }, [input])


	const action = () => {
		console.log("ACTION")
		navigateHadler()
	}

	return <ItemListing navigateHadler={action} navigation={navigation} />;
};

export default CheckItIn;
