import React from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { InternalHeader } from '../../../components'
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function Payment({ navigation }) {
    return (
        <View style={{ height: "100%", backgroundColor: "#242424" }}>
            <InternalHeader title={"Payment"} leftIcon={() => <EntypoIcon
                name="chevron-thin-left"
                size={25}
                color={BaseColor.primaryLightColor}
            />} background={"#242424"} />

            <View style={{ width: '90%', height: 70, justifyContent: 'center', marginTop: 70, alignSelf: 'center', paddingLeft: 10, paddingRight: 10, borderRadius: 20, alignItems: 'center', backgroundColor: '#1e1e1e', flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: "bold", textTransform: 'capitalize' }}>credit card</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image style={{ width: 40, height: 30, }} source={require("../../../assets/icons/mc.png")} />
                    <Image style={{ width: 50, height: 20, }} source={require("../../../assets/icons/visa.png")} />
                    <Image style={{ width: 50, height: 20, }} source={require("../../../assets/icons/ax.png")} />
                    <TouchableOpacity onPress={() => { navigation.navigate("PaymentDetail") }}>
                        <Image style={{ width: 10, height: 20, marginLeft: 10 }} source={require("../../../assets/icons/rightArrowColored.png")} />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '90%', height: 70, justifyContent: 'center', marginTop: 20, alignSelf: 'center', paddingLeft: 10, paddingRight: 10, borderRadius: 20, alignItems: 'center', backgroundColor: '#1e1e1e', flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: "bold", textTransform: 'capitalize' }}>Paypal</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 60, height: 30, }} source={require("../../../assets/icons/paypal.png")} />
                    <TouchableOpacity onPress={() => { navigation.navigate("PaymentDetail") }}>
                        <Image style={{ width: 10, height: 20, marginLeft: 10 }} source={require("../../../assets/icons/rightArrowColored.png")} />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '90%', height: 70, justifyContent: 'center', marginTop: 20, alignSelf: 'center', paddingLeft: 10, paddingRight: 10, borderRadius: 20, alignItems: 'center', backgroundColor: '#1e1e1e', flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: "bold", textTransform: 'capitalize' }}>Apple Pay</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 60, height: 30, }} source={require("../../../assets/icons/apple.png")} />
                    <TouchableOpacity onPress={() => { navigation.navigate("PaymentDetail") }}>
                        <Image style={{ width: 10, height: 20, marginLeft: 10 }} source={require("../../../assets/icons/rightArrowColored.png")} />

                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}
