import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Appcolor } from '../../../UTILS/Color';
import { ScrollView } from 'react-native';

export default function Personal({ route }) {
    const { firstname, lastname, gender, email, number, address, dob, ref } = route.params
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

                <Text style={{ fontFamily: "inter-bold", fontSize: 17 }}>Personal Details</Text>

                <View />
            </View>

            <ScrollView >
                <View style={{ marginBottom: 20, margin: 15 }}>
                    <Text style={{ fontFamily: "inter-medium" }}>First Name</Text>
                    <TextInput
                        editable={false}
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder={firstname} />
                </View>
                <View style={{ marginBottom: 20, margin: 15 }}>
                    <Text style={{ fontFamily: "inter-medium" }}>Last Name</Text>
                    <TextInput
                        editable={false}
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder={lastname} />
                </View>
                <View style={{ marginBottom: 20, margin: 15 }}>
                    <Text style={{ fontFamily: "inter-medium" }}>Email</Text>
                    <TextInput
                        editable={false}
                        keyboardType='email-address'
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder={email.toLowerCase()} />
                </View>
                <View style={{ marginBottom: 20, margin: 15 }}>
                    <Text style={{ fontFamily: "inter-medium" }}>Phone Number</Text>
                    <TextInput
                        editable={false}
                        keyboardType='number-pad'
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder={number} />
                </View>
                <View style={{ marginBottom: 20, margin: 15 }}>
                    <Text style={{ fontFamily: "inter-medium" }}>Gender</Text>
                    <TextInput
                        editable={false}
                        keyboardType='number-pad'
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder={gender} />
                </View>
                <View style={{ marginBottom: 20, margin: 15 }}>
                    <Text style={{ fontFamily: "inter-medium" }}>Date of Birth</Text>
                    <TextInput
                        editable={false}
                        keyboardType='number-pad'
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder={dob} />
                </View>
                <View style={{ marginBottom: 20, margin: 15 }}>
                    <Text style={{ fontFamily: "inter-medium" }}>Delivery Address</Text>
                    <TextInput
                        editable={false}
                        keyboardType='number-pad'
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder={address} />
                </View>
                <View style={{ marginBottom: 20, margin: 15 }}>
                    <Text style={{ fontFamily: "inter-medium" }}>Referral Count</Text>
                    <TextInput
                        editable={false}
                        keyboardType='number-pad'
                        onChangeText={(txt) => setUserFirstName(txt)}
                        style={styles.inputStyle}
                        placeholder={ref.toString()} />
                </View>
            </ScrollView>

            <View style={{alignSelf: "center", marginBottom: 20 }}>
                <TouchableOpacity onPress={() => {
                    nav.goBack()
                }} style={{ backgroundColor: Appcolor.blue, height: 50, justifyContent: "center", alignItems: "center", width: 350, borderRadius: 10 }}>
                    <Text style={{ fontFamily: "inter-bold", color: "#fff" }}>Edit Profile</Text>
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
        borderRadius: 5,
    },
})