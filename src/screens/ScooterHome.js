import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from 'react-native-vector-icons';

function ScooterHome({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [bicycleMarkers, setBicycleMarkers] = useState([]);
  const [circleCenter, setCircleCenter] = useState(null);

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
        let apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key
        let apiEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        let response = await fetch(apiEndpoint);
        let result = await response.json();

        if (result.status === 'OK' && result.results.length > 0) {
          const formattedAddress = result.results[0].formatted_address;
          setAddress(formattedAddress);
        }

        // Generate random bicycle markers
        const randomBicycleMarkers = Array.from({ length: 5 }, () => ({
          latitude: latitude + (Math.random() - 0.5) * 0.02,
          longitude: longitude + (Math.random() - 0.5) * 0.02,
        }));
        setBicycleMarkers(randomBicycleMarkers);

        // Set the center of the circular area
        setCircleCenter({ latitude, longitude });
      } catch (error) {
        setErrorMsg(`Error getting location: ${error}`);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location?.coords.latitude || 0,
            longitude: location?.coords.longitude || 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          showsUserLocation={true}
          loadingEnabled={false}
          showsTraffic={true}
        >
          {bicycleMarkers.map((bicycle, index) => (
            <Marker
              key={index}
              coordinate={bicycle}
              title={`Bicycle ${index}`}
            >
              <View style={{
  width: 40, // Set the width and height to make it a circle
  height: 40,
  borderRadius: 30, // Half of the width/height to create a perfect circle
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
}}>
  <FontAwesome5
    name="bicycle"
    size={18}
    color="black"
  />
</View>

            </Marker>
          ))}

          {/* Draw a circular area around the center */}
          {circleCenter && (
            <Circle
              center={circleCenter}
              radius={500} // Radius in meters
              fillColor="rgba(100, 100, 255, 0.2)"
            />
          )}
        </MapView>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            alignItems: 'flex-start',
            padding: 10,
            borderRadius: 20,
       //     backgroundColor: 'rgba(238, 238, 238, 0.7)',
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/back-icon.png')}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        </TouchableOpacity>




        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20, // Adjust the bottom position as needed
            left: "33%",
            alignItems: 'center',
            padding: 15,
            borderRadius: 10,
            backgroundColor: '#4406EF',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Scooter')}
        >
          <Text style={{
            fontWeight: 400,
            color: "#fff",
       }}>
       Scan to Ride
       </Text >
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ScooterHome;
