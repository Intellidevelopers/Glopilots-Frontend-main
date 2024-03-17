import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';



const Onboarding = ({navigation}) => {

  const onPressLogin = () => {
    navigation.navigate('Auth'); 
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp'); 
  };

 
    return (
      <View style={styles.container}>
        <StatusBar style="dark" />
        

        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/icons/Logo.png')} style={styles.logo} />
        </View>
        <View style={styles.onboardingContainer}>
          <Image source={require('../../../assets/icons/Driving.png')} style={styles.onboardingImage} />
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>Move Around Safely</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPressLogin} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
            <View style={styles.buttonAr}> 
            <Image source={require('../../../assets/right-white.png')} style={{ width: 9, height: 18}} />
            
            </View>

          </TouchableOpacity>

        </View>

        
       
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4460EF',

  },
  logoContainer: {
    marginTop: 50,
    marginBottom: 35,
    alignItems: 'center',
  },
  

  logo: {
    width: 320,
    height: 84,
  },
  content: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: '#FFFFFF',
    
  },
  buttonContainer: {
    marginBottom: 35,
    marginHorizontal: 16,
    overflow: 'hidden',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0D1317',
    paddingTop: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 56,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  
  buttonAr: {
    color: '#FFFFFF',
    fontSize: 14,
    alignItems: 'flex-end',
    top: -20,
  },
  onboardingContainer: {
    marginTop: 30,

    alignItems: 'center',
  },
  onboardingImage: {
    width: 284,
    height: 284,
  
  },
});

export default Onboarding;
