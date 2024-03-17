import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import CountryPicker from "react-native-country-picker-modal";
import { Ionicons } from "@expo/vector-icons"; // Make sure to import the correct icon library

const PhoneNumber = ({ navigation }) => {
  const [phoneCountryCode, setPhoneCountryCode] = useState("PK");
  const [phoneCountryCallingCode, setPhoneCountryCallingCode] = useState("92");
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");

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

  return (
    <View style={styles.container}>
      
        <TouchableOpacity
          onPress={() => setShowPhoneCountryPicker(true)}
          style={styles.countryPickerButton}
        >
          <CountryPicker
            countryCode={phoneCountryCode}
            visible={showPhoneCountryPicker}
            onSelect={(country) => {
              setPhoneCountryCode(country.cca2);
              setPhoneCountryCallingCode(country.callingCode);
              setShowPhoneCountryPicker(false);
            }}
            withFilter={true}
          />
         
          <Ionicons name="chevron-down" size={24} color="black" /> 
          <Text style={styles.inputLabel}>
            +{phoneCountryCallingCode}
          </Text>
        </TouchableOpacity>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  //  flex: .5,
    backgroundColor: '#eee',
    justifyContent: "center",
    color: 'black',
  },
  containersd: {
 //   flex: 1,
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
    fontSize: 18,
    bottom: -3,
    marginHorizontal: 10,
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
   countryPickerButton: {
    flexDirection: "row",
 //   alignItems: "center",
   // marginRight: 10,
  },
});
export default PhoneNumber;
