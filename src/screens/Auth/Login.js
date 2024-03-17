import React, { createContext, useContext, useState } from 'react';
import {
  View,
  Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, Modal, ActivityIndicator
} from 'react-native';
import Head from '../../../Head';
import { API_URL, OTHER_CONSTANT } from '../../../constants';
import { useAuth } from '../../../Constants/AuthContext';
import WebView from 'react-native-webview';
import { useSelector, useDispatch } from 'react-redux';





//import { BlurView } from '@react-native-community/blur';

const Login = ({ title, navigation }) => {
  const { setAuthToken } = useAuth();


  const dispatch = useDispatch();

  const onPressLink = () => {
    navigation.navigate('LoginVerify', { email: email });
  };

  const [loading, setLoading] = useState(false);


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
      const response = await fetch(`${API_URL}/login`, {
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
      setAuthToken(responseData.token);
   //   await AsyncStorage.setItem('authToken', responseData.token);
      dispatch({ type: 'UPDATE_TOKEN', payload: responseData.token });
      dispatch({ type: 'UPDATE_EMAIL', payload: email });
  //    setEmail(email);
  
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
  
  
  
  const [email, setEmail] = useState('');
  const [apigwRequestId, setApigwRequestId] = useState(null);

  const handleAppleLogin = async () => {  
    try {
      const response = await fetch('https://api.test.glopilots.com/apple/callback', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });

      // Get the HTML content as text
      const htmlContent = await response.text();

      // Set the HTML content to state
      setHtmlContent(htmlContent);

      // Open the modal to display the HTML content
      setModalVisible(true);

    } catch (error) {
      console.error('Apple Login Error:', error);
      // Handle the error as needed
    }
  };



  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('https://api.test.glopilots.com/google/callback', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });

      // Get the HTML content as text
      const htmlContent = await response.text();

      // Set the HTML content to state
      setHtmlContent(htmlContent);

      // Open the modal to display the HTML content
      setModalVisible(true);

    } catch (error) {
      console.error('Google Login Error:', error);
      // Handle the error as needed
    }
  };
  

  const handleFacebookLogin = async () => {
    try {
      const response = await fetch('https://api.test.glopilots.com/facebook/callback', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });

      // Get the HTML content as text
      const htmlContent = await response.text();

      // Set the HTML content to state
      setHtmlContent(htmlContent);

      // Open the modal to display the HTML content
      setModalVisible(true);

    } catch (error) {
      console.error('Apple Login Error:', error);
      // Handle the error as needed
    }
  };

  const [modalVisible, setModalVisible] = useState(false); 
  const [modaluVisible, setModaluVisible] = useState(false); 
 
  const [htmlContent, setHtmlContent] = useState('');

  const [loadingModal, setLoadingModal] = useState(true);

  return (
    <ScrollView>
    <View style={styles.container}>






<View style={styles.inputContainer}>


   {/* Loading screen */}
  


            <Text style={styles.inputLabel}>What's your phone number or email?</Text>
            <View style={[styles.input, email !== '' && styles.filledInput]}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter phone number or email"
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

    

          <View style = {
      {
        "flexDirection": "row",
        marginStart: 20,
      }
    } >
    <View style = {
      {
        "marginTop": 15,
        "backgroundColor": "rgba(84, 84, 84, 255)",
        "width": '39%',
        "height": 1.5
      }
    }
    />
    <Text style = {
      {
     //   "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "color": "rgba(84, 84, 84, 255)",
        "marginStart": 16
      }
    } > or </Text>
    <View style = {
      {
        "marginStart": 15,
        "marginTop": 15,
        "backgroundColor": "rgba(84, 84, 84, 255)",
        "width": '39%',
        marginRight: 20,
        "height": 1.5
      }
    }
    />
    </View>



    <View style = {
      {
        
        "marginStart": 20,
        "marginTop": 20,
        marginRight: 20,
      }
    } >
    <TouchableOpacity style = {
      {
        "flexDirection": "row",
        "paddingTop": 13,
        "width": "100%",
        marginRight: 20,
        justifyContent: 'center',
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    } onPress={handleAppleLogin}>

   
<Image
                source={require('../../../assets/apple.png')}
                style={{ width: 24, height: 24 }} resizeMode='contain'
              />    
    <Text style = {
      {
    //    "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(13, 19, 23, 255)",
        "marginStart": 8
      }
    } > Continue with Apple </Text>
    </TouchableOpacity>
    </View>

    <View style = {
      {
        
        "marginStart": 20,
        "marginTop": 20,
        marginRight: 20,
      }
    } >
    <TouchableOpacity style = {
      {
        "flexDirection": "row",
        
        "paddingTop": 13,
        "width": "100%",
        justifyContent: 'center',
        marginRight: 20,
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    }  onPress={handleFacebookLogin}>

   
<Image
                source={require('../../../assets/facebook.png')}
                style={{ width: 24, height: 24 }} resizeMode='contain'
              />    
    <Text style = {
      {
     //   "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(13, 19, 23, 255)",
        "marginStart": 8
      }
    } > Continue with Facebook </Text>
    </TouchableOpacity>
    </View>

    <View style = {
      {
        
        "marginStart": 20,
        "marginTop": 20,
        marginRight: 20,
      }
    } >
    <TouchableOpacity style = {
      {
        "flexDirection": "row",
        
        "paddingTop": 13,
        "width": "100%",
        justifyContent: 'center',
        marginRight: 20,
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    }  onPress={handleGoogleLogin}>

   
<Image
                source={require('../../../assets/google.png')}
                style={{ width: 24, height: 24 }} resizeMode='contain'
              />    
    <Text style = {
      {
     //   "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(13, 19, 23, 255)",
        "marginStart": 8
      }
    } > Continue with Google </Text>
    </TouchableOpacity>
    </View>


  
    <Text style = {
      {
    //    "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 16,
        "color": "rgba(84, 84, 84, 255)",
        "marginStart": 20,
        "marginTop": 30,
        marginRight: 20,
        "marginBottom": 50

      }
    } > By proceeding, you concent to get call, Whatsapp or SMS messages, including by automated means, from GloPilots and its affiliates to the number provided. </Text>
    
    
   
    
    
    <View style = {
      {
        "alignItems": "flex-start",
        paddingLeft: 20
      }
    } >
    <TouchableOpacity style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 28,
        "paddingTop": 23,
        "width": 64,
        "height": 64,
        "borderRadius": 32,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    }   onPress={() => navigation.goBack()} >

 
    
<Image
                source={require('../../../assets/back-icon.png')}
                style={{ width: 9, height: 18 }} resizeMode='contain'
              />    
    </TouchableOpacity>
    </View>
    <Text style = {
      {
        "marginTop": 20,
        "marginLeft": 20,
        "marginRight": 20,
        marginBottom: 60,

      }
    } >
    <Text style = {
      {
    //    "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 16,
        "color": "rgba(84, 84, 84, 255)"
      }
    } > This site is protected by reCAPTCHA and the Google
    </Text><Text style={{"fontWeight":"400","fontSize":16,"textDecorationLine":"underline","color":"rgba(13, 19, 23, 255)"}}> Privacy Policy</Text > <Text style = {
      {
    //    "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 16,
        "color": "rgba(84, 84, 84, 255)"
      }
    } > and </Text><Text style={{"fontWeight":"400","fontSize":16,"textDecorationLine":"underline","color":"rgba(13, 19, 23, 255)"}}>Terms of Services</Text > <Text style = {
      {
    //    "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 16,
        "color": "rgba(84, 84, 84, 255)"
      }
    } > apply. </Text></Text >
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


    <Modal
  animationType="slide"
  transparent={true}
  visible={modaluVisible}
  onRequestClose={() => {
    setModaluVisible(!modaluVisible);
  }}
>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ width: '90%', maxHeight: 330, backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#0d1317' }}>
            Email / Phone Number
          </Text>
          <Text style={{ fontSize: 18, color: '#0d1317' }}>
          Phone Number or email cannot be empty </Text>
         
       
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
  onPress={() => setModaluVisible(!modaluVisible)} // Removed the redundant onPress={
>
  <Text style={{ color: '#fff', fontSize:  20, }}>OK</Text>
</TouchableOpacity>
</View>
        </View>
      </View>
    </Modal>


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1 }}>
          <WebView source={{ html: htmlContent }} />
        </View>
      </Modal>
    </ScrollView>
    
    
    
    
    
    
  );
};

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 0,
     
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
      color: "rgba(84, 84, 84, 255)",
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
    loadingContainer: {
      position: 'absolute',
      top: '75%', // Center vertically
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

export default Login;
