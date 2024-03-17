import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Switch = ({onPress, value}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={{
          backgroundColor: `${value ? "#4460ef" : "white"}`,
          borderRadius: 50,
          padding: 5,
        }}
      >
        <Ionicons
          name="person-outline"
          size={20}
          color={value ? "white" : "black"}
        />
      </View>

      <View
        style={{
          backgroundColor: `${value ? "white" : "#4460ef"}`,
          borderRadius: 50,
          padding: 5,
        }}
      >
        <Feather
          name="shopping-bag"
          size={24} 
          color={value ? "black" : "white"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4460ef12",
    width: 80,

    borderRadius: 50,
    paddingHorizontal: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Switch;
