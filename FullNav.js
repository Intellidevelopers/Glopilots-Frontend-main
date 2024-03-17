import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screen components
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTabs} />
      <Tab.Screen name="Profile" component={ProfileTabs} />
    </Tab.Navigator>
  );
};

// Define the shared screens for both Home and Profile tabs
const SharedScreens = () => (
  <>
    <Tab.Screen name="Screen1" component={Screen1} />
    <Tab.Screen name="Screen2" component={Screen2} />
    <Tab.Screen name="Screen3" component={Screen3} />
  </>
);

// Home tabs that include the shared screens
const HomeTabs = () => (
  <Tab.Navigator>
    <SharedScreens />
    {/* Add any additional Home-specific screens here */}
  </Tab.Navigator>
);

// Profile tabs that include the shared screens
const ProfileTabs = () => (
  <Tab.Navigator>
    <SharedScreens />
    {/* Add any additional Profile-specific screens here */}
  </Tab.Navigator>
);

export default BottomTabNavigator;
