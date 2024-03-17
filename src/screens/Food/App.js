import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeDrawer from "./HomeDrawer";
import FoodDetails from "./FoodDetails";
import PickLocation from "./PickLocation";
import Schedule from "./Schedule";
import SearchFoodHome from "./SearchHomeFood";
import SearchFoodHome2 from "./SearchHomeFood2";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="SearchFoodHome" component={SearchFoodHome} />

      <Stack.Screen name="PickLocation" component={PickLocation} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        
        
        
        <Stack.Screen name="SearchFoodHome2" component={SearchFoodHome2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
