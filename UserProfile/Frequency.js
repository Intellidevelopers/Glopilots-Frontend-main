
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from '../Head';

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

const Frequency = ({ navigation }) => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const handleSaveChanges = (amount) => {
    setSelectedAmount(amount === selectedAmount ? '' : amount);
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    const handleCheckout = () => {
      navigation.navigate('Checkout', { selectedAmount });
    };

    return (
      <View style={styles.container}>
        <Head title="Payment Frequency" navigation={navigation} />
        <Text style={styles.inputLabel}>
            Choose to pay once for all your day's rides or after each ride
            </Text>
            <Text style={styles.inputLabel}>
            Applicable to rides taken with Mastercard, Visa American Express, Apple Pay and Discover on your personal profile
            </Text>
            <Text style={styles.inputLabels}>Learn more about Payment Frequency</Text>
            <Text style={styles.title}>When you'll pay</Text>
            <Text style={styles.inputLabelss}>Choose when to pay for your rides</Text>        
        <View style={[styles.radioButton, selectedAmount === '$25' && styles.radioButtonSelected]}>
          <TouchableOpacity
            style={styles.radioButtonCheckbox}
            onPress={() => handleSaveChanges('$25')}
          >
            {selectedAmount === '$25' && <Icon name="circle" size={16} color="#4460EF" />}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>You're paying after each ride</Text>
        </View>

        <View style={[styles.radioButtonx, selectedAmount === '$50' && styles.radioButtonSelected]}>
          <TouchableOpacity
            style={styles.radioButtonCheckbox}
            onPress={() => handleSaveChanges('$50')}
          >
            {selectedAmount === '$50' && <Icon name="circle" size={16} color="#4460EF" />}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>You're paying once for all rides you take in a day</Text>
        </View>
        <View style={styles.bottomContainer}>
       
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 0,
    fontFamily: 'Poppins_400Regular',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  inputLabel: {
    color: '#545454',
    fontSize: 18,
//    marginBottom: 5,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  inputLabelss: {
    color: '#545454',
    fontSize: 18,
    marginBottom: 5,
    marginRight: 80,
    marginLeft: 20,
  },
  inputLabels: {
    color: 'blue',
    fontSize: 18,
    marginBottom: 5,
    marginRight: 80,
    marginTop: 10,
    marginLeft: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
    marginBottom: 0,
    marginRight: 20,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  radioButtonx: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
    marginBottom: 0,
    marginRight: 20,
//    borderBottomColor: '#EEEEEE',
    paddingBottom: 20,
//    borderBottomWidth: 1,
  },
  radioButtonCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 20,
    marginRight: 20,
  },
  radioButtonSelected: {
    backgroundColor: '#FFFFFF',
  },
  radioButtonTextSelected: {
    color: 'white',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '90%',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
  additionalSection: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  additionalSectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
  },
  additionalSectionText: {
    fontSize: 18,
    color: '#545454',
    flex: 1,
  },
  additionalSectionSwitch: {
    position: 'absolute',
    right: 10,
    top: -25,
  },
});
export default Frequency;