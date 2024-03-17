import React, { useState, useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome"; // You can replace this with your desired icon library
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const DriveWithGlopilot4 = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleValueChange = (values) => {
    setSelectedValues(values);
  };

  const [form, setForm] = React.useState({
    side: "",
    temperature: "",
  });

  const [form2, setForm2] = React.useState({
    side: "",
    temperature: "",
  });

  const [form3, setForm3] = React.useState({
    side: "",
    temperature: "",
  });

  const [selectedOption3, setSelectedOption3] = useState(""); // Store the selected option for the third group

  const handleCheckboxChange3 = (option3) => {
    setSelectedOption3(option3);
  };

  const options3 = [
    { label: "Morning", value: "morning" },
    { label: "Afternoon", value: "afternoon" },
    { label: "Evening", value: "evening" },
    { label: "Night", value: "night" },
    { label: "Weekend", value: "weekend" },
    { label: "Weekday", value: "weekday" },
    { label: "All times of the day", value: "alltimes" },
  ];

  const navigation = useNavigation(); // Get the navigation object
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onPress={() => navigation.navigate("Page86")}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <Text>
              {"                                                           "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#0d1317" }}>
            Why do you want to drive with GloPilots?
          </Text>
          <View style={styles.sectionOptions}>
            {[
              { label: "Be my own boss", price: null },
              { label: "Make Extra money on the side" },
              { label: "Save for a specific purchase" },
              { label: "Meet new people" },
              { label: "Need something temporary" },
            ].map(({ label, price }, index) => {
              const isActive = form.side === label;
              return (
                <TouchableOpacity
                  style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}
                  key={index}
                  onPress={() => {
                    setForm({ ...form, side: label });
                  }}
                >
                  <View
                    style={[styles.radioInput, isActive && styles.outerborder]}
                  >
                    <View
                      style={[
                        styles.inner,
                        isActive && styles.radioInputActive,
                      ]}
                    ></View>
                  </View>

                  <Text style={styles.radioLabel}>{label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#0d1317" }}>
            How many hours are you looking to drive each week?
          </Text>
          <View style={styles.sectionOptions}>
            {[
              { label: "Fewer than 5 hours", price: null },
              { label: "5 - 15 hours" },
              { label: "6 - 20 hours" },
              { label: "21 - 35 hours" },
              { label: "36+ hours" },
            ].map(({ label }, index) => {
              const isActive = form2.side === label;
              return (
                <TouchableOpacity
                  style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}
                  key={index}
                  onPress={() => {
                    setForm2({ ...form2, side: label });
                  }}
                >
                  <View
                    style={[styles.radioInput, isActive && styles.outerborder]}
                  >
                    <View
                      style={[
                        styles.inner,
                        isActive && styles.radioInputActive,
                      ]}
                    ></View>
                  </View>

                  <Text style={styles.radioLabel}>{label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#0d1317" }}>
            When do you want to drive?
          </Text>
          <View style={styles.container}>
            {options3.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.checkbox}
                onPress={() =>
                  handleValueChange(
                    selectedValues.includes(option.value)
                      ? selectedValues.filter((item) => item !== option.value)
                      : [...selectedValues, option.value]
                  )
                }
              >
                <View
                  style={[
                    styles.checkboxIcon,
                    selectedValues.includes(option.value) &&
                      styles.selectedCheckboxIcon,
                  ]}
                >
                  {selectedValues.includes(option.value) && (
                    <Icon name="check" size={16} color="white" />
                  )}
                </View>
                <Text style={styles.radioLabel}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#0d1317" }}>
            Are you applying to drive with any other apps?
          </Text>
          <View style={styles.sectionOptions}>
            {[
              { label: "No, just Glopilot" },
              { label: "Yes, rideshare apps" },
              { label: "Yes, delivery apps" },
              { label: "Yes, both rideshare and delivery apps" },
            ].map(({ label }, index) => {
              const isActive = form3.side === label;
              return (
                <TouchableOpacity
                  style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}
                  key={index}
                  onPress={() => {
                    setForm3({ ...form3, side: label });
                  }}
                >
                  <View
                    style={[styles.radioInput, isActive && styles.outerborder]}
                  >
                    <View
                      style={[
                        styles.inner,
                        isActive && styles.radioInputActive,
                      ]}
                    ></View>
                  </View>

                  <Text style={styles.radioLabel}>{label}</Text>
                </TouchableOpacity>
              );
            })}

            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
              }}
            ></View>
          </View>
        </View>
      </ScrollView>
      <View style={{ padding: 12 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Page153")}>
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
                fontSize: 20, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    height: "100%", // Change to your desired background color
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
    height: 48,
    paddingHorizontal: 18,
    backgroundColor: "#f8f8f8", // Change to your desired background color
  },

  content: {
    padding: 18,
  },

  radio: {
    position: "relative",
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopWidth: 1,
    borderColor: "#e7e7e7",
  },
  radioLabel: {
    fontSize: 20,
    fontWeight: "300",
    color: "#0D1317",
  },
  radioInput: {
    width: 24,
    height: 24,

    borderWidth: 1,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#545454",
    marginRight: 12,
  },
  radioInputActive: {
    borderWidth: 1,
    backgroundColor: "#4460EF",

    borderColor: "#4460EF",
  },
  outer: {
    width: 24,
    height: 24,

    borderWidth: 1,
    borderRadius: 9999,
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: 18,
    height: 18,
    borderRadius: 9999,

    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  outerborder: {
    borderColor: "blue",
  },

  checkbox: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#e7e7e7",
  },
  checkboxIcon: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  selectedCheckboxIcon: {
    backgroundColor: "#4460EF", // Blue background color for selected checkboxes
    borderColor: "#4460EF",
  },
});

export default DriveWithGlopilot4;
