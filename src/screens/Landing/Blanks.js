import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import { API_URL, OTHER_CONSTANT } from '../../../constants';
import Toast from 'react-native-toast-message'; // Import the toast message library

const Blanks = ({navigation}) => {

//  const navigation = useNavigation();

  const [showDarkScreen, setShowDarkScreen] = useState(true);
  const fadeAnim = new Animated.Value(0);
  const imageSize = new Animated.ValueXY({ x: 40, y: 40 });

  useEffect(() => {
    // Show the dark screen for 2 seconds
    setTimeout(() => {
      setShowDarkScreen(false);
    }, 1000);

    const animations = [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(imageSize, {
        toValue: { x: 500, y: 500 },
        duration: 2000,
        useNativeDriver: false,
      }),
    ];

    Animated.parallel(animations).start();

    // Check the response from API_URL
    fetch(API_URL)
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {
            navigation.navigate('Onboarding'); // Navigate to the Onboarding screen
          }, 1000);
        } else {
          // Display a toast message asking users to check their internet connection
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Please check your internet connection.',
            position: 'bottom',
            visibilityTime: 10000,
          });
        }
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {showDarkScreen && <View style={styles.darkScreen} />}
      <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
        <Animated.Image
          source={require('../../../assets/icons/Logo.png')}
          style={[styles.image, { width: imageSize.x, height: imageSize.y }]}
          resizeMode="contain"
        />
      </Animated.View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1317',
  },
  darkScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0D1317',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '150%',
    height: '150%',
  },
});

export default Blanks;
