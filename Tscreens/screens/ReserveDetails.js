import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ReserveDetails = () => {
  
  const navigation = useNavigation(); // Get the navigation object
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
             <View style={{height: 48, backgroundColor: "#f8f8f8", display: "flex", justifyContent: "center", paddingHorizontal: 20,
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",}}>
   <View style={{height: 27, width: 209, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
   <View>
    <Image
            style={{ height: 18, width: 9 }}
            source={require("../assets/arrowback.png")}
            resizeMode="cover"
          /> 
   </View> 
   <View>
   <Text style={{fontSize: 20, fontWeight: 300, lineHeight: 27}}>Add Personal Vehicle</Text>
   </View>
  </View>
    </View>
        <View style={styles.content}>
          <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Image
              style={{ height: 120, width: 120, borderRadius: 10 }}
              source={require("../assets/door2.png")}
            />
            <View>
              <Text style={{ fontWeight: "100", color: "#545454" }}>
                Entire Place
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#0D1317",

                  fontSize: 18,
                }}
              >
                Mediterranean Island Beach{"\n"}House Oasis 2br in Vi
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  paddingTop: 24,
                }}
              >
                <FontAwesome name="star" size={16} color="#0D1317" />
                <Text style={{ fontWeight: "200", color: "#545454" }}>
                  4.99 (87)
                </Text>
                 <Image
            style={{ height: 16, width: 16 }}
            source={require("../assets/badge.png")}
            resizeMode="cover"
          />
                <Text style={{ fontWeight: "200", color: "#545454" }}>
                  Superhost
                </Text>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 6, paddingTop: 12 }}>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
              }}
            ></View>
          </View>
          <View style={{ paddingVertical: 18 }}>
            <Text style={{ color: "#545454", fontSize: 16 }}>
              Your booking is protected by aircover
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
          <Text style={{ fontWeight: "700", fontSize: 20, paddingTop: 20 }}>
            Your trip
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20
            }}
          >
            <View style={{ display: "flex", alignItems: "flex-start" }}>
              <Text style={{ fontWeight: "600", fontSize: 18, height: 27 }}>Dates</Text>
           
              <Text style={{ color: "#545454", fontWeight: 100 }}>
                March 29- Apr 05
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#eeeeee",
              width: 75,
                
                borderRadius: 10,
                height: 40,display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              <Text style={{ fontWeight: "200", fontSize: 18 }}>Edit</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 18,
            }}
          >
            <View style={{ display: "flex", alignItems: "flex-start" }}>
              <Text style={{ fontWeight: "600", fontSize: 18,height: 27 }}>Guests</Text>
              <Text style={{ color: "#545454", fontWeight: 100 }}>
                2 guests, 1 infant, 1 pet
              </Text>
            </View>
            <View
              style={{
                     backgroundColor: "#eeeeee",
              width: 75,
                
                borderRadius: 10,
                height: 40,display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              <Text style={{ fontWeight: "200", fontSize: 18 }}>Edit</Text>
            </View>
          </View>

          <Text
            style={{
              textDecorationLine: "underline",
              paddingTop: 8,
              paddingBottom: 12,
              color: "#0D1317"
            }}
          >
            Bringing a service animal?
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        ></View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: "700", fontSize: 20, color: "#1B1B1B"  }}>
            Travel Insurance
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 18,
            }}
          >
            <View style={{ display: "flex", alignItems: "flex-start" }}>
              <Text style={{ fontWeight: "600", fontSize: 18 }}>
                Addtravel insurance for $61.32
              </Text>
              <Text style={{ color: "#545454", fontWeight: 100, paddingTop: 6 }}>
                Get reimbursed if you need to cancel {"\n"}due to illness,
                flight delays and more
              </Text>
            </View>
            <View>
              <View>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#4460EF" : undefined}
                />
              </View>
            </View>
          </View>

          <Text
            style={{
              textDecorationLine: "underline",
              paddingTop: 8,
              paddingBottom: 12,
            }}
          >
            What's covered
          </Text>
        </View>
        <View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
          <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: "700", fontSize: 20,  }}>
              Choose how to pay
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 18,
              }}
            >
              <View style={{ display: "flex", alignItems: "flex-start" }}>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Pay in full
                </Text>
                <Text style={{ color: "#545454", fontWeight: 100,paddingTop: 6, fontSize: 18, width: "80%"  }}>
                  Pay the total $987.12 now and you're all set
                </Text>
              </View>
              <View>
                <View style={{marginTop:26}}>
                  <Checkbox
                    style={{  borderRadius: 10 }}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? "blue" : undefined}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 8 }}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
          <View style={{ padding: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                
              }}
            >

            
              <View style={{ display: "flex", alignItems: "flex-start" }}>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Pay part now, part later
                </Text>
                <Text style={{ paddingTop: 6, color: "#545454", fontWeight: 100, fontSize: 18 }}>
                  Pay the $198.42 now and the test $738.31{"\n"}will be
                  automatically charged to the same{"\n"}payment method on Mar
                  20, 2023.{"\n"}No extra fees.
                </Text>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    paddingTop: 6,
                    fontWeight: "100",
                    paddingBottom: 8,
                  }}
                >
                  More info
                </Text>
              </View>
              <View>
                <View style={{marginTop: 46}}>
                  <Checkbox
                    style={{  borderRadius: 10 }}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? "#4460EF" : undefined}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View >
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
          <View style={{ padding: 20,  }}>
            <Text style={{ fontWeight: "600", fontSize: 20 }}>
              Price details
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 12,
              }}
            >
              <View style={{ gap: 8, color: "#545454" }}>
                <Text style={{ gap: 8, color: "#545454" }}>
                  $120.86 x 7 nights
                </Text>
                <Text style={{ gap: 8, color: "#545454" }}>Weekly discount</Text>
                <Text style={{ gap: 8, color: "#545454" }}>Cleaning fee</Text>
                <Text style={{ gap: 8, color: "#545454" }}>Service fee</Text>
              </View>

              <View style={{ gap: 8, alignItems: "flex-end" }}>
                <Text style={{ gap: 8, color: "#545454" }}>$846.00</Text>
                <Text style={{ gap: 8, color: "#4CAF50" }}>-$7.56</Text>
                <Text style={{ gap: 8, color: "#545454" }}>$27.00</Text>
                <Text style={{ gap: 8, color: "#545454" }}>$122.18</Text>
              </View>
            </View>
            <View style={{ paddingHorizontal: 0, paddingTop: 8 }}>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: "lightgray",
                }}
              ></View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 12,
              }}
            >
              <Text style={{ fontWeight: "800", fontSize: 18 }}>
                Total (USD)
              </Text>
              <Text style={{ fontWeight: "800", fontSize: 18 }}>$987.62</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        ></View>
        <View style={{ padding: 12 }}>
          <Text style={{ fontWeight: "800", fontSize: 18 }}>
            Payment method
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 12,
              paddingTop: 10,
            }}
          >
            <View
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <Image
                style={{ height: 24, width: 24 }}
                source={require("../assets/visa.png")}
                resizeMode="contain"
              />
              <Text style={{ fontWeight: "200" }}>VISA ....1590</Text>
            </View>
            <View>
              <Text>
                <AntDesign name="check" size={24} color="green" />
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 12,
              paddingTop: 10,
            }}
          >
            <View
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <Image
                style={{ height: 24, width: 24 }}
                source={require("../assets/applepay.png")}
                resizeMode="contain"
              />
              <Text style={{ fontWeight: "200" }}>Apple Pay</Text>
            </View>
            <View>
              <Text></Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
          <TouchableOpacity
            onPress={() => {
              /* handle onPress */
            }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              paddingBottom: 10,
              paddingTop: 8,
            }}
          >
            <View
              style={{
                backgroundColor: "#EEEEEE", // Background color
                marginTop: 6, // Margin top
                height: 48,
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
                  color: "#545454", // Text color
                }}
              >
                + Add payment Method
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
          <Text
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              textDecorationLine: "underline",
            }}
          >
            Enter a coupon
          </Text>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
            }}
          ></View>
          <Text style={{ fontWeight: "700", fontSize: 18, paddingTop:20 }}>
            Cancellation poilicy
          </Text>

          <Text style={{paddingTop: 8}}>
            Free cancellation before Mar 28. Cancel before check in on MAr 29
            for a partial refund.
          </Text>

          <Text style={{ fontWeight: "700" }}>Learn more</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        ></View>
        <View style={{ padding: 12, gap: 28 }}>
          <Text>
            By selecting the button below, I agree to the{" "}
            
          <Text style={{textDecorationLine: "underline"}}> Hosts House Rules </Text>{" "}
            <Text style={{textDecorationLine: "underline"}}>Grand Rule for Guests,</Text>{" "}
               <Text style={{textDecorationLine: "underline"}}>Glopilots Privacy Policy</Text>{" "}
             and that Glopilot
            can{" "}<Text style={{textDecorationLine: "underline"}}>charge my payment method</Text>{" "}if Im responsible for damage
          </Text>
          <TouchableOpacity
          style={{paddingBottom: 25}}
          >
            <View
              style={{
                backgroundColor: "#4460EF", // Background color
                marginTop: 6, // Margin top
                height: 56,
                paddingHorizontal: 18,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Text
                style={{
                  fontSize: 16, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Confirm and Pay
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    height: "100%", // Change to your desired background color
  },
 
  content: {
    padding: 20,
  },

  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default ReserveDetails;
