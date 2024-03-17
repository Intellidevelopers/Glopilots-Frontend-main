import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'; // Import SafeAreaView
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Head from '../Head';

const Cash = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idCard, setIdCard] = useState('');
  const [ssn, setSsn] = useState('');
  const [ssnHidden, setSsnHidden] = useState(true); // State to manage password visibility

  const handleSaveChanges = () => {
    // Perform actions to save changes
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('ID Card:', idCard);
    console.log('Social Security Number:', ssn);
  };

  const toggleSsnVisibility = () => {
    setSsnHidden(!ssnHidden);
  };

  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return;
  } else {
    return (
      <SafeAreaView style={styles.container}> 
        
        <View style={styles.contentContainer}> 
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Choose amount</Text>
            <Text style={styles.inputLabel}>Plan ahead with GloPilots cash. You can use it with coupon or other promos</Text>
            <Text>Automatically Add GloPilots cash when your balance is lower than $15</Text>
            <View style={[styles.input, email !== '' && styles.filledInput]}>
            <TextInput
  style={styles.inputText}
  placeholder="Enter Code"
  keyboardType="numeric" 
  secureTextEntry={true} 
  editable={true}
  value={email}
  onChangeText={setEmail}
/>

            </View>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
              <Text style={styles.saveButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    color: '#545454',

  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filledInput: {
    borderColor: '#4460EF', // Change the border color when text is present
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
  },
  inputText: {
    fontSize: 16,
    paddingLeft: 10,
    flex: 1, // Add flex: 1 to allow the input to occupy remaining space
  },
  eyeIconContainer: {
    paddingRight: 10,
  },
  title: {
    marginRight: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '95%',
    alignItems: 'center',
   // marginTop: 5,
 
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Cash;
