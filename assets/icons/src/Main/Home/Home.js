import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import PagerView from 'react-native-pager-view';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Buy from './Buy/Buy';
import Sell from './Sell/Sell';
import { useNavigation } from '@react-navigation/native';
import { BaseUrl } from '../../../UTILS/Urls';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Appcolor } from '../../../UTILS/Color';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([])

  const Screens = [
    {
      title: "Buy",
      index: 0
    },
    {
      title: "Sell",
      index: 1
    }
  ]

  const [initialRoute, setInitialRoute] = useState(0);
  const [activeScreen, setActiveScreen] = useState('Sell');

  const nav = useNavigation()

  return (
    <View style={styles.wrapper}>

      <View style={{ margin: 15, flexDirection: "row", alignItems: "center", marginTop: 45, justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontFamily: "inter-bold", fontSize: 23, color: Appcolor.blue }}>Hydra</Text>
        </View>


        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.smallCircle} onPress={() => {
              nav.navigate('Notification');
            }}>
              <FontAwesome5 name="bell" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallCircle}>
              <Feather name="heart" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Tab.Navigator style={{ flex: 1 }} screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: Appcolor.blue },
        tabBarLabelStyle: { fontFamily: "inter-bold", textTransform: 'capitalize', fontSize: 18 }
      }}>
        <Tab.Screen name="Buy" component={Buy} />
        <Tab.Screen name="Sell" component={Sell} />
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },
  pagerView: {
    flex: 1,
  },
  smallCircle: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 100,
    marginLeft: 15
  }
})