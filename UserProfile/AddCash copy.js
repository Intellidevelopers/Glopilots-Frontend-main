import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

const AddCash = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
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

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose amount</Text>
        <Text style={styles.inputLabel}>
          Plan ahead with Gopilots cash. You can use it with a coupon or other promos
        </Text>
        <View style={[styles.radioButton, selectedAmount === '$25' && styles.radioButtonSelected]}>
          <TouchableOpacity
            style={styles.radioButtonCheckbox}
            onPress={() => handleSaveChanges('$25')}
          >
            {selectedAmount === '$25' && <Icon name="circle" size={16} color="#4460EF" />}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>$25</Text>
        </View>

        <View style={[styles.radioButton, selectedAmount === '$50' && styles.radioButtonSelected]}>
          <TouchableOpacity
            style={styles.radioButtonCheckbox}
            onPress={() => handleSaveChanges('$50')}
          >
            {selectedAmount === '$50' && <Icon name="circle" size={16} color="#4460EF" />}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>$50</Text>
        </View>

        <View style={[styles.radioButton, selectedAmount === '$100' && styles.radioButtonSelected]}>
          <TouchableOpacity
            style={styles.radioButtonCheckbox}
            onPress={() => handleSaveChanges('$100')}
          >
            {selectedAmount === '$100' && <Icon name="circle" size={16} color="#4460EF" />}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>$100</Text>
        </View>

        <View>
          <Text style={styles.title}>Auto refill</Text>
          <View style={styles.additionalSection}>
            <Text style={styles.inputLabels}>
              Automatically add Glopilots cash when your balance is lower than $15
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.additionalSectionSwitch}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Selected Amount:', selectedAmount)}>
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
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '90%',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
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
});

export default AddCash;
