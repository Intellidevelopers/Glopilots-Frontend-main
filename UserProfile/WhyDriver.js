import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from '../Head';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const WhyDriver = ({ navigation }) => {
  const [selectedAmount, setSelectedAmount] = useState('$25');
  const [isEnabled, setIsEnabled] = useState(false);
 

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
        <ScrollView>
      <View style={styles.container}>
        <Head title="" navigation={navigation} />
        <View style={styles.screenContainer}>
    
    <Text style={styles.title}>Why do you want to drive with GloPilots?</Text>
   

    <View style={[styles.radioButton, selectedAmount === '$25' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$25')}>
        {selectedAmount === '$25' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Be my own boss</Text>
    </View>

    <View style={[styles.radioButton, selectedAmount === '$50' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$50')}>
        {selectedAmount === '$50' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Make extra money on the side</Text>
    </View>

    <View style={[styles.radioButton, selectedAmount === '$100' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$100')}>
        {selectedAmount === '$100' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Save for a specific purchase</Text>
    </View>

    <View style={[styles.radioButton, selectedAmount === '$1011' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$1011')}>
        {selectedAmount === '$1011' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Meet new people</Text>
    </View>

    <View style={[styles.radioButton, selectedAmount === '$1001' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$1001')}>
        {selectedAmount === '$1001' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Need something temporary</Text>
    </View>



    <Text style={styles.title}>How many hours are you looking to drive each week?</Text>
    

    <View style={[styles.radioButton, selectedAmount === '$250' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$250')}>
        {selectedAmount === '$250' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Fewer than 5 hours</Text>
    </View>

    <View style={[styles.radioButton, selectedAmount === '$500' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$500')}>
        {selectedAmount === '$500' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>5-15 hours</Text>
    </View>

    <View style={[styles.radioButton, selectedAmount === '$1000' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('$1000')}>
        {selectedAmount === '$1000' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>6-20 hours</Text>
    </View>


    <View style={styles.bottomContainer}>
    
      <TouchableOpacity style={styles.saveButton} onPress={handleCheckout}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  </View>      
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

  imagesStyle: {
    textAlign: 'center',
  },
  termsText: {
    fontSize: 18,
    marginbottom: 20,
    color: 'blue',
    alignItems: 'center',
    textAlign: 'center',
  },
 
});

export default WhyDriver;
