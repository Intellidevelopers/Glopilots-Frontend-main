import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { homestyle } from "../../styles/style";

import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import Divider from "../components/Divider";
const HomeScreen = ({ navigation }) => {
  const handNavigate = (name) => navigation.navigate(name);

  return (
    <SafeAreaView style={homestyle.container} edges={["left", "right", "top"]}>
      <View style={homestyle.hero}>
        <View style={homestyle.recommendation}>
          <Entypo name="chevron-small-left" size={30} color="black" />

          <TouchableOpacity style={homestyle.recommendationButton}>
            <MaterialCommunityIcons
              name="calendar-outline"
              size={24}
              color="black"
            />
            <Text style={homestyle.recommendationButtonText}>Reservation</Text>
          </TouchableOpacity>
        </View>
        <Text style={homestyle.heroText}>The Road is yours with GloPilots</Text>
        <Image
          source={require("../../assets/img.png")}
          resizeMode="contain"
          style={homestyle.heroImg}
          resizeMethod="resize"
        />
      </View>
      <View style={homestyle.locationContainer}>
        <View style={homestyle.location}>
          <View>
            <View style={homestyle.locationIconsArea}>
              <View style={homestyle.locationIcons}>
                <Ionicons name="location-outline" size={24} color="#949494" />
              </View>
              <TouchableOpacity style={homestyle.locationButton}>
                <View>
                  <Text style={homestyle.locationButtonTextUnstyled}>
                    Pick up and return near
                  </Text>
                  <Text style={homestyle.locationButtonTextBold}>
                    2491 Purdue Ave
                  </Text>
                </View>

                <Entypo name="chevron-small-right" size={30} color="black" />
              </TouchableOpacity>
            </View>

            <View style={homestyle.locationIconsArea}>
              <View style={homestyle.locationIcons}>
                <Image
                  source={require("../../assets/arrow.png")}
                  style={{ width: 20, height: 100, resizeMode: "contain" }}
                />
              </View>

              <View>
                <Divider />
                <TouchableOpacity
                  style={homestyle.locationButtonMid}
                  onPress={() => handNavigate("Calendar")}
                >
                  <View>
                    <Text style={homestyle.locationButtonTextUnstyled}>
                      Reservation Starts
                    </Text>
                    <Text style={homestyle.locationButtonTextBold}>
                      Fri, Feb 3
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={homestyle.locationButtonTextBold}>
                      12:00PM
                    </Text>
                    <Entypo
                      name="chevron-small-right"
                      size={30}
                      color="black"
                    />
                  </View>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity style={homestyle.locationButton}>
                  <View>
                    <Text style={homestyle.locationButtonTextUnstyled}>
                      Reservation Ends
                    </Text>
                    <Text style={homestyle.locationButtonTextBold}>
                      Fri, Feb 3
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={homestyle.locationButtonTextBold}>
                      12:00PM
                    </Text>
                    <Entypo
                      name="chevron-small-right"
                      size={30}
                      color="black"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: "auto" }}>
          <Button text="Find Cars" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
