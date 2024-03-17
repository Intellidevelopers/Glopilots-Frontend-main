import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied.');
          return;
        }

        let locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);

        // Use reverse geocoding to get the address from coordinates
        let { latitude, longitude } = locationData.coords;
        let apiKey = '';
        let apiEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC95p7b_I7aXkyQsDnmcFPr9Z-edwnJIT0`;

        let response = await fetch(apiEndpoint);
        let result = await response.json();

        if (result.status === 'OK' && result.results.length > 0) {
          const formattedAddress = result.results[0].formatted_address;
          setAddress(formattedAddress);

          // Log the address to the console
          console.log('User Address:', formattedAddress);
          console.log('User Address:', apiEndpoint);
        }
      } catch (error) {
        setErrorMsg(`Error getting location: ${error}`);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : location ? (
        <>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Your Location"
            />
          </MapView>
          {address && (
            <View style={{ padding: 16 }}>
              <Text>Latitude: {location.coords.latitude}</Text>
              <Text>Longitude: {location.coords.longitude}</Text>
              <Text>Address: {address}</Text>
            </View>
          )}
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default MapScreen;
