import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {StatusBar} from "expo-status-bar"

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const DriveWithGlopilot6 = () => {
  
  const navigation = useNavigation(); // Get the navigation object
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: "Precentages" },
    { id: 2, label: "Dollars" },
  ];

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#DDE1f7" />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>

       
        </View>
        <View style={{height: 276, backgroundColor: "#dde1f7", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Image
            style={{ height: 155.09, width: 276.9 }}
            source={require("../assets/Redcar.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.content}>
          <Text style={{ fontWeight: "600", fontSize: 24, color: "#0d1317", height: 32 }}>
            Add car details
          </Text>
          <Text style={{ color: "#545454", fontSize: 18, height: 24 }}>
            We need a color, year, make, and model.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, gap: 8 }}>
          <TouchableOpacity
       
            onPress={() => navigation.navigate("DriveWithGlopilot7")}
          >
            <View
              style={{
                backgroundColor: "#4460ef", // Background color
                height: 56,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Next
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
         
            onPress={() => navigation.navigate("Page176")}
          >
            <View
              style={{
                backgroundColor: "#eeeeee", // Background color
                marginTop: 6, // Margin top
                height: 56,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#0d1317", // Text color
                }}
              >
                Skip
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8", // Change to your desired background color
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
    paddingHorizontal: 4,
    backgroundColor: "#DDE1f7", // Change to your desired background color
  },
  headerText: {
    fontSize: 18,
    fontWeight: "300",
    color: "black",
  },
  imageContainer: {
    display: "flex",
    minHeight: 300,
    backgroundColor: "#C3DAFE", // Change to your desired background color
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 96,
  },
  content: {
    padding: 20,
  },
  loginButton: {
    backgroundColor: "#0569FF",
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  signupButton: {
    backgroundColor: "#D1D5DB",
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 8,
  },
  signupButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});

export default DriveWithGlopilot6;
