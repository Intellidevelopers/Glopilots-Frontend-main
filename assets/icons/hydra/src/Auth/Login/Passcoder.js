import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Appcolor } from '../../../UTILS/Color'
import { BaseUrl } from '../../../UTILS/Urls'
import { ActivityIndicator } from 'react-native'

export default function Passcoder() {
    const nav = useNavigation();
    const [loading, setLoading] = useState(false)

    const [pid, setPid] = useState('');

    async function ContinueWithPid() {
        if (pid.length === 6) {
            setLoading(true)
            fetch(`${BaseUrl}/auth/user/signup/via/passcoder`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    country: "Nigeria",
                    pid: pid
                })
            }).then(async (res) => {
                const response=await res.json();
                console.log(response);
                setLoading(false)
            })
        }

    }


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 45, margin: 15 }}>
                <AntDesign name="arrowleft" size={24} color="black" onPress={() => nav.goBack()} />
                <Text style={{ fontFamily: 'inter-bold', fontSize: 20, marginLeft: 10 }}>Passcoder</Text>
            </View>

            <View style={{ margin: 15 }}>
                <Text style={{ fontFamily: "inter-bold", color: Appcolor.blue, fontSize: 17 }}>Enter Passcoder ID</Text>
                <TextInput
                    maxLength={6}
                    onChangeText={(txt) => setPid(txt)}
                    style={styles.inputStyle}
                    placeholder='3FG56B' />
            </View>

            <View style={{ position: "absolute", bottom: 0, alignSelf: 'center' }}>
                <TouchableOpacity
                    disabled={loading}
                    onPress={ContinueWithPid}
                    style={{ height: 50, width: 300, backgroundColor: Appcolor.blue, borderRadius: 10, marginBottom: 20, justifyContent: "center", alignItems: "center" }}>
                    {loading ? (
                        <ActivityIndicator color={'#fff'} size={'small'} />
                    ) : (
                        <Text style={{ color: '#fff', fontFamily: 'inter-bold' }}>Continue</Text>
                    )}
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