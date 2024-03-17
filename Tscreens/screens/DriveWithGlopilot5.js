import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const DriveWithGlopilot5 = () => {

  const navigation = useNavigation(); // Get the navigation object

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 12 }}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }}
        >
         <Image
            style={{ height: 56, width: 66 }}
            source={require("../assets/car-icon.png")}
            resizeMode="cover"
          />
          <Text style={{ fontWeight: 600, fontSize: 24, color: "#0d1317" }}>I have a car</Text>
          <Text
            style={{ textAlign: "center", color: "#545454", paddingBottom: 1, fontSize: 18, lineHeight: 24 }}
          >
            Drive with a personal or livery vehicle, Heads up: Your vehicle must
            be 2003 or newer and have a minimum of 4 doors and 5 seatbelts
          </Text>
          <TouchableOpacity
           
            onPress={() => navigation.navigate("DriveWithGlopilot6")}
            style={{ display: "flex", width: "100%", paddingBottom: 24 }}
          >
            <View
              style={{
                backgroundColor: "#4460EF", // Background color
                marginTop: 6, // Margin top
                paddingVertical: 12,
                paddingHorizontal: 18,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Text
                style={{
                  fontSize: 20, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Use my Car
              </Text>
            </View>
          </TouchableOpacity>
  <Image
            style={{ height: 56, width: 128 }}
            source={require("../assets/cars-icon.png")}
            resizeMode="cover"
          />
          <Text style={{ fontWeight: 600, fontSize: 24, color: "#0d1317" }}>I have a car</Text>
          <Text
            
            style={{ textAlign: "center", color: "#545454", paddingBottom: 1, fontSize: 18, lineHeight: 24 }}
          >
            Get an affordable insured rental car you can use
          </Text>
          <TouchableOpacity
          
            onPress={() => navigation.navigate("Page166")}
            style={{ display: "flex", width: "100%" }}
          >
            <View
              style={{
                backgroundColor: "#4460EF", // Background colo
                marginTop: 6, // Margin top
                paddingVertical: 12,
                paddingHorizontal: 18,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Text
                style={{
                  fontSize: 20, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Rent a car
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /* handle onPress */
            }}
            style={{
              display: "flex",
              width: "100%",
              paddingTop: 6,
              paddingBottom: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "#eeeeee", // Background color
                marginTop: 6, // Margin top
                paddingVertical: 12,
                paddingHorizontal: 18,
                borderRadius: 9,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Text
                style={{
                  fontSize: 20, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#0d1317", // Text color
                }}
              >
                See your special weekly rate
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: "#545454", fontSize: 18 }}>
            Plus applicable taxes and fees, An upfront deposit or starter fee
            may be required. Earnings by vehicle type may vary. Insurance
            coverage may vary by state
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DriveWithGlopilot5;

const styles = StyleSheet.create({});
