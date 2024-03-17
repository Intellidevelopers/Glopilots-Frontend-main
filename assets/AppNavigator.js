import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TravelStartup from "./Screens/TravelStartup";
import TravelSearch from "./Screens/TravelSearch";
import VerifyOTP from "./Screens/VerifyOTP";
import TravelAndExplore from "./Screens/TravelAndExplore";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="TravelSearch" component={TravelSearch} />
      <Stack.Screen name="Verify OTP" component={VerifyOTP} />
        <Stack.Screen name="Travel & Explore" component={TravelAndExplore} />
        
        
        <Stack.Screen name="GloPilot Travel" component={TravelStartup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;