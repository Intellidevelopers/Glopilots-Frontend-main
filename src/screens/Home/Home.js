import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Modal, ScrollView, ActivityIndicator} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import UserProfilePage from '../../../UserProfilePage';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Carousel from 'react-native-snap-carousel';


//import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import Message from './Message';
import { TouchableOpacity } from 'react-native-gesture-handler';


const categories = [
  { icon: require('../../../assets/icons/ride-icon.png'), title: 'Ride', },
  { icon: require('../../../assets/icons/package-icon.png'), title: 'Package' },
  { icon: require('../../../assets/icons/2-wheels.png'), title: '2-Wheels' },
  { icon: require('../../../assets/icons/tricycle.png'), title: 'Tri-Cycle' },
  { icon: require('../../../assets/icons/food-icon.png'), title: 'Food' },
  { icon: require('../../../assets/icons/groceries-icon.png'), title: 'Grocery' },
  { icon: require('../../../assets/icons/hourly-icon.png'), title: 'Hourly' },
  { icon: require('../../../assets/icons/more-icon.png'), title: 'More' },
];


const carouselData = [
  { image: require('../../../assets/caro/pic2.jpeg'), screen: 'Package' },
  { image: require('../../../assets/caro/pic3.jpeg'), screen: 'Rider'},
  { image: require('../../../assets/caro/pic4.jpeg'), screen: 'Hourly' },
  { image: require('../../../assets/caro/pic5.jpeg'), screen: 'Explore' },
  { image: require('../../../assets/caro/pic6.jpeg'), screen: 'ScooterHome' },
  { image: require('../../../assets/caro/pic7.jpeg'), screen: 'InterState' },
  { image: require('../../../assets/caro/pic8.jpeg'), screen: 'Package' },
  { image: require('../../../assets/caro/pic9.jpeg'), screen: 'Rent' },
  { image: require('../../../assets/caro/pic10.jpeg'), screen: 'Rider' },

  // Add more picture objects as needed
];



const LocationCard = ({ title, address, name }) => (
    
    <View style={styles.locationCard}>
      
      <View style={styles.textContainer}>
  
      <View style={styles.iconContainer} />
      <View style={styles.columns}>
      <Text style={styles.homec}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
        </View>
      </View>
     
    </View>
  );

const Tab = createBottomTabNavigator();



