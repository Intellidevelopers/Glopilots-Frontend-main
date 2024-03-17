import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions'; // Install this package
import BottomSheet from "@gorhom/bottom-sheet";
import Divider from '../components/Divider';
import Switch from '../components/Switch';
import Button from '../components/Button';

import { FontAwesome } from "@expo/vector-icons";

const MapChoose = ({ navigation, route }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [selectedRide, setSelectedRide] = useState(null);
  const [showTabs, setShowTabs] = useState(false);

  

  // ... Rest of your component code ...

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: userLocation?.latitude || selectedLatitude,
          longitude: userLocation?.longitude || selectedLongitude,
          ...animatedStyle, // Apply animated delta values
        }}
      >
        {/* User Marker */}
        {/* ... (rest of your marker code) ... */}
      </MapView>
      {/* ... (rest of your
