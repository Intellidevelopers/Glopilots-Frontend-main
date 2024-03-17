import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from '../Head';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import visa from '../assets/icons/method.png';
import cancel from '../assets/icons/cancel.png';
//import visa from '../assets/icons/visa.png';
import card_tick from '../assets/icons/card_tick.png';
import plus from '../assets/icons/plus-black.png';

const Refill = ({ navigation }) => {
  const [selectedAmount, setSelectedAmount] = useState('$25');
  const [isEnabled, setIsEnabled] = useState(false);
  const handleCheckout = () => {
    navigation.navigate('Checkout', { selectedAmount, isModalVisible });
  };

  const handlePaymentMethodPress = () => {
    navigation.navigate('Checkouts', { selectedAmount} );
  };


  
  const handleSaveChanges = (amount) => {
    setSelectedAmount(amount === selectedAmount ? '' : amount);
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    const handleCheckout = () => {
      navigation.navigate('Checkout', { selectedAmount });
    };

    return (
      <View style={styles.container}>
        <Head title="Auto Refill" navigation={navigation}/>
        <View>
          <Text style={styles.title}>Auto refill</Text>
          <View style={styles.additionalSection}>
            <Text style={styles.inputLabel}>
              Auto refill is off. When activated, we'll automatically refill your glopilots cash if your balance is lower than $15
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.additionalSectionSwitch}
            />
          </View>
        </View>

        {isEnabled && (
          <>
            <Text style={styles.inputLabels}>Choose refill amount</Text>

            <View
              style={[styles.radioButton, selectedAmount === '$25' && styles.radioButtonSelected]}
            >
              <TouchableOpacity
                style={styles.radioButtonCheckbox}
                onPress={() => handleSaveChanges('$25')}
              >
                {selectedAmount === '$25' && <Icon name="circle" size={16} color="#4460EF" />}
              </TouchableOpacity>
              <Text style={styles.radioButtonText}>$25</Text>
            </View>

            <View
              style={[styles.radioButton, selectedAmount === '$50' && styles.radioButtonSelected]}
            >
              <TouchableOpacity
                style={styles.radioButtonCheckbox}
                onPress={() => handleSaveChanges('$50')}
              >
                {selectedAmount === '$50' && <Icon name="circle" size={16} color="#4460EF" />}
              </TouchableOpacity>
              <Text style={styles.radioButtonText}>$50</Text>
            </View>

            <View
              style={[styles.radioButton, selectedAmount === '$100' && styles.radioButtonSelected]}
            >
              <TouchableOpacity
                style={styles.radioButtonCheckbox}
                onPress={() => handleSaveChanges('$100')}
              >
                {selectedAmount === '$100' && <Icon name="circle" size={16} color="#4460EF" />}
              </TouchableOpacity>
              <Text style={styles.radioButtonText}>$100</Text>
            </View>
          </>
        )}

        <View style={styles.bottomContainer}>

        <TouchableOpacity
          style={styles.touchableOpacityContainer}
          onPress={handlePaymentMethodPress}
        >
          <Text style={styles.touchableOpacityText}>Payment Method</Text>
          <View style={styles.rower}>
          <Image source={visa} style={styles.visa} resizeMode="contain" />
          <Text>
          <Icon name="chevron-down" style={styles.arrowIcon} />
          </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.termstext}>Subject to GloPilot Cash Terms</Text>
          
          <TouchableOpacity style={styles.saveButton} onPress={handleCheckout}>
            <Text style={styles.saveButtonText}>Checkout</Text>
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
    fontFamily: 'Poppins_400Regular',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  inputLabel: {
    color: '#545454',
    fontSize: 18,
    marginBottom: 5,
   paddingRight: 55,
    marginLeft: 20,
  },
  inputLabels: {
    color: '#545454',
    fontSize: 18,
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 20,
  },
  touchableOpacityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginHorizontal: 20,
    height: 50,
  },
  visa: {
    height: 18.5,
    width: 24,
    marginRight: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 20,
    borderBottomWidth: 1,
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
  },
  radioButtonSelected: {

    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 40,
    borderRadius: 10,
    height: 56,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
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
    fontSize: 16,
    color: '#545454',
    flex: 1,
  },
  touchableOpacityText: {
    fontSize: 20,
    color: '#545454',
    paddingBottom: 5,
  },
  termstext:{
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  rower:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  arrowIcon:{
    fontSize: 16
  },
  additionalSectionSwitch: {
    position: 'absolute',
    right: 10,
    top: -5,
  },


  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Center the modal vertically
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
   
    height: '50%', 
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 12,
  
  
  },
  cancelcontrol: {
      width: 18,
      height: 18,
  
  },

  closeIcon: {
    fontSize: 20,
    color: '#0D1317',
  },
  mline: {
    width: 150,
    height: 6,
    backgroundColor: '#0d1317',
    alignSelf: 'center',
    marginTop: 40,
  },
  mtitle: {
    fontSize: 18,
    fontFamily: 'SegoeUI, Segoe UI',
    color: '#4460ef',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mbutton: {
    width: 388,
    height: 56,
    borderRadius: 10,
    backgroundColor: '#4460ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mbuttonText: {
    fontSize: 20,
    fontFamily: 'SegoeUI, Segoe UI',
    color: '#fff',
  },
  minfoBox: {
    marginTop: 30,
  },
  minfoTitle: {
    fontSize: 24,
    fontFamily: 'SegoeUI-Bold, Segoe UI',
    fontWeight: '700',
    color: '#0d1317',
  },
  minfoText: {
    fontSize: 18,
    fontFamily: 'SegoeUI, Segoe UI',
    color: '#545454',
    marginTop: 10,
  },
  mcloseIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  mcrossLine: {
    width: 18,
    height: 2,
    backgroundColor: '#0d1317',
    marginRight: 8,
  },
  mbalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  mbalanceText: {
    fontSize: 20,
    fontFamily: 'SegoeUI, Segoe UI',
    color: '#0d1317',
  },
  mvisa: {
    width: 24,
    height: 24,
  },

  plusIcon: {
   
    
  },
  mplusLine: {
    width: 16,
    height: 2,
    backgroundColor: '#4caf50',
  },
  mdivider: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#e4e4e4',
    marginTop: 30,
  },
  maddCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  maddCardText: {
    fontSize: 20,
    fontFamily: 'SegoeUI, Segoe UI',
    color: '#0d1317',
    marginLeft: 12,
  },
});

export default Refill;
