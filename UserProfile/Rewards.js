import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Head from "../Head";

const Rewards = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f8f8", paddingBottom: 35 }}>
      <SafeAreaView>
      <Head title="Rewards" navigation={navigation} />

        <ScrollView style={{ padding: 5 }}>
          <View
            style={{
              backgroundColor: "white",

              padding: 12,
              borderBottomWidth: 2,
              borderBottomColor: "#D1D5DB",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 2,
                borderBottomColor: "#D1D5DB",
              }}
            >
              <Text
                style={{
                  fontWeight: "normal",
                  fontSize: 20
                }}
              >
                Promo
              </Text>
              <Text
                style={{
                  fontWeight: "normal",
                   fontSize: 20
                }}
              >
                01/21/23
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  10% off our next 1 ride
                </Text>
                <Text
                  style={{
                    color: "#555555",
                     fontSize: 18
                  }}
                >
                  Valid until Jan 28, 2023, 11:59 PM
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={{ marginTop: 8 }}
                >
                  <View
                    style={{
                      width: 100,
                      paddingVertical: 8,
                      borderRadius: 4,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "normal",
                        color: "blue",
                         fontSize: 18
                      }}
                    >
                      1 ride remaining
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Image
                  style={{
                    width: 60,
                    height: 70,
                  }}
                  source={require("../assets/discount.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={{ paddingHorizontal: 0 }}>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: "lightgray",
                }}
              ></View>
            </View>
            <View style={{ paddingTop: 12 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Octicons name="person" size={24} color="black" />
                <Text style={{ fontWeight: 200,  fontSize: 18 }}>
                  You have 1 ride remaining
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <FontAwesome name="dollar" size={24} color="black" />
                <Text style={{ fontWeight: 200,  fontSize: 18 }}>
                  Max savngs of $3 per ride
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Feather name="divide-circle" size={24} color="black" />
                <Text style={{ fontWeight: 200,  fontSize: 18 }}>
                  Discount applies to the fare, Service fee, tolls,{"\n"}and
                  taxes only
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <MaterialCommunityIcons
                  name="car-side"
                  size={24}
                  color="black"
                />
                <Text style={{ fontWeight: 200,  fontSize: 18 }}>
                  Valid for any type of Glopilot rides, excludes{"\n"}bikes and
                  scooters
                </Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 12 }}>
            <Text style={{ color: "blue",  fontSize: 20 }}>Add promo code</Text>
            <Text style={{ fontSize: 18, fontWeight: "600", paddingTop: 12 }}>
              Travel Rewards
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ paddingTop: 12 }}>
                <Text style={{ fontWeight: "800", fontSize: 20 }}>
                  Delta SkyMiles
                </Text>
                <Text>
                  Earn 2 miles per $1 on airport{"\n"}rides and 1 mile per $1 on
                  all{"\n"}other
                </Text>
                <Text style={{ paddingTop: 12, color: "blue" }}>
                  Link Account <AntDesign name="right" size={9} color="blue" />
                </Text>
              </View>
              <View>
                <Image
                  style={{ height: 70, width: 70 }}
                  source={require("../assets/Forbes.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
                paddingTop: 10,
              }}
            ></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ paddingTop: 12 }}>
                <Text style={{ fontWeight: "800", fontSize: 20 }}>
                  Delta SkyMiles
                </Text>
                <Text>
                  Earn 2 miles per $1 on airport{"\n"}rides and 1 mile per $1 on
                  all{"\n"}other
                </Text>
                <Text style={{ paddingTop: 12, color: "blue" }}>
                  Link Account <AntDesign name="right" size={9} color="blue" />
                </Text>
              </View>
              <View>
                <Image
                  style={{ height: 70, width: 70 }}
                  source={require("../assets/company1.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
                paddingTop: 10,
              }}
            ></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ paddingTop: 12 }}>
                <Text style={{ fontWeight: "800", fontSize: 20 }}>
                  Delta SkyMiles
                </Text>
                <Text>
                  Earn 2 miles per $1 on airport{"\n"}rides and 1 mile per $1 on
                  all{"\n"}other
                </Text>
                <Text style={{ paddingTop: 12, color: "blue" }}>
                  Link Account <AntDesign name="right" size={9} color="blue" />
                </Text>
              </View>
              <View>
                <Image
                  style={{ height: 70, width: 70 }}
                  source={require("../assets/booking.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
                paddingTop: 10,
              }}
            ></View>

            <TouchableOpacity onPress={() => navigation.navigate("Page49")}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 12,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "400", fontSize: 15 }}>
                    Refer friends to Glopilot
                  </Text>
                </View>
                <View>
                  <AntDesign name="right" size={20} color="black" />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
                paddingTop: 10,
              }}
            ></View>

            <TouchableOpacity onPress={() => navigation.navigate("Page49")}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 12,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "400", fontSize: 15 }}>
                    Send a ride credit
                  </Text>
                </View>
                <View>
                  <AntDesign name="right" size={20} color="black" />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
                paddingTop: 8,
                marginBottom: 30,
              }}
            ></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Rewards;
