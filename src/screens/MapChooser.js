import React from 'react';
import { View, Text, Button } from 'react-native';

const MapChoose = ({ route, navigation }) => {
  // Extract data passed from the RidesDrop component
  const { selectedLatitude, selectedLongitude, AddressName, Address_add } = route.params;

  // Function to handle navigation or other actions with the selected location
  const handleLocationSelection = () => {
    // You can implement navigation or any other logic here
    // For example, you can use a library like 'react-native-maps' to display the location on a map.

    // For now, let's just go back to the previous screen
    navigation.goBack();
  };

  return (
    <View>
      <Text>Selected Location: {AddressName}</Text>
      <Text>Address: {Address_add}</Text>
      <Text>Latitude: {selectedLatitude}</Text>
      <Text>Longitude: {selectedLongitude}</Text>
      <Button title="Select Location" onPress={handleLocationSelection} />
    </View>
  );
};

export default MapChoose;
