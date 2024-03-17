import React, { useState, useEffect } from 'react';
import {
  View,
  Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, Modal, ActivityIndicator, Pressable
} from 'react-native';
import Head from '../../../Head';
import eye from '../../../assets/icons/eye.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { setEmail } from '../../../Slice/userActions';
import { API_URL, OTHER_CONSTANT } from '../../../constants';
//import { GoogleSignin, statusCodes } from 'react-native-google-signin';
//import { appleAuth } from '@invertase/react-native-apple-authentication';
//import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Notifier } from 'react-native-notifier';
import Constants from 'expo-constants';
import { useAuth } from '../../../Constants/AuthContext';
import WebView from 'react-native-webview';
import { useSelector, useDispatch } from 'react-redux';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  
  const dispatch = useDispatch();
  const [ssn, setSsn] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true); 
  const [confirmHidden, setConfirmHidden] = useState(true); 
  const { setAuthToken } = useAuth();

  const [modalVisible, setModalVisible] = useState(false); 
  const [modalVisibles, setModalVisibles] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [loading, setLoading] = useState(false);




  useEffect(() => {
    // Initialize Google Sign-In
 /*   GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your actual Web Client ID
      offlineAccess: false,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
    */


     // Initialize Apple Sign-In
   

  }, []);


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
      setModalVisibles(true);

    } catch (error) {
      console.error('Apple Login Error:', error);
      // Handle the error as neededs
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
      setModalVisibles(true);

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
      setModalVisibles(true);

    } catch (error) {
      console.error('Apple Login Error:', error);
      // Handle the error as needed
    }
  };

  //const [modalVisible, setModalVisible] = useState(false); 
  const [modaluVisible, setModaluVisible] = useState(false); 
 
  const [htmlContent, setHtmlContent] = useState('');

  const [loadingModal, setLoadingModal] = useState(true);


//  const handleAppleLogin = async () => {
  /*  try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // Use the appleAuthRequestResponse object for further actions
      console.log('Apple user info:', appleAuthRequestResponse);
    } catch (error) {
      if (error.code === appleAuth.Error.CANCELED) {
        console.log('Apple login cancelled');
      } else {
        console.error('Error during Apple login:', error);
      }
    }
    */
 // };



