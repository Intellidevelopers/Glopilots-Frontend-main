import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homestyle, locationStyle } from '../../styles/style';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Divider from '../components/Divider';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import LocationSelector from './LocationSelector';

const  MapSelector = ({ navigation }) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRideType, setSelectedRideType] = useState('');
  const [nearbyAddresses, setNearbyAddresses] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [SelectedAddress, setSelectedAddress] = useState('');

 //  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocationAddress, setSelectedLocationAddress] = useState('');

  // const handleLocationSelect = (selectedLocation) => {
  //   // Handle the selected location in the parent component if needed
  //   setSelectedLocation(selectedLocation);
  // };

  const handleSelectedLocationAddress = (address) => {
    // Handle the selected location address in the parent component
    setSelectedLocationAddress(address);
  };
//  const [currentAddress, setCurrentAddress] = useState('');
//  const [selectedLocation, setSelectedLocation] = useState(null);

  const getAddressFromCoords = async (latitude, longitude) => {
    try {
      const apiKey = 'AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw';
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );

      const data = await response.json();

      if (data.status === 'OK' && data.results.length > 0) {
        const address = data.results[0].formatted_address;
        setCurrentAddress(address);
      } else {
        setCurrentAddress('Location not found');
      }
    } catch (error) {
      setCurrentAddress('Error fetching location');
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    getAddressFromCoords(location.latitude, location.longitude);
  };


  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
  
      if (status !== 'granted') {
        setCurrentAddress('Permission to access location was denied');
        return;
      }
  
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        timeout: 5000,
      });
  
      const { latitude, longitude } = location.coords;
  
      const apiKey = 'AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw';
  
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );
  
      const data = await response.json();
  
      if (data.status === 'OK' && data.results.length > 0) {
        const address = data.results[0].formatted_address;
        setCurrentAddress(`Latitude: ${latitude}, Longitude: ${longitude}, Address: ${address}`);
      } else {
        setCurrentAddress('Location not found');
      }
    } catch (error) {
      setCurrentAddress('Error fetching location');
    }
  };

  
{/*  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  }; */}

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRideTypeSelection = (rideType) => {
    setSelectedRideType(rideType);
    closeModal();
  };
{/*
  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setCurrentAddress('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        timeout: 5000,
      });

      const { latitude, longitude } = location.coords;

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw`
      );

      const data = await response.json();

      if (data.status === 'OK' && data.results.length > 0) {
        const address = data.results[0].formatted_address;
        setCurrentAddress(address);
      } else {
        setCurrentAddress('Location not found');
      }
//https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchAddress)}&key=AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw
      // Fetch nearby addresses
      const nearbyResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&rankby=distance&type=address&key=AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw`
      );

      const nearbyData = await nearbyResponse.json();

      if (nearbyData.status === 'OK' && nearbyData.results.length > 0) {
        const nearbyAddresses = nearbyData.results.map((result) => ({
          name: result.name,
          address: result.vicinity,
          cord: result.geometry.location,
        }));

        setNearbyAddresses(nearbyAddresses);

         // Log nearbyResponse to the console
      console.log('Nearby Response:', nearbyData);
      }
    } catch (error) {
      setCurrentAddress('Error fetching location');
    }
  };
*/}


  const navigateToSuggestedLocation = (latitude, longitude, address_name, address_add) => {
    // Use the latitude and longitude for navigation or other purposes
    // In this example, we navigate to the MapChoose component and pass the coordinates as route parameters
    
    navigation.navigate('MapChoose', {
      selectedLatitude: latitude,
      selectedLongitude: longitude,
      AddressName: address_name,
      Address_add: address_add,
    });
  };
  

  useEffect(() => {
    getCurrentLocation();
  }, []);

    const INITIAL_LATITUDE = 37.7749; // Replace with the actual initial latitude
    const INITIAL_LONGITUDE = 122.4194; // Replace with the actual initial longitude
    const MARKER_LATITUDE = 37.7749; // Replace with the actual marker latitude
    const MARKER_LONGITUDE = -122.4194; // Replace with the actual marker longitude


  return (
    <SafeAreaView style={locationStyle.container}>
      <View style={locationStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-small-left" size={30} color="black" />
        </TouchableOpacity>

      
      

        <View style={locationStyle.inputContainer}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "royalblue",
                borderRadius: 100,
              }}
            ></View>
            <View
              style={{ backgroundColor: "royalblue", width: 3, flex: 1 }}
            ></View>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "royalblue",
              }}
            ></View>
          </View>

          



          
          <View style={{
               flexDirection: 'row',

              }}>
                <View>
                <TextInput
                  style={locationStyle.inputer}
                  value={currentAddress}
                  placeholder="From?"
                />
           
            <TextInput style={locationStyle.inputer} placeholder="Where To?" value={SelectedAddress}/>
            </View>
            <View  style={{
               justifyContent: 'space-evenly',
               marginLeft: 2,
              }}>
           <View style={{
               justifyContent: 'center', backgroundColor: '#eee', width: 35,
               height: 35, borderRadius: 35, paddingHorizontal: 10
              }}>
            <Text style={{ fontSize: 25 }}>+</Text>
            </View>
            </View>
            </View>
        </View>
      </View>


      <View style={{ flex: 1, marginTop: 20 }}>
      {selectedLocation ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Selected Location:</Text>
          <Text>Latitude: {selectedLocation.latitude}</Text>
          <Text>Longitude: {selectedLocation.longitude}</Text>
          <Text>Addresses: {SelectedAddress}</Text>
        </View>
      ) : (
        <LocationSelector onLocationSelect={handleLocationSelect} />
      )}

{selectedLocation && (
        <div>
          <p>Selected Location: {selectedLocation.latitude}, {selectedLocation.longitude}</p>
          <p>Address: {selectedLocationAddress}</p>
        </div>
      )}
    </View>



  {/*    <View>
     
  <MapView
    style={styles.map} // Adjust the style to fit your layout
    region={{
        latitude: 37.7749, // Replace with your desired initial latitude
        longitude: -122.4194, // Replace with your desired initial longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
           
  >
   
  </MapView>
    </View> */}

       

     
      
    

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    map: {
        flex: 0.7,
       
      },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '50%', // Set the height to 50% of the screen
    width: '100%', // Make it occupy the full width
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
     // Add padding to your content as needed
    position: 'absolute', // Position it absolutely at the bottom
    bottom: 0, // Align it with the bottom of the screen
    left: 0, // Align it with the left side of the screen
    right: 0, // Align it with the right side of the screen
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  //  Top: -5,
    borderColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'royalblue',
  },
});

export default MapSelector;
