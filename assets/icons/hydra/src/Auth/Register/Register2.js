import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Appcolor } from '../../../UTILS/Color'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'
import { Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { BaseUrl } from '../../../UTILS/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native'



export default function Register2({ route }) {

    const nav = useNavigation();
    const [showModal, setShowModal] = useState(false)
    const { firstName, lastName, Email, number } = route.params;
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [selectedDate, setSelectedDate] = useState('')

    const [revealPassword, setRevealPassword] = useState(true);
    const [revealPassword2, setRevealPassword2] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const pickerRef = useRef();

    function openGenderPicker() {
        pickerRef.current.focus();
    }

    function closeGenderPicker() {
        pickerRef.current.blur();
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const [selectedGender, setSelectedGender] = useState("Male");


    async function CreateAccount() {
        if (true) {
            setShowModal(true)
            fetch(`${BaseUrl}/auth/user/signup`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    country: "Nigeria",
                    middlename: 'no-name',
                    gender: selectedGender,
                    phone_number: number,
                    email: Email,
                    dob: selectedDate.toString(),
                    password: password,
                    confirmPassword: confirmPassword
                })
            }).then(async (res) => {
                const response = await res.json();
                console.log(response);
                setShowModal(false);
                if (response.success) {
                    nav.navigate("Welcome")
                } else {
                    alert("An error occured!")
                }
            }).catch(() => {
                setShowModal(false)
            })
        }
    }





    return (
        <>
            <Modal visible={showModal} animationType='slide'>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color={Appcolor.blue} size={50} />
                    <Text style={{ color: Appcolor.blue, fontSize: 20, fontFamily: "inter-bold" }}>Creating your hydra account!</Text>
                </View>
            </Modal>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(res) => {
                    setSelectedDate(`${res.getFullYear()}-0${res.getMonth()}-0${res.getDay()}`);
                    hideDatePicker()
                }}
                onCancel={hideDatePicker}
            />
            <Picker
                ref={pickerRef}
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedGender(itemValue)
                }>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Binary" value="binary" />
            </Picker>
            <View style={styles.wrapper}>
                <View>
                    <TouchableOpacity style={styles.backArrow} onPress={() => nav.goBack()}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    <View style={{ margin: 20, }}>
                        <Text style={styles.boldText}>You're almost there</Text>
                    </View>

                    <View style={{ marginTop: 20, margin: 20, }}>
                        <View style={{ marginBottom: 20, }}>
                            <Text style={styles.info}>Gender</Text>
                            <TouchableOpacity style={styles.inputWithModal} onPress={openGenderPicker}>
                                <Text style={styles.info}>{selectedGender}</Text>
                                <Entypo name="chevron-down" size={24} color="grey" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.info}>Date of Birth</Text>
                            <TouchableOpacity style={styles.inputWithModal} onPress={showDatePicker}>
                                <Text style={styles.info}>{selectedDate}</Text>
                                <Entypo name="chevron-down" size={24} color="grey" />
                            </TouchableOpacity>
                        </View>

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
                                    onChangeText={(txt) => setConfirmPassword(txt)}
                                    style={{ flex: 1, backgroundColor: "#fff", paddingLeft: 20 }}
                                    placeholder='Confirm Password' />
                                <TouchableOpacity onPress={() => setRevealPassword2(!revealPassword2)}>
                                    <Ionicons name={revealPassword2 ? "eye-off" : "eye"} size={24} color="grey" style={{ marginRight: 10 }} />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                    <View style={{ margin: 20, marginTop: -20 }}>
                        <TouchableOpacity onPress={CreateAccount} style={{ height: 50, backgroundColor: Appcolor.blue, borderRadius: 5, justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 10 }}>
                            <Text style={{ fontFamily: 'inter-bold', color: "#fff" }}>Create Your Account</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>

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
        marginTop: 10,
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
    inputWithModal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 12,
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