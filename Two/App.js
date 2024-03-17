


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="ActivityScreen"
          component={ActivityScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
       <Stack.Screen
          name="AddBusinessProfile"
          component={AddBusinessProfile}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
         <Stack.Screen
          name="TravellerInfo"
          component={TravellerInfo}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="TripSummary"
          component={TripSummary}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="createBusProfile"
          component={CreateBusinessProfile}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="SafetySetting"
          component={SafetySetting}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
         <Stack.Screen
          name="ChatDriver"
          component={ChatDriver}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        
        <Stack.Screen
          name="TripDetails"
          component={TripDetails}
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
