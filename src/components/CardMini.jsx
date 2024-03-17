import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const CardMini = () => {
  return (
    <View
      style={{
        backgroundColor: "#d7eaf9af",
        position: "relative",
        width: Dimensions.get("screen").width / 3.3,
        borderRadius: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 5,
        height: 150,
      }}
    >
      <AntDesign
        name="pluscircle"
        size={24}
        color="#4460EF"
        style={{ position: "absolute", top: 10, right: 10 }}
      />
      <Image
        source={require("../../assets/baby-car-seat.png")}
        style={{ width: 40, height: 40 }}
      />
      <View>

        
        <Text>Toddler seat</Text>
        <Text style={{ textAlign: "center" }}>+$73</Text>
      </View>
    </View>
  );
};

export default CardMini;
