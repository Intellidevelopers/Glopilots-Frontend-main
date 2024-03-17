import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";

const SchedulePickupNowFood = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [selected, setSelected] = React.useState("Today, Mon Jan 23");
  const [categories, setCategories] = React.useState([]);

  const dateData = [
    { key: "Canada", value: "Monday" },
    { key: "England", value: "Tuesday" },
    { key: "Pakistan", value: "Wednesday" },
    { key: "India", value: "Thursday" },
    { key: "NewZealand", value: "Friday" },
  ];

  const timeData = [
    { key: "Canada", value: "01:30PM - 05:00PM" },
    { key: "England", value: "01:30PM - 05:00PM" },
    { key: "Pakistan", value: "01:30PM - 05:00PM" },
    { key: "India", value: "01:30PM - 05:00PM" },
    { key: "NewZealand", value: "01:30PM - 05:00PM" },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#F8F8F8"}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
        >
          <Image
            style={{ height: 18, width: 9 }}
            source={require("../assets/arrowback.png")}
            resizeMode="cover"
          /> 
        </TouchableOpacity>
        <Text style={{ fontWeight: "300" }}>Pick a time</Text>
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
          <Ionicons name="cart" size={32} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20, gap: 16, backgroundColor: "#f8f8f8",  }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 7,
            position: "relative",
            zIndex: 10,
          }}
        >
          <SelectList
            setSelected={setSelected}
            data={dateData}
            boxStyles={{
              backgroundColor: "#Eeeeee",
              height: 56,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
            placeholder="Select Date"
            inputStyles={{
              color: "#545454",
              fontWeight: "100",
              fontSize: 16,
              marginTop: 4,
            }}
            dropdownStyles={{
              backgroundColor: "#eeeeee",
              position: "absolute",
              zIndex: 10,
              width: "100%",
              top: "100%",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 7,
            position: "relative",
            zIndex: 9,
          }}
        >
          <SelectList
            setSelected={setSelected}
            data={timeData}
            boxStyles={{
              backgroundColor: "#Eeeeee",
              height: 56,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
            placeholder="Select Time"
            inputStyles={{
              color: "#545454",
              fontWeight: "100",
              fontSize: 16,
              marginTop: 4,
            }}
            dropdownStyles={{
              backgroundColor: "#eeeeee",
              position: "absolute",
              zIndex: 10,
              width: "100%",
              top: "100%",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
          />
        </View>

        
      <View style={{   gap: 8, paddingTop: "100%" }}>
        <TouchableOpacity>
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
                color: "#ffffff", // Text color
              }}
            >
              Schedule
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Page191")}>
          <View
            style={{
              backgroundColor: "#EEEEEE", // Background color
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
                color: "black", // Text color
              }}
            >
              Pick up now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default SchedulePickupNowFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    height: "100%", // Change to your desired background color
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB", // Change to your desired border color
    backgroundColor: "#F8F8F8", // Change to your desired background color
  },
  headerText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#0D1317",
  },
});
