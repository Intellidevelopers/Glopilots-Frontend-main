import React, { useState } from "react";

import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const RentaCar7 = () => {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation(); // Get the navigation object
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onPress={() => navigation.navigate("")}>
        <View
          style={{
            height: 48,
            backgroundColor: "#f8f8f8",
            display: "flex",
            justifyContent: "center",
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              height: 27,
              width: 194,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Image
                style={{ height: 18, width: 9 }}
                source={require("../assets/arrowback.png")}
                resizeMode="cover"
              />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 300, lineHeight: 27 }}>
                Review Reservation
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <TouchableOpacity>
            <View style={styles.infoContainer}>
              <View style={styles.iconContainer}>
                <View
                  style={{
                    backgroundColor: "#4460EF",
                    height: 48,
                    width: 48,
                    borderRadius: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "200",
                    }}
                  >
                    Hertz
                  </Text>
                </View>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Intermediate</Text>
                <Text style={styles.textContent}>NIssan Sentra or similar</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.infoContainer}>
              <View style={styles.iconContainer}>
               <View style={{  height: 48,
                    width: 48,display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Image
            style={{ height: 24, width: 18 }}
            source={require("../assets/arrowdown.png")}
            resizeMode="cover"
          />
            </View>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Pickup address</Text>
                <Text style={styles.textContent}>Thursday Feb 9 - 12:00pm </Text>
              <Text style={styles.textContent}>
                900 Belacan Ave, Los Angeles, 90045 Califonia USA
              </Text>
              </View>
            </View>
          </TouchableOpacity>
           <TouchableOpacity>
            <View style={styles.infoContainer}>
              <View style={styles.iconContainer}>
               <View style={{  height: 48,
                    width: 48,display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Image
            style={{ height: 24, width: 24 }}
            source={require("../assets/arrowcurve.png")}
            resizeMode="cover"
          />
            </View>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Dropoff address</Text>
             <Text style={styles.textContent}>Monday Feb 13 - 12:00PM</Text>
                <Text style={styles.textContent}>
                  900 Belacan Ave, Los Angeles, 90045 Califonia USA
                </Text>
              </View>
            </View>
          </TouchableOpacity>
       
          
          <View style={{ paddingTop: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: 600, paddingBottom: 4, height: 27, color: "#0D1317" }}>
              Due Now
            </Text>
            <View style={{ gap: 8 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "600" }}>Rental (4 days)</Text>
                <Text style={{ fontWeight: "600" }}>$317.6</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "600" }}>Total</Text>
                <Text style={{ fontWeight: "600" }}>$317.6</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: "lightgray",
                }}
              ></View>
            </View>
          </View>
          <View style={{ paddingTop: 12 }}>
            <Text style={{ fontWeight: "600" }}>Credit card requirment:</Text>
            <Text style={{ color: "gray" }}>
              You are required to present a physical credit card in your name,
              at pickup for the refundable secuirty deposit
            </Text>
            <Text style={{ fontWeight: "600", paddingTop: 6 }}>
              Driver requirment:
            </Text>
            <Text style={{ color: "gray" }}>
              A younger driver fee may apply to drivers under the age of 25.
            </Text>
            <Text style={{ fontWeight: "600", paddingTop: 6 }}>
              About the rental:
            </Text>
            <Text style={{ color: "gray" }}>
              These rental listings are powered by 3rd parties. The
              products,services and/or finance terms related to your rentals are
              also offered by third parties, not Glopilot
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
                paddingTop: 8,
              }}
            ></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                gap: 8,
                paddingTop: 6,
              }}
            >
              <Checkbox
                style={{ margin: 8, borderRadius: 1 }}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "blue" : undefined}
              />
              <Text style={{ width: "100%" }}>
                I agree to Glopilots{" "}
                <Text
                  style={{ color: "#4460EF", textDecorationLine: "underline", fontWeight: 600 }}
                  onPress={() => Linking.openURL("")}
                >
                  Terms & Conditions
                </Text>
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
                paddingTop: 8,
              }}
            ></View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 12,
                paddingTop: 10,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/visa.png")}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: "400", fontSize: 20 }}>....1590</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#EEEEEE",
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                }}
              >
                <Text>Change</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#4460EF", // Background color
                marginTop: 6, // Margin top
              height: 56,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Agree to terms
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    height: "100%", // Change to your desired background color
  },

  content: {
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 4,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#D1D5DB",
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0D1317",
  },
  textContent: {
    fontSize: 16,
    color: "#545454", // Change to your desired text color
  },
  learnMoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2B64E3", // Change to your desired text color
    textDecorationLine: "underline",
  },
});

export default RentaCar7;
