import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Reward = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <SafeAreaView>
      
      

        <ScrollView style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "#ffffff",
height: 356,

              paddingVertical: 13,

              paddingHorizontal: 16,
              borderBottomWidth: 2,
              borderBottomColor: "#D1D5DB",
            }}
          >
          
            <View
              style={{ 
                display: "flex",
                alignItems: "center",
                
                height: 62, }}
            >
                 <View style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
justifyContent: "space-between",
width: "100%"
                  }}>  
              <View style={{display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 8}}>
               <Text style={{   color: "#0d1317",
                      fontWeight: "600",
                      fontSize: 24,
                      height: 32,
                      
                      }}>10% off our next 1 ride</Text>
                <Text style={{
                      color: "#545454",
                      fontSize: 15,
                      height: 24,
                      
                      fontWeight: 300,}}>
                  Valid until Jan 28, 2023, 11:59 PM
                </Text>
              </View>
               <View>
               <View style={{ justifyContent: "center"}}>
                <Image
                  style={{height: 48, width: 48}}
                  source={require("../assets/discount 1.png")}
                  resizeMode="contain"
                />
              </View>
              </View>
              
              
              </View>
             
            </View>
             <View style={{display: "flex", paddingVertical: 10}}>
              <Text style={{color: "#4460ef",height: 21}}>1 ride remaining</Text>
              </View>
            <View >
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: "lightgray",
                }}
              ></View>
            </View>
            <View style={{ paddingTop: 14, display: "flex", gap:27 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 21,
                }}
              >
              <Image
            style={{ height: 24, width: 14, marginLeft: 4 }}
            source={require("../assets/man.png")}
            resizeMode="cover"
          />
                <Text style={{ fontWeight: 200, fontSize: 16,  color: "#0d1317" }}>
                You have 1 ride remaining
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                    <Image
            style={{ height: 24, width: 24,  }}
            source={require("../assets/dollar.png")}
            resizeMode="cover"
          />
                <Text style={{ fontWeight: 200, fontSize: 16,  color: "#0d1317" }}>
                  Max savngs of $3 per ride
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                         <Image
            style={{ height: 24, width: 24 }}
            source={require("../assets/percentage.png")}
            resizeMode="cover"
          />
                <Text style={{ fontWeight: 200, fontSize: 16,  color: "#0d1317",width: "85%", }}>
                  Discount applies to the fare, Service fee, tolls, and
                  taxes only
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                  width: "85%"
                }}
              >
                            <Image
            style={{ height: 12, width: 24 }}
            source={require("../assets/car2.png")}
            resizeMode="cover"
          />
                <Text style={{ fontWeight: 200, fontSize: 16,  color: "#0d1317" }}>
                  Valid for any type of Glopilot rides, excludes bikes and
                  scooters
                </Text>
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: 12 }}>
            <Text style={{ color: "blue", fontSize: 16, height:21 }}>Add promo code</Text>
            <Text style={{ fontSize: 20, fontWeight: "600", paddingTop: 12 }}>
              Travel Rewards
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 8
              }}
            >
              <View style={{ paddingTop: 12 }}>
                <Text style={{ fontWeight: "800", fontSize: 24, height: 32 }}>
                  Delta SkyMiles
                </Text>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "96%", position: "relative"}}>
            <View>
                <Text style={{fontSize: 16, color: "#545454"}}>
                  Earn 2 miles per $1 on airport{"\n"}rides and 1 mile per $1 on
                  all{"\n"}other
                </Text>
                </View>
                 <View >
                <Image
                  style={{ height: 24, width: 98 }}
                  source={require("../assets/delta.png")}
                  resizeMode="contain"
                />
              </View>
                </View>
                
                <Text style={{ paddingTop: 12, color: "blue" }}>
                  Link Account <AntDesign name="right" size={9} color="blue" />
                </Text>
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
                gap: 8
              }}
            >
              <View style={{ paddingTop: 12 }}>
                <Text style={{ fontWeight: "800", fontSize: 24 }}>
                  Hilton Honors
                </Text>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "96%", position: "relative"}}>
                 <View>
                  <Text style={{fontSize: 16, color: "#545454"}}>
                  Earn up to 3 points per $1 on {"\n"}GloPilot rides,
                  Terms apply.
                </Text>
                </View>
                  <View >
                <Image
                  style={{ height: 36, width: 98 }}
                  source={require("../assets/hilton.png")}
                  resizeMode="contain"
                />
              </View>
                </View>
              
                <Text style={{ paddingTop: 12, color: "blue" }}>
                  Link Account <AntDesign name="right" size={9} color="blue" />
                </Text>
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
                <Text style={{ fontWeight: "800", fontSize: 24 }}>
                  Alaska Mileage Plan
                </Text>
                
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "95%", position: "relative"}}>
              <View> 
              <Text style={{fontSize: 16, color: "#545454"}}>
                  Earn 1 miles for every $1 spent{"\n"}on rides, Terms apply
                </Text>
                </View> 
                  <View>
                <Image
                  style={{ height: 30, width: 85 }}
                  source={require("../assets/alaska.png")}
                  resizeMode="contain"
                />
              </View>
                </View>
                
                <Text style={{ paddingTop: 12, color: "blue" }}>
                  Link Account <AntDesign name="right" size={9} color="blue" />
                </Text>
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
                  <Text style={{ fontWeight: "400", fontSize: 20, height: 27,color: "#0D1317" }}>
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
                borderBottomWidth: 1,
                borderBottomColor: "lightgray",
                  paddingTop: 12,
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
                  <Text style={{ fontWeight: "400", fontSize: 20, height: 27, color: "#0D1317" }}>
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
                borderBottomWidth: 1,
                borderBottomColor: "lightgray",
                paddingTop: 12,
                marginBottom: 30,
              }}
            ></View>
          </View>
       <Text>   {'\n'}{'\n'}{'\n'}</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Reward;
