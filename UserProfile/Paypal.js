import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from '../Head';
import paypal from '../assets/icons/paypal.png';

const Paypal = ({ navigation }) => {
  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <Head title="Paypal" navigation={navigation} />
      <View style={styles.iconContainer}>
      <Image source={paypal} style={styles.imagecontrols} resizeMode="contain" />
  
      </View>
      <Text style={styles.email}>Femivanzekin@gmail.com</Text>
      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
//    alignItems: 'center', 
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  imagecontrols: {
    width: 100,
    height: 26,
  },
  email: {
    fontSize: 18,
    color: '#545454',
    marginBottom: 20,
    textAlign: 'center', // Center the email text
  },
  button: {
    marginTop: 10, // Add margin to the top of the button
    backgroundColor: '#ffffff',
    borderWidth: 2,
    alignItems: 'center', 
    borderColor: '#FF0000',
    fontSize: 20,
    borderRadius: 10,
    paddingTop: 14,
    paddingVertical: 0,
    textAlign: 'center',
    height: 56,
    marginRight: 20,
    marginLeft: 20,
 //   paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FF0000',
    fontSize: 20,
  },
});

export default Paypal;
