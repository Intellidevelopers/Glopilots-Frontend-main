import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LocationGrab from './src/screens/Auth/LocationGrab';
//import { Provider } from 'react-redux';
//import store from './store'; 


import { Provider } from 'react-redux';
import store from './store';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import { HashProvider } from './Constants/HashContext';
import { NotifierWrapper } from 'react-native-notifier';
import  { AuthProvider }  from './Constants/AuthContext';
import { LocationProvider } from './Constants/LocationContext';
import Constants from 'expo-constants';

const apiKey = process.env.GOOGLE_API_KEY;
console.log('API Keysss:', apiKey);


const App = () => {
  return (
    <Provider store={store}>
      
      <HashProvider>
       <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="dark" />
       
       <LocationGrab />
       <NotifierWrapper>
        <AuthProvider>
          <LocationProvider>
       <AppStack />
       </LocationProvider>
       </AuthProvider>
       </NotifierWrapper>
      </View>
      </GestureHandlerRootView>
      </HashProvider>
      </Provider>
   
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
  paddingTop: Constants.statusBarHeight,
    
  },
});

export default App;
