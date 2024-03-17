import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homestyle, locationStyle } from '../../styles/style';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Divider from '../components/Divider';
import * as Location from 'expo-location';
//import PreInterCountry from './PreInterCountry';

const InterCountry = ({ navigation }) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRideType, setSelectedRideType] = useState('');
  const [nearbyAddresses, setNearbyAddresses] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlaceCoordinates, setSelectedPlaceCoordinates] = useState({ latitude: null, longitude: null });


  const apiKey = process.env.GOOGLE_API_KEY;



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
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );
  
      const data = await response.json();
  
      if (data.status === 'OK' && data.results.length > 0) {
        // Extract the state from the address components
        const stateComponent = data.results[0].address_components.find(
          (component) => component.types.includes('country')
        );

        const countryComponent = data.results[0].address_components.find(
            (component) => component.types.includes('country')
          );
  
        const state = stateComponent ? stateComponent.long_name : 'Unknown State';
        setCurrentAddress(state);
      } else {
        setCurrentAddress('Location not found');
      }
  
      // Fetch nearby addresses
      const nearbyResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=address&key=${apiKey}`
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
  
      // Reverse geocode to get the user's country code
      const reverseGeocodeResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );
  
      const reverseGeocodeData = await reverseGeocodeResponse.json();
  
      if (
        reverseGeocodeData.status === 'OK' &&
        reverseGeocodeData.results.length > 0
      ) {
        const addressComponents = reverseGeocodeData.results[0].address_components;
        const countryComponent = addressComponents.find(
          (component) => component.types.includes('country')
        );
  
        if (countryComponent) {
          const countryCode = countryComponent.short_name;
          const autocompleteResponse = await fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&components=country:${countryCode}&types=(regions)&key=${apiKey}`
          );
  
          const autocompleteData = await autocompleteResponse.json();
  
          if (autocompleteData.status === 'OK' && autocompleteData.predictions) {
            const results = autocompleteData.predictions.map((prediction) => ({
              description: prediction.description,
              placeId: prediction.place_id,
              placeName: prediction.structured_formatting.main_text,
            }));
  
            setSearchResults(results);
          } else {
            setSearchResults([]);
          }
        }
      }
    } catch (error) {
      console.error('Error searching for places:', error);
    }
  };
  
  

  const fetchPlaceCoordinates = async (placeId) => {
    try {
      // Make an API request to fetch place coordinates based on placeId
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`);
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
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
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
    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff" }}>
  <Entypo name="chevron-small-left" size={30} color="black" />

  <View style={{ flex: 1, alignItems: "center" }}>
    <TouchableOpacity style={{ justifyContent: "space-between", flexDirection: "row"}}>

    <Image
          source={require("../../assets/icons/driver.png")}
          resizeMode="center"
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
            justifyContent: "space-around",
            paddingVertical: 10,
          }}
        >
     
       
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
    {/* Updated style for the modal */}
    <View style={styles.modalContainer}>
      <Text style={{ fontSize: 20, marginBottom: 10, textAlign: 'center' }}>
        Choose a ride type
      </Text>
      <ScrollView>
      
        
              <TouchableOpacity onPress={() => handleRideTypeSelection('One way')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20 }}>One way</Text>
                <View style={styles.radioButton}>
                  {selectedRideType === 'One way' && <View style={styles.radioInnerCircle} />}
                </View>
              </View>


                <Text style={{ fontSize: 16, color: 'gray' }}>Go straight to your destinatio</Text>
              </TouchableOpacity>





              <TouchableOpacity onPress={() => handleRideTypeSelection('One way')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20 }}>With Stops</Text>
                <View style={styles.radioButton}>
                  {selectedRideType === 'One way' && <View style={styles.radioInnerCircle} />}
                </View>
              </View>


                <Text style={{ fontSize: 16, color: 'gray' }}>Add up to five stops</Text>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => handleRideTypeSelection('One way')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20 }}>One way</Text>
                <View style={styles.radioButton}>
                  {selectedRideType === 'One way' && <View style={styles.radioInnerCircle} />}
                </View>
              </View>


                <Text style={{ fontSize: 16, color: 'gray' }}>Add three addresses</Text>
              </TouchableOpacity>




            
    
          
      </ScrollView>
    </View>
  </View>
</Modal>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
   // bottom: 5,
    marginRight: 20,
  },

  iconr: {
    top: 7,
    marginRight: 2,
    marginLeft: 5,
  },


});

export default InterCountry;
