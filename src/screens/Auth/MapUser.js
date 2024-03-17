import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Modal, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { BottomSheet } from 'react-native-btr';
//import BottomSheet from '@gorhom/bottom-sheet';
import Head from '../../../Head';
//import { BottomSheet, Button, ListItem } from '@rneui/themed';
import SModal from './SModal';
const MapUser = ({navigation, route}) => {

  const [loading, setLoading] = useState(false);
  const [selectedLatitude, setSelectedLatitude] = useState(initialValue);



  



  // const registerUser = async () => {
  //   const url = 'https://cerulean-cockroach-tie.cyclic.app/register';
  //   const headers = {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   };
  
  //   const userData = {
  //     name: {Fname},
  //     email: 'amusilefrancis@gmail.com',
  //     password: {password},
  //    userType: 'driver',
  //     Dob: '{Dob}',
  //     gender: 'male',
  //     location: 'location',
  //   };
  
  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: headers,
  //       body: JSON.stringify(userData),
  //     });
  //     setModalVisible(true);
  //     const data = await response.json();
  //     console.log('Registration response:', data);
  //     // Handle the response data here
  //   } catch (error) {
  //     console.error('Error registering user:', error);
  //     // Handle the error here
  //   }
  // };
  




  const onPressLink = () => {
    navigation.navigate('Main'); 
  };
  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState('');
  const { email, password, Fname, Lname, Dob, phoneNumber, gender, profilePicture, vendor, countryCode } = route.params;

  const [isVisible, setIsVisible] = useState(true);

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
        console.log('Latitude:', latitude, 'Longitude:', longitude);
        setUserLocation({ latitude, longitude });

        // Get user's address based on coordinates
        const addressResponse = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        if (addressResponse.length > 0) {
          const { city, streetNumber, isoCountryCode, name, street, subregion, region, country, district } = addressResponse[0];
          setAddress(` ${street}, ${city}, ${subregion}, ${region}, ${country}`);
        }
      } catch (error) {
        console.error('Error getting current location:', error);
      }
    })();
  }, []);
  const [modalVisible, setModalVisible] = useState(true); 

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
   
    <View style={styles.container}>
       <Head title='DEMO' />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation ? userLocation.latitude : 5.7908552,
          longitude: userLocation ? userLocation.longitude : 6.099017,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="You are here"
          >
            <Image
              source={require('../assets/icons/pp.png')}
              style={{ width: 60, height: 60 }}
            />
          </Marker>
        )}
      </MapView>
      <BottomSheet modalProps={{}} isVisible={isVisible} containerStyle={styles.bottomSheet}>

      
      <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
    
        
    <View style = {
      {
        "flexDirection": "row",
       
        "width": "100%",
       
        justifyContent: 'center',
        marginBottom: 35,
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"

      }
    } >

   

    <Text style = {
      {
     //   "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(13, 19, 23, 255)",
     paddingRight: 20
      }
    } >  {address} </Text>
    <View style={styles.imagecontrol}>
    <Image
                source={require('../assets/location.png')}
                style={{ width: 24, height: 24, alignItems: 'flex-end',  }} resizeMode='contain'
                
              />    
              </View>
    </View>
    
                        
<TouchableOpacity  
     //   onPress={}
        style = {
      {

        "paddingTop": 13,
        "width": "100%",
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    } >  
    <Text style = {
      {
     //   "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Continue </Text>
      </TouchableOpacity>
          </View>
</View>          
    
    </BottomSheet>


    <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    setModalVisible(!modalVisible);
  }}
>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingHorizontal: 20, }}>
         
        <SModal /> 
        
      </View>
    </Modal>

    <Modal
  animationType="none"
  transparent={true}
  visible={loading}  
  onRequestClose={() => {
    // Handle modal close if needed
    setLoading(false);  // Close the modal when loading is done
  }}
>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <ActivityIndicator size="large" color="#4460EF" />
      </View>
    </Modal>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  imagecontrol: {
    alignItems: 'flex-end',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  modalText: {
    alignItems: 'center',
    fontweight: 'bold',
  },
  addressInput: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
  },
  bottomSheet: {
    backgroundColor: 'transparent', 
  },

});

export default MapUser;