const Home = ({navigation}) => {
    const [userLocation, setUserLocation] = useState(null);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    const randomLatitude = 37.7749; // Replace with your desired latitude
    const randomLongitude = -122.4194;
  



    const [loading, setLoading] = useState(false);
    const [locationLoading, setLocationLoading] = useState(true); // Added for location loading
    
//    const [userLocation, setUserLocation] = useState(null);
  
    const fetchUserCoordinates = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching location:', error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchUserCoordinates();
    }, []);
  

    useEffect(() => {
      const fetchUserCoordinates = async () => {
        try {
          let { status } = await Location.requestForegroundPermissionsAsync();
  
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
  
          let location = await Location.getCurrentPositionAsync({});
          setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
  
          // Fetch address using Google Maps Geocoding API
          const apiKey = 'AIzaSyAMK0gm6FqImxY1oLDQ72UcTuZzybFl7Lw';
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${apiKey}`
          );
  
     
          const data = await response.json();
          const addressComponents = data.results[0]?.address_components || [];
          const formattedAddress = data.results[0]?.formatted_address || 'Address not found';
    
          // Extract specific components
          let streetNumber, route, city, country;
    
          addressComponents.forEach((component) => {
            if (component.types.includes('street_number')) {
              streetNumber = component.long_name;
            } else if (component.types.includes('route')) {
              route = component.long_name;
            } else if (component.types.includes('locality')) {
              city = component.long_name;
            } else if (component.types.includes('country')) {
              country = component.long_name;
            }
            // Add more conditions for other components as needed
          });
    
          setUserLocation((prevLocation) => ({
            ...prevLocation,
            address: formattedAddress,
            streetNumber,
            route,
            city,
            country,
          }));
        } catch (error) {
          console.error('Error fetching location:', error);
        }
      };
    
      fetchUserCoordinates();
    }, []);
  

    useEffect(() => {
      // Get the user's location
      (async () => {
        try {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
          }
  
          const location = await Location.getCurrentPositionAsync({});
          setUserLocation(location.coords);
        } catch (error) {
          console.error('Error getting user location:', error);
        }
      })();
    }, []);
    

    const navigateToMapLocator = () => {
      navigation.navigate('Rider');
    };
    
    const Package = () => {
      navigation.navigate('Package');
    };
    
    const Trycycle = () => {
      navigation.navigate('TriCycle');
    };
    
    
    const TwoWheel = () => {
      navigation.navigate('TwoWheel');
    };
    
    const Food = () => {
      navigation.navigate('FoodDetails');
    };
    
    const Grocery = () => {
      navigation.navigate('Grocery');
    };
    const Hourly = () => {
      navigation.navigate('Hourly');
    };
    
   

 // Create a reference to the bottom sheet modal
 const bottomSheetModalRef = useRef(null);


const showBottomSheet = () => {
  setIsBottomSheetVisible(true);
  // Open the bottom sheet using the reference
  bottomSheetModalRef.current?.present();
};

  return (
<ScrollView>

<View style={styles.container}>


<View style={styles.trectangle}>
        <Carousel
          layout="3D"
          data={carouselData}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          autoplay={true}              
          autoplayInterval={5000}
          loop={true} 
          loopClonesPerSide={carouselData.length} // Set to the number of items in your carousel data
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <Image
              source={item.image}
              style={styles.carouselImage}
              resizeMode="cover"
            />
            </TouchableOpacity>
          )}
        />
      </View>


<View style={styles.row}>


    
   <View style={styles.column}>
   <TouchableOpacity style={styles.rectangle} onPress={navigateToMapLocator}>
    <Image
  source={require('../../../assets/icons/ride-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>
 </TouchableOpacity>
    <Text style={styles.text}>Ride</Text>
    </View>

    <View style={styles.column}>
    <TouchableOpacity style={styles.rectangle} onPress={Package}>
    <Image
  source={require('../../../assets/icons/package-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </TouchableOpacity>
    <Text style={styles.text}>Package</Text>
    </View>

    <View style={styles.column}>
    <TouchableOpacity style={styles.rectangle} onPress={TwoWheel}>
    <Image
  source={require('../../../assets/icons/2-wheels.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </TouchableOpacity>
    <Text style={styles.text}>2-Wheels</Text>
    </View>

   




    <View style={styles.column}>
    <TouchableOpacity style={styles.rectangle} onPress={Trycycle}>
    <Image
  source={require('../../../assets/icons/tricycle.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </TouchableOpacity>
  
        
    <Text style={styles.text}>Tri-Cycle</Text>
    </View>
      </View>



      <View style={styles.row}>

    <View style={styles.column}>
    <TouchableOpacity style={styles.rectangle} onPress={Food}>
    <Image
  source={require('../../../assets/icons/food-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </TouchableOpacity>


     
    <Text style={styles.text}>Food</Text>
    </View>

    <View style={styles.column}>
    <TouchableOpacity style={styles.rectangle} onPress={Grocery}>
    <Image
  source={require('../../../assets/icons/groceries-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </TouchableOpacity>
    <Text style={styles.text}>Grocery</Text>
    </View>

    <View style={styles.column}>
    <TouchableOpacity style={styles.rectangle} onPress={Hourly}>
    <Image
  source={require('../../../assets/icons/hourly-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>
        </TouchableOpacity>
    <Text style={styles.text}>Hourly</Text>
    </View>

    <View style={styles.column}>
    <TouchableOpacity style={styles.rectangle}  onPress={showBottomSheet}>
    <Image
  source={require('../../../assets/icons/more-icon.png')}
  style={{height: 4.5, }} resizeMode='contain'
/>
        </TouchableOpacity>
    <Text style={styles.text}>More</Text>
    </View>
</View>
<View style={styles.containers}>
    <View style={styles.searchBar}>
      <Icon name="search" size={24} color="#0d1317" style={styles.searchIcon} />
      <Text style={styles.searchText}>Where to?</Text>
   
    <View style={styles.timeSelector}>
      <Icon name="clock" size={16} color="#0d1317" style={styles.timeIcon} />
      <Text style={styles.timeText}>Now</Text>
      <Icon name="chevron-down" size={16} color="#0d1317" style={styles.arrowIcon} />
    </View>
    </View>
  </View>

<View style={{flex: 1, marginBottom: 20}}></View>
    <LocationCard title={userLocation?.route} address={userLocation?.address} name="Home" />
    <LocationCard title={userLocation?.route} address={userLocation?.address} name="Work" />
    <LocationCard title={userLocation?.route} address={userLocation?.address} name="You"/>
 
<View style={{flex: 1, marginBottom: 20}}></View>




     
  {/* Map section */}
  <View style={{flex: 1, marginBottom: 20}}>
    <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 20  }}>Around You</Text>
    
    
    
    
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: userLocation?.latitude || 0, // Use a default value if userLocation is null
        longitude: userLocation?.longitude || 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,        
      }}
      zoomEnabled={true} // Disable zooming
      scrollEnabled={true} // Disable scrolling
      showsUserLocation={true}
      loadingEnabled={true}
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
            source={require('../../../assets/icons/pp.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>
      )}
    </MapView>
      </View>
 
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

  </ScrollView>
   );
};
//const IMAGE_WIDTH_PERCENTAGE = 10;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
//    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  row: {
       marginLeft: 10,
       marginRight: 5,
       marginTop: 15,
       marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '91%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  map: {
        
    width: screenWidth - 20,
    height: 388
  },

  carouselImage: {
    width: '95%',
    height: 120, // Adjust the height as needed
    borderRadius: 10,
    marginLeft: 10,
  },
 
    tabIcon: {
      width: '25%',
      height: '25%',
      resizeMode: 'contain',
    }, 
  
      containers: {
     flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
    
      },
    
    
      locationCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      },
      iconContainer: {
        width: 24,
        height: 24,
        backgroundColor: '#0d1317',
        marginRight: 10,
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
      },
      textContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        borderBottomWidth: 1.5,
        borderBottomColor: '#e4e4e4',
        flexDirection: 'row',
        
        marginBottom: 5,
        
      },
      column: {
        alignItems: 'center',
        marginBottom: 10,
      },

      trectangle: {
      marginTop: 10,
        width: '100%',
  //      marginHorizontal: 20,
        height: 120,
        marginBottom: 10,
     //   backgroundColor: '#4460ef',
      },
    
      title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0d1317',
        lineHeight: 25,
      },
       homec: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0d1317',
        lineHeight: 25,
      },
      address: {
        fontSize: 16,
        color: '#545454',
        lineHeight: 20,
        marginBottom: 9,
      },
  
      searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 32,
        justifyContent: 'space-between',
        width: '85%',
        marginRight: 10,
        marginLeft: 10,
        height: 64,
       
      },
      searchIcon: {
        marginLeft: 20,
      },
      rectangle: {
        width: '100%',
        height: 64,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,   
  //      marginHorizontal: 5,
      //  marginBottom: 10,
        backgroundColor: '#ccc', //#eee
      },
      text: {
        fontSize: 14,
     
        color: '#171717',
        marginTop: 15,
      },
      searchText: {
        fontSize: 22,
        marginRight: 60,
       
        color: '#0d1317',
      },
      timeSelector: {
        flexDirection: 'row',
        alignItems: 'center',
       // marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
   //     alignItems: 'flex-end'
      },
      timeIcon: {
        marginRight: 5,
      },
      timeText: {
        fontSize: 16,
        color: '#0d1317',
        marginRight: 5,
      },
      arrowIcon: {
        marginLeft: 5,
      },    
      tabIcon: {
        width: 50,
        height: 35,
      //  padding: 20
      },
  });
  
  export default Home;
  
