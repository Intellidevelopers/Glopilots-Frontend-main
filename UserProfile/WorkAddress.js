import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'; // Import SafeAreaView
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Head from '../Head';
import visa from '../assets/icons/visa.png';
import tick from '../assets/icons/cardtick.png';
import camera from '../assets/icons/camera.png';
import regi from '../assets/icons/regi.png';

const WorkAddress = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idCard, setIdCard] = useState('');
  const [ssn, setSsn] = useState('');
  const [ssnHidden, setSsnHidden] = useState(true); 
  const handleSaveChanges = () => {
    
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
        <Head title="Add Work Address" navigation={navigation} />
        <View style={styles.contentContainer}> 
          <View style={styles.inputContainer}>
           
            <Text style={styles.inputLabel}>Street Address</Text>
            <View style={[styles.input, email !== '' && styles.filledInput]}>
            <TextInput
  style={styles.inputText}
  placeholder="Enter Street Address"
  keyboardType="numeric" 
  secureTextEntry={true} 
  editable={true}
  value={email}
  onChangeText={setEmail}
/>

            </View>

            <Text style={styles.inputLabel}>City</Text>
            <View style={[styles.input, email !== '' && styles.filledInput]}>
            <TextInput
  style={styles.inputText}
  placeholder="City"
  keyboardType="numeric" 
  secureTextEntry={true} 
  editable={true}
  value={email}
  onChangeText={setEmail}
/>

            </View>
         
  







        
      <View style={styles.inputContainers}>
      
       
        
        <View style={[styles.inputs]}>
        <Text style={styles.inputTextOverlay}>State</Text>
        <Text style={styles.inputSpacert}></Text>
          <TextInput
            style={styles.inputText}
            placeholder="State"
            maxLength={5}
            editable={true}
            value=""
        
          />
    
         </View>

        <Text style={styles.inputSpacer}></Text>
        <View style={[styles.inputs]}>
          <Text style={styles.inputTextOverlay}>Zip</Text>
          <TextInput
            style={[styles.inputText, styles.cvvInput]}
            placeholder="Zip"
            keyboardType="numeric"
            maxLength={3}
            secureTextEntry={true}
            editable={true}
            value=""
          />
       
            </View>
      </View>

           
           <Text style={styles.inputLabel}>Country</Text>
           <View style={[styles.input, email !== '' && styles.filledInput]}>
           <TextInput
 style={styles.inputText}
 placeholder="Country"
 keyboardType="numeric" 
 secureTextEntry={true} 
 editable={true}
 value={email}
 onChangeText={setEmail}
/>

           </View>

           <View style = {
      {
        "flexDirection": "row",
        marginTop: 10,
      }
    } >
    <View style = {
      {
        "marginTop": 15,
        "backgroundColor": "rgba(84, 84, 84, 255)",
        "width": '41%',
        "height": 1.5
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Uber Move",
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
        "width": '41%',
        "height": 1.5
      }
    }
    />
    </View>




    <View style = {
      {
        
       
        "marginTop": 20,
       
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
    }  >

   
<Image
                source={require('../assets/location.png')}
                style={{ width: 24, height: 24 }} resizeMode='contain'
              />    
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(13, 19, 23, 255)",
        "marginStart": 8
      }
    } > Use Current Address </Text>
    </TouchableOpacity>
    </View>



         </View>

          <View style={styles.bottomContainer}>
           

          <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Address</Text>
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
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  
  contentContainers: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'flex-end',
    fontSize: 18,
    color: '#545454',

  },
  inputs: {
    width: '48.5%',
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
    height: 56,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },

  input: {
    width: '100%',
    height: 58,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filledInput: {
    borderColor: '#4460EF', 
  },
  inputContainers: {
    marginTop: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
  },
  inputText: {
    fontSize: 20,
    paddingLeft: 10,
    flex: 1,
  },
  eyeIconContainer: {
    paddingRight: 10,
  },
  title: {
    marginRight: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
    height: 58,
    justifyContent: 'center',
    marginBottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  saveButtonText: {
    color: 'white',
    justifyContent: 'center',
    fontSize: 18,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  
  inputTextOverlay: {
    position: 'absolute',
    top: -35,
    fontSize: 18,
    color: '#545454',
  },
  inputSpacer: {
    marginHorizontal: 5,
  },
  inputSpacert: {
    marginVertical: 5,
  },
});

export default WorkAddress;
