import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions'; // Install this package
import BottomSheet from "@gorhom/bottom-sheet";
import Divider from '../components/Divider';
import Switch from '../components/Switch';
import Button from '../components/Button';


function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; 
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; 

  return distance;
}


const navigateToScreen = () => {
  navigation.navigate('PickupHere'); // Replace 'DestinationScreen' with the name of your destination screen
};


import { FontAwesome } from "@expo/vector-icons";

const MapChoose = ({ navigation, route }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showTabs, setShowTabs] = useState(false);
  const { My_Addresss } = route.params;
  const [calculatedDistance, setCalculatedDistance] = useState(null);

  const handleNavigation = () => {
    try {
      navigation.navigate('PickupHere');
    } catch (error) {
      // Handle the navigation error here, e.g., log it or display an error message.
      console.error('Navigation error:', error);
    }
  };
  
  // Later in your component:
 
  

  const [deltaValues, setDeltaValues] = useState({
    latitudeDelta: 0.012,
    longitudeDelta: 0.012,
  });

  // Function to update delta values randomly
  const updateDeltaValues = () => {
    const randomLatitudeDelta = 0.0012 + Math.random() * 0.0188; // Random value between 0.0012 and 0.02
    const randomLongitudeDelta = 0.0012 + Math.random() * 0.0188; // Random value between 0.0012 and 0.02
    setDeltaValues({
      latitudeDelta: randomLatitudeDelta,
      longitudeDelta: randomLongitudeDelta,
    });
  };

  // Update delta values periodically
  useEffect(() => {
    const interval = setInterval(updateDeltaValues, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);



 // Update the useEffect block to calculate distance and adjust deltas
useEffect(() => {
  if (userLocation && selectedLatitude && selectedLongitude) {
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      selectedLatitude,
      selectedLongitude
    );

    // Calculate the zoom level based on the distance
    const zoomLevel = Math.log(360 / (distance * 0.5)) / Math.LN2;

    // Set the deltas to fit the entire route
    setDeltaValues({
      latitudeDelta: zoomLevel,
      longitudeDelta: zoomLevel,
    });

    setCalculatedDistance(distance);
  }
}, [userLocation, selectedLatitude, selectedLongitude]);




  // Function to choose a ride
  const chooseRide = (rideName) => {
    setSelectedRide(rideName);
  };
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const bottomSheetRef = useRef(null);

  

  const snapPoints = useMemo(() => ["90%", "55%"], []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  
  // Access the selectedLatitude and selectedLongitude from the route parameters
  const selectedLatitude = route.params.selectedLatitude;
  const selectedLongitude = route.params.selectedLongitude;
  const AddressName = route.params.AddressName;
  const Address_add = route.params.Address_add;
  const My_Address = route.params.My_Address;

  // Function to get the user's current location
  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  // Get the user's location when the component mounts
  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      setDirections([
        {
          latitude: selectedLatitude, // Selected destination
          longitude: selectedLongitude, // Selected destination
        },
        {
          latitude: userLocation.latitude, // User's location
          longitude: userLocation.longitude, // User's location
        },
      ]);
    }
  }, [userLocation]);
  

  const mapRef = useRef(null);

  // Function to animate the map to a new region
  const animateToNewRegion = (region) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(region, 1000); // 1000 milliseconds for the animation duration
    }
  };
  

  return (
    <View style={styles.container}>


             


      
      <MapView
  style={styles.map}
  region={{
    latitude: userLocation?.latitude || selectedLatitude,
    longitude: userLocation?.longitude || selectedLongitude,
    latitudeDelta: deltaValues.latitudeDelta,
    longitudeDelta: deltaValues.longitudeDelta,
  }}
>
  {/* User Marker */}
  {userLocation && (
    <Marker
      coordinate={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      }}
      title="Destination"
      description={AddressName}
    />
  )}

  {/* Selected Marker */}
  <Marker
    coordinate={{
      latitude: selectedLatitude,
      longitude: selectedLongitude,
    }}
    title=""
    description="My Location"
  />

  {/* Driving Directions Polyline */}
  {directions.length > 0 && (
    <MapViewDirections
      origin={directions[1]}
      destination={directions[0]}
      apikey="AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw"
      strokeWidth={3}
      strokeColor="#4406ef"
    />
  )}
