import React from 'react'
import { Button } from '../../../components'
import { View, Text, Image } from 'react-native'
import { InternalHeader } from '../../../components'
import EntypoIcon from "react-native-vector-icons/Entypo";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
export default function PaymentDetail({ navigation }) {

    const handlePress = () => {
        console.log("LOG")
        navigation.navigate("PaymentDetails")
    }

    return (
        <View style={{ height: "100%", backgroundColor: "#242424" }}>
            <InternalHeader title={"Payment Detail"} leftIcon={() => <EntypoIcon
                name="chevron-thin-left"
                size={25}
                color={BaseColor.primaryLightColor}
            />} background={"#242424"} />
            {/* <View style={{ borderRadius: 10 }}> */}

            <View>
                <Text style={{ marginLeft: 20, marginBottom: 5, fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Card Number</Text>
                <View style={{ width: "90%", backgroundColor: "#fff", alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput style={{ width: '80%', height: 50, fontSize: 14, paddingLeft: 10 }} placeholder="123-456-789" />
                    <Image style={{ width: 40, height: 30, }} source={require("../../../assets/icons/mc.png")} />

                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 20, justifyContent: 'space-between' }}>
                    <View style={{ width: '48%', }}>
                        <Text style={{ marginLeft: 5, marginBottom: 5, fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Expiry Date</Text>
                        <View style={{ width: "100%", backgroundColor: "#fff", alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput style={{ width: '80%', height: 50, fontSize: 14, paddingLeft: 10 }} placeholder="MM/YY" />

                        </View>
                    </View>
                    <View style={{ width: '48%' }}>
                        <Text style={{ marginLeft: 5, marginBottom: 5, fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Security Code</Text>
                        <View style={{ width: "100%", backgroundColor: "#fff", alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput style={{ width: '80%', height: 50, fontSize: 14, paddingLeft: 10 }} />

                        </View>
                    </View>
                </View>
                <Text style={{ marginLeft: 20, marginBottom: 5, marginTop: 20, fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Card Holder</Text>
                <View style={{ width: "90%", backgroundColor: "#fff", alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput style={{ width: '80%', height: 50, fontSize: 14, paddingLeft: 10 }}
                    />

                </View>
            </View>

            <TouchableOpacity onPress={handlePress}>
                <View style={{ backgroundColor: "#54BBA9", borderRadius: 25, width: "90%", height: 50, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 250 }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Next</Text>
                </View>
            </TouchableOpacity>
            {/* <Button
                style={{ width: "90%", alignSelf: "center", marginTop: 0 }}
                round={true}
                onPress={handlePress}
            >
                Next
            </Button> */}
            {/* </View> */}
        </View>
    )
}
