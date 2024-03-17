import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Appcolor } from '../../../UTILS/Color'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'
import { Image } from 'react-native'

export default function Register3() {
    const nav = useNavigation();

    const [revealPassword, setRevealPassword] = useState(true);
    const [revealPassword2, setRevealPassword2] = useState(true);

    return (
        <View style={styles.wrapper}>
            <View>
                <TouchableOpacity style={styles.backArrow} onPress={() => nav.goBack()}>
                    <AntDesign name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ margin: 20, }} >
                <View>
                    <Text style={styles.boldText}>Create Password</Text>
                    <Text style={styles.lowerText}>Please create a unique password.</Text>
                </View>

                <View style={{ marginTop: 20 }}>


                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.info}>Password</Text>
                        <View style={styles.passwordInput}>
                            <TextInput
                                secureTextEntry={revealPassword}
                                onChangeText={(txt) => setPassword(txt)}
                                style={{ flex: 1, backgroundColor: "#fff", paddingLeft: 20 }}
                                placeholder='Enter Password' />
                            <TouchableOpacity onPress={() => setRevealPassword(!revealPassword)}>
                                <Ionicons name={revealPassword ? "eye-off" : "eye"} size={24} color="grey" style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.info}>Confirm Password</Text>
                        <View style={styles.passwordInput}>
                            <TextInput
                                secureTextEntry={revealPassword}
                                onChangeText={(txt) => setPassword(txt)}
                                style={{ flex: 1, backgroundColor: "#fff", paddingLeft: 20 }}
                                placeholder='Confirm Password' />
                            <TouchableOpacity onPress={() => setRevealPassword2(!revealPassword2)}>
                                <Ionicons name={revealPassword2 ? "eye-off" : "eye"} size={24} color="grey" style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                </View>
                <View>
                    <TouchableOpacity onPress={() => nav.navigate('Register4')} style={{ height: 50, backgroundColor: Appcolor.blue, borderRadius: 5, justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'inter-bold', color: "#fff" }}>Next</Text>
                    </TouchableOpacity>
                </View>



            </View>
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
    },
    passwordInput: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        height: 45,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
    },
})