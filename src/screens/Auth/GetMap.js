import Geolocation from 'react-native-geolocation-service';

// Inside your component or function
const getCoordinates = () => {
  Geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      // Now you have latitude and longitude, you can store them in AsyncStorage
      saveCoordinatesToStorage(latitude, longitude);
    },
    error => {
      console.error(error);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};


import { AsyncStorage } from 'react-native';

const saveCoordinatesToStorage = async (latitude, longitude) => {
  try {
    const coordinates = JSON.stringify({ latitude, longitude });
    await AsyncStorage.setItem('coordinates', coordinates);
    console.log('Coordinates saved successfully.');
  } catch (error) {
    console.error('Error saving coordinates:', error);
  }
};

const getCoordinatesFromStorage = async () => {
  try {
    const coordinates = await AsyncStorage.getItem('coordinates');
    if (coordinates !== null) {
      const { latitude, longitude } = JSON.parse(coordinates);
      console.log('Retrieved coordinates:', latitude, longitude);
      // You can use latitude and longitude as needed
    }
  } catch (error) {
    console.error('Error retrieving coordinates:', error);
  }
};
