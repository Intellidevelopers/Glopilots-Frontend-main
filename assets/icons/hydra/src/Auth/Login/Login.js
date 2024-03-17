import { ActivityIndicator, Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Appcolor } from '../../../UTILS/Color'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BaseUrl } from '../../../UTILS/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {
    //nav props
    const nav = useNavigation()

    //some usestate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const [revealPassword, setRevealPassword] = useState(true);

    async function Login() {
        setLoading(true)
        fetch(`${BaseUrl}/auth/user/signin/via/email`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(async (res) => {
            const response = await res.json();
            if (response.success) {
                await AsyncStorage.setItem('userToken', response.data.token).then((res) => {
                    setLoading(false)
                    nav.replace("MainApp")
                })
            }
            else if (response.message === 'Email unverified') {
                setLoading(false)
                alert("Verify Email");
            } else if (response.message === "User not found") {
                setLoading(false)
                alert('User not found')
            }
        }).catch((e) => {
            null
        })
    }

    return (
        <View style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.logoWrapper}>
                        <Image style={styles.hydrloginImage} resizeMode='contain' source={require('../../../assets/img/hydralogin.png')} />
                    </View>
                    <Image style={styles.topImage} source={require('../../../assets/img/pex.jpg')} />
                    <View style={styles.overlay} />
                </View>


                <View style={{ margin: 20 }}>
                    <Text style={styles.singintext}>Sign In</Text>
                    <Text style={styles.underText}>
                        We’ll send you a verification code so make sure it’s your email
                    </Text>


                    <View style={{ marginTop: 30 }}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.infotext}>Email</Text>
                            <TextInput
                                keyboardType='email-address'
                                onChangeText={(txt) => setEmail(txt)}
                                style={styles.inputStyle}
                                placeholder='Enter Email' />
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.infotext}>Password</Text>
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
                    </View>
                    <Text style={{ textAlign: "right", fontFamily: 'inter-medium', color: 'red', fontSize: 14 }}>Forgot password</Text>


                    <TouchableOpacity
                        disabled={loading}
                        onPress={Login} style={{ height: 50, backgroundColor: Appcolor.blue, borderRadius: 5, justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
                        {loading ? (
                            <ActivityIndicator color='#fff' size={'small'} />
                        ) : (
                            <Text style={{ fontFamily: 'inter-bold', color: "#fff" }}>Next</Text>
                        )}
                    </TouchableOpacity>
                    <Text onPress={() => nav.navigate('Register1')} style={{ textAlign: "center", fontFamily: 'inter-medium' }}>Don't have an account? <Text style={{ color: Appcolor.blue, fontFamily: 'inter-bold' }}>Sign Up</Text></Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>

                    <TouchableOpacity style={[styles.icons, { backgroundColor: "#B12D17" }]}>
                        <AntDesign name="google" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.icons, { backgroundColor: "#292482" }]} onPress={() => nav.navigate("Passcoder")}>
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
    },
    topImage: {
        width: Dimensions.get('screen').width,
        height: 290,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.7,
        backgroundColor: 'black',
        width: Dimensions.get('screen').width,
        height: 290
    },
    hydrloginImage: {
        width: 100,
        height: 100,
        marginRight: 0,
        tintColor: "#fff"
    },
    logoWrapper: {
        position: "absolute",
        zIndex: 100,
    },
    singintext: {
        fontFamily: "inter-bold",
        fontSize: 20,
        color: Appcolor.blue
    },
    underText: {
        fontFamily: "inter-regular",
        fontSize: 13
    },
    infotext: {
        fontFamily: "inter-regular"
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
    icons: {
        height: 45,
        width: 45,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})