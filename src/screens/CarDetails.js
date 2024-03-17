import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  carDetailStyle,
  colors,
  homestyle,
  locationStyle,
} from "../../styles/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "../components/Divider";
import CardMini from "../components/CardMini";

const CarDetails = ({ navigation }) => {
  const [selected, setSelectd] = useState("now");
  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 15 }}>
      <TouchableOpacity
        style={locationStyle.listItem}
        onPress={() => navigation.goBack()}
      >
        <View style={locationStyle.listItemContent}>
          <Entypo name="chevron-small-left" size={30} color="black" />

          <Text style={{ fontSize: 20 }}>Car Details</Text>
        </View>
      </TouchableOpacity>
      <Divider />

      <ScrollView style={{ flex: 1, paddingBottom: 10 }}>
        <View style={carDetailStyle.info}>
          <Image source={require("../../assets/Nissan-Sentra-1.png")} />
          <Text style={homestyle.locationButtonTextBold}>
            Nissan Sentra or similar
          </Text>

          <View style={carDetailStyle.infoDetails1}>
            <View style={carDetailStyle.infoProperty1}>
              <Image
                source={require("../../assets/web.png")}
                style={{ width: 30, height: 30 }}
                resizeMethod="scale"
              />

              <Text>5 seats</Text>
            </View>
            <View
              style={{
                height: 40,
                width: StyleSheet.hairlineWidth,
                backgroundColor: "gray",
              }}
            ></View>
            <View style={carDetailStyle.infoProperty1}>
              <Image
                source={require("../../assets/suitcase.png")}
                style={{ width: 30, height: 30 }}
                resizeMethod="scale"
              />

              <Text>4 bags</Text>
            </View>
            <View
              style={{
                height: 40,
                width: StyleSheet.hairlineWidth,
                backgroundColor: "gray",
              }}
            ></View>
            <View style={carDetailStyle.infoProperty1}>
              <Image
                source={require("../../assets/car-door.png")}
                style={{ width: 30, height: 30 }}
                resizeMethod="scale"
              />

              <Text>4 doors</Text>
            </View>
            <View
              style={{
                height: 40,
                width: StyleSheet.hairlineWidth,
                backgroundColor: "gray",
              }}
            ></View>
            <View style={carDetailStyle.infoProperty1}>
              <Image
                source={require("../../assets/icons8-gearbox-64.png")}
                style={{ width: 30, height: 30 }}
                resizeMethod="scale"
              />

              <Text>Auto</Text>
            </View>
          </View>
        </View>
        <View style={{ padding: 10, gap: 10 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1.5,
              borderColor: selected == "now" ? "#4f69ef" : "grey",
              padding: 10,
              borderRadius: 5,
            }}
            onPress={() => setSelectd("now")}
          >
            <Text style={homestyle.locationButtonTextBold}>$79/day</Text>
            <Text style={{ color: "grey", fontSize: 16 }}>Pay now $ save</Text>
            <Text style={{ color: "grey", fontSize: 16 }}>
              Free cancellation up to 48 hours before pickup
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: selected == "later" ? "#4f69ef" : "grey",
              padding: 10,
              borderRadius: 5,
            }}
            onPress={() => setSelectd("later")}
          >
            <Text style={homestyle.locationButtonTextBold}>$79/day</Text>
            <Text style={{ color: "grey", fontSize: 16 }}>Pay at pick</Text>
            <Text style={{ color: "grey", fontSize: 16 }}>
              Free cancellation anytime
            </Text>
          </TouchableOpacity>

          <View style={{ gap: 12, marginVertical: 10 }}>
            <Text style={{ fontWeight: "800", fontSize: 20 }}>Features</Text>
            <View style={{ gap: 10 }}>
              <View style={locationStyle.listItemContent}>
                <Image
                  source={require("../../assets/road-removebg-preview.png")}
                  style={{ width: 25, height: 25 }}
                />

                <Text>Unlimited mileage</Text>
              </View>
              <View style={locationStyle.listItemContent}>
                <Ionicons name="ios-airplane-outline" size={24} color="black" />

                <Text>Airport pickup</Text>
              </View>
            </View>
          </View>
          <View style={{ gap: 15 }}>
            <Text style={{ fontWeight: "800", fontSize: 20 }}>Add-ons</Text>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <CardMini />
              <CardMini />
              <CardMini />
            </View>
          </View>
          <Image
            source={require("../../assets/image2.png")}
            style={{
              width: Dimensions.get("screen").width - 25,
              height: 200,
              borderRadius: 10,
            }}
            resizeMethod="scale"
            resizeMode="cover"
          />

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // backgroundColor:"red"
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 1,
                  height: "50%",
                }}
              >
                <View
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "black",
                    borderRadius: 100,
                  }}
                ></View>
                <View
                  style={{ backgroundColor: "black", width: 3, flex: 1 }}
                ></View>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "black",
                  }}
                ></View>
              </View>

              <View style={{ width: "90%" }}>
                <TouchableOpacity
                  style={locationStyle.listItem}
                  onPress={() => navigation.navigate("Cars")}
                >
                  <View style={locationStyle.listItemContent}>
                    <View>
                      <Text style={homestyle.locationButtonTextBold}>
                        Los Angeles - Airport (California)
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontSize: Dimensions.get("screen").fontScale * 14,
                          color: colors.grey,
                        }}
                      >
                        Los Angeles Airport (California) 9000 Bellancan Ave, Los
                        Angeles, 90045-4708, CA, California, US
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <Divider />

                <TouchableOpacity
                  style={locationStyle.listItem}
                  onPress={() => navigation.navigate("Cars")}
                >
                  <View style={locationStyle.listItemContent}>
                    <View>
                      <Text style={homestyle.locationButtonTextBold}>
                        Los Angeles - Airport (California)
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontSize: Dimensions.get("screen").fontScale * 14,
                          color: colors.grey,
                        }}
                      >
                        Los Angeles Airport (California) 9000 Bellancan Ave, Los
                        Angeles, 90045-4708, CA, California, US
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <Divider />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 10,
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Cars")}
              >
                <Ionicons
                  name="ios-pricetag-outline"
                  size={24}
                  color="#4fb053"
                />
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",

                      paddingVertical: 20,
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 5,
                    }}
                  >
                    <View style={{ gap: 7, width: "90%" }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "#4fb053",
                        }}
                      >
                        Get up to $10 Glopilot ride credit
                      </Text>
                      <Text style={{ fontSize: 13 }}>
                        {" "}
                        Enjoy a discounted ride to pick up your rental car
                      </Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="black" />
                  </View>
                  <Divider />
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ gap: 20, marginVertical: 20 }}>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>
                Reservation time
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="black"
                />
                <View style={{ gap: 10, flex: 1 }}>
                  <Text style={{ fontSize: 14 }}>
                    Thu, Feb 9. 12:00 PM - Mon, Feb 13. 12:00PM
                  </Text>
                  <Divider />
                </View>
              </View>
            </View>

            <View style={{ gap: 20 }}>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>
                More information
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Feather name="phone-call" size={24} color="black" />

                <View style={{ gap: 10, flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ fontSize: 14 }}>Get help</Text>
                    <FontAwesome name="angle-right" size={24} color="black" />
                  </View>
                  <Divider />
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                shadowOffset: { width: -2, height: 4 },
                shadowColor: "#171717",
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 20,
                borderRadius: 6,
                marginVertical: 18,
              }}
            >
              <View style={{ gap: 5 }}>
                <Text style={{ color: "#4460ef", fontWeight: "700" }}>
                  $317.61
                </Text>
                <Text style={{ color: "#4460ef" }}>$79.40 per day</Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#4460ef",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarDetails;
