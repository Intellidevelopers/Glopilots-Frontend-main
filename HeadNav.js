import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const HeadNav = ({ title, navigation }) => {
  return (
    <View style={styles.headcontainer}>
     
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#EEEEEE',
  },
  titleContainer: {
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
  },
  backButton: {
    padding: 5,
  },
});

export default HeadNav;
