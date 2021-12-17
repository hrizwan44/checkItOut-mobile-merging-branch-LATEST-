import React from 'react'
import { Button } from '../../../components'
import { View, Text, Image } from 'react-native'
import { InternalHeader } from '../../../components'
import EntypoIcon from "react-native-vector-icons/Entypo";
import { TextInput } from 'react-native-gesture-handler';
export default function PaymentDetail() {
    return (
        <View style={{ height: "100%", backgroundColor: "#242424" }}>
            <InternalHeader title={"Payment Details"} leftIcon={() => <EntypoIcon
                name="chevron-thin-left"
                size={25}
                color={BaseColor.primaryLightColor}
            />} background={"#242424"} />
            {/* <View style={{ borderRadius: 10 }}> */}

            <View style={{ marginTop: 60 }}>
                <Text style={{ marginLeft: 20, marginBottom: 5, fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Name</Text>
                <View style={{ width: "90%", backgroundColor: "#fff", alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <TextInput style={{ width: '80%', height: 50, fontSize: 14, paddingLeft: 10 }} />
                </View>
                <Text style={{ marginLeft: 20, marginBottom: 5, fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Phone Number</Text>
                <View style={{ width: "90%", backgroundColor: "#fff", alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <TextInput style={{ width: '80%', height: 50, fontSize: 14, paddingLeft: 10 }} />
                </View>
                <Text style={{ marginLeft: 20, marginBottom: 5, fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Email Address</Text>
                <View style={{ width: "90%", backgroundColor: "#fff", alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <TextInput style={{ width: '80%', height: 50, fontSize: 14, paddingLeft: 10 }} />
                </View>
                <Text style={{ marginLeft: 20, marginBottom: 5, fontSize: 14, fontWeight: 'bold', color: '#fff' }}>Address</Text>
                <View style={{ width: "90%", backgroundColor: "#fff", alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <TextInput style={{ width: '80%', height: 50, fontSize: 14, paddingLeft: 10 }} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', marginLeft: 20, fontSize: 16 }}>Total : </Text>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>$99</Text>
                </View>
                <Text style={{ color: '#fff', marginLeft: 20, fontSize: 12, fontWeight: 'bold' }}>*Vat Included</Text>
            </View>

            <Button
                style={{ width: "90%", alignSelf: "center", marginTop: 60 }}
                round={true}
            >
                Confirm And Pay
            </Button>
            {/* </View> */}
        </View>
    )
}
