import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Modal, ActivityIndicator } from 'react-native';
import Head from '../../../Head';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Notifier } from 'react-native-notifier';
import Constants from 'expo-constants';

import { API_URL, OTHER_CONSTANT } from '../../../constants';
import { useAuth } from '../../../Constants/AuthContext';


const EmailVerify = ({ navigation, route }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const { email, password, token } = route.params;
  const { firstTwo, middlePart, lastTwo } = {
    firstTwo: email.slice(0, 2),
    middlePart: email.slice(2, email.lastIndexOf('@')),
    lastTwo: email.slice(email.lastIndexOf('@') - 2, email.lastIndexOf('@')),
  };

  const resendOTP = async () => {

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/resend-otp`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
  
      if (response.status === 200) {
        console.log('OTP resend request successful');
      } else {
        console.log('OTP resend request failed');
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
    }  finally {
      // Set loading to false regardless of success or failure
      setLoading(false);
    }
  };

  
  const otpInputRefs = useRef([]);

  const onPressLink = () => {
    navigation.navigate('WelcomeBack');
  };

  const focusInput = (index) => {
    otpInputRefs.current[index].focus();
  };

  const onChangeText = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    if (newOTP.join('').length === 4) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }

    if (text.length === 1 && index < otp.length - 1) {
      focusInput(index + 1);
    }
  };

  const onPressVerify = async () => {
    if (!isButtonDisabled) {
      const enteredOTP = otp.join('');

      setLoading(true);

      try {
        const response = await fetch(`${API_URL}/verify-email`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            otp: enteredOTP,
          }),
        });

        // Handle the response from the server
        if (response.status === 200) {
          // OTP verification successful, navigate to the next screen
          navigation.navigate('FillYourProfile');
        } else {
          // Handle other possible responses from the server
          console.log('OTP verification failed', enteredOTP);

          //Wrong OTP Notification


          Notifier.showNotification({
            title: 'Wrong OTP',
            description: 'Wrong OTP!',
            duration: 5000,
            componentProps: {
              titleStyle: { color: 'white' },
              descriptionStyle: { color: 'white', fontStyle: 'italic' },
              containerStyle: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                marginTop: Constants.statusBarHeight + 10,
                borderColor: 'black',
              },
            },
          });


        }
      } catch (error) {
        // Handle errors (e.g., network error, server error)
        console.error('Error verifying OTP:', error);
      }
      finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }

    }

  

  };

  

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Head title='Verify Email Address' navigation={navigation} />
      <View style={{ padding: 20, backgroundColor: '#fff', flex: 1 }}>
        <Text style={{ fontWeight: '400', lineHeight: 40, fontSize: 20, color: 'rgba(13, 19, 23, 255)' }}>
          Enter the 4 - digits code sent to you at  {email}.
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
                borderWidth: digit ? 1 : 0,
                borderColor: 'rgba(68, 96, 239, 255)',
              }}
            >
              <TextInput
                ref={(ref) => (otpInputRefs.current[index] = ref)}
                style={{
                  fontWeight: '400',
                  lineHeight: 40,
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'rgba(13, 19, 23, 255)',
                }}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={(text) => {
                  onChangeText(text, index); // Call the onChangeText function
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
            <Text style={{ fontWeight: 'bold', fontSize: 16, textDecorationLine: 'underline', color: 'rgba(68, 96, 239, 255)' }}  onPress={resendOTP}>
              Resend OTP
            </Text>
          </Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <TouchableOpacity
            style={{
              paddingTop: 13,
              width: '100%',
              height: 56,
              borderRadius: 10,
              backgroundColor: 'rgba(68, 96, 239, 255)',
            }}
            onPress={onPressVerify}
            disabled={isButtonDisabled}
          >
            <Text style={{ fontWeight: '400', fontSize: 20, textAlign: 'center', color: 'rgba(255, 255, 255, 255)' }}>
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
  animationType="none"
  transparent={true}
  visible={loading}  
  onRequestClose={() => {
    // Handle modal close if needed
    setLoading(false);  // Close the modal when loading is done
  }}
>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <ActivityIndicator size="large" color="#4460EF" />
      </View>
    </Modal>
    </View>
  );
};

export default EmailVerify;