//  const handleGoogleLogin = async () => {
  /*  try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // Use the userInfo object for further actions
      console.log('Google user info:', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google login cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google login already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.error('Error during Google login:', error);
      }
    } */
 // };

 
  //const handleFacebookLogin = async () => {
  /*  try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        console.log('Facebook login cancelled');
      } else {
        const accessTokenData = await AccessToken.getCurrentAccessToken();

        if (accessTokenData) {
          // Use the accessTokenData to make API requests or perform other actions
          console.log('Facebook access token:', accessTokenData.accessToken);
        } else {
          console.log('Facebook login failed');
        }
      }
    } catch (error) {
      console.error('Error during Facebook login:', error);
    }   */
  //};

  const onPressLink = () => {
    navigation.navigate('EmailVerify', {
      email: email,
      password: password,
    });
  };
  const signup = async () => {
    if (email === '' || password === '' || confirm === '') {
      setErrorMessage('Please fill in all fields.');
      setModalVisible(true);
    } else if (password !== confirm) {
      setErrorMessage('Passwords do not match.');
      setModalVisible(true);
    } else {
      try {
        setLoading(true);
  
        const apiUrl = `${API_URL}/register`;
        const requestData = {
          email: email,
          password: password,
        };
  
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
      //    await AsyncStorage.setItem('authToken', token);
      dispatch({ type: 'UPDATE_TOKEN', payload: token });
      dispatch({ type: 'UPDATE_EMAIL', payload: email });

          console.log('Registration successful:', data);
          
          setEmail(email);
          
          navigation.navigate('EmailVerify', {
            email: email,
            password: password,
            token: token,
          });
        } else {
          if (response.status === 409) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
          //  setAuthToken(responseData.token);

           
            console.error('Registration failed:', errorData);
          //  console.log('Registration unsuccessful:', data);

            Notifier.showNotification({
              title: 'Sign Up Error',
              description: errorMessage,
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


            // Handle conflict error, maybe show an error message to the user
          }
          else if (response.status === 502) {
            // Handle 502 Bad Gateway error
            setErrorMessage('Email Already Exist!');
            setModalVisible(true);

            Notifier.showNotification({
              title: 'Sign Up Error',
              description: errorMessage,
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
          
          else {
            console.error('Registration failed:', response.status);
            // Handle other errors or display appropriate messages to the user
          }
        }
      } catch (error) {
        console.error('Error during registration:', error);
        // Handle network errors or other exceptions
      } finally {
        setLoading(false);
      }
    }
  };
  
  const toggleSsnVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };

  const toggleConfirmVisibility = () => {
    setConfirmHidden(!confirmHidden);
  };

  return (
    <View style = {
      {backgroundColor: '#fff',
      flex: 1,
    }
      
    }>
    <Head title="" navigation={navigation} />
    <ScrollView>

    <View  style = {
      {
        marginTop: 20,
      }
    }>
      <Text style = {
      {
       
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
      }
    }> Create new account</Text>
   




   <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email or Phone Number</Text>
          <View style={[styles.input, email !== '' && styles.filledInput]}>
      
            <TextInput
              style={styles.inputText}
              placeholder="Enter email or phone number"
              keyboardType="default"
          //    secureTextEntry={confirmHidden} // Use secureTextEntry to hide the content
              editable={true}
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity onPress={toggleConfirmVisibility} style={styles.eyeIconContainer}>
          
            </TouchableOpacity>
          </View>
        </View>    


    <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={[styles.input, password !== '' && styles.filledInput]}>
      
            <TextInput
              style={styles.inputText}
              placeholder="Enter password"
              keyboardType="default"
              secureTextEntry={passwordHidden} // Use secureTextEntry to hide the content
              editable={true}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={toggleSsnVisibility} style={styles.eyeIconContainer}>
            <Image source={eye}
                size={20}
                color="#0D1317"
                style={styles.eyeIcon}
                resizeMode="contain"
             />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={[styles.input, confirm !== '' && styles.filledInput]}>
            <TextInput
              style={styles.inputText}
              placeholder="Confirm password"
              keyboardType="default"
              secureTextEntry={confirmHidden} // Use secureTextEntry to hide the content
              editable={true}
              value={confirm}
              onChangeText={setConfirm}
            />
            <TouchableOpacity onPress={toggleConfirmVisibility} style={styles.eyeIconContainer}>
            <Image source={eye}
                size={20}
                color="#0D1317"
                style={styles.eyeIcon}
                resizeMode="contain"
             />
            </TouchableOpacity>
          </View>
        </View>

    <View style = {
      {
    
        "marginStart": 20,
        "marginTop": 24,
        marginRight: 20,
      }
    } >


<TouchableOpacity style = {
      {

        "paddingTop": 13,
        "width": "100%",
        
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }   onPress={signup}>
<Text style = {
      {
   //     "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Sign up </Text>
      </TouchableOpacity>
    </View>





    <View style = {
      {
        "flexDirection": "row",
        marginStart: 20,
        marginTop: 10,
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
   //     "fontFamily": "Uber Move",
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
     //   "fontFamily": "Uber Move",
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
   //     "fontFamily": "Uber Move",
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
    </View>
    </ScrollView>
   


    <Modal
  animationType="none"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    setModalVisible(!modalVisible);
  }}
>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ width: '80%', maxHeight: 330, backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#0d1317' }}>
            Incorrect details
          </Text>
          <Text style={{ fontSize: 18, color: '#0d1317' }}>
          {errorMessage}  </Text>
          <Text style={{ fontSize: 16, color: '#545454', marginTop: 30 }}>
            
          </Text>
          <TouchableOpacity
  style={{
    width: 62,
    height: 56,
    borderRadius: 10,
    backgroundColor: '#4460ef',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  }}
  onPress={() => setModalVisible(!modalVisible)} // Removed the redundant onPress={
>
  <Text style={{ color: '#fff', fontSize: 20 }}>OK</Text>
</TouchableOpacity>

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
        visible={modalVisibles}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1 }}>
          <WebView source={{ html: htmlContent }} />
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
  paddingfull:
  {
    paddingHorizontal: 20,
    
  },
  inputContainer: {
    marginTop: 10,
 
  },
  inputLabel: {
    marginBottom: 20,
    marginTop: 0,
    fontSize: 20,
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
  //  paddingLeft: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filledInput: {
    borderColor: '#4460EF', 
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
    paddingLeft: 10,
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
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 10,
    marginBottom: 20,
    height: 56,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      width: '80%',
  //    alignItems: 'flex-start',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      justifyContent: 'flex-end',
    },
    buttonClose: {
      backgroundColor: '#4460EF',
    },
    textStyle: {
      color: 'white',
      fontSize: 20,
    
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      fontSize: 18,
      textAlign: 'center',
    },

});

export default connect(null, { setEmail })(SignUp);