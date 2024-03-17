import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Appcolor } from '../../../UTILS/Color';

export default function ChangeEmail() {
    const nav = useNavigation();

    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNumber, setUserNumber] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <View style={{ margin: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 50 }}>

                <TouchableOpacity onPress={() => {
                    nav.goBack()
                }} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, padding: 10 }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>

                <Text style={{ fontFamily: "inter-bold", fontSize: 17 }}>Change Email</Text>

                <View />
            </View>

            <View style={{ margin: 15 }}>
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder='Old Email' />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder='Current Email' />
                </View>
            </View>

            <View style={{ position: "absolute", bottom: 0, alignSelf: "center", marginBottom: 20 }}>
                <TouchableOpacity onPress={() => {
                    nav.goBack()
                }} style={{ backgroundColor: Appcolor.blue, height: 50, justifyContent: "center", alignItems: "center", width: 350, borderRadius: 10 }}>
                    <Text style={{ fontFamily: "inter-bold", color: "#fff" }}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 45,
        paddingLeft: 20,
        fontFamily: 'inter-regular',
        backgroundColor: "#fff",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
        borderRadius: 5
    },
})