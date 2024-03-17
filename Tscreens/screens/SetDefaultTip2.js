import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";

//import RBSheet from "react-native-raw-bottom-sheet";

const SetDefaultTip2 = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [tipAmount, setTipAmount] = useState("");
  const maxTipAmount = 20;

  const handleTextChange = (text) => {
    // Remove any non-numeric characters from the input
    const numericText = text.replace(/[^0-9]/g, "");

    // Check if the input is empty or a valid number
    if (numericText === "" || parseInt(numericText) <= maxTipAmount) {
      // Add a "$" sign before the numeric value
      setTipAmount("" + numericText);
    }
  };

  const handleCloseSheet = () => {
    sheet.current.close(); // Close the bottom sheet when the close icon is pressed
  };
  const sheet = useRef();

  useEffect(() => {
    sheet.current.open();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <RBSheet
          height={240}
          openDuration={250}
          ref={sheet}
          customStyles={{ container: styles.sheet }}
        >
          <View style={{ padding: 20 }}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <Text> {"         "}</Text>
              </TouchableOpacity>

              <Text style={styles.headerText}>Custom Tip</Text>

              <TouchableOpacity
                onPress={() => {
                  onPress = { handleCloseSheet };
                }}
              >
                <Text onPress={handleCloseSheet}>
                  <AntDesign name="closecircle" size={42} color="#707070" />
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: 18,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 600 }}>$</Text>
                <TextInput
                  style={{
                    width: 40,
                    height: 40,
                    borderColor: "gray",
                    fontWeight: "800",
                    fontSize: 30,
                    color: "#0d1317",
                  }}
                  keyboardType="numeric"
                  value={tipAmount}
                  onChangeText={handleTextChange}
                />
              </View>

              {parseInt(tipAmount.replace("", "")) > maxTipAmount && (
                <Text style={{ color: "#d00000", marginTop: 10, fontSize: 16 }}>
                  <Text style={{ fontSize: 10 }}></Text>
                  {maxTipAmount}
                </Text>
              )}
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "200",
                  color: "red",
                  paddingTop: 10,
                }}
              >
                Your maximum default tip is $20
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                /* handle onPress */
              }}
              style={{ paddingTop: 15 }}
            >
              <View
                style={{
                  backgroundColor: "#4460ef", // Background color
                  marginTop: 6, // Margin top
                  paddingVertical: 12,
                  paddingHorizontal: 12,
                  borderRadius: 8,
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
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  sheet: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
    paddingHorizontal: 4, // Change to your desired border color
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
});

export default SetDefaultTip2;
