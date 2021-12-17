import React from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { InternalHeader } from '../../../components'
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function Bids({ navigation }) {
    return (
        <View style={{ height: "100%", backgroundColor: "#242424" }}>
            <InternalHeader title={"Bids"} background={"#242424"} leftIcon={() => <EntypoIcon
                name="chevron-thin-left"
                size={25}
                color={BaseColor.primaryLightColor}
            />} />
            <View style={{ width: '100%', padding: 10, marginTop: 5, marginBottom: 30, flexDirection: 'row', backgroundColor: "#1e1e1e" }}>
                <View style={{ position: 'relative', marginRight: 10 }}>
                    <Image style={{ width: 100, height: 150 }} source={require("../../../assets/images/product.png")} />
                    <Text style={{ backgroundColor: "#1e1e1e", borderRadius: 2, padding: 2, color: 'gray', position: 'absolute', bottom: 5, left: 7 }}>Mark as Sold</Text>
                </View>
                <View>
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Audi A4</Text>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>$20,000</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Highest Bid: </Text><Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>$18740</Text>
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                    data={[{ name: "John Doe", price: '18740' }, { name: "Mark", price: '18370' }, { name: "Henry", price: '18250' }]}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("MessagingScreen")}>
                            <View style={{ height: 60, backgroundColor: "#1e1e1e", flexDirection: 'row', marginBottom: 8, paddingLeft: 30, paddingTop: 10, paddingRight: 20 }}>
                                <View style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20 }}></View>
                                <View style={{ width: '80%', marginLeft: 10, paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>${item.price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>)}

                />
            </View>
        </View>

    )
}
