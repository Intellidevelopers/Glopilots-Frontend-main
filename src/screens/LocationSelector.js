import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import Geocoding from 'react-native-geocoding';
import MapViewDirections from 'react-native-maps-directions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homestyle, locationStyle } from '../../styles/style';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Divider from '../components/Divider';
//import * as Location from 'expo-location';
//import MapView from 'react-native-maps';
//import LocationSelector from './LocationSelector';

Geocoding.init('AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw'); // Replace 'YOUR_API_KEY' with your actual API key

// ... (existing imports)

const LocationSelector = ({ onLocationsSelect }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [currentAddress, setCurrentAddress] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocationAddress, setSelectedLocationAddress] = useState('');
  const [isSelectingLocation, setIsSelectingLocation] = useState(false);
  const [draggingLocation, setDraggingLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } else {
        console.error('Permission to access location was denied');
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      Geocoding.from(selectedLocation.latitude, selectedLocation.longitude)
        .then(json => {
          const addressComponent = json.results[0].formatted_address;
          setSelectedLocationAddress(addressComponent);
        })
        .catch(error => console.error(error));
    }
  }, [selectedLocation]);

  const handleLocationSelect = () => {
    if (selectedLocation) {
      // Add the selected location to the array of selected locations
      setSelectedLocations((prevLocations) => [...prevLocations, selectedLocation]);
      // Clear the selected location and address for the next selection
      setSelectedLocation(null);
      setSelectedLocationAddress('');
      // Notify the parent component of the selected locations
      onLocationsSelect(selectedLocations);
    }
  };

  const handleMapPress = (event) => {
    if (isSelectingLocation) {
      const { coordinate } = event.nativeEvent;
      setDraggingLocation(coordinate);
      setSelectedLocation(coordinate);
    }
  };

  const getCurrentLocation = async () => {
    // ... (existing code)
  };

  const handleMarkerDrag = (event) => {
    const { coordinate } = event.nativeEvent;
    setDraggingLocation(coordinate);
    setSelectedLocation(coordinate);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <SafeAreaView style={locationStyle.container}>
      <View style={locationStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-small-left" size={30} color="black" />
        </TouchableOpacity>

        <View style={locationStyle.inputContainer}>
          {/* ... (existing code) */}
          <View style={{ flexDirection: 'row' }}>
            <View>
              <TextInput style={locationStyle.inputer} value={currentAddress} placeholder="Fromyucyjh?" />
              <TextInput style={locationStyle.inputer} placeholder="Where To?" value={selectedLocationAddress} />
            </View>
            <View style={{ justifyContent: 'space-evenly', marginLeft: 2 }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#eee',
                  width: 35,
                  height: 35,
                  borderRadius: 35,
                  paddingHorizontal: 10,
                }}
                onPress={handleLocationSelect}
              >
                <Text style={{ fontSize: 25 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLocation ? userLocation.latitude : 0,
            longitude: userLocation ? userLocation.longitude : 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.0421,
          }}
          onPress={handleMapPress}
          mapType="standard"
          showsUserLocation={true}
          loadingEnabled={true}
          showsTraffic={true}
        >
          {userLocation && (
            <>
              <Marker coordinate={userLocation} title="Current Location" />
              {selectedLocation && (
                <>
                  <Marker coordinate={selectedLocation} title="Selected Location" pinColor="green" />
                  <Circle
                    center={selectedLocation}
                    radius={100}
                    fillColor="rgba(0, 128, 255, 0.2)"
                    strokeColor="rgba(0, 128, 255, 0.8)"
                  />
                  {userLocation && selectedLocation && (
                    <MapViewDirections
                      origin={userLocation}
                      destination={selectedLocation}
                      apikey={'AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw'}
                      strokeWidth={3}
                      strokeColor="blue"
                    />
                  )}
                </>
              )}
            </>
          )}

          {isSelectingLocation && draggingLocation && (
            <Marker
              coordinate={draggingLocation}
              title="Selecting Location"
              pinColor="blue"
              draggable
              onDrag={handleMarkerDrag}
            />
          )}
        </MapView>
        {selectedLocation && (
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>
              Selected Location: {selectedLocation.latitude}, {selectedLocation.longitude}
            </Text>
            <Text style={styles.addressText}>Address: {selectedLocationAddress}</Text>
          </View>
        )}
        <Button
          title={isSelectingLocation ? 'Confirm Location' : 'Select Location'}
          onPress={() => setIsSelectingLocation(!isSelectingLocation)}
        />
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  addressContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  addressText: {
    margin: 10,
    textAlign: 'center',
  },
});

export default LocationSelector;
