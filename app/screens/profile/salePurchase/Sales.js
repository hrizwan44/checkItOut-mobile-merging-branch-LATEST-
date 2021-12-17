import React from 'react'
import { View, Image, Text } from 'react-native'

export default function Sales() {
    return (
        <View>

            <View style={{ width: '100%', padding: 10, marginTop: 5, marginBottom: 10, flexDirection: 'row', backgroundColor: "#1e1e1e" }}>
                <View style={{ position: 'relative', marginRight: 10 }}>
                    <Image style={{ width: 100, height: 150 }} source={require("../../../assets/images/product.png")} />
                    <Text style={{ backgroundColor: "#1e1e1e", borderRadius: 2, padding: 2, color: 'gray', position: 'absolute', bottom: 5, left: 7 }}>Mark as Sold</Text>
                </View>
                <View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Audi A4</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 60 }}>$20,000</Text>
                    </View>

                    <Text style={{ color: '#fff', fontSize: 16 }}> This is Description</Text>
                </View>

            </View>
            <View style={{ width: '100%', padding: 10, marginTop: 5, marginBottom: 10, flexDirection: 'row', backgroundColor: "#1e1e1e" }}>
                <View style={{ position: 'relative', marginRight: 10 }}>
                    <Image style={{ width: 100, height: 150 }} source={require("../../../assets/images/product.png")} />
                    <Text style={{ backgroundColor: "#1e1e1e", borderRadius: 2, padding: 2, color: 'gray', position: 'absolute', bottom: 5, left: 7 }}>Mark as Sold</Text>
                </View>
                <View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Audi A4</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 60 }}>$20,000</Text>
                    </View>

                    <Text style={{ color: '#fff', fontSize: 16 }}> This is Description</Text>
                </View>

            </View>

        </View>
    )
}
