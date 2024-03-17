import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function Completed() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Image
        resizeMode='contain'
        style={{ height: 130, width: 130 }}
        source={{ uri: 'https://cdn1.iconfinder.com/data/icons/scenes-6/1000/e-commerce___empty_cart_cancel_shopping_empty_cart_ecommerce_commerce-256.png ' }} />
      <Text style={{textAlign:"center",fontFamily:'inter-bold',fontSize:18}}>No Completed Order!</Text>
    </View>
  )
}

const styles = StyleSheet.create({})