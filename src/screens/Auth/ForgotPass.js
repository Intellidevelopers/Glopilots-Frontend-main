import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Head from '../../../Head';

import userProfileImage from '../../../assets/icons/pp.png';
import moment from 'moment';
import { AsyncStorage } from 'react-native';
import {CountryPicker} from "react-native-country-codes-picker";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import {Picker} from '@react-native-picker/picker';
import eye from '../../../assets/icons/eye.png';
import date from '../../../assets/date-c.png';
import user from '../../../assets/unuser.png';
import * as ImagePicker from 'expo-image-picker';

const ForgotPass = ({ navigation }) => {
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Dob, setDob] = useState('');
  const [ssn, setSsn] = useState('');
  const [ssnHidden, setSsnHidden] = useState(true);
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [vendor, setVendor] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const TabLabel = ({ focused, children }) => (
    <Text style={{ fontSize: 18, fontWeight: focused ? 'normal' : 'normal' }}>{children}</Text>
  );
  const [selectedAmount, setSelectedAmount] = useState('$25');
  


  const [activeIndex, setActiveIndex] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handlePress = (index) => {
    setActiveIndex(index);
    if (index === 2) {
      setShowPicker(true);
    } else {
      setShowPicker(false);
    }
  };

  const getOpacityStyle = (index) => {
    if (index === activeIndex) {
      return styles.activeOpacity;
    }
    return styles.opacity;
  };

const getLOpacityStyle = (index) => {
    if (index === activeIndex) {
      return styles.lactiveOpacity;
    }
    return styles.lopacity;
  };
  const getROpacityStyle = (index) => {
    if (index === activeIndex) {
      return styles.ractiveOpacity;
    }
    return styles.ropacity;
  };
const OfflineScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>In-Store Screen</Text>
     
    </View>
  );
};
const handleCheckout = () => {
      navigation.navigate('Checkout', { selectedAmount });
    };

const OnlineScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>In-Store Screen</Text>
      {/* Add  screen content here */}
    </View>
  );
};

const VenorScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    
           



          </View>
  );
};



  const onPressLink = () => {
    navigation.navigate('MapUser'); 
  };

  useEffect(() => {
    const getProfilePicture = async () => {
      try {
        const storedImageUri = await AsyncStorage.getItem('profileImage');
        if (storedImageUri) {
          setProfilePicture(storedImageUri);
        }
      } catch (error) {
        console.error('Error retrieving profile picture from AsyncStorage:', error);
      }
    };

    getProfilePicture();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      const imageUri = result.uri;
  
      // Save the image URI in AsyncStorage
      try {
        await AsyncStorage.setItem('profileImage', imageUri);
        console.log('Image URI saved in AsyncStorage:', imageUri);
  
        // Update the profile picture state with the new image URI
        setProfilePicture(imageUri);
      } catch (error) {
        console.error('Error saving image URI in AsyncStorage:', error);
      }
    }
  };
  

  const handleSaveChanges = () => {
    console.log('First Name:', Fname);
    console.log('Last Name:', Lname);
    console.log('Date of Birth:', Dob);
    console.log('Phone number:', phoneNumber);
    console.log('Gender:', gender);
    console.log('Profile Pic LINK:', profilePicture);
    console.log('Vendor:', vendor);
    
    
    onPressLink();
  };

  const toggleSsnVisibility = () => {
    setSsnHidden(!ssnHidden);
  };

  const onDateChange = (event, selected) => {
    setShowDatePicker(false);
    if (selected) {
      setSelectedDate(selected);
      const formattedDate = moment(selected).format('DD/MM/YYYY'); 
      setDob(formattedDate);
    }
  };
  

  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Head title="Fill Your Profile" navigation={navigation} />



          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 20, }}>
  <TouchableOpacity onPress={pickImage}>
    {profilePicture ? (
      <Image source={{ uri: profilePicture }} style={styles.mprofilePicture} />
    ) : (
      <Image source={user} style={{ width: 104, height: 104 }} resizeMode='contain' />
    )}
  </TouchableOpacity>
</View>


         
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>First Name</Text>
            <View style={[styles.input, Fname !== '' && styles.filledInput]}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter your first name"
                keyboardType="email-address"
                placeholderTextColor="#545454"
                editable={true}
                value={Fname}
                onChangeText={setFname}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <View style={[styles.input, Lname !== '' && styles.filledInput]}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter your last name"
                keyboardType="default"
                placeholderTextColor="#545454"
                editable={true}
                value={Lname}
                onChangeText={setLname}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Date of Birth</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <View style={[styles.input, Dob !== '' && styles.filledInput]}>
                <Text style={styles.dinputText}>{Dob || 'Select Date of Birth'}</Text>
              
                <TouchableOpacity onPress={toggleSsnVisibility} style={styles.eyeIconContainer}>
                <Image source={date} size={20} color="#0D1317" style={styles.eyeIcon} resizeMode="contain" />
              </TouchableOpacity>
              </View>
              
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>


          <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          maxWidth: 388,
          borderColor: '#EEEEEE',
          backgroundColor: '#EEEEEE',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 10,
          color: '#545454',
          height: 58,
          marginHorizontal: 20,
        
        }}
      >
        <Text style={{

              top: 18,
    color: '#545454',
    fontSize: 18,
    flex: 1,
        }}>
          {countryCode} 
        </Text>
      </TouchableOpacity>

      
      <CountryPicker
    show={show}
    lang={'en'}
    style={{
        // Styles for whole modal [View]
        modal: {
            height: '100%',
          
        },
        // Styles for modal backdrop [View]
        backdrop: {
        },
        // Styles for bottom input line [View]
        line: {
         backgroundColor: '#EEEEEE',
        },
        // Styles for list of countries [FlatList]
        itemsList: {
      fontSize: 20,
        },
        // Styles for input [TextInput]
        textInput: {
          height: 58,
        fontSize: 18,
        color: '#EEEEEE',
        },
        // Styles for country button [TouchableOpacity]
        countryButtonStyles: {
            height: 50, 
           backgroundColor: 'white',
           borderBottomWidth: 1,
           borderBottomColor: '#EEEEEE',
           borderRadius: 10,
        },
        // Styles for search message [Text]
        searchMessageText: {

        },
        // Styles for search message container [View]
        countryMessageContainer: {
        
        },
        // Flag styles [Text]
        flag: {
          
          width: 20,
          height: 20,
          borderRadius: 20,
         
        },
        // Dial code styles [Text]
        dialCode: {
    
        },
        // Country name styles [Text]
        countryName: {

        }
    }}
    pickerButtonOnPress={(item) => {
        setCountryCode(item.dial_code);
        setShow(true);
    }}
