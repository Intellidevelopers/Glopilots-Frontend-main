import Trips from './Trips';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RideHistory from './RideHistory';
import { SafeAreaView, StyleSheet } from 'react-native';
import HelpScreen from './HelpScreen';
import RideForSomeOne from './RideForSomeOne';
import ConfirmPickup from './ConfirmPickup';

const Stack = createStackNavigator();

const App = () => {
  return ( 
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Trips'}>
          <Stack.Screen
            name="Trips"
            component={Trips}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="RideHistory"
            component={RideHistory}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="RideForSomeOne"
            component={RideForSomeOne}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="ConfirmPickup"
            component={ConfirmPickup}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="HelpScreen"
            component={HelpScreen}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
};

export default App;

const styles = StyleSheet.create({
  
});
