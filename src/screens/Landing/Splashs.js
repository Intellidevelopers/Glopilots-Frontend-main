import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splashs() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const fadeAnimation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000, // Adjust the duration as needed
      useNativeDriver: true,
    });

    const navigateToOnboarding = () => {
      navigation.navigate('Onboarding'); // Replace 'Onboarding' with the actual screen name
    };

    const animationSequence = Animated.sequence([
      fadeAnimation,
      Animated.delay(1000), // Adjust the delay before navigation as needed
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000, // Adjust the duration of fade-out as needed
        useNativeDriver: true,
      }),
    ]);

    animationSequence.start(navigateToOnboarding);

    return () => animationSequence.stop(); // Stop animation if the component unmounts
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Splash Screen
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0908',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
  },
});
