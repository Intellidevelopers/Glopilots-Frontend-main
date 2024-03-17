import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Head from '../Head';

const Tab = createMaterialTopTabNavigator();

const CheckIn = ({ navigation }) => {
  const [selectedPref, setselectedPref] = useState('1');
  const [isEnabled, setIsEnabled] = useState(false);
 

  useEffect(() => {
    loadPreferences();
  }, []);

  const loadPreferences = async () => {
    try {
      const preferences = await AsyncStorage.getItem('checkInPreferences');
      if (preferences !== null) {
        const { selectedPref: savedAmount, isEnabled: savedEnabled } = JSON.parse(preferences);
        setselectedPref(savedAmount);
        setIsEnabled(savedEnabled);
        console.error(checkInPreferences);
      }
    } catch (error) {
      console.error('Error loading preferences', error);
    }
  };

  const handleSaveChanges = async (amount) => {
    setselectedPref(amount === selectedPref ? '' : amount);
  
  };

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };



 

    return (
      <View style={styles.container}>
        <Head title="Check in" navigation={navigation} />

        <View style={styles.screenContainer}>
          <Text style={styles.title}>Check-in settings</Text>
          <Text style={styles.inputLabel}>
     Confirm you arrived safely, and get quick access to our safety tools  </Text>
     <Text style={styles.inputLabel}>
     If you share your ride details with contacts, we'll also let them know once youconfirm you've arrived. No futher action will be taken unless you request it. </Text>
     
          <View style={[styles.radioButton, selectedPref === '1' && styles.radioButtonSelected]}>
            <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('1')}>
              {selectedPref === '1' && <Icon name="circle" size={16} color="#4460EF" />}
            </TouchableOpacity>
            <Text style={styles.radioButtonText}>Every ride</Text>
          </View>
          
          <View style={[styles.radioButton, selectedPref === '2' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('2')}>
        {selectedPref === '2' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Only ride at night(9PM-6AM)</Text>
    </View>

    <View style={[styles.radioButton, selectedPref === '3' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('3')}>
        {selectedPref === '3' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Only long rides(more than 20 min)</Text>
    </View>

    <View style={[styles.radioButton, selectedPref === '4' && styles.radioButtonSelected]}>
      <TouchableOpacity style={styles.radioButtonCheckbox} onPress={() => handleSaveChanges('4')}>
        {selectedPref === '4' && <Icon name="circle" size={16} color="#4460EF" />}
      </TouchableOpacity>
      <Text style={styles.radioButtonText}>Never Check-in automatically</Text>
    </View>
          
        
        </View>
      </View>
    );
  }


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

  
});

export default CheckIn;
