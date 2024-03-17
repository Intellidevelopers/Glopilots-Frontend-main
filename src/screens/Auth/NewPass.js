import React, { useState, useEffect } from 'react';
import {
  View,
  Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, Modal, Pressable
} from 'react-native';
import Head from '../../../Head';
import eye from '../../../assets/icons/eye.png';
//import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

const NewPass = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [ssn, setSsn] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true); 
  const [confirmHidden, setConfirmHidden] = useState(true); 

  const [modalVisible, setModalVisible] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 


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
  };



  const handleGoogleLogin = async () => {
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
  };

 
  const handleFacebookLogin = async () => {
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
  };

  const onPressLink = () => {
    navigation.navigate('Login');
  };
  
  
  
  const signup = () => {
  
      onPressLink();
    
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
    <Head title="Verify OTP" navigation={navigation} />
    <ScrollView>

    <View  style = {
      {
        marginTop: 20,
      }
    }>
      <Text style = {
      {
       
        textAlign: 'flex-start',
      //  fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 20,
      }
    }> Please enter a new password for your GloPilots account</Text>
   




  
    <View style={styles.inputContainer}>
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
    } > Reset Password </Text>
      </TouchableOpacity>
    </View>





    
   

   


  
     </View>
    </ScrollView>
   


 
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

export default NewPass;