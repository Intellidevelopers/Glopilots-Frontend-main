import React, { useState } from 'react';
import {
  View,
  Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import Head from '../../../Head';
import { useAuth } from '../../../Constants/AuthContext';
import { API_URL, OTHER_CONSTANT } from '../../../constants';
import { useSelector, useDispatch } from 'react-redux';


const WelcomeBack = ({ title, navigation,  route  }) => {
  const [loading, setLoading] = useState(false);

  const { email } = route.params;


  const { token, setAuthToken } = useAuth();
  const [password, setPassword] = useState(''); // State to store the password

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
          'Authorization': `Bearer ${token}`, 
 
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
        navigation.navigate('Main');
      } else {
        // Log the error if the request was not successful
        console.error('Server error:', response.status, response.statusText);

        Notifier.showNotification({
          title: 'Wrong Password',
          description: 'Please Check Passwprd and Try again.',
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
 //     setLoading(false);
    }
  };


  const handleSaveChanges = async () => {
    if (!email) {
      setModaluVisible(true); // Show modal indicating an error
      return;
    }
  
    // Set loading to true when starting the request
    setLoading(true);
  
    const requestBody = JSON.stringify({
      email: email,
      password: password
    });
  
    try {
      const response = await fetch(`${API_URL}/login-password`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Fix syntax here
        },
        body: requestBody,
      });
  
      const responseData = await response.json();
      console.log('API Response:', responseData.message);
      console.log('API Response:', responseData.token);
      setAuthToken(responseData.token);
  
       const apigwRequestId = response.headers.get('apigw-requestid');
       setApigwRequestId(apigwRequestId);
  
       if (apigwRequestId) {
         console.log('API Gateway Request ID:', apigwRequestId);
       }
  
      if (responseData.message === 'User not found') {
        setModalVisible(true);
      } else {
        onPressLink();
      }
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      // Set loading to false regardless of success or failure
      setLoading(false);
    }
  };
  



  const onPressLink = () => {
    navigation.navigate('Main'); 
  };
  const Fpass = () => {
    navigation.navigate('EnterEmail'); 
  };

  // const handleSaveChanges = () => {
  //   console.log('First Name:', Fname);    
  //   onPressLink();
  // };

  const [Fname, setFname] = useState('');
  const handleAppleLogin = () => {  
    console.log('LOGIN WITH APPLE');
  };
  const handleGoogleLogin = () => {

    console.log('LOGIN WITH GOOGLE');
  };

  const handleFacebookLogin = () => {
    
  
    console.log('LOGIN WITH FACEBOOK');
  };
  return (

    <View style={styles.container}>

<View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Welcome back, 
             <Text style={styles.inputLabels}> User. </Text> 
             </Text> 
            <View style={[styles.input, Fname !== '' && styles.filledInput]}>
            <TextInput
            style={styles.inputText}
            placeholder="Enter your password"
            placeholderTextColor="#545454"
            secureTextEntry={true} // This makes the text input treat the entered text as a password
            value={password}
            onChangeText={setPassword}
          />
            </View>
          </View>
<TouchableOpacity onPress={Fpass}>
<Text style={styles.fpass}>Forgot Password?</Text>
</TouchableOpacity>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
              <Text style={styles.saveButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

  
   
    </View>
    

    
    
    
    
    
    
  );
};

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingLeft: 0,
     
    },
    fpass: {
        fontSize: 20,
        textAlign: 'right',
        marginRight: 20,
    },
    paddingfull:
    {
      paddingHorizontal: 20,
      
    },
    inputContainer: {
      marginBottom: 10,
      marginTop: 10,
   
    },
    inputLabel: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: 22,
      marginHorizontal: 20,
    },
    inputLabels: {
     marginLeft: 10,
      fontSize: 22,
      fontWeight: '700',
  
    },
    input: {
      maxWidth: 388,
      height: 40,
      borderColor: '#EEEEEE',
      backgroundColor: '#EEEEEE',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      height: 58,
     // paddingLeft: 30,
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    filledInput: {
      borderColor: '#4460EF', // Change the border color when text is present
    },
    inputIcon: {
      position: 'absolute',
      left: 10,
      color: '#545454',
      width: 24,
      height: 24,
      
    },
    inputText: {
      fontSize: 18,
      flex: 1, // Add flex: 1 to allow the input to occupy remaining space
    },
    eyeIconContainer: {
      paddingRight: 10,
    },
    eyeIcon: {
      marginRight: 5,
      width: 24,
      height: 24,
    },
    bottomContainer: {
   
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 20,
    },
    saveButton: {
      backgroundColor: '#4460EF',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center', 
      borderRadius: 10,
      marginTop: 20,
      height: 56,
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
    },
});

export default WelcomeBack;
