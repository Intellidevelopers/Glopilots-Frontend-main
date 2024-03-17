import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homestyle, locationStyle } from '../../styles/style';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Divider from '../components/Divider';
import * as Location from 'expo-location';
import {GOOGLE_API_KEY} from '@env';

const RidesDrop = ({ navigation }) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRideType, setSelectedRideType] = useState('');
  const [nearbyAddresses, setNearbyAddresses] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlaceCoordinates, setSelectedPlaceCoordinates] = useState({ latitude: null, longitude: null });
  //const apiKey = process.env.GOOGLE_API_KEY;
 // const [selectedRideType, setSelectedRideType] = React.useState(null);

  const handleRideTypeSelection = (rideType) => {
    setSelectedRideType(rideType);
  };

  const handlePurchase = () => {
    // Navigate to the appropriate screen based on the selected ride type
    console.log('Selected Ride Type:', selectedRideType);
  
    switch (selectedRideType) {
      case 'OneWay':
        console.log('Navigating to Rides screen');
        navigation.navigate('Rider');
        break;
      case 'WithStops':
        console.log('Navigating to MultipleMap screen');
        navigation.navigate('MultipleMap');
        break;
      case 'RoundTrip':
        console.log('Navigating to MultipleMap screen');
        navigation.navigate('MultipleMap');
        break;
      default:
        console.error('Unhandled ride type:', selectedRideType);
        // Handle default case or show an error
        break;
    }
  
    // Close the modal
    closeModal();
  };
  

 



  const openModal = () => {
    setModalVisible(true);
  };
 // const handlePurchase = () => {}
  const closeModal = () => {
    setModalVisible(false);
  };

  // const handleRideTypeSelection = (rideType) => {
  //   setSelectedRideType(rideType);
  //   closeModal();
  // };

  const navigateToMapLocator = () => {
    navigation.navigate('MapSelect');
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
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
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
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=address&key=${GOOGLE_API_KEY}`
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


  const rideOptions = [
    {
      label: 'One way',
      value: 'OneWay',
      description: 'Go straight to your destination',
    },
    {
      label: 'With Stops',
      value: 'WithStops',
      description: 'Add up to five stops',
    },
    {
      label: 'Round Trip',
      value: 'RoundTrip',
      description: 'Add three addresses',
    },
  ];
  

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
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&location=${latitude},${longitude}&radius=50&type=establishment&key=${GOOGLE_API_KEY}`
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
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`);
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
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`
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
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff", paddingTop: 10 }}>

      <TouchableOpacity  onPress={() => navigation.goBack()}>
  <Entypo name="chevron-small-left" size={30} color="black" />
  </TouchableOpacity>
  <View style={{ flex: 1, alignItems: "center", }}>
    <TouchableOpacity style={{ justifyContent: "space-between", flexDirection: "row"}}>

    <Image
          source={require("../../assets/icons/driver.png")}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: 36, height: 36, top: 1, marginRight: 5,}}
        />

      <Text style={{ fontSize: 20, top: 7}}>
      
      
   {/*     <View style={styles.driverCircle} */}


        Switch User
        
      </Text>

      <View style={styles.IconController}>
        <Entypo name="chevron-small-down" size={20} color="black"  style={styles.iconr}/>
        </View>

    </TouchableOpacity>
  </View>
</View>   
<View style={locationStyle.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingVertical: 10,
            marginHorizontal: 10,
         //   marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
        style={{
          backgroundColor: "#eee",
          padding: 10,
          paddingHorizontal: 20,
          borderRadius: 20,
          flexDirection: "row"
        }}
        onPress={openModal} // Open the modal when the button is pressed
      >
        <Image
          source={require("../../assets/icons/goa.png")}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: 18, height: 14, top: 3, marginRight: 10,}}
        />
        <Text style={{ fontSize: 18}}>
          Let's Go 
        </Text>
        <Entypo name="chevron-small-down" size={22} color="black" style={styles.icon} />
  

         
      </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#eee",
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              flexDirection: "row"
            }}
          >
              <Image
          source={require("../../assets/icons/resav.png")}
          resizeMode="contain"
          resizeMethod="resize"
          style={{width: 18, height: 14, top: 3, marginRight: 5}}
        />
            <Text style={{ fontSize: 18}}>Reserve ride</Text>

            <Entypo name="chevron-small-down" size={22} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>

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
                  placeholder="Where To?"
                />
           
            <TextInput
            style={locationStyle.inputer}
            placeholder="Search for places"
            value={searchText}
            onChangeText={handleTextInputChange}
          />
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
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <View style={styles.modalContainer}>
          <Text style={{ fontSize: 20, marginBottom: 10, textAlign: 'center' }}>Choose a ride type</Text>
          <ScrollView>
            {rideOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={{paddingVertical: 10, borderBottomColor: "#545454", borderBottomWidth: 0.5, padding: 10}}
                onPress={() => handleRideTypeSelection(option.value)}
              >
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 20 }}>{option.label}</Text>
                  <View style={styles.radioButton}>
                    {selectedRideType === option.value && (
                      <View style={styles.radioInnerCircle} />
                    )}
                  </View>
                </View>
                <Text  style={{ fontSize: 16, color: 'gray' }}>{option.description}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={styles.purchaseButton}
                onPress={handlePurchase}
                disabled={!selectedRideType} // Disable button if no ride type is selected
              >
                <Text style={styles.purchaseButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  purchaseButtonText: {
    color: 'white',
    fontSize: 18,

  },

  purchaseButton: {
    backgroundColor: '#4460EF',
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center', // Add justifyContent to center vertically
   // marginHorizontal: 20,
    marginTop: 5,
    borderRadius: 10,
  //  marginRight: 20,
    marginLeft: 20,
  //  marginBottom: 10,
    
    height: 56,
},
bottomContainer: {
  flex: 1,
  justifyContent: 'flex-end',
 // marginBottom: 20,
 // paddingRight: 20,
 marginTop: 10,
},
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '45%', // Set the height to 50% of the screen
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
  icon: {
    bottom: 1,
    marginRight: 2,
    marginLeft: 5,
  },
  iconr: {
    top: 7,
    marginRight: 2,
    marginLeft: 5,
  },

  driverCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    borderColor: "black",
    top: 10,
    padding: 20,
  },
  IconController: {
 //   top: 7,
    bottom: -1,
    marginRight: 20,
  },
});

export default RidesDrop;
