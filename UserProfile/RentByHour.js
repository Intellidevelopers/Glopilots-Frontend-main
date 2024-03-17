import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const RentByHour = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.badgecontainer}>
          <View style={styles.card}>
        
          </View>
          <View>
            <Text style={styles.title}>
              GloPilots Hourly
            </Text>
            <Text style={styles.inputLabel}>
              <FontAwesome5 name="clock" size={24} /> As many stops as you need in one car
            </Text>
            <Text style={styles.inputLabel}>
              <FontAwesome5 name="clock" size={24} /> Change your stops on the go
            </Text>
            <Text style={styles.inputLabel}>
              <FontAwesome5 name="clock" size={24} /> Dont spend time to park
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* Add a blue TouchableOpacity here */}
      <View style={styles.blueButtonContainer}>
        <Text>Starting at </Text> 
        <Text>$55.36/hour</Text>
        <TouchableOpacity style={styles.blueButton}>
          <Text style={styles.blueButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  badgecontainer: {
    flexDirection: 'column',
  },
  card: {
    height: 180,
    width: 'auto',
    backgroundColor: '#4460ef',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  inputLabel: {
    color: '#545454',
    fontSize: 20,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 20,

  },
  blueButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  blueButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    borderRadius: 8,
  },
  blueButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default RentByHour;
