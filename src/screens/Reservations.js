import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Entypo, MaterialCommunityIcons, AntDesign, Octicons } from "@expo/vector-icons";
import { homestyle, locationStyle, reservation } from "../../styles/style";
import Divider from "../components/Divider";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
const Reservations = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={locationStyle.listItem}
        onPress={() => navigation.goBack()}
      >
        <View style={locationStyle.listItemContent}>
          <Entypo name="chevron-small-left" size={30} color="black" />

          <Text style={homestyle.locationButtonTextUnstyled}>
         Review Reservation
          </Text>
        </View>
      </TouchableOpacity>
      <Divider />

      <ScrollView style={reservation.container}>
        <View style={reservation.reservationContainer}>
          <Image
            source={require("../../assets/hertzlogo.png")}
            style={{ width: 26, height: 26 }}
          />
          <View style={reservation.reserve}>
            <Text style={reservation.title}>Choose Your car</Text>
            <Text style={reservation.subtitle}>
              Choose your car from the list below
            </Text>
          </View>
        </View>

        <View style={reservation.reservationContainer}>
          <AntDesign name="arrowdown" size={24} color="black" />
          <View style={reservation.reserve}>
            <Text style={reservation.title}>Pickup address</Text>
            <Text style={reservation.subtitle}>
              Thu, Feb 9 12:00 PM . 9000 Bellancan Ave, Los Angeles, 90045-
              4708, CA, California, US
            </Text>
          </View>
        </View>

        <View style={reservation.reservationContainer}>
          <MaterialCommunityIcons
            name="arrow-u-left-top"
            size={24}
            color="black"
          />
          <View style={reservation.reserve}>
            <Text style={reservation.title}>Drop off address</Text>
            <Text style={reservation.subtitle}>
              Mon, Feb 13 12:00PM 9000 Bellancan Ave, Los Angeles, 90045- 4708,
              CA, California, US
            </Text>
          </View>
        </View>

        <View style={reservation.due}>
          <Text style={reservation.title}>Due now</Text>
          <View style={reservation.titlegroup}>
            <Text style={reservation.title}>Rental (4 days)</Text>
            <Text style={reservation.title}>$317.6</Text>
          </View>
          <View style={reservation.titlegroup}>
            <Text style={reservation.title}>Total</Text>
            <Text style={reservation.title}>$317.6</Text>
          </View>
        </View>

        <View style={reservation.requirement}>
          <View style={reservation.box}>
            <Text style={reservation.title}>Credit card requirement:</Text>
            <Text style={reservation.subtitle}>
              You're required to present a physical credit card in your name, at
              pickup for the refundable security deposit
            </Text>
          </View>
          <View style={reservation.box}>
            <Text style={reservation.title}>Driver requirements:</Text>
            <Text style={reservation.subtitle}>
              A young driver fee may apply for drivers under the age oi
            </Text>
          </View>
          <View style={reservation.box}>
            <Text style={reservation.title}>About the rental:</Text>
            <Text style={reservation.subtitle}>
              These rental listings are powered by third parties. The products,
              services and/or finance terms related to your rental are also
              offered by third-parties, not Gluprots
            </Text>
          </View>
        </View>
        <View style={reservation.terms}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <Text>
            i agree to Gopilots{" "}
            <TouchableOpacity style={reservation.link}>
              <Text style={reservation.linkText}>Terms and Condition</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={reservation.carddetails}>
          <View style={reservation.card}>
            <Image
              source={require("../../assets/visa.png")}
              style={{ width: 20, height: 20 }}
            />
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Octicons name="dot-fill" size={12} color="black" />
              <Octicons name="dot-fill" size={12} color="black" />
              <Octicons name="dot-fill" size={12} color="black" />
              <Octicons name="dot-fill" size={12} color="black" />
              <Text>1590</Text>
            </View>
          </View>
          <TouchableOpacity style={{ backgroundColor: "#d7eaf9af", padding: 10, borderRadius: 5 }}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <Button text="Agree to terms" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reservations;
