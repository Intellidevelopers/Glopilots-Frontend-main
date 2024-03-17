import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { homestyle, locationStyle } from "../../styles/style";
import Divider from "../components/Divider";
import CarListContainer from "../components/CarListContainer";
import { TouchableOpacity } from "react-native-gesture-handler";

const Cars = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={locationStyle.listContainer}>
        <TouchableOpacity
          style={locationStyle.listItem}
          onPress={() => navigation.goBack()}
        >
          <View style={locationStyle.listItemContent}>
            <Entypo name="chevron-small-left" size={30} color="black" />

            <Text style={{ fontSize: 20 }}>Choose Your car</Text>
          </View>

          <Ionicons name="md-options-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Divider />

      <View style={{ flex: 1, padding: 10 }}>
        <CarListContainer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Cars;
