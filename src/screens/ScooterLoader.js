import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCodeScanner from './Scooterqr';

export default function App() {
  return (
    <View style={styles.container}>
      <QRCodeScanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
