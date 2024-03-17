import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'

export default function Add() {
  const nav = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ margin: 15, marginTop: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={{ fontFamily: 'inter-bold', fontSize: 20 }}>Sell Products</Text>
        </View>
        <View />
      </View>


      <View style={{ margin: 15 }}>

        <View style={[styles.inputStyle, { justifyContent: 'space-between', flexDirection: "row", alignItems: "center", marginBottom: 20 }]}>
          <Text style={{ fontFamily: "inter-regular" }}>Select Category</Text>
          <View>
            <Feather name="chevron-down" size={24} color="grey" style={{ marginRight: 10 }} />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <TextInput
            // onChangeText={(txt) => setUserFirstName(txt)}
            style={styles.inputStyle}
            placeholder='Name of Product' />
        </View>

        <View style={{ marginBottom: 20 }}>
          <TextInput
            multiline={true}
            // onChangeText={(txt) => setUserFirstName(txt)}
            style={[styles.inputStyle]}
            placeholder='Product Description' />
        </View>

        <View style={[styles.inputStyle, { justifyContent: 'space-between', flexDirection: "row", alignItems: "center",marginBottom:20 }]}>
          <TextInput
            placeholder='Location'
            style={{ fontFamily: "inter-regular", flex: 1 }}
          />
          <View>
            <Ionicons name="ios-location-outline" size={24} color="grey" style={{ marginRight: 10 }} />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <TextInput
            multiline={true}
            // onChangeText={(txt) => setUserFirstName(txt)}
            style={[styles.inputStyle]}
            placeholder='Specifications' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 45,
    width: 45,
    backgroundColor: "#eee"
  },
  inputStyle: {
    height: 45,
    paddingLeft: 20,
    fontFamily: 'inter-regular',
    backgroundColor: "#fff",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
    borderRadius: 5
  },
})