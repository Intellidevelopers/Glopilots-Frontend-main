import React from 'react';
import { View, Text, Button } from 'react-native';

function QRCodeDetails({ data, onBack }) {
  return (
    <View>
      <Text>Scotter ID:</Text>
      <Text>{data}</Text>
      <Button title="Back" onPress={onBack} />
    </View>
  );
}

export default QRCodeDetails;
