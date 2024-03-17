import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const BankHead = ({ title, navigation }) => {
  return (
    <View style={styles.headcontainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.close}>Close</Text>
       
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // This aligns the items at each end of the container
    backgroundColor: '#ffffff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  titleContainer: {
    flex: 1, // This will make the title take the available space in between backButton and the right end of the container
    alignItems: 'center', // This centers the title horizontally
  },
  title: {
    fontSize: 20,
  },
  close: {
    padding: 5,
    fontSize: 16,
  },

});

export default BankHead;
