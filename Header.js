import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleEditPress = () => {
    // Navigate to the Edit screen
    navigation.navigate('Edit');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <TouchableOpacity onPress={handleEditPress}>
        <Text style={styles.editButton}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderBottomWidth: 1,
    marginTop: 0,
    borderBottomColor: '#EEEEEE',
  },
  title: {
    fontSize: 20,
    paddingLeft: 5,
  },
  editButton: {
    fontSize: 20,
    paddingRight: 5,
  },
});

export default Header;
