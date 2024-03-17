import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Communications from './Communications';
import Head from '../Head';
const Communication = ({navigation}) => {
  return (
   
<View style={styles.container}>
    <Head title="Communication" navigation={navigation} />
    <Communications />
</View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
   
  });

export default Communication;