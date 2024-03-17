import { View, Text, TouchableOpacity, Dimensions, Platform, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { homestyle, locationStyle } from "../../styles/style";
import { AntDesign, Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
//import DateTimePicker from "@react-native-community/datetimepicker";
import Divider from "../components/Divider";
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from "@react-native-community/slider";
import Button from "../components/Button";
const SelectTime = ({ navigation }) => {
  const [count, setCount] = useState(2);
  const [sliderValue, setSliderValue] = useState(0);

  

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setCount(value);
  };

  useEffect(() => {
    setSliderValue(count);
  }, [count]);
    
    
  const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState("none");

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios"); // Hide the picker for iOS
      setDate(currentDate);
      setOpen("none"); // Close the bottom sheet
    };
    
    
    

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={locationStyle.listItem}
        onPress={() => navigation.goBack()}
      >
        <View style={locationStyle.listItemContent}>
          <Entypo name="chevron-small-left" size={30} color="black" />

          <Text style={homestyle.locationButtonTextUnstyled}>
            Select Time
          </Text>
        </View>

        <Ionicons name="md-options-outline" size={24} color="black" />
      </TouchableOpacity>
      <Divider />
      <Text style={{ fontWeight: "800", fontSize: 20, padding: 15 }}>
        How Much time do You need?
      </Text>

      <View style={{ padding: 20, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#d7eaf9af",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              width: 50,
              height: 50,
            }}
            onPress={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          >
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,

              alignItems: "center",
              justifyContent: "center",
              fontWeight:"bold"
            }}
          >
             {count} Hours
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#d7eaf9af",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              width: 50,
              height: 50,
            }}
            onPress={() => setCount((prev) => (prev < 7 ? prev + 1 : 7))}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Slider
          style={{ width: 300 }}
          value={sliderValue}
          minimumValue={2}
          maximumValue={7}
          thumbTintColor="#4460ef"
          
          step={1}

          onValueChange={handleSliderChange}
        />
        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#4460ef",

              width: 120,
              borderRadius: 50,
              padding: 5,
              justifyContent: "center",
            }}
            onPress={()=> navigation.navigate('Rider')}
          >
            <Text style={{ color: "white" }}>Leave now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#d7eaf9af",
              width: 120,
              borderRadius: 50,
              padding: 5,
              justifyContent: "center",
              gap: 5,
            }}
            onPress={() => {
              setOpen("flex");
            }}
          >
            <Text style={{ textAlign: "center" }}>Leave later </Text>
            <FontAwesome name="angle-down" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "auto" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text>Starting at</Text>
            <View>
              <Text style={homestyle.locationButtonTextBold}>$110.76</Text>
              <Text style={{ color: "#969696" }}>$55.38/hour</Text>
            </View>
          </View>
          <Button
            text="Get Started"
            onPress={() => {
              setOpen("flex");
            }}
          ></Button>
        </View>
      </View>
      <View
  style={{
    backgroundColor: "#808080b9",
    position: "absolute",
    bottom: 0,
    zIndex: 3,
    flex: 1,
    top: 0,
    width: Dimensions.get("screen").width,
    justifyContent: "flex-end",
    display: open === "flex" ? "flex" : "none", // Use conditional rendering
  }}
>


        <View
          style={{
            backgroundColor: "white",
            height: Dimensions.get("screen").height / 2,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            padding: 10,
          }}
        >
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: StyleSheet.hairlineWidth,
              padding: 10,
            }}
          >
            <Text
              style={{ fontWeight: "700", textAlign: "center", fontSize: 18 }}
            >
              When would you like to leave?r
            </Text>
          </View>
          {/* <DateTimePicker
  testID="dateTimePicker"
  value={date}
  mode={mode}
  display={Platform.OS === "ios" ? "spinner" : "default"}
  is24Hour={true}
  onChange={(event, selectedDate) => onChange(event, selectedDate)}
/> 

  <DatePicker date={date} onDateChange={setDate} />
*/}

          <Button text="Confirm" onPress={()=> navigation.navigate('')}/>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => {
              setOpen("none");
            }}
          >
            <Text
              style={{ fontSize: 17, fontWeight: "700", textAlign: "center" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectTime;
