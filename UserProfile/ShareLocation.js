import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from '../Head';
          
import Add_Cash from '../assets/icons/add_cash.png';

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ShareLocation = ({ navigation }) => {
  const [selectedAmount, setSelectedAmount] = useState('$25');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hideModal = () => {
    setIsModalVisible(false);
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

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    const handleCheckout = () => {
      navigation.navigate('Checkout', { selectedAmount });
    };
    const TabLabel = ({ focused, children }) => (
      <Text style={{ fontSize: 18, fontWeight: focused ? 'normal' : 'normal' }}>{children}</Text>
    );
    return (
      <View style={styles.container}>
        <Head title="Add Cash" navigation={navigation} />

        <Tab.Navigator>
          <Tab.Screen name="Online"  options={{ tabBarLabel: ({ focused }) => <TabLabel focused={focused}>Online </TabLabel> }}
    >
            {(props) => (
              <OnlineScreen {...props} isEnabled={isEnabled} toggleSwitch={toggleSwitch} handleSaveChanges={handleSaveChanges} selectedAmount={selectedAmount} handleCheckout={handleCheckout} />
            )}
          </Tab.Screen>
          <Tab.Screen name="In-Store" component={OfflineScreen} options={{ tabBarLabel: ({ focused }) => <TabLabel focused={focused}>In-Store </TabLabel> }}  />
        </Tab.Navigator>

        <Modal  visible={isModalVisible}
        transparent  
        animationType="slide"
      >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader} />
            <View style={styles.modalContent}>
            <View style={styles.modalHeaderImg}>
            <Image source={Add_Cash}  style={styles.imagecontrol} resizeMode="contain" />


            </View>
              <Text style={styles.modalHeaderText}>Plan ahead, budget later</Text>
              <Text  style={styles.modalHeaderTexts}>Add Glopilots cash to your balance now to pay for rides later.</Text>
            

           
            <TouchableOpacity style={styles.saveButton} onPress={hideModal}>
          <Text style={styles.saveButtonText}>OK</Text>
        </TouchableOpacity>



            </View>
          </View>
        </Modal>
      </View>
    );
  }
};

const OnlineScreen = ({ isEnabled, toggleSwitch, handleSaveChanges, selectedAmount, handleCheckout }) => {
  return (
    <View style={styles.screenContainer}>
    
      <Text style={styles.title}>Share your location</Text>
      <Text style={styles.inputLabel}>
       Add family and friends so they can see where you are in a ride.
      </Text>

      <TouchableOpacity style={styles.saveButton} onPress={handleCheckout}>
          <Text style={styles.saveButtonText}>Add</Text>
        </TouchableOpacity>


      <Text style={styles.title}>Share settings</Text>
      <Text style={styles.inputLabel}>
       Choose when to automatically share your ride details(You can always cancel this during a ride).
      </Text>

      <View style={[styles.radioButton, selectedAmount === '$25' && styles.radioButtonSelected]}>
        <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$25')}>
          {selectedAmount === '$25' && <Icon name="circle" size={16} color="#4460EF" />}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Every ride</Text>
      </View>

      <View style={[styles.radioButton, selectedAmount === '$50' && styles.radioButtonSelected]}>
        <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$50')}>
          {selectedAmount === '$50' && <Icon name="circle" size={16} color="#4460EF" />}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Only ride at night(9PM-6AM)</Text>
      </View>

      <View style={[styles.radioButton, selectedAmount === '$100' && styles.radioButtonSelected]}>
        <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$100')}>
          {selectedAmount === '$100' && <Icon name="circle" size={16} color="#4460EF" />}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Dont Share Automatically</Text>
      </View>

      <View>
        <Text style={styles.title}>Auto refill</Text>
        <View style={styles.additionalSection}>
          <Text style={styles.inputLabels}>Automatically add Glopilots cash when your balance is lower than $15</Text>
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

      <View style={styles.bottomContainer}>
      <Text style={styles.termsText}>Subject to Glopilot Cash Terms</Text>
        <TouchableOpacity style={styles.saveButton} onPress={handleCheckout}>
          <Text style={styles.saveButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OfflineScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>In-Store Screen</Text>
      {/* Add  screen content here */}
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
  screenContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
    paddingTop: 20,
    fontFamily: 'Poppins_400Regular',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  imagecontrol: {
   width: 120,
   height: 120,
  },
  inputLabel: {
    color: '#545454',
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 20,
  },
  inputLabels: {
    color: '#545454',
    fontSize: 18,
    marginBottom: 5,
    marginRight: 80,
    marginLeft: 20,
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
  radioButtonTextSelected: {
    color: 'white',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    paddingBottom: 20,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center', // Add justifyContent to center vertically
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
    height: 56,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
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
  additionalSectionSwitch: {
    position: 'absolute',
    right: 10,
    top: -25,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },

  imagesStyle: {
    textAlign: 'center',
  },

  modalHeader: {
    height: 40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
  },
  modalHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    
  },
  modalHeaderTexts: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    
  },

  modalHeaderImg: {
    alignItems: 'center',
   paddingBottom: 35,
    
  },
  termsText: {
    fontSize: 18,
    marginbottom: 20,
    color: 'blue',
    alignItems: 'center',
    textAlign: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    alignContent: 'center',
  },
});

export default ShareLocation;
