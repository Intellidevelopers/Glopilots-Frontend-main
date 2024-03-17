import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Appcolor } from '../../../UTILS/Color'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'
import { Image } from 'react-native'

export default function Register1() {
    const nav = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [number, setNumber] = useState('');



    const NextScreen = () => {
        nav.navigate('Register2', { firstName: firstName, lastName: lastName, Email: Email, number: number })
    }

    return (
        <View style={styles.wrapper}>
            <View>
                <TouchableOpacity style={styles.backArrow} onPress={() => nav.goBack()}>
                    <AntDesign name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ margin: 0, }} showsVerticalScrollIndicator={false}>
                <View style={{ margin: 20 }}>
                    <Text style={styles.boldText}>Sign Up</Text>
                    <Text style={styles.lowerText}>We’ll send you a verification code so make sure it’s your number</Text>
                </View>

                <View style={{ marginTop: 20, margin: 20 }}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.info}>First Name</Text>
                        <TextInput
                            onChangeText={(txt) => setFirstName(txt)}
                            style={styles.inputStyle}
                            placeholder='First Name' />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.info}>Last Name</Text>
                        <TextInput
                            onChangeText={(txt) => setLastName(txt)}
                            style={styles.inputStyle}
                            placeholder='Last Name' />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.info}>Email Address</Text>
                        <TextInput
                            keyboardType='email-address'
                            onChangeText={(txt) => setEmail(txt)}
                            style={styles.inputStyle}
                            placeholder='Email Address' />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.info}>Phone Number</Text>
                        <TextInput
                            keyboardType='number-pad'
                            onChangeText={(txt) => setNumber(txt)}
                            style={styles.inputStyle}
                            placeholder='Phone Number' />
                    </View>
                </View>

                <View style={{ margin: 20, marginTop: -20 }}>
                    <TouchableOpacity onPress={NextScreen} style={{ height: 50, backgroundColor: Appcolor.blue, borderRadius: 5, justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'inter-bold', color: "#fff" }}>Next</Text>
                    </TouchableOpacity>
                </View>

                <Text onPress={() => nav.goBack()} style={{ textAlign: "center", fontFamily: 'inter-medium', marginBottom: 10 }}>Do you have an account? <Text style={{ color: Appcolor.blue, fontFamily: 'inter-bold' }}>Sign In</Text></Text>

                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableOpacity style={[styles.icons, { backgroundColor: "#4460A0" }]}>
                        <FontAwesome name="facebook" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.icons, { backgroundColor: "#B12D17" }]}>
                        <AntDesign name="google" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.icons, { backgroundColor: "#292482" }]}>
                        <Image style={{ width: 50, height: 50, tintColor: "#fff" }} source={require('../../../assets/img/passer.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // backgroundColor: "#fff"
    },
    backArrow: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "#eee",
        marginTop: 50,
        margin: 20
    },
    boldText: {
        fontFamily: "inter-bold",
        color: Appcolor.blue,
        fontSize: 25,
        marginBottom: 5
    },
    lowerText: {
        fontFamily: 'inter-regular',

    },
    info: {
        fontFamily: "inter-medium"
    },
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
    icons: {
        height: 45,
        width: 45,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})