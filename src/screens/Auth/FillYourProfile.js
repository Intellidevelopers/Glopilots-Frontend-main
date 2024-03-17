import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView,
  Modal, ActivityIndicator, 
} from 'react-native';
import PhoneNumber from './PhoneNumber';
//import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Head from '../../../Head';
import { useAuth } from '../../../Constants/AuthContext';
import * as Location from 'expo-location';
import { API_URL, OTHER_CONSTANT } from '../../../constants';

//import userProfileImage from '../../..Navigation';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CountryPicker} from "react-native-country-codes-picker";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import {Picker} from '@react-native-picker/picker';
import date from '../../../assets/date-c.png';
import user from '../../../assets/unuser.png';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';

const FillYourProfile = ({ navigation, route }) => {


  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    // Fetch the authentication token when the component mounts
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          setAuthToken(token);
        }
      } catch (error) {
        console.error('Error fetching authToken:', error);
      }
    };

    fetchToken();
  }, []);


  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');

  // STATE cALL
  const auth_token = useSelector(state => state.auth_token);
  const state_longi = useSelector(state => state.logitude);
  const state_lati = useSelector(state => state.latitude);

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
 // const { email, password } = route.params;

  const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const [phoneNumber, setPhoneNumber] = useState('');
 // const { token, setAuthToken } = useAuth();
  const [Dob, setDob] = useState('');
  const [ssn, setSsn] = useState('');
  const [ssnHidden, setSsnHidden] = useState(true);
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [vendor, setVendor] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
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



  const [phoneCountryCode, setPhoneCountryCode] = useState("PK");
  const [phoneCountryCallingCode, setPhoneCountryCallingCode] = useState("92");
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  const [phoneNo, setPhoneNo] = useState("123123");

  const onPressKeypad = (number) => {
    if (isNaN(number)) {
      switch (number) {
        case "delete":
          setPhoneNo(phoneNo.slice(0, phoneNo.length - 1));
          break;

        default:
          break;
      }
    } else {
      setPhoneNo(`${phoneNo}${number}`);
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

  const getLOpacityColor = (index) => {
    if (index === activeIndex) {
      return styles.WhiteText;
    }
    return styles.BlackText;
  };
  const getROpacityColor = (index) => {
    if (index === activeIndex) {
      return styles.WhiteText;
    }
    return styles.BlackText;
  };
  const getMOpacityColor = (index) => {
    if (index === activeIndex) {
      return styles.BlackText;
    }
    return styles.WhiteText;
  };

const onPressLink = () => {
  navigation.navigate(MapUser);
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
  

  // const handleSaveChanges = () => {


    
  //   console.log('First Name:', Fname);
  //   console.log('Last Name:', Lname);
  //   console.log('Date of Birth:', Dob);
  //   console.log('Phone number:', phoneNumber);
  //   console.log('Gender:', gender);
  //   console.log('Profile Pic LINK:', profilePicture);
  //   console.log('Vendor:', vendor);
    
    
  //   onPressLink();
  // };
  const [loading, setLoading] = useState(false);


  const handleSaveChanges = async () => {

    setLoading(true);

    setLoading(true);

  try {
    // Request permission to access the device's location
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.error('Location permission denied');
      // Handle the case where the user denies location permission
      return;
    }

    // Get the current location
    let location = await Location.getCurrentPositionAsync({});


   
      const apiUrl = `${API_URL}/update-user`;
     
      const requestBody = {
        name: Fname + ' ' + Lname,
        dob: Dob,
        gender: gender,
        location: {
          latitude: state_lati,
          longitude: state_longi,
        }, 
        phone: phoneNumber,
        userType: vendor, 
      };
  
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${auth_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      const responseData = await response.json().catch(error => {
        console.error('Error parsing JSON response:', error);
        return null; // or handle the error in an appropriate way
      });
      
  
      // Check if the request was successful
      if (response.ok) {
        console.log('Profile information updated successfully:', responseData);
        // Perform navigation or any other actions upon successful update
        onPressLink(); 
      } else {
        console.error('Error updating profile information:', responseData);
        // Handle the error scenario, such as displaying an error message to the user

   //     onPressLink(); 
      }
    } catch (error) {
      console.log('An error occurred while updating profile information:', error);
      // Handle any unexpected errors
  //    onPressLink(); 
    }

    finally {
      setLoading(false);
    }


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
     
    </View>



            <Text style={styles.inputLabel}>Phone Number</Text>
           

          
            
           
            <View style={[styles.input, phoneNumber !== '' && styles.filledInput]}>
              
            
            <PhoneNumber />
<TextInput
                style={styles.inputText}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
                editable={true}
                placeholderTextColor="#545454"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
             
            </View>
          </View>

          <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Gender </Text>
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
           <Text style={getLOpacityColor(0)}>
            User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getOpacityStyle(1)}
          onPress={() => handlePress(1)}
        >
          <Text style={getLOpacityColor(1)}>Ride</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={getROpacityStyle(2)}
          onPress={() => handlePress(2)}
        >
          <Text style={getROpacityColor(2)}>Vendor</Text>
        </TouchableOpacity>
      </View>
      {showPicker && (
        <View style={styles.inputContainer}>

        <Text style={styles.inputLabel}>Vendor</Text>
        <View style={[styles.input, vendor !== '' && styles.filledInput, styles.pickerContainer]}>
          <Picker
            selectedValue={vendor}
            onValueChange={(itemValue, itemIndex) => setVendor(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Vendor Type" value="0" />
            <Picker.Item label="Hospitality" value="propertyOwner" />
            <Picker.Item label="Food & Grocery" value="foodVendor" />
            <Picker.Item label="Package" value="dispatchRider" />
          {/* <Picker.Item label="Package" value="scooterOwner" /> */}  
            
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


        <Modal
  animationType="none"
  transparent={true}
  visible={loading}  
  onRequestClose={() => {
    // Handle modal close if needed
    setLoading(false);  // Close the modal when loading is done
  }}
>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <ActivityIndicator size="large" color="#4460EF" />
      </View>
    </Modal>
     


      </ScrollView>
    );
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
    borderBottomWidth: 2,
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  ropacity: {
    backgroundColor: '#eee',
    padding: 10,
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

  WhiteText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  BlackText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },

  countryPickerButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});

export default FillYourProfile;