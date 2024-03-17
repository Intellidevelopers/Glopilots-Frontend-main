import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen_21 from './screens/21';
import Screen_203 from './screens/203';
import Screen_207 from './screens/207';
import Screen_215 from './screens/215';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Screen_21'}
      >
        <Stack.Screen
          name="Screen_21"
          component={Screen_21}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Screen_203"
          component={Screen_203}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Screen_207"
          component={Screen_207}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Screen_215"
          component={Screen_215}
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