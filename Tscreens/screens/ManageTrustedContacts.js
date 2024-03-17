import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

const ManageTrustedContacts = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
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
              width: 172,
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
                Trusted Contacts
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Trusted Contacts</Text>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "90%",
            }}
          >
            <View>
              <TouchableOpacity>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: "lightgray",
                    height: 85,
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Image
                      style={{ height: 20, width: 24 }}
                      source={require("../assets/loaction.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.textTitle}>Share your trip status</Text>
                    <Text style={styles.textContent}>
                      You'll be able to share your live location with one or
                      more contacts during any trip.
                    </Text>
                  </View>
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 16,
                  }}
                >
                  <View style={styles.iconContainer}>
                    <Image
                      style={{ height: 24, width: 24 }}
                      source={require("../assets/headphone.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{ width: "90%", height: 88 }}>
                    <Text style={styles.textTitle}>
                      Set your emergency contacts
                    </Text>
                    <Text style={styles.textContent}>
                      You can make a trusted contact an emergency contact too.
                      Glopilot can call them if we can't reach you in case of an
                      emergency.{" "}
                      <Text
                        style={{
                          color: "#545454",
                          textDecorationLine: "underline",
                          fontWeight: 800,
                          fontSize: 16,
                        }}
                      >
                        Learn more
                      </Text>
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "lightgray",
                    paddingTop: 4,
                  }}
                ></View>
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  position: "relative",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    /* handle onPress */
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#4460EF", // Background color
                      marginTop: 6, // Margin top
                      height: 56,
                      paddingHorizontal: 18,
                      borderRadius: 8,
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
                      Add Trusted Contacts
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    // Change to your desired background color
  },

  content: {
    padding: 20,
    display: "flex",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 4,
    height: 32,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#D1D5DB", // Change to your desired border color
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: { height: 85, alignItems: "flex-start" },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textContent: {
    fontSize: 16,
    color: "#555555", // Change to your desired text color
  },
  learnMoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#545454", // Change to your desired text color
    textDecorationLine: "underline",
  },
});

export default ManageTrustedContacts;
