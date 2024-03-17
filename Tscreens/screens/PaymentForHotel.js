import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

const PaymentForHotel = () => {
  const navigation = useNavigation(); // Get the navigation object
  const sheet = useRef();

  useEffect(() => {
    sheet.current.open();
  }, []);

  return (
    <View>
      <RBSheet
        height={800}
        width={200}
        openDuration={250}
        ref={sheet}
        customStyles={{ container: styles.sheet }}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <AntDesign name="close" size={24} color="red" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Payment Option</Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <Text style={{ display: "none" }}>
              <MaterialIcons name="person-add-alt" size={24} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Pay Now</Text>
            <View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listItemText}>
                  We will process your Payment in your local currency
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listItemText}>
                  More ways to pay Use Credit/ Debit card
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listItemText}>
                  You can use valid GloPilots Coupons
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 12,
              gap: 12,
            }}
          >
            <View>
              <Image
                style={{ height: 24, width: 24, borderRadius: 5 }}
                source={require("../assets/moon.png")}
                resizeMode="cover"
              />
            </View>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              GloPilots Reward
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              paddingTop: 12,
            }}
          >
            <View>
            
              <Feather name="check" size={14} color="#545454" />
            </View>
            <View>
              <Text
                style={{
                  color: "#545454",
                  fontSize: 14,
                  fontWeight: "100",
                }}
              >
                Collect
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              paddingTop: 12,
            }}
          >
            <View>
             
              <Feather name="check" size={14} color="#545454" />
            </View>
            <View>
              <Text
                style={{
                  color: "#545454",
                  fontSize: 14,
                  fontWeight: "100",
                }}
              >
                Redeem
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              paddingHorizontal: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 20 }}>$210</Text>
            <Text style={{ fontWeight: "100", fontSize: 15, color: "#545454" }}>
              $6340 total
            </Text>
            <Text style={{ fontWeight: "100", fontSize: 15, color: "#545454" }}>
              for 3 rooms
            </Text>
          </View>
          <TouchableOpacity style={{paddingBottom: 12}} >
            <View
              style={{
                backgroundColor: "#4460EF", // Background color
                marginTop: 6, // Margin top
                height: 48,
                paddingHorizontal: 12, // Padding left and right
                borderRadius: 10, // Border radius
                alignItems: "center", // Center align items horizontally
                justifyContent: "center", // Center align items vertically
              }}
            >
              <Text
                style={{
                  fontSize: 16, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Pay Now
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
              }}
            ></View>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 20,
                paddingTop: 20,
              }}
            >
              Pay When you stay
            </Text>
            <View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listItemText}>
                  You will not be charged until your Stay
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listItemText}>
                  Pay the property directly in there local currency
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 12,
              gap: 12,
            }}
          >
            <View>
              <Image
                style={{ height: 24, width: 24, borderRadius: 5 }}
                source={require("../assets/moon.png")}
                resizeMode="cover"
              />
            </View>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              GloPilots Reward
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              paddingTop: 12,
            }}
          >
            <View>
             
              <Feather name="check" size={14} color="#545454" />
            </View>
            <View>
              <Text
                style={{
                  color: "#545454",
                  fontSize: 14,
                  fontWeight: "100",
                }}
              >
                Collect
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              paddingHorizontal: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 20 }}>$210</Text>
            <Text style={{ fontWeight: "100", fontSize: 15, color: "#545454" }}>
              $6340 total
            </Text>
            <Text style={{ fontWeight: "100", fontSize: 15, color: "#545454" }}>
              for 3 rooms
            </Text>
          </View>
          <TouchableOpacity style={{ padding: 12 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#4460EF",
                backgroundColor: "#ffffff", // Background color
                marginTop: 6, // Margin top
                height: 48,
                paddingHorizontal: 12, // Padding left and right
                borderRadius: 10, // Border radius
                alignItems: "center", // Center align items horizontally
                justifyContent: "center", // Center align items vertically
              }}
            >
              <Text
                style={{
                  fontSize: 20, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#4460EF", // Text color
                }}
              >
                Pay at property
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    paddingTop: 12,
  },
  bullet: {
    fontSize: 16,
    marginRight: 4,
  },
  listItemText: {
    fontSize: 16,
    color: "#545454",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#1B1B1B",
  },
  sheet: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1d1d1d",
    textAlign: "center",
    paddingTop: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#555",
    marginTop: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#d4d4d4",
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
  spacer: {
    marginBottom: 12,
  },
});

export default PaymentForHotel;
