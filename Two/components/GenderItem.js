import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Divider, CheckBox } from '@rneui/themed';

const GenderItem = ({ item, setGender }) => {


  const handleSelectGender = () => {
    setGender(item.gender)
  };

  return (
    <Pressable onPress={handleSelectGender} style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:18, color:'#0D1317'}}>{item.gender}</Text>
      
    </Pressable>
  );
};

export default GenderItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
});
