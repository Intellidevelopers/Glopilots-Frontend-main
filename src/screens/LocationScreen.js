import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { homestyle, locationStyle } from "../../styles/style";
import { Entypo } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Divider from "../components/Divider";
const LocationScreen = ({ navigation }) => {
    
  return (
    <SafeAreaView style={locationStyle.container}>
      <View style={locationStyle.headerContainer}>
        <TouchableOpacity style={locationStyle.header} onPress={()=> navigation.goBack()}>
          <Entypo name="chevron-small-left" size={30} color="black" />
          <Text style={{fontSize: 20, }}>
            Pick up & Return near
          </Text>
        </TouchableOpacity>

        <View style={locationStyle.inputContainer}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "royalblue",
                borderRadius: 100,
              }}
            ></View>
            <View
              style={{ backgroundColor: "royalblue", width: 3, flex: 1 }}
            ></View>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "royalblue",
              }}
            ></View>
          </View>
          <View>
            <TextInput style={locationStyle.input} />
            <TextInput style={locationStyle.input} />
          </View>
        </View>
      </View>

      <View style={locationStyle.listContainer}>
        <TouchableOpacity style={locationStyle.listItem}>
          <View style={locationStyle.listItemContent}>
            <AntDesign name="reload1" size={24} color="black" />
            <Text style={homestyle.locationButtonTextUnstyled}>
              Return to the location
            </Text>
          </View>
          <Entypo name="chevron-small-right" size={30} color="black" />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={locationStyle.listItem} onPress={()=> navigation.navigate('Cars')}>
          <View style={locationStyle.listItemContent} >
            <Feather name="clock" size={24} color="black" />
            <View>
              <Text style={homestyle.locationButtonTextBold}>
                291 Purdue Ave
              </Text>
              <Text>Los Angeles, California</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={locationStyle.listItem}  onPress={()=> navigation.navigate('Cars')}>
          <View style={locationStyle.listItemContent}>
            <Feather name="clock" size={24} color="black" />
            <View>
              <Text style={homestyle.locationButtonTextBold}>
                401 E Hillcrest Ave
              </Text>
              <Text>Inglewood, California</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity style={locationStyle.listItem}  onPress={()=> navigation.navigate('Cars')}>
          <View style={locationStyle.listItemContent}>
            <Feather name="clock" size={24} color="black" />
            <View>
              <Text style={homestyle.locationButtonTextBold}>The Grove</Text>
              <Text>189 The Grove Dr, Los Angeles California</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity style={locationStyle.listItem}>
          <View style={locationStyle.listItemContent}>
            <Entypo name="location" size={24} color="black" />
            <View>
              <Text style={homestyle.locationButtonTextUnstyled}>
                Set the location on map
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;
