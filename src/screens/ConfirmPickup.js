import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    StyleSheet,
  } from "react-native";
  import React, { useCallback, useMemo, useRef, useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { AntDesign, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import BottomSheet from "@gorhom/bottom-sheet";
  
  import Divider from "../components/Divider";
  import Switch from "../components/Switch";
  import Button from "../components/Button";
  const ConfirmPickup = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(true);
  
    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };
  
    const bottomSheetRef = useRef(null);
  
    // variables
    const snapPoints = useMemo(() => ["25%", "25%"], []);
  
    // callbacks
    const handleSheetChanges = useCallback((index) => {
      console.log("handleSheetChanges", index);
    }, []);
    return (
      <SafeAreaView
        style={{ position: "relative", flex: 1 }}
        edges={["left", "right", "top"]}
      >
        <Image
          source={require("../../assets/image14.png")}
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
            position: "absolute",
          }}
        />
        <View style={{ padding: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-small-left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "flex-end", position: "relative", top: -25 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                backgroundColor: "#4460ef",
                textAlign: "center",
                padding: 5,
              }}
            >
              4 {"\n"} Min
            </Text>
            {/* <View style={{ flexDirection: "row", justifyContent: "space-between",}}> */}
            <Text>University of {"\n"} SouthernCalifornia</Text>
            {/* </View> */}
            <Entypo name="chevron-small-right" size={30} color="black" />
          </TouchableOpacity>
        </View>
  
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              padding: 10,
              borderRadius: 5,
              width: Dimensions.get("screen").width - 20,
              margin: "auto",
              backgroundColor: "white",
            }}
          >
            <Octicons name="dot-fill" size={24} color="black" />
            <TextInput
              placeholder="Where to?"
              style={{ width: "100%" }}
              placeholderTextColor="black"
            />
          </View>
        </View>
  
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <View
              style={{
                borderBottomColor: "#cccccc",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: Dimensions.get("screen").width - 24,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{ fontWeight: "800", fontSize: 18, textAlign: "center" }}
              >
                Confirm the Pickup Point
              </Text>
            </View>
  
            
  
            <View style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: 'space-between',
                  gap: 20,
                  padding: 10,
                }}
              >
                <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 20,
                        marginLeft: 10,
                      }}
                    >
                         DMV </Text>
  
                
               
               
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 16,
                      }}
                    >
                      Search
                    </Text>
                 
                 
                
              </View>
            
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  paddingHorizontal: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
  
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    alignItems: "center",
                  }}
                >
                  
                </View>
  
                
              </View>
            </View>
            <View
              style={{ paddingTop: 10, alignItems: "center", marginTop: "auto" }}
            >
              <Button text="Confirm Pickup" />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    );
  };
  
  export default ConfirmPickup;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "grey",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      paddingBottom: 30,
    },
  });
  