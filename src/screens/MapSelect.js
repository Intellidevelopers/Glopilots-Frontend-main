import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import LocationSelector from './LocationSelector'; // Adjust the path as needed

const MapSelect = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleLocationsSelect = (locations) => {
    // Handle the selected locations in your parent component
    console.log('Selected Locations:', locations);
    setSelectedLocations(locations);
  };

  return (
    <View style={styles.container}>
   
      <LocationSelector onLocationsSelect={handleLocationsSelect} />
      </View>
  
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,      
    },
  });



export default MapSelect;
