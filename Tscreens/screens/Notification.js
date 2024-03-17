import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Reward from "./Reward";

const Notification = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <SafeAreaView>
      
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderItem}>Promo</Text>
              <Text style={styles.cardHeaderItem}>01/21/23</Text>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardBodyLeft}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: 62,
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 24,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: "#0d1317",
                        fontWeight: "600",
                        fontSize: 24,
                        height: 32,
                      }}
                    >
                      10% off our next 1 ride
                    </Text>
                    <Text
                      style={{
                        color: "#545454",
                        fontSize: 15.5,
                        fontWeight: 300,
                      }}
                    >
                      Valid until Jan 28, 2023, 11:59 PM
                    </Text>
                  </View>
                  <View>
                    <View style={styles.cardBodyRight}>
                      <Image
                        style={styles.cardImage}
                        source={require("../assets/discount 1.png")}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>

                <View style={{ paddingTop: 16 }}></View>
                <TouchableOpacity
                  onPress={() => {navigation.navigate(Reward)}}
                  style={styles.seeDetailsButton}
                >
                  <View
                    style={{
                      height: 48,
                      width: 160,
                      backgroundColor: "#eeeeee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: 200 }}>
                      See Details
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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

  content: {
    padding: 20,
    paddingTop: 34,
  },
  card: {
    backgroundColor: "white",
    height: 202,
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#D1D5DB", // Change to your desired border color
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#D1D5DB", // Change to your desired border color
    paddingBottom: 12,
  },
  cardHeaderItem: {
    fontWeight: "normal",
    color: "#545454",
    fontSize: 14,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBodyLeft: {
    flex: 1,
  },
  seeDetailsButton: {
    marginTop: 8,
  },
  cardBodyRight: {
    justifyContent: "center",
  },
  cardImage: {
    width: 48,
    height: 48,
  },
});

export default Notification;
