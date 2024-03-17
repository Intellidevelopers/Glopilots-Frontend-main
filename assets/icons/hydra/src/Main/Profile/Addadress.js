import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Appcolor } from '../../../UTILS/Color';
import { Picker } from '@react-native-picker/picker';
import { Modal } from 'react-native';
import { AllCity, AllState } from '../../../UTILS/AppData';
import { ScrollView } from 'react-native';
import { BaseUrl } from '../../../UTILS/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

export default function Addadress() {

    const pickerRef = useRef();

    const [selectedState, setSelectedState] = useState('Cross River');
    const [selectedCity, setSelectedCity] = useState('Biase');
    const [showCityModal, setCityModal] = useState(false)
    const [showStateModal, setStateModal] = useState(false);
    const [loading, setloading] = useState(false)
    const [userToken, setUserToken] = useState('')


    const [address, setAddress] = useState('')

    const nav = useNavigation();

    const getUserToken = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {
                setUserToken(value)
            }
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        getUserToken()
    }, [])


    const RenderCity = ({ cityData }) => {
        if (cityData.name === selectedState) {
            return (
                cityData.cities.map((city) => (
                    <TouchableOpacity key={city} style={{ marginBottom: 15 }} onPress={() => {
                        setSelectedCity(city);
                        setCityModal(false)
                    }}>
                        <Text style={{ fontFamily: 'inter-bold', fontSize: 16 }}>{city}</Text>
                    </TouchableOpacity>
                ))
            )
        }
    }

    async function Save() {
        setloading(true);
        fetch(`${BaseUrl}/user/profile/address`, {
            method: "PUT",
            headers: {
                'hydra-express-access-token': userToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                address: address,
                city: selectedCity,
                state: selectedState,
                street: 'null'
            })
        }).then(async (res) => {
            const response = await res.json();
            console.log(response);
            setloading(false);

            if (response.success) {
                nav.goBack()
            }
        })
    }

    return (
        <>
            <Modal visible={showCityModal} animationType='slide' onRequestClose={() => setCityModal(false)}>
                <ScrollView style={{ margin: 15 }} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => setCityModal(false)}>
                        <FontAwesome name="close" size={24} color="red" />
                    </TouchableOpacity>
                    {AllCity.map((city) => (
                        <RenderCity cityData={city} />
                    ))}
                </ScrollView>
            </Modal>
            <Modal visible={showStateModal} animationType='slide' onRequestClose={() => setStateModal(false)}>
                <ScrollView style={{ margin: 15 }} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => setStateModal(false)}>
                        <FontAwesome name="close" size={24} color="red" />
                    </TouchableOpacity>
                    {AllState.map((state) => (
                        <TouchableOpacity key={state} style={{ marginBottom: 15 }} onPress={() => {
                            setSelectedState(state);
                            setStateModal(false)
                        }}>
                            <View>
                                <Text style={{ fontFamily: 'inter-bold', fontSize: 16 }}>{state}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Modal>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ flexDirection: "row", alignItems: "center", margin: 15, marginTop: 50 }}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => nav.goBack()} />
                    <Text style={{ fontFamily: "inter-bold", fontSize: 20, marginLeft: 10 }}>Add Your Address</Text>
                </View>

                <View style={{ margin: 15 }}>


                    <TouchableOpacity onPress={() => setStateModal(true)} style={[styles.inputStyle, { justifyContent: 'space-between', flexDirection: "row", alignItems: "center", marginBottom: 20 }]}>
                        <TextInput
                            editable={false}
                            placeholder={selectedState}
                            style={{ fontFamily: "inter-regular", flex: 1 }}
                        />
                        <View>
                            <Entypo name="chevron-down" size={24} color="black" style={{ marginRight: 10 }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setCityModal(true)
                    }} style={[styles.inputStyle, { justifyContent: 'space-between', flexDirection: "row", alignItems: "center", marginBottom: 20 }]}>
                        <TextInput
                            editable={false}
                            placeholder={selectedCity}
                            style={{ fontFamily: "inter-regular", flex: 1 }}
                        />
                        <View>
                            <Entypo name="chevron-down" size={24} color="black" style={{ marginRight: 10 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            onChangeText={(txt) => setAddress(txt)}
                            style={[styles.inputStyle]}
                            placeholder='Your Address' />
                    </View>
                </View>

                <View style={{ position: "absolute", bottom: 0, marginBottom: 20, alignSelf: "center" }}>
                    <TouchableOpacity onPress={Save} disabled={loading} style={{ height: 50, width: 300, justifyContent: "center", alignItems: "center", backgroundColor: Appcolor.blue, borderRadius: 10 }}>
                        {loading ? (
                            <ActivityIndicator color={"#fff"} size={'small'} />
                        ) : (
                            <Text style={{ color: "#fff", fontFamily: 'inter-medium' }}>Save Address</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </>
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