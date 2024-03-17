import React from 'react';
import { View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const BusinessProfileIcon = ({ name }) => {

  return (
    <Ionicons
      style={{marginTop:10 }}
      name={name} 
      size={25}
      color="#454545"
    />
     
  );
};

export default BusinessProfileIcon;
