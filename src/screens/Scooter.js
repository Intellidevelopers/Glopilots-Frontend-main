import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import QRCodeScanner from './Scooterqr';

function Scooter({navigation}) {
  return (
    <View style={styles.container}>
      
      <QRCodeScanner />
     

      <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20, // Adjust the bottom position as needed
            left: "33%",
            alignItems: 'center',
            padding: 15,
            borderRadius: 10,
            
            backgroundColor: 'rgba(238, 238, 238, 0.7)',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Scooter')}
        >
          
          <Text style={{
            fontWeight: 400,
            color: "#fff",
            
       }}>
       Enter ID Instead
       </Text >
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default Scooter;
