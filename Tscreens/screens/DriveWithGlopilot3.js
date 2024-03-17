import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

const DriveWithGlopilot3 = () => {
  
  const navigation = useNavigation(); // Get the navigation object
  return (
    <SafeAreaView style={{ backgroundColor: "#0D1317" }}>
    <StatusBar   style="light" />
      <View style={{ height: "100%" }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.headerText}></Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <Text>
              <AntDesign name="close" size={24} color="white" />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/Steering.png")}
              resizeMode="contain"
            />
          </View>
          <View style={{ display: "flex", paddingBottom: 32 }}>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "700" }}>
              You have taken the first step
            </Text>

            <Text style={styles.subtitle}>
              Driving with GloPilot is an easy way to earn money whenever you
              want
            </Text>

            <TouchableOpacity
            onPress={() => navigation.navigate("DriveWithGlopilot4")}
            >
              <View style={styles.button} 
            onPress={() => navigation.navigate("Page137")}>
                <Text style={styles.buttonText}>Open the Driver App</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderColor: "gray",
    borderBottomWidth: 3,
    height: 48
  },
  headerText: {
    fontSize: 18,
    fontWeight: "300",
    color: "white",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 16,
    height: "100%",
  },
  imageContainer: {
    height: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 90,
  },
  image: {
    width: 160,
    height: 160,
  },
  textContainer: {
    paddingBottom: 32,
  },
  title: {
    display: "flex",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",

    textAlign: "right",
  },
  subtitle: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "left",
    marginTop: 8,
    
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#4460EF",
    marginTop: 24,
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
});

export default DriveWithGlopilot3;
