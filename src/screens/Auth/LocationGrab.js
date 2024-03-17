import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';
import { useLocation } from '../../../Constants/LocationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';


const LocationGrab = () => {

  const dispatch = useDispatch();
  const { setCoordinates } = useLocation();
  const state_longi = useSelector(state => state.logitude);
  const state_lati = useSelector(state => state.latitude);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        dispatch({ type: 'UPDATE_LOGI', payload: longitude });
        dispatch({ type: 'UPDATE_LATI', payload: latitude });


        // Log detailed location information
        console.log('Location Data:');
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
        console.log('Timestamp:', new Date(location.timestamp).toLocaleString());
        console.log('State Longitudes:', state_longi);
        console.log('State Longitude:', state_lati);
        

        // Save coordinates to AsyncStorage
        await saveCoordinatesToStorage(latitude, longitude);
       

        // Update the context with the new coordinates
        setCoordinates(latitude, longitude);
    
      } catch (error) {
        console.error('Error getting current location:', error);
      }
    })();
  }, [setCoordinates]);






  // Function to save coordinates to AsyncStorage
  const saveCoordinatesToStorage = async (latitude, longitude) => {
    try {
      await AsyncStorage.setItem('user_latitude', String(latitude));
      await AsyncStorage.setItem('user_longitude', String(longitude));
      console.log('Coordinates saved to AsyncStorage');
    } catch (error) {
      console.error('Error saving coordinates to AsyncStorage:', error);
    }
  };

  return null;
};

export default LocationGrab;
