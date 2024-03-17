import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Modal, ActivityIndicator, } from 'react-native';
import Head from '../../../Head';
import { Notifier } from 'react-native-notifier';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { API_URL, OTHER_CONSTANT } from '../../../constants';
import { useAuth } from '../../../Constants/AuthContext';
import { useSelector, useDispatch } from 'react-redux';



const LoginVerify = ({ navigation, route }) => {
  const { token, setAuthToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  const [otp, setOTP] = useState(['', '', '', '']);
//  const { email, password } = route.params;
 /* const { firstTwo, middlePart, lastTwo } = {
    firstTwo: email.slice(0, 2),
    middlePart: email.slice(2, email.lastIndexOf('@')),
    lastTwo: email.slice(email.lastIndexOf('@') - 2, email.lastIndexOf('@')),
  };

  */

  const { email } = route.params;
  const auth_token = useSelector(state => state.auth_token);
  const emails = useSelector(state => state.email);

  const otpInputRefs = useRef([]);

  const onPressLink = () => {
    navigation.navigate('WelcomeBack'); 
  };

  const focusInput = (index) => {
    otpInputRefs.current[index].focus();
  };


  const onPressResendOTP = async () => {
    setLoading(true);

    try {
      // Make a fetch request to your server to resend OTP
      const response = await fetch(`${API_URL}/resend-otp`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`,
        },
        body: JSON.stringify({
          email: emails,
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();
        console.log('Server response:', responseData);
        
      dispatch({ type: 'UPDATE_TOKEN', payload: responseData.token });

        // You can provide feedback to the user if needed
        Notifier.showNotification({
          title: 'OTP Resent',
          description: 'OTP has been resent successfully.',
          duration: 5000,
          componentProps: {
            titleStyle: { color: 'white' },
            descriptionStyle: { color: 'white', fontStyle: 'italic' },
            containerStyle: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
              marginTop: Constants.statusBarHeight + 10,
              borderColor: 'black',
            },
          },
        });
      } else {
        // Log the error if the request was not successful
        console.error('Server error:', response.status, response.statusText);
        // Display an error notification
        Notifier.showNotification({
          title: 'Resend OTP Failed',
          description: 'Failed to resend OTP. Please try again.',
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
      console.error('Error during fetch:', error.message);
    } finally {
      setLoading(false);
    }
  };


  const onPressVerify = async () => {
    const enteredOTP = otp.join('');
    setLoading(true);

    try {
      // Make a fetch request to your server to verify the OTP
      const response = await fetch(`${API_URL}/verify-email`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Fix syntax here
 
        },
        body: JSON.stringify({
          email: email,
          otp: enteredOTP,
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();
        console.log('Server response:', responseData);
        // Navigate to the next screen on successful verification
        navigation.navigate('WelcomeBack', { email: email });
      } else {
        // Log the error if the request was not successful
        console.error('Server error:', response.status, response.statusText);
        console.log('Server response:', auth_token)
        Notifier.showNotification({
          title: 'Wrong OTP',
          description: 'Please Check OTP and Try again.',
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
      console.error('Error during fetch:', error.message);
    }  finally {
      // Set loading to false regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Head title='Login' navigation={navigation} />
      <View style={{ padding: 20, backgroundColor: '#fff', flex: 1 }}>
        <Text style={{fontWeight: '400',  lineHeight: 40, fontSize: 20, color: 'rgba(13, 19, 23, 255)' }}>
          Enter the 4 - digits code sent to you at <Text style={{fontWeight: '700',  lineHeight: 40, fontSize: 20, color: 'rgba(13, 19, 23, 255)' }}>{email}  </Text>.
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
          <Text onPress={onPressResendOTP} style={{fontWeight: 'bold', fontSize: 16, textDecorationLine: 'underline', color: 'rgba(68, 96, 239, 255)' }}>
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

export default LoginVerify;
