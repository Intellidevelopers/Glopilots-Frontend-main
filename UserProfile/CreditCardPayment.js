import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from '../Head';
import Count from './Count';
import visa from '../assets/icons/visa.png';
import tick from '../assets/icons/cardtick.png';
import camera from '../assets/icons/camera.png';
import regi from '../assets/icons/regi.png';

const countries = [
  { name: 'Afghanistan', flag: '🇦🇫' },
  { name: 'Algeria', flag: '🇩🇿' },
];

const CustomDropdown = ({ selectedItem, onValueChange }) => {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries.find(country => country.name === 'Afghanistan'));

  const handleToggleDropdown = () => {
    setVisible(!visible);
  };

  const handleSelectItem = (item) => {
    const selectedCountry = countries.find(country => country.name === item);
    setSelectedCountry(selectedCountry);
    onValueChange(item);
    setVisible(false);
  };

  const renderCountrySections = () => {
    const sections = {};
    countries.forEach((country) => {
      const firstLetter = country.name.charAt(0);
      if (!sections[firstLetter]) {
        sections[firstLetter] = [];
      }
      sections[firstLetter].push(country);
    });

    return Object.keys(sections).map((letter) => (
      <View key={letter}>
        <Text style={styles.sectionHeader}>{letter}</Text>
        {sections[letter].map((country, index) => {
          const isSelected = country.name === selectedItem;
          return (
            <TouchableOpacity
              key={index}
              style={styles.modalItem}
              onPress={() => handleSelectItem(country.name)}
            >
              <Text style={styles.modalItemText}>
                {`${country.flag} ${country.name} `}
                {isSelected && <Icon name="check" size={16} color="#4460EF" />}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    ));
  };

  return (
    <View>
      <TouchableOpacity style={styles.dropdownIconContainer} onPress={handleToggleDropdown}>
        <View style={styles.flagClass}>
          <Text style={styles.countryText}>{selectedItem}</Text>
          <Text>{selectedCountry.flag}</Text>
          <Icon name="chevron-down" size={16}  style={styles.dropdownIcon} />
        </View>
        <View style={{ position: 'absolute', right: 0 }}>
            <Icon name="chevron-down" size={16}  />
          </View>
      </TouchableOpacity>
      <Modal visible={visible} transparent={true}>
        <TouchableWithoutFeedback onPress={handleToggleDropdown}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Select Country</Text>
          <ScrollView>{renderCountrySections()}</ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const CreditCardPayment = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [issuingCountry, setIssuingCountry] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSavePayment = () => {
    // Perform actions to save payment details
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
    console.log('Issuing Country:', issuingCountry);
    console.log('Zip Code:', zipCode);
  };

  return (
    <View style={styles.container}>
      <Head title="Edit Visa 1950" navigation={navigation} />
      <View style={styles.inputContainers}>
        <Text style={styles.inputLabel}>Card Number</Text>
        <View style={[styles.oinput, cardNumber !== '' && styles.filledInput]}>
        <Image source={visa} style={styles.imagecontrols} resizeMode="contain" />
          <TextInput
            style={styles.inputText}
            placeholder="Enter Card Number"
            keyboardType="numeric"
            maxLength={16}
            editable={true}
            value={cardNumber}
            onChangeText={setCardNumber}
          />
        <Image source={camera} style={styles.camera} resizeMode="contain" />
         </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTextOverlay}>Expiration Date</Text>
        <View style={[styles.input, expirationDate !== '' && styles.filledInput]}>
          <TextInput
            style={[styles.inputText, styles.expirationDateInput]}
            placeholder="MM/YY"
            maxLength={5}
            editable={true}
            value={expirationDate}
            onChangeText={setExpirationDate}
          />
      <Image source={regi} style={styles.camera} resizeMode="contain" />
         </View>

        <Text style={styles.inputSpacer}></Text>

        <Text style={styles.inputLabel}></Text>
        <View style={[styles.input, cvv !== '' && styles.filledInput]}>
          <Text style={styles.inputTextOverlay}>CVV</Text>
          <TextInput
            style={[styles.inputText, styles.cvvInput]}
            placeholder="CVV"
            keyboardType="numeric"
            maxLength={3}
            secureTextEntry={true}
            editable={true}
            value={cvv}
            onChangeText={setCvv}
          />
       
       <Image source={regi} style={styles.camera} resizeMode="contain" />
        </View>
      </View>

   
      <View>
      <View style={styles.inputContainers}>
        <Text style={styles.inputLabel}>Issuing Country</Text>
        </View>
      <Count onValueChange={(selectedCountry) => console.log('Selected Country:', selectedCountry)} />
      </View>
      <View style={styles.inputContainers}>
        <Text style={styles.inputLabel}>Zip Code</Text>
        <View style={[styles.oAinput, zipCode !== '' && styles.filledInput]}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Zip Code"
            keyboardType="numeric"
            maxLength={5}
            editable={true}
            value={zipCode}
            onChangeText={setZipCode}
          />
        </View>
        <View style={styles.smallTextv}>
        <Image source={tick} style={styles.tick} resizeMode="contain" />
        <Text>Your payment info will be stored securely</Text>



       
      </View>
      
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSavePayment}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

































      
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  inputContainers: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 18,
  },
  input: {
    width: '45.5%',
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  oinput: {
    maxWidth: 388,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
    height: 56,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  oAinput: {
    maxWidth: 388,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
    height: 56,
    flexDirection: 'row',
    marginRight: 20,
    paddingRight: 10,
  },
  filledInput: {
    borderColor: '#4460EF',
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
  },
  inputText: {
    fontSize: 16,
    paddingLeft: 10,
    flex: 1,
  },
  inputTextOverlay: {
    position: 'absolute',
    top: -20,
    fontSize: 16,
  },
  inputSpacer: {
    marginHorizontal: 5,
  },
  expirationDateInput: {
    width: '40%',
  },
  cvvInput: {
    width: '20%',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    paddingVertical: 10,
    height: 56,
    maxWidth: 388,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  smallText:{
    fontSize: 14,
    textAlign: 'center',
  },
  smallTextv:{

    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },

  saveButtonText: {
    color: '#FFFFFF',
    marginTop: 6,
    fontSize: 20,
  },
  dropdownIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  dropdownIcon: {
    marginRight: 10,
    textAlign: 'right'
  },
  flagClass: {
    fontSize: 18,
    color: '#888888',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    marginTop: 'auto',
    maxHeight: height,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  modalHeading: {
    fontSize: 20,
    borderBottomColor: '#F4F4F4F4',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
  modalItem: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  modalItemText: {
    fontSize: 16,
  },
  selectedCountryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  countryText: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 5,
  },
  selectedCountryFlag: {
    fontSize: 16,
    borderRadius: 175,
  },
  countcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  imagecontrols: {
    width: 24,
    height: 8,
  },
  tick: {
    width: 15.3,
    height: 17.3,
  },
  camera: {
    width: 24.5,
    height: 22.5,
  },
  
});

export default CreditCardPayment;











