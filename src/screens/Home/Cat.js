import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DeliveryCards from './Cards';

import Home from './Home';
import Hospitality from './Hospitality';

const windowWidth = Dimensions.get('window').width;


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

const UserScreen = () => (
  <View style={styles.categoryScreen}>
    <Text>User Screen Content</Text>
  </View>
);

const RideScreen = () => (
  <View style={styles.categoryScreen}>
    <Text>Ride Screen Content</Text>
  </View>
);

const VendorScreen = () => (
  <View style={styles.categoryScreen}>
    <Text>Vendor Screen Content</Text>
  </View>
);

const Cat = ({navigation}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [showPicker, setShowPicker] = useState(false);
   // const [activeIndex, setActiveIndex] = useState(0);
    const handlePress = (index) => {
      setActiveIndex(index);
    };
  
    const renderScreenComponent = () => {
      switch (activeIndex) {
        case 0:
          return <Home navigation={navigation}/>;
        case 1:
          return <DeliveryCards navigation={navigation}/>;
        case 2:
          return <Hospitality navigation={navigation}/>;
        default:
          return null;
      }
    }

const getOpacityStyle = (index) => {
    if (index === activeIndex) {
      return styles.activeOpacity;
    }
    return styles.opacity;
  };

const getLOpacityStyle = (index) => {
    if (index === activeIndex) {
      return styles.lactiveOpacity;
    }
    return styles.lopacity;
  };
  const getROpacityStyle = (index) => {
    if (index === activeIndex) {
      return styles.ractiveOpacity;
    }
    return styles.ropacity;
  };

  const getLOpacityColor = (index) => {
    if (index === activeIndex) {
      return styles.WhiteText;
    }
    return styles.BlackText;
  };
  const getROpacityColor = (index) => {
    if (index === activeIndex) {
      return styles.WhiteText;
    }
    return styles.BlackText;
  };
  const getMOpacityColor = (index) => {
    if (index === activeIndex) {
      return styles.BlackText;
    }
    return styles.WhiteText;
  };
return(

   <View style={styles.pageContainer}>
          <View style={styles.vrcontainer}>
            <TouchableOpacity
              style={activeIndex === 0 ? styles.rideactiveOpacity : styles.rideopacity}
              onPress={() => handlePress(0)}
            > 
            <View style={styles.rowwa}>
            <Image
            source={require('../../../assets/home/Rides.png')}
            style={styles.tabIcon} resizeMode='contain'
          />
              <Text style={activeIndex === 0 ? styles.WhiteText : styles.BlackText}>
               
                Rides
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={activeIndex === 1 ? styles.dactiveOpacity : styles.dopacity}
              onPress={() => handlePress(1)}
            > 
             <View style={styles.rowwa}>
            <Image
            source={require('../../../assets/home/Delivery.png')}
            style={styles.tabIcon} resizeMode='contain'
          />
              <Text style={activeIndex === 1 ? styles.WhiteText : styles.BlackText}>
                Delivery
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={activeIndex === 2 ? styles.activeOpacity : styles.opacity}
              onPress={() => handlePress(2)}
            >
              <View style={styles.rowwa}>
               <Image
            source={require('../../../assets/home/Hospitality.png')}
            style={styles.tabIcon} resizeMode='contain'
          />
      
              
              <Text style={activeIndex === 2 ? styles.WhiteText : styles.BlackText}>
                Hospitality
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollContainer}>
          {renderScreenComponent()}
</ScrollView>  
        </View>

       
);
      }
const styles = StyleSheet.create({

 scrollViewContent: {
    flexGrow: 1,
 //   paddingBottom: 20,
    
    // Adjust as needed
  },
  scrollContainer: {
    flex: 1, // This makes the scroll view take the remaining space
    backgroundColor: '#f8f8f8',
    
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
  opacity: {
    backgroundColor: '#eee',
    padding: 10,
    borderLeftWidth: 1,
    borderColor: '#eee',
    width: '35%',
    borderRadius: 40,
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },

    rideopacity: {
    backgroundColor: '#eee',
    padding: 10,
    borderLeftWidth: 1,
    borderColor: '#eee',
    width: '27%',
    borderRadius: 40,
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
   dopacity: {
    backgroundColor: '#eee',
    padding: 10,
    borderLeftWidth: 1,
    borderColor: '#eee',
    width: '30%',
    borderRadius: 40,
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
    
    width: '25%',
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
    width: '35%',
    borderRadius: 40,  
    borderRightWidth: 1,
  },

  dactiveOpacity: {
    backgroundColor: '#4460EF',
    padding: 10,
    color: '#fff',
    borderLeftWidth: 1,
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
    width: '30%',
    borderRadius: 40,  
    borderRightWidth: 1,
  },

  rideactiveOpacity: {
    backgroundColor: '#4460EF',
    padding: 10,
    color: '#fff',
    borderLeftWidth: 1,
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
    width: '27%',
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
    fontSize: 15,
  },
 
  BlackText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
  vrcontainer: {
    flexDirection: 'row',
 //   flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F8F8F8',
   // marginBottom: 20,
    justifyContent: 'space-between',
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    
    },
  rowwa: {
    flexDirection: 'row',
  //  backgroundColor: '#fff'
 
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginRight: 5
  },
});

export default Cat;
