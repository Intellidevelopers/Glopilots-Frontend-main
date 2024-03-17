import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import Head from '../Head';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import refill from '../assets/icons/blue-refill.png';
import cancel from '../assets/icons/cancel.png';
import visa from '../assets/icons/visa.png';
import card_tick from '../assets/icons/card_tick.png';
import plus from '../assets/icons/plus-black.png';
const Checkouts = ({ route, navigation }) => {

    const { selectedAmount } = route.params;
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibles, setIsModalVisibles] = useState(false);

  const [issuingCountry, setIssuingCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  

  return (
    <View style={styles.container}>
      <Head title="Glopilots Cash" navigation={navigation} />

        <View style={styles.lists}></View>
        <View style={styles.list}>
          <Text style={styles.inputLabels}>GloPilots Cash:</Text>
          <Text style={styles.additionalSectionSwitch}>{selectedAmount}.00</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.additionalSectionTitle}>Total</Text>
          <Text style={styles.additionalSectionSwitch}>{selectedAmount}.00</Text>
        </View>

        <TouchableOpacity
          style={styles.touchableOpacityContainer}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.touchableOpacityText}>Payment Method</Text>
          <Text style={styles.touchableOpacityText}>
          <Image source={visa} style={styles.visa} resizeMode="contain" /> 1950 <FontAwesome5 name="chevron-down" style={styles.arrowIcon} />
          </Text>
        </TouchableOpacity>

        <View style={styles.touchableOpacityContainers}>
          
      <View style={styles.icon}> 
       <Image source={refill} style={styles.imagecontrols} resizeMode="contain" />
       </View>
      <Text style={styles.textControl}>This payment method will be automatically charged {selectedAmount}.00 when your balance is below $15. 
      You can change this later in the 'Payment' tab
          </Text>
        </View>

        
        <View style={styles.bottomContainer}>
          <Text style={styles.termsText}>Subject to Glopilot Cash Terms</Text>
          <TouchableOpacity style={styles.purchaseButton} onPress={() => handlePurchase()}>
            <Text style={styles.purchaseButtonText}>Purchases</Text>
          </TouchableOpacity>
        </View>
      
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        {/* Modal content */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
            <Image source={cancel} style={styles.cancelcontrol} />
            </TouchableOpacity>
         
            <View style={styles.minfoBox}>
        <Text style={styles.minfoTitle}>Choose another method</Text>
        <Text style={styles.minfoText}>
          Heads up: Glopilots can't use Apple Pay or commuter cards. This
          payment method will be the default to refill Glopilots cash.
        </Text>
        <View style={styles.mcloseIcon}>
         
        
        </View>
      </View>
      <View style={styles.mbalance}>
     
        <Text style={styles.mbalanceText}> <Image source={visa} style={styles.visa} resizeMode="contain" />  1590</Text>
        <View style={styles.mplusIcon}>
        <Image source={card_tick} style={styles.mvisa} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.mdivider} />
      <View style={styles.maddCard}>
        <View style={styles.mplusIcon}>
          
          <Image source={plus} style={styles.mvisa} resizeMode="contain" />
        </View>
        <Text style={styles.maddCardText}>Add card</Text>
      </View>

       
           
          </View>
        </View>
      </Modal>


      <Modal visible={isModalVisibles} animationType="slide" transparent={true}>
        {/* Modal content */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
            <Image source={cancel} style={styles.cancelcontrol} />
            </TouchableOpacity>
         
            <View style={styles.minfoBox}>
        <Text style={styles.minfoTitle}>Choose another method</Text>
        <Text style={styles.minfoText}>
          Heads up: Glopilots can't use Apple Pay or commuter cards. This
          payment method will be the default to refill Glopilots cash.
        </Text>
        <View style={styles.mcloseIcon}>
         
        
        </View>
      </View>
      <View style={styles.mbalance}>
     
        <Text style={styles.mbalanceText}> <Image source={visa} style={styles.visa} resizeMode="contain" />  1590</Text>
        <View style={styles.mplusIcon}>
        <Image source={card_tick} style={styles.mvisa} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.mdivider} />
      <View style={styles.maddCard}>
        <View style={styles.mplusIcon}>
          
          <Image source={plus} style={styles.mvisa} resizeMode="contain" />
        </View>
        <Text style={styles.maddCardText}>Add card</Text>
      </View>

       
           
          </View>
        </View>
      </Modal>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 0,
    fontFamily: 'Poppins_400Regular',
  },


  list: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  lists: {
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  inputLabels: {
    color: '#545454',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 20,
  },
  additionalSection: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
 
  additionalSectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  inputContainers: {
    marginTop: 10,
    marginLeft: 20,
  },
  icon: {
   marginRight: 20,
  },

  textControl: {
    marginRight: 19,
    fontSize: 16,
    flexDirection: 'row',
    
   },
  inputContainer: {
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#EEEEEE',
    borderBottomColor: '#EEEEEE',
    paddingHorizontal: 10,
    marginBottom: 25,
    justifyContent: 'center',
    borderWidth: 1,
  },
  filledInput: {
    borderColor: '#4460EF',
  },
  additionalSectionSwitch: {
    position: 'absolute',
    right: 10,
    top: 0,
    fontWeight: 'bold',
    fontSize: 20,
  },
  dropdownContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  dropdownLabel: {
    color: '#545454',
    fontSize: 18,
    marginBottom: 5,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  dropdownIconContainer: {
    marginLeft: 5,
  },
  dropdownIcon: {
    marginLeft: 5,
  },
  visa:
  {
    height: 8,
    width: 24,

  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    marginTop: 'auto',
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
  modalItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalItemText: {
    fontSize: 16,
  },
  sectionHeader: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  selectedCountryContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  selectedCountryFlag: {
    fontSize: 16,
  },
  imagecontrols: {
    width: 16,
    height: 16,
  },

  touchableOpacityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
    marginHorizontal: 20,
    height: 50,
  },
  touchableOpacityContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: 'rgba(68, 96, 239, 0.2)', 
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 20,

    height: 'auto',
    width: '90%',

  },
  

  touchableOpacityText: {
    fontSize: 20,
    color: '#545454',
  },
 
  purchaseButton: {
      backgroundColor: '#4460EF',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center', // Add justifyContent to center vertically
     // marginHorizontal: 20,
      marginTop: 5,
      borderRadius: 10,
    //  marginRight: 20,
      marginLeft: 20,
    //  marginBottom: 10,
      
      height: 56,
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 18,

  },
  termsText: {
    fontSize: 18,
    marginTop: 10,
    color: 'blue',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
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
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
   // marginBottom: 20,
   // paddingRight: 20,
    paddingBottom: 20,
  },
});

export default Checkouts;