</MapView>

      <Text>Address Name: {AddressName}</Text>
      <Text>Address: {Address_add}</Text>
      <Text>Calculated Distance: {calculatedDistance ? `${calculatedDistance.toFixed(2)} km` : 'Calculating...'}</Text>





      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <View
            style={{
              borderBottomColor: "#cccccc",
              borderBottomWidth: StyleSheet.hairlineWidth,
              width: Dimensions.get("screen").width - 24,
              paddingVertical: 8,
            }}
          >
            <Text
              style={{ fontWeight: "800", fontSize: 18, textAlign: "center" }}
            >
              Choose a Ride
            </Text>
          </View>
          <View style={{ width: "96%", padding: 10, borderColor: selectedRide === "Black Hourly" ? 'blue' : 'transparent', borderWidth: 1, borderRadius: 10, alignItems: "center", marginLeft: 6 }}>
          <TouchableOpacity style={{ padding: 1, marginLeft: 6,  }} onPress={() => chooseRide("Black Hourly")}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "flex-start",
                //marginHorizontal: 20,
               // gap: 20,
              }}
              
            >
              <Image
                source={require("../../assets/carrem.png")}
                style={{ width: 70, height: 60 }}
                resizeMode="contain"
              //  resizeMethod="scale"
              />

              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Dimensions.get("screen").width - 110,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "800",
                      fontSize: 16,
                    }}
                  >
                    Black Hourly
                  </Text>
                  <Text
                    style={{
                      fontWeight: "800",
                      fontSize: Dimensions.get("screen").fontScale * 18,
                    }}
                  >
                    $110.75
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Dimensions.get("screen").width - 110,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 16,
                    }}
                  >
                     <Text> {calculatedDistance ? `${calculatedDistance.toFixed(2)} km` : 'Calculating...'}</Text> away
                  </Text>
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 16,
                    }}
                  >
                    $55.38/hour
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Dimensions.get("screen").width - 110,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 16,
                    }}
                  >
                    30 min included
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          </View>

          <View style={{ width: "100%" }}>
          <View style={{ width: "96%", padding: 10, borderColor: selectedRide === "Black Hourly SUV" ? 'blue' : 'transparent', borderWidth: 1, borderRadius: 10, alignItems: "center", marginLeft: 6, marginBottom: 10, }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
               // width: "100%",
                alignItems: "center",
            //    gap: 20,
                padding: 0,
              }}

              onPress={() => chooseRide("Black Hourly SUV")}
            >
              <Image
                source={require("../../assets/careme.png")}
                style={{ width: 70, height: 60 }}
                resizeMode="cover"
                resizeMethod="scale"
              />

              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Dimensions.get("screen").width - 110,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "800",
                      fontSize: 16,
                    }}
                  >
                    Black SUV Hourly
                  </Text>
                  <Text
                    style={{
                      fontWeight: "800",
                      fontSize: 16,
                    }}
                  >
                    $140.75
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Dimensions.get("screen").width - 110,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 16,
                    }}
                  >
                    6 min away
                  </Text>
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 16,
                    }}
                  >
                    $55.38/hour
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: Dimensions.get("screen").width - 110,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 16,
                    }}
                  >
                    30 min included
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                paddingHorizontal: 10,
                justifyContent: "space-between",
                alignItems: "center",

                marginTop: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  alignItems: "center",
                }}
              >
                <Switch value={isEnabled} onPress={toggleSwitch} />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 16,
                    }}
                  >
                    {isEnabled ? "Personal" : "Business"}
                  </Text>

                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 14,
                    }}
                  >
                    Visa 1590
                  </Text>
                </TouchableOpacity>
              </View>

              <FontAwesome name="angle-right" size={24} color="black" />
            </View>
          </View>
          <View
            style={{ paddingTop: 10, alignItems: "center" }}
          >
             <Button text={`Choose ${selectedRide || "a Ride"}`} onPress={() => navigation.navigate("PickupHere")}
 /> 

          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 0.55,
  },
  markerSquare: {
    width: 10,
    height: 10,
    backgroundColor: '#000',
  //  borderRadius: 5,
  },
});

export default MapChoose;
