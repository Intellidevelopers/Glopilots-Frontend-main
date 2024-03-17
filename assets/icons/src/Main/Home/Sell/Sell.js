import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import All from './All';
import Completed from './Completed';
import Shipped from './Shipped';
import Refund from './Refund';
import { Appcolor } from '../../../../UTILS/Color';

const Tab = createMaterialTopTabNavigator()

export default function Sell() {
  return (
    <View style={{ flex: 1,backgroundColor:"#ffff" }}>
      <View>
        <View style={{ backgroundColor: "#eee", flexDirection: "row", justifyContent: "space-around", alignItems: "center", margin: 15, padding: 15, borderRadius: 10 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: "inter-bold", fontSize: 18 }}>₦{' '}800k</Text>
            <Text style={{ fontFamily: "inter-regular" }}>Sold</Text>
          </View>
          <View style={{ backgroundColor: "grey", height: 70, width: 2 }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: "inter-bold", fontSize: 18 }}>5.5k</Text>
            <Text style={{ fontFamily: "inter-regular" }}>followers</Text>
          </View>
          <View style={{ backgroundColor: "grey", height: 70, width: 2 }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: "inter-bold", fontSize: 18 }}>234</Text>
            <Text style={{ fontFamily: "inter-regular" }}>following</Text>
          </View>
          <View style={{ backgroundColor: "grey", height: 70, width: 2 }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: "inter-bold", fontSize: 18 }}>25</Text>
            <Text style={{ fontFamily: "inter-regular" }}>items</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarInactiveTintColor: 'grey',
              tabBarScrollEnabled: true,
              tabBarStyle: {
                backgroundColor: '#fff',
              },
              tabBarItemStyle: {
                width: 'auto',
                alignItems: 'flex-start',
              },
              tabBarLabelStyle: {
                fontSize: 15,
                fontFamily: 'inter-bold',
                color: Appcolor.blue,
                textTransform: 'capitalize',
              },
            }}
            sceneContainerStyle={{ backgroundColor: '#fff' }}>
            <Tab.Screen name="All" component={All} />
            <Tab.Screen name="Completed" component={Completed} />
            <Tab.Screen name="Shipped" component={Shipped} />
            <Tab.Screen name="Refunded" component={Refund} />
          </Tab.Navigator>
        </GestureHandlerRootView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})