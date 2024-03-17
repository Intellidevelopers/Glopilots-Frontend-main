import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homestyle, locationStyle } from '../../styles/style';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Divider from '../components/Divider';
import * as Location from 'expo-location';
import LocationSelector from './LocationSelector';

const LocationSelectors = ({ navigation }) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRideType, setSelectedRideType] = useState('');
  const [nearbyAddresses, setNearbyAddresses] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlaceCoordinates, setSelectedPlaceCoordinates] = useState({ latitude: null, longitude: null });


 





  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRideTypeSelection = (rideType) => {
    setSelectedRideType(rideType);
    closeModal();
  };

  const navigateToMapLocator = () => {
    navigation.navigate('MapSelector');
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

      // Fetch nearby addresses
      const nearbyResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=address&key=AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw`
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


  const handleTextInputChange = async (text) => {
    setSearchText(text);



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

    
    // Perform a search for similar places using the Google Places Autocomplete API
    
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&location=${latitude},${longitude}&radius=50&type=establishment&key=AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw`
      );

      const data = await response.json();

      if (data.status === 'OK' && data.predictions) {
        const results = data.predictions.map((prediction) => ({
          description: prediction.structured_formatting.secondary_text,
          placeId: prediction.place_id,
          placeName: prediction.structured_formatting.main_text,

        }));

        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching for placeses:', error);
    }
  };



  const fetchPlaceCoordinates = async (placeId) => {
    try {
      // Make an API request to fetch place coordinates based on placeId
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw`);
      const data = await response.json();
  
      if (data.status === 'OK' && data.result && data.result.geometry) {
        const { location } = data.result.geometry;
        return {
          selectedLatitude: location.lat,
          selectedLongitude: location.lng,
        };
      } else {
        throw new Error('Coordinates not found in the response');
      }
    } catch (error) {
      console.error('Error fetching place coordinates:', error);
      throw error;
    }
  };
  


  const fetchPlaceCoordinatess = async (placeId) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw`
      );
  
      const data = await response.json();
  
      if (data.status === 'OK' && data.result && data.result.geometry) {
        const { location } = data.result.geometry;
        console.log('Latitude:', location.lat);
        console.log('Longitude:', location.lng);
        setSelectedPlaceCoordinates({
          selectedLatitude: location.lat,
          selectedLongitude: location.lng,
         

        });
      }
    } catch (error) {
      console.error('Error fetching place coordinates:', error);
    }
  };

  


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

 

  const navigateToSuggestedLocationss = async (placeId, address_name, address_add) => {
    try {
      const { selectedLatitude, selectedLongitude } = await fetchPlaceCoordinates(placeId);
  
      // Check if the returned object has selectedLatitude and selectedLongitude properties
      if (selectedLatitude !== undefined && selectedLongitude !== undefined) {
        console.log('Selected Latitude:', selectedLatitude);
        console.log('Selected Longitude:', selectedLongitude);
  
        // Pass the fetched coordinates and other parameters to the 'MapChoose' screen
        navigation.navigate('MapChoose', {
          selectedLatitude, // Use the fetched latitude
          selectedLongitude, // Use the fetched longitude
          AddressName: address_name,
          Address_add: address_add,
        });
      } else {
        console.error('Error: Missing latitude or longitude in fetched coordinates');
      }
    } catch (error) {
      console.error('Error navigating to suggested location:', error);
    }
  };
  
  

  
  

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <SafeAreaView style={locationStyle.container}>
     
    {/*   <SafeAreaView style={locationStyle.container}></SafeAreaView>  */}
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff", paddingTop: 10 }}
    
    >

<TouchableOpacity  onPress={() => navigation.goBack()}>
  <Entypo name="chevron-small-left" size={30} color="black" />
</TouchableOpacity>
  <View style={{ flex: 1, alignItems: "center" }}>
  <TextInput
            style={locationStyle.inputer}
            placeholder="Where to?"
            value={searchText}
            onChangeText={handleTextInputChange}
          />
  </View>
 
</View>   
      <View style={locationStyle.listContainer}>
        <TouchableOpacity style={locationStyle.listItem}>
          <View style={locationStyle.listItemContent}>
            <AntDesign name="reload1" size={24} color="black" />
            <Text style={homestyle.locationButtonTextUnstyled}>
              Nearby Places
            </Text>
          </View>
          <Entypo name="chevron-small-right" size={30} color="black" />
        </TouchableOpacity>
        <Divider />




        <ScrollView>
        <View style={locationStyle.listContainer}>
          {searchResults.map((result, index) => (
            <View key={index}>
             
             <TouchableOpacity
      style={locationStyle.listItem}
      onPress={() => {
        console.log('Place ID:', result.placeId);
        console.log('Ref:', result.reference);
        console.log('Name:', result.name);
        console.log('Address:', result.address);
        navigateToSuggestedLocationss(result.placeId, result.description, result.description);
      }}   >
                <View style={locationStyle.listItemContent}>
                  <Feather name="clock" size={24} color="black" />
                  <View>
                    <Text style={homestyle.locationButtonTextBold}>
                      {result.placeName}
                    </Text>
                    <Text>{result.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            

              {index < searchResults.length - 1 && <Divider />}
            </View>
          ))}
        </View>


        <TouchableOpacity style={locationStyle.listItem} onPress={navigateToMapLocator}>
          <View style={locationStyle.listItemContent}>
            <Entypo name="location" size={24} color="black" />
            <View>
              <Text style={homestyle.locationButtonTextUnstyled}>
                Set the location on map
              </Text>
            </View>
          </View>
        </TouchableOpacity>


      </ScrollView>
      
      </View>
    

    </SafeAreaView>
  );
};


export default LocationSelectors;
