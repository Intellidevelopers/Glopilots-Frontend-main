import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfilePage from '../../../UserProfilePage';
import Cat from './Cat';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';
import Message from './Message';

const LocationCard = ({ title, address }) => (
    
    <View style={styles.locationCard}>
      
      
     
      <View style={styles.textContainer}>
  
      <View style={styles.iconContainer} />
      <View style={styles.columns}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
        </View>
      </View>
     
    </View>
  );

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
    const [userLocation, setUserLocation] = useState(null);

  return (


<View style={styles.container}>
<View style={styles.trectangle} />
<View style={styles.contain}>


    
   <View style={styles.column}>
    <View style={styles.rectangle} >
    <Image
  source={require('../assets/icons/ride-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>
 </View>
    <Text style={styles.text}>Ride</Text>
    </View>

    <View style={styles.column}>
    <View style={styles.rectangle} >
    <Image
  source={require('../assets/icons/package-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </View>
    <Text style={styles.text}>Package</Text>
    </View>

    <View style={styles.column}>
    <View style={styles.rectangle} >
    <Image
  source={require('../assets/icons/2-wheels.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </View>
    <Text style={styles.text}>2-Wheels</Text>
    </View>


    <View style={styles.column}>
    <View style={styles.rectangle} >
    <Image
  source={require('../assets/icons/tricycle.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </View>
    <Text style={styles.text}>Tri-Cycle</Text>
    </View>

    <View style={styles.column}>
    <View style={styles.rectangle} >
    <Image
  source={require('../assets/icons/food-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </View>
    <Text style={styles.text}>Food</Text>
    </View>

    <View style={styles.column}>
    <View style={styles.rectangle} >
    <Image
  source={require('../assets/icons/groceries-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </View>
    <Text style={styles.text}>Grocery</Text>
    </View>

    <View style={styles.column}>
    <View style={styles.rectangle} >
    <Image
  source={require('../assets/icons/hourly-icon.png')}
  style={styles.tabIcon} resizeMode='contain'
/>



        </View>
    <Text style={styles.text}>Hourly</Text>
    </View>

    <View style={styles.column}>
    <View style={styles.rectangle} >
    <Image
  source={require('../assets/icons/more-icon.png')}
  style={{height: 4.5, }} resizeMode='contain'
/>



        </View>
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


    <LocationCard title="5415 Newcastle Ave" address="Encino, California" />
    <LocationCard title="The Grove" address="189 the Grove Dr, Los Angeles, California" />
    <LocationCard title="1411 Lincoln Blvd" address="Santa Monica, California" />
 
  <View style={{flex: 1}}>
    <Text style={{fontSize: 22, fontWeight: '700',  }}>Around You</Text>
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
      </View>
  </View>
   );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    map: {
        
        width: 300,
        height: 388,
      },

    tabBar: {
      position: 'absolute',
      bottom: 15, // 5 pixels from the bottom
      left: 0,
      right: 0,
      borderTopWidth: 0.5, // Add a border to separate from content
      borderColor: '#ddd', // Border color
      backgroundColor: 'white', // Background color
      height: 60, // Tab bar height
      flexDirection: 'row', // Arrange tabs horizontally
      justifyContent: 'space-around', // Distribute space evenly
      alignItems: 'center', // Center items vertically
    },
    tabIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },


    container: {
        flex: 1,
      //  justifyContent: 'center',
        alignItems: 'center',
        
      },
     scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20, // Adjust as needed
      },
      contain: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection:'row',
        flexWrap: 'wrap',
      },
    
      containers: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    
      },
    
      catcontainers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
         },
      locationCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
      },
      iconContainer: {
        width: 24,
        height: 24,
        backgroundColor: '#0d1317',
        marginRight: 10,
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
        marginTop: 10,
        marginBottom: 10,
        
      },
      column: {
        alignItems: 'center',
        marginBottom: 10,
      },
      trectangle: {
      marginTop: 10,
        width: '100%',
        height: 160,
        marginBottom: 10,
    
        backgroundColor: '#4460ef',
      },
    
      title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0d1317',
        lineHeight: 20,
      },
      address: {
        fontSize: 16,
        color: '#545454',
        lineHeight: 40,
      },
      line: {

        height: 1.5,
        backgroundColor: '#e4e4e4',
      },
      searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 32,
        justifyContent: 'space-between',
        width: '80%',
        marginRight: 10,
        marginLeft: 10,
        height: 64,
       
      },
      searchIcon: {
        marginLeft: 10,
      },
      rectangle: {
        width: 'auto',
        height: 64,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 20,   
        marginHorizontal: 15,
      //  marginBottom: 10,
        backgroundColor: '#eee', //#eee
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
        padding: 5,
        alignItems: 'flex-end'
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
      opacity: {
        backgroundColor: '#eee',
        padding: 10,
        borderLeftWidth: 1,
        borderColor: '#eee',
        width: '33.3%',
        height: 48,
        textAlign: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
      },
      
    
     lopacity: {
        backgroundColor: '#eee',
        padding: 10,
        borderLeftWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        
        width: '33.3%',
        borderBottomWidth: 2,
        height: 48,
        textAlign: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
      },
      ropacity: {
        backgroundColor: '#eee',
        padding: 10,
        borderColor: '#eee',
        borderTopRightRadius: 10, 
        borderBottomRightRadius: 10,
        width: '33.3%',
        height: 48,
        textAlign: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
      
      },
    
      
      activeOpacity: {
        backgroundColor: '#4460EF',
        padding: 10,
        color: '#fff',
        borderLeftWidth: 1,
        height: 48,
        textAlign: 'center',
        justifyContent: 'center',
        borderColor: '#eee',
        width: '33.3%',
        borderRadius: 40,  
        borderRightWidth: 1,
      },
    
      lactiveOpacity: {
        backgroundColor: '#4460EF',
        padding: 10,
        borderLeftWidth: 1,
          height: 48,
          color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        borderColor: '#eee',
         borderRadius: 40,
        
        width: '33.3%',
      
        borderRightWidth: 1,
      },
      ractiveOpacity: {
        backgroundColor: '#4460EF',
        padding: 10,
        borderLeftWidth: 1,
          height: 48,
        textAlign: 'center',
        justifyContent: 'center',
        borderColor: '#eee',
        width: '33.3%',
       borderRadius: 40,
        borderRightWidth: 1,
      },
      WhiteText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
      },
      BlackText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
      },
      vrcontainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
      },
    
      tabIcon: {
        width: 50,
        height: 35,
      //  padding: 20
      },
  });
  
  export default Home;
  