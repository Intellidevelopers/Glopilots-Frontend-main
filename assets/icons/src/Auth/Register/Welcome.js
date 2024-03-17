import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Appcolor } from '../../../UTILS/Color'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeUser() {
  const nav = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: "center", alignItems: 'center' }}>
      <Image
        resizeMode='contain'
        style={{ height: 150, width: 150 }}
        source={{ uri: 'https://cdn4.iconfinder.com/data/icons/startup-133/1600/welcome-256.png' }} />
      <Text style={{ fontFamily: "inter-medium", fontSize: 20, marginBottom: 10 }}>Login to your account to start shopping!</Text>
      <TouchableOpacity
        onPress={() => {
          nav.replace("AuthApp")
        }}
        style={{ height: 45, width: 200, justifyContent: "center", alignItems: "center", backgroundColor: Appcolor.blue, borderRadius: 10 }}>
        <Text style={{ color: "#fff", fontFamily: 'inter-bold' }}>Start Shopping</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})