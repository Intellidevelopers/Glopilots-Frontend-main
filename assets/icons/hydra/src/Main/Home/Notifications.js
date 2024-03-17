import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import GeneralNotifications from './GeneralNotifications'
import SaleNotifications from './SaleNotifications'
import { Appcolor } from '../../../UTILS/Color'


const Tab = createMaterialTopTabNavigator()


export default function Notifications() {
    const nav = useNavigation()
    return (
        <View style={{flex:1}}>
            <View style={styles.notiBar}>
                <View style={{ margin: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <TouchableOpacity style={styles.roundBackButton} onPress={() => nav.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: "#fff", fontSize: 20, fontFamily: "inter-bold" }}>Notifications</Text>
                    </View>
                    <View />
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
                        <Tab.Screen name="General" component={GeneralNotifications} />
                        <Tab.Screen name="Sales" component={SaleNotifications} options={{
                            tabBarBadge:()=>{
                                return(
                                    <View style={{backgroundColor:"tomato",padding:3,borderRadius:5,marginTop:10}}>
                                        <Text style={{fontSize:10,color:"#fff",fontFamily:"inter-bold"}}>45</Text>
                                    </View>
                                )
                            }
                        }}/>
                    </Tab.Navigator>
                </GestureHandlerRootView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notiBar: {
        height: 120,
        backgroundColor: "#064BDE",
        justifyContent: "center"
    },
    roundBackButton: {
        height: 40,
        width: 40,
        backgroundColor: "#fff",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})