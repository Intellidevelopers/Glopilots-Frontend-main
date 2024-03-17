import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TripLogageItem = ({ item }) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.layoverHeader}>
        <MaterialCommunityIcons 
          name={'bag-carry-on'}
          size={30}
          color={'#B0BBF3'}
        />
          <Text style={styles.flightTitle}>
            {item}PC
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TripLogageItem;

const styles = StyleSheet.create({
  container: {
    //paddingVertical: 10,
  },
  content: {
    padding: 10,
    
  },
  flightTitle: {
    color: '#4460EF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  layoverHeader: {
    marginVertical: 0,
    backgroundColor: '#ECEDF6',
    padding: 2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
});