/>

    </View>



            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={[styles.input, phoneNumber !== '' && styles.filledInput]}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
                editable={true}
                placeholderTextColor="#545454"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              <TouchableOpacity onPress={toggleSsnVisibility} style={styles.eyeIconContainer}>
                <Image source={eye} size={20} color="#0D1317" style={styles.eyeIcon} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Gender</Text>
          <View style={[styles.input, gender !== '' && styles.filledInput, styles.pickerContainer]}>
          <Picker
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              style={styles.picker}
              itemStyle={styles.pickerItem} // Add this line to set the font size
            >
              <Picker.Item label="Select Gender" value="0" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Others" value="others" />
            </Picker>
          </View>
        
            
           
          </View>

        <View style={styles.pageContainer}>
      <View style={styles.vrcontainer}>
        <TouchableOpacity
          style={getLOpacityStyle(0)}
          onPress={() => handlePress(0)}
        >
           <Text style={{
            textAlign: 'center',
            fontSize: 18,
          }}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getOpacityStyle(1)}
          onPress={() => handlePress(1)}
        >
          <Text style={{
            textAlign: 'center',
            fontSize: 18,
          }}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getROpacityStyle(2)}
          onPress={() => handlePress(2)}
        >
          <Text style={{
            textAlign: 'center',
            fontSize: 18,
          }}>Vendor</Text>
        </TouchableOpacity>
      </View>
      {showPicker && (
        <View style={styles.inputContainer}>

        <Text style={styles.inputLabel}>Vendor</Text>
        <View style={[styles.input, vendor !== '' && styles.filledInput, styles.pickerContainer]}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => setVendor(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Vendor Type" value="0" />
            <Picker.Item label="Hospitality" value="hospitality" />
            <Picker.Item label="Food & Grocery" value="food" />
            <Picker.Item label="Package" value="package" />
          </Picker>
        </View>
        </View>
      )}
    </View>






          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
              <Text style={styles.saveButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 0,
    color: '#545454',
  },
  containersd: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  paddingfull: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 10,
    color: '#545454',
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 18,
    marginHorizontal: 20,
    color: '#545454',
  },
  input: {
    maxWidth: 388,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#545454',
    height: 58,
    marginHorizontal: 20,
    flexDirection: 'row',
  },

  vrcontainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  opacity: {
    backgroundColor: '#eee',
    padding: 10,
    borderLeftWidth: 1,
    borderColor: '#eee',
    width: '33.3%',
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  

 lopacity: {
    backgroundColor: '#eee',
    padding: 10,
    borderLeftWidth: 1,
    borderColor: '#eee',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '33.3%',
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  ropacity: {
    backgroundColor: '#eee',
    padding: 10,
    borderLeftWidth: 1,
    borderColor: '#eee',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '33.3%',
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },

  
  activeOpacity: {
    backgroundColor: '#4460EF',
    padding: 10,
    color: '#fff',
    borderLeftWidth: 1,
      height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
    width: '33.3%',
  
    borderRightWidth: 1,
  },

  lactiveOpacity: {
    backgroundColor: '#4460EF',
    padding: 10,
    borderLeftWidth: 1,
      height: 48,
      color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
     borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '33.3%',
  
    borderRightWidth: 1,
  },
  ractiveOpacity: {
    backgroundColor: '#4460EF',
    padding: 10,
    borderLeftWidth: 1,
      height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
    width: '33.3%',
   borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderRightWidth: 1,
  },

  filledInput: {
    borderColor: '#4460EF',
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
    flex: 1,
    color: '#545454',
  },
  pickerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },

 

  
  picker: {
    flex: 1,
    color: '#545454',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  pickerItem: {
    fontSize: 20, // Set the desired font size for Picker text
  },

  dinputText: {
    top: 18,
    color: '#545454',
    fontSize: 18,
    flex: 1,
  },
  eyeIconContainer: {
    paddingRight: 10,
  },
  eyeIcon: {
    marginRight: 5,
    width: 24,
    height: 24,
    top: 15,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
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
  pickerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  picker: {
    flex: 1,
    color: '#545454',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  mprofilePicture: {
    width: 104,
    height: 104,
    borderRadius: 75,
  },
});

export default ForgotPass;