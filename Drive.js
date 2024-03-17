import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Drive = () => {
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
              <FontAwesome5 name="calendar-alt" size={20} /> Reserve
            </Text>
            <Text style={styles.inputLabel}>
              <FontAwesome5 name="clock" size={24} /> Choose your exact pickup time up to 30 days in advance
            </Text>
            <Text style={styles.inputLabel}>
              <FontAwesome5 name="clock" size={24} /> Extra wait time included to meet your ride
            </Text>
            <Text style={styles.inputLabel}>
              <FontAwesome5 name="clock" size={24} /> Cancel at no charge up to 60 minutes in advance
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* Add a blue TouchableOpacity here */}
      <View style={styles.blueButtonContainer}>
        <TouchableOpacity style={styles.blueButton} onPress={() => navigation.navigate('RentByHour')}>
          <Text style={styles.blueButtonText}>Reserve a ride</Text>
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

export default Drive;
