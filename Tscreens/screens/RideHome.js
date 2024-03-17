import React, { useRef, useEffect, useState } from "react";
import CountryCodeDropdownPicker from "react-native-dropdown-country-picker";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import RBSheet from "react-native-raw-bottom-sheet";

import { useNavigation } from "@react-navigation/native";

const RideHome = () => {
  
  const navigation = useNavigation(); // Get the navigation object
  const [selected, setSelected] = React.useState("+91");
  const [country, setCountry] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const sheet = useRef();

  useEffect(() => {
    sheet.current.open();
  }, []);

  return (
    <View style={styles.container}>
      <View >
        <RBSheet
          height={800}
          openDuration={250}
          ref={sheet}
          customStyles={{ container: styles.sheet }}
        >
        <View style={{padding: 20}}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>New Rider</Text>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <Text>{"        "}</Text>
            </TouchableOpacity>
          </View>
          <View style={{  gap: 18, paddingTop: 20 }}>
          <View style={{backgroundColor: "lightblue", padding: 8, borderRadius: 1, height: 80, borderRadius: 10}}><Text style={{color: "#545454"}}>Drivers will see this name, do you want to make any chnages? changing the name here wont affect how it appears in your device contacts.</Text></View>
            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color: "#222",
                  marginBottom: 8,
                }}
              >
                First Name
              </Text>
              <TextInput
                placeholder="Enter First Name"
                placeholderTextColor="#6b7280"
                style={{
                  height: 56,
                  backgroundColor: "#EEEEEE",
                  paddingHorizontal: 16,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: "500",
                  color: "#222",
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color: "#222",
                  marginBottom: 8,
                }}
              >
                Last Name
              </Text>
              <TextInput
                placeholder="Enter Last Name"
                placeholderTextColor="#6b7280"
                style={{
                  height: 56,
                  backgroundColor: "#EEEEEE",
                  paddingHorizontal: 16,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: "500",
                  color: "#222",
                }}
              />
            </View>
            <Text style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color: "#222",margintop: 8
                  }}>Phone Number</Text>
            <CountryCodeDropdownPicker
              selected={selected}
              setSelected={setSelected}
              setCountryDetails={setCountry}
              phone={phone}
              setPhone={setPhone}
              countryCodeTextStyles={{ fontSize: 11 }}
              countryCodeContainerStyles={{ backgroundColor: "#eeeeee", height: 56, width: 70 }}
              dropdownStyles={{ backgroundColor: "#eeeeee" }}
              phoneStyles={{ backgroundColor: "#eeeeee", height: 56 }}
            />
            <Text style={{color: "#545454"}}>Glopilot wont share this phone number with drivers</Text>
            <Text style={{color: "#545454"}}>By tapping "Add ride" you confirm that your friend, agreed to share there contact information with GloPilot and recieve SMS about this trip </Text>
         <TouchableOpacity
 
  style={{paddingTop: 90}}
>
  <View
    style={{
      backgroundColor: '#4460EF', // Background color
      height: 56,
      paddingHorizontal: 18, 
      borderRadius: 8, 
      alignItems: 'center', 
      justifyContent: 'center', 
    }}
  >
    <Text
      style={{
        fontSize: 16, // Font size
        fontWeight: 'normal', // Font weight
        color: '#fff', // Text color
      }}
    >
     Add Rider
    </Text>
  </View>
</TouchableOpacity>

          </View>
</View>
        </RBSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },
  sheet: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
});

export default RideHome;
