import React, { useState } from 'react';
import {
  View,
  Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Image, Modal
} from 'react-native';
import Head from '../../../Head';
import { API_URL, OTHER_CONSTANT } from '../../../constants';
import Constants from 'expo-constants';
import { Notifier } from 'react-native-notifier';
const EnterEmail = ({ title, navigation }) => {

  const [loading, setLoading] = useState(false);

  const onPressLink = () => {
    navigation.navigate('VerifyLostOtp'); 
  };
  const Fpass = () => {
    navigation.navigate('ForgotPass'); 



  };

  

  

  const [modalVisible, setModalVisible] = useState(false); 
  const [modaluVisible, setModaluVisible] = useState(false); 
  const [loadingModal, setLoadingModal] = useState(true);
  const [apigwRequestId, setApigwRequestId] = useState(null);

  
  const [email, setEmail] = useState('');
  
  const handleSaveChanges = async () => {
    if (!email) {
      setModaluVisible(true); // Show modal indicating an error
      return;
    }
  
    // Set loading to true when starting the request
    setLoading(true);
  
    const requestBody = JSON.stringify({
      email: email,
    });
  
    try {
      const response = await fetch(`${API_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
  
      const responseData = await response.json();
      console.log('API Response:', responseData.message);
      console.log('API Response:', responseData.token);
    //  setAuthToken(responseData.token);
  
      const apigwRequestId = response.headers.get('apigw-requestid');
      setApigwRequestId(apigwRequestId);
  
      if (apigwRequestId) {
        console.log('API Gateway Request ID:', apigwRequestId);
      }
  
      if (responseData.message === 'User not found') {


        Notifier.showNotification({
          title: 'Invalid Email',
          description: 'Email does not exist! Please Provide Valid Email Address.',
          duration: 5000,
          componentProps: {
            titleStyle: { color: 'white' },
            descriptionStyle: { color: 'white', },
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



      } else {
        onPressLink();


        
        Notifier.showNotification({
          title: 'OTP Resents',
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

      }
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      // Set loading to false regardless of success or failure
      setLoading(false);
    }
  };
  



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
            <Text style={styles.inputLabel}>Fogotten Your Password </Text>
            <View style={[styles.input, Fname !== '' && styles.filledInput]}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter your email"
                keyboardType="email-address"
                placeholderTextColor="#545454"
                editable={true}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
              <Text style={styles.saveButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>


          <Modal
  animationType="none"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    setModalVisible(!modalVisible);
  }}
>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ width: '90%', maxHeight: 330, backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#0d1317' }}>
            No account found
          </Text>
          <Text style={{ fontSize: 18, color: '#0d1317' }}>
            There was no account associated with this device. Enter another email or phone number and try again. You can also contact support for help.
          </Text>
          <Text style={{ fontSize: 16, color: '#545454', marginTop: 30 }}>
            Trace ID: {apigwRequestId}
          </Text>
       
       <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
          <TouchableOpacity
  style={{
    width: 62,
    height: 56,
   marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#4460ef',
    justifyContent: 'center',
    alignItems: 'center',
  
 //   bottom: 20,
  //  right: 20,
  }}
  onPress={() => setModalVisible(!modalVisible)} // Removed the redundant onPress={
>
  <Text style={{ color: '#fff', fontSize:  20, }}>OK</Text>
</TouchableOpacity>
</View>
        </View>
      </View>
    </Modal>




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

export default EnterEmail;
