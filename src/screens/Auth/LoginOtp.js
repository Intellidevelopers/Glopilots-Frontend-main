import React, { useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import Head from '../../../Head';
import { TouchableOpacity } from 'react-native-gesture-handler';

const VerifyLostOtp = ({ navigation, route }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
//  const { email, password } = route.params;
 /* const { firstTwo, middlePart, lastTwo } = {
    firstTwo: email.slice(0, 2),
    middlePart: email.slice(2, email.lastIndexOf('@')),
    lastTwo: email.slice(email.lastIndexOf('@') - 2, email.lastIndexOf('@')),
  };

  */
  const otpInputRefs = useRef([]);

  const onPressLink = () => {
    navigation.navigate('WelcomeBack'); 
  };

  const focusInput = (index) => {
    otpInputRefs.current[index].focus();
  };

  const onPressVerify = () => {
    const enteredOTP = otp.join('');
    // Here you can implement the logic to verify the entered OTP
    // For example, you might make an API call to verify the OTP

    // Once verified, you can navigate to the next screen
    navigation.navigate('NewPass');
  };

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Head title='Forgot Password' navigation={navigation} />
      <View style={{lineHeight: 40, padding: 20, backgroundColor: '#fff', flex: 1 }}>
        <Text style={{fontWeight: '400', fontSize: 20, color: 'rgba(13, 19, 23, 255)' }}>
          Enter the 4 - digits code sent to you at ******70.
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 24 }}>
          {otp.map((digit, index) => (
            <View
              key={index}
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                backgroundColor: 'rgba(238, 238, 238, 255)',
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextInput
                ref={(ref) => (otpInputRefs.current[index] = ref)}
                style={{fontWeight: '400', fontSize: 20, textAlign: 'center', color: 'rgba(13, 19, 23, 255)' }}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={(text) => {
                  const newOTP = [...otp];
                  newOTP[index] = text;
                  setOTP(newOTP);
                  if (text.length === 1 && index < otp.length - 1) {
                    focusInput(index + 1);
                  }
                }}
              />
            </View>
          ))}
        </View>
        <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontWeight: '400', fontSize: 16, color: 'rgba(13, 19, 23, 255)' }}>
          Trouble receiving the OTP?{' '} 
          <Text style={{fontWeight: 'bold', fontSize: 16, textDecorationLine: 'underline', color: 'rgba(68, 96, 239, 255)' }}>
            Resend OTP
          </Text>
          </Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <TouchableOpacity
            style={{ paddingTop: 13, width: '100%', height: 56, borderRadius: 10, backgroundColor: 'rgba(68, 96, 239, 255)' }}
            onPress={onPressVerify}
          >
            <Text style={{fontWeight: '400', fontSize: 20, textAlign: 'center', color: 'rgba(255, 255, 255, 255)' }}>
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>


     
    </View>
  );
};

export default VerifyLostOtp;
