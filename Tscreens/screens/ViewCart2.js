import React, { useState } from "react";
import {
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: " 1", value: "1" },
  { label: " 2", value: "2" },
  { label: " 3", value: "3" },
  { label: " 4", value: "4" },
  { label: " 5", value: "5" },
  { label: " 6", value: "6" },
  { label: " 7", value: "7" },
  { label: " 8", value: "8" },
];

export const DropdownComponent = () => {
  
  const navigation = useNavigation(); // Get the navigation object
  const [value, setValue] = useState("1");

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="#0D1317"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

const ViewCart2 = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <AntDesign name="left" size={24} color="#0D1317" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={{ position: "relative" }}
          >
            <View
              style={{
                position: "absolute",
                height: 15,
                width: 15,
                borderRadius: 100,
                backgroundColor: "#4460EF",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                left: 17,
                top: -3,
              }}
            >
              <Text style={{ color: "white", fontSize: 8 }}>2</Text>
            </View>
            <Ionicons name="cart" size={32} color="#0D1317" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Marugame udon-Sawtelle</Text>
          <Text style={{ color: "#545454", }}>
            Pick up at 2029 Sawtelle Blvd, Los Angeles
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              paddingTop: 8,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                /* handle onPress */
              }}
            >
              <View
                style={{
                  backgroundColor: "#EEEEEE",
                  marginTop: 6,
                  height: 40,
                  paddingHorizontal: 12,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "normal",
                    color: "#0D1317",
                  }}
                >
                  <Ionicons name="ios-add" size={20} color="#0D1317" />
                  Add items
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                /* handle onPress */
              }}
            >
              <View
                style={{
                  backgroundColor: "#EEEEEE",
                  marginTop: 6,
                  height: 40,
                  paddingHorizontal: 12,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "normal", color: "#0D1317" }}
                >
                 <Image
            style={{ height: 18, width: 22 }}
            source={require("../assets/3users.png")}
            resizeMode="cover"
          /> Group
                  order
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              paddingTop: 15,
            }}
          >
            <View>
              <DropdownComponent />
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Text style={{ fontWeight: 600, fontSize: 18 }}>
                DukeBurger (Westside)
              </Text>
              <Text style={{ color: "#545454" }}>$15.42</Text>
              <Text style={{ color: "#545454" }}>Add On</Text>
              <Text style={{ color: "#545454" }}>Add Green Onion</Text>
              <Text style={{ color: "#545454" }}>Add Ginger</Text>
              <Text style={{ color: "#545454" }}>Add Gerickia Fireball </Text>
            </View>
          </View>

          <View
            style={{ display: "flex", alignItems: "center", paddingTop: "85%",  }}
          >
            <Text style={{ fontWeight: 300, color: "#D00000" }}>Clear Cart</Text>
            <TouchableOpacity
              onPress={() => {
                /* handle onPress */
              }}
              style={{paddingTop: 12}}
            >
              <View
                style={{
                  backgroundColor: "#4460EF",
                  marginTop: 6,
                  height: 56,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  paddingHorizontal: 50
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 28,
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  Go to Checkout . $14.21
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ViewCart2;

const styles = {
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#d4d4d4",
    backgroundColor: "#F8F8F8",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "300",
    color: "#0D1317",
  },
  container: {
    padding: 20,
    backgroundColor: "#F8F8F8",
    height: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D1317",
    paddingBottom: 2,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d4d4d4",
    paddingBottom: 16,
    marginTop: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0D1317",
  },
  infoText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#555",
  },
  learnMore: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ff6a55",
    textDecorationLine: "underline",
  },

  dropdown: {
    height: 40,
    width: 50,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 1,
    display: "none",
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 1,
    fontSize: 1,
  },
};
