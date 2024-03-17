import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfilePage from '../../../UserProfilePage';
import Cat from './Cat';
import Message from './Message';
import Explore from './Explore';
import AccountScreen from '../Account';
import ActivityScreen from '../../../ActivityScreen';
import Cards from './Cards';
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Cat navigation={navigation} />
    </View>
  );
};


const ActiviyScreen = () => {
    return (

       <ActivityScreen />
      
    );
  };
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
 <Message />
    </View>
  );
};

const Main = ({navigation}) => {


  const [tabBarVisible, setTabBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = ({ nativeEvent }) => {
      const { contentOffset, contentSize, layoutMeasurement } = nativeEvent;
      const reachedEnd = contentOffset.y >= contentSize.height - layoutMeasurement.height;
      setTabBarVisible(!reachedEnd);
    };

    // Add a scroll event listener
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.addListener('scroll', handleScroll);
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, [navigation]);



  return (
    <Tab.Navigator screenOptions={{ style: styles.tabBar }}
    tabBarOptions={{
      "tabBarStyle": [
        {
          "display": "none"
        },
        null
      ]
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/icons/home-act.png') : require('../../../assets/icons/home-navv.png')}
              style={styles.tabIcon}
            />
          ),
          headerShown: false,
        }}
      />
   

<Tab.Screen
        name="Activity"
        component={ActiviyScreen}
        options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/icons/act-act.png') : require('../../../assets/icons/act-nav.png')}
                style={styles.tabIcon}
              />
            ),
            headerShown: false,
          }} // Remove header bar
      />


         <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/icons/exp-act.png') : require('../../../assets/icons/exp-nav.png')}
                style={styles.tabIcon}
              />
            ),
            headerShown: false,
          }} // Remove header bar
      />


      <Tab.Screen
        name="Message"
        component={ProfileScreen}
         options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/icons/msg-act.png') : require('../../../assets/icons/msg-nav.png')}
              style={styles.tabIcon}
            />
          ),
          headerShown: false,
        }} // Remove header bar
      />
        <Tab.Screen
        name="Account"
        component={UserProfilePage}
        options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../../../assets/icons/acct-act.png') : require('../../../assets/icons/acct-nav.png')}
                style={styles.tabIcon}
              />
            ),
            headerShown: false,
          }} // Remove header bar
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8'
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
});



export default Main;
