import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
//import { Notifier, NotifierComponents } from 'react-native-notifier';
// Import your logo image

import { useLocation } from '../../../Constants/LocationContext';

import { Notifier, NotifierComponents } from 'react-native-notifier';
import Logo from '../../../assets/icons/Logo.png'; 

export default function Auth({ navigation }) {


  const { coordinates, setCoordinates } = useLocation();

  useEffect(() => {
    // Use the coordinates or update them as needed
    console.log('Current Coordinates:', coordinates.latitude, coordinates.longitude);
    
    // Example: Update coordinates
    // setCoordinates(newLatitude, newLongitude);
  }, [coordinates]);

  
 // const onPressLogin = () => {
    // Handle login button press here
    // You can navigate to the login screen or perform any other action
 // };

//  const onPressSignUp = () => {
    // Handle sign-up button press here
    // You can navigate to the sign-up screen or perform any other action
  //};



 


  const onPressLogin = () => {
    navigation.navigate('Login'); 
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
  
      <View style={styles.header}>
      
        <Image source={Logo} style={styles.logo} />
    </View>


        <View style={styles.circle}>
       
          <Text style={styles.circleText}>
            Let's you in
          </Text>
          
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonblue} onPress={onPressLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            </View>
          
            <TouchableOpacity style={styles.buttongrey} onPress={onPressSignUp}>
              <Text style={styles.Signup}>Sign up</Text>
            </TouchableOpacity>
           
         
        </View>

      <View style={styles.content}></View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width; 


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  header: {
    height: '68%', 
    backgroundColor: '#4460EF',
  },  

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleText: {
    fontSize: 32,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttongrey: {
    
    backgroundColor: '#EEEEEE',
   
   height: 56,
   width: '42%',
  marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: '#0D1317',
  
  },
  buttonblue: {
    backgroundColor: '#4460EF',
   height: 56,
   width: '42%',
  marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  circle: {
    backgroundColor: 'white',
    width: 750,
    height: 750,
    borderRadius: 600,
    bottom: 50,
    alignItems: 'center', 
    alignSelf: 'center', 
    
    
    
  },

  
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  Signup: {
    color: '#0D1317',
    fontSize: 20,
  },
  logo: {
    width: 320, 
    height: 84, 
    flex: 1,
    justifyContent: 'center',
    bottom: 0, 
    alignSelf: 'center',
    resizeMode: 'contain',

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    //marginBottom: 15,
   // marginHorizontal: 16,
 //  overflow: 'hidden',
    height: 58,
    borderRadius: 10,
    flexDirection: 'row', 
   // bottom: 300,
    justifyContent: 'space-evenly', 
  },
});

