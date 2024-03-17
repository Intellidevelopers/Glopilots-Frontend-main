import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Head from '../Head';
import { useSelector, useDispatch } from 'react-redux';

import badge from '../assets/icons/mail.png';
import phone from '../assets/icons/phone.png';
import id from '../assets/icons/id.png';
import ssnicon from '../assets/icons/ssn.png';
import eye from '../assets/icons/eye.png';


const MyInformation = ({
  navigation
}) => {


  const emails = useSelector(state => state.email);
  const phonenumber = useSelector(state => state.phonenumber);
  const id_nom = useSelector(state => state.id_card);
  const ssnn = useSelector(state => state.ssn);



  const [email, setEmail] = useState(emails);
  const [phoneNumber, setPhoneNumber] = useState(phonenumber);
  const [idCard, setIdCard] = useState(id_nom);
  const [ssn, setSsn] = useState(ssnn);
  const [ssnHidden, setSsnHidden] = useState(true); // State to manage password visibility
 
  const toggleSsnVisibility = () => {
    setSsnHidden(!ssnHidden);
  };


  const handleSaveChanges = () => {
    // Perform actions to save changes
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('ID Card:', idCard);
    console.log('Social Security Number:', ssn);
  };
  
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return ;
  } else {
    return (
      <View style={styles.container}>
        <Head title="My Information" navigation={navigation} />
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={[styles.input, email !== '' && styles.filledInput]}>
          <Image source={badge} color="#0D1317" style={styles.inputIcon}  resizeMode="contain"/>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Email"
              keyboardType="email-address"
              editable={true}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <View style={[styles.input, phoneNumber !== '' && styles.filledInput]}>
          <Image source={phone} size={20} color="#0D1317" style={styles.inputIcon} resizeMode="contain"/>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Phone Number"
              keyboardType="phone-pad"
              editable={true}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>ID Card</Text>
          <View style={[styles.input, idCard !== '' && styles.filledInput]}>
          <Image source={id} color="#0D1317" style={styles.inputIcon} resizeMode="contain" />
            <TextInput
              style={styles.inputText}
              placeholder="Enter ID Card"
              editable={true}
              value={idCard}
              onChangeText={setIdCard}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Social Security Number</Text>
          <View style={[styles.input, ssn !== '' && styles.filledInput]}>
          <Image source={ssnicon} style={styles.inputIcon} />
            <TextInput
              style={styles.inputText}
              placeholder="Enter Social Security Number"
              keyboardType="numeric"
              secureTextEntry={ssnHidden} // Use secureTextEntry to hide the content
              editable={true}
              value={ssn}
              onChangeText={setSsn}
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

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
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
    marginBottom: 5,
    fontSize: 18,
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
    paddingLeft: 30,
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
 //   marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', // Add justifyContent to center vertically
    borderRadius: 10,
    marginBottom: 20,
    height: 56,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default MyInformation;
