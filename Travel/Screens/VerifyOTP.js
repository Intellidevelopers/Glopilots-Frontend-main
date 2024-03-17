import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const VerifyOTP = () => {
    const [isNewPassword, NewPassword] = useState(false);
    const [isNewConfirmPassword, NewConfirmPassword] = useState(false);
    const isNewPasswordPress = () => {
        NewPassword((prev) => !prev);
    }
    const isNewConfirmPasswordPress = () => {
        NewConfirmPassword((prev) => !prev);
    }
    return (
        <View style={{ width: '90%', alignSelf: 'center', backgroundColor: '#f8f8f8' }}>
            <Text style={{ marginTop: 20, fontSize: 17, color: '#23282c' }}>Please enter a new password for your GloPilots account.</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, backgroundColor: '#eeeeee', marginTop: 20, height: 55, borderRadius: 10 }}>
                <TextInput secureTextEntry={isNewPassword} placeholder={'Enter New Password'} style={{ width: '85%', height: '80%' }} />
                <TouchableOpacity onPress={() => isNewPasswordPress()} style={{ width: '15%', height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name={`${isNewPassword ? "eye" : "eye-off"}-outline`} size={20} color={'grey'} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, backgroundColor: '#eeeeee', marginTop: 15, height: 55, borderRadius: 10 }}>
                <TextInput secureTextEntry={isNewConfirmPassword} placeholder={'Confirm New Password'} style={{ width: '85%', height: '80%' }} />
                <TouchableOpacity onPress={() => isNewConfirmPasswordPress()} style={{ width: '15%', height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name={`${isNewConfirmPassword ? "eye" : "eye-off"}-outline`} size={20} color={'grey'} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ backgroundColor: "#435eea", height: 50, marginTop: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#fff", fontSize: 18 }}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
}
export default VerifyOTP;