import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

export default function Buynow() {

    const nav = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ margin: 15, marginTop: 50, flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => {
                    nav.goBack()
                }} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#eee", borderRadius: 10, padding: 10 }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontFamily: "inter-bold", fontSize: 15 }}>Choose Payment method</Text>
                <View />
            </View>

            <View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})