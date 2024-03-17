import { View, Text, TouchableOpacity, Dimensions, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

import { calendarStyle, homestyle } from "../../styles/style";
import React, { useState } from "react";

import Calendar from "react-native-calendar-range-picker";
import Button from "../components/Button";

import TimeRangePicker from "../components/TimeRangePicker";
const CalendarRc = ({ navigation }) => {
  const [selected, setSelected] = useState({ startDate: "", endDate: "" });

  const [open, setOpen] = useState("none");
  const CUSTOM_LOCALE = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dayNames: ["S", "M", "T", "W", "T", "F", "S"],
    today: "Today",
  };
  return (
    <View style={homestyle.container} edges={["left", "right", "top"]}>
      <View style={calendarStyle.headerContainer}>
        <Text style={calendarStyle.header}> What do you want to rent?</Text>

        <View style={calendarStyle.badgeContainer}>
          <TouchableOpacity style={calendarStyle.badge}>
            <Text style={{ fontSize: Dimensions.get("screen").fontScale * 14 }}>
              Tomorrow
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={calendarStyle.badge}>
            <Text style={{ fontSize: Dimensions.get("screen").fontScale * 14 }}>
              Fri - Sun
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={calendarStyle.badge}>
            <Text style={{ fontSize: Dimensions.get("screen").fontScale * 14 }}>
              A week Starting monday
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Calendar
          initialNumToRender={2}
          locale={CUSTOM_LOCALE}
          onChange={({ startDate, endDate }) => {
            console.log({ startDate, endDate });

            setSelected({
              ...selected,
              startDate: startDate ? startDate : "",
              endDate: endDate ? endDate : "",
            });
          }}
          disabledBeforeToday={true}
          style={{
            dayText: {
              fontSize: Dimensions.get("screen").fontScale * 16,
            },
            holidayColor: "#111111",
            dayTextColor: "black",
            disabledTextColor: "#cccccc",
            selectedDayTextColor: "white",
            selectedDayBackgroundColor: "#4460ef",
            selectedBetweenDayBackgroundTextColor: "#e6e9f7",

            monthContainer: {
              justifyContent: "center",
              backgroundColor: "#ffffff",
              width: "100%",
              textAlign: "center",
              alignItems: "center",
              margin: "auto",
            },

            dayNameText: {
              color: "black",
              fontSize: Dimensions.get("screen").fontScale * 16,
            },
            container: {
              backgroundColor: "#d7eaf9",
            },
            monthNameText: {
              fontSize: Dimensions.get("screen").fontScale * 16,

              fontWeight: "600",
            },
          }}
        />
      </View>
      <View style={calendarStyle.button}>
        <Button
          text="Select Dates"
          onPress={() => {
            if (!selected.startDate || !selected.endDate) {
              Alert.alert("Error", "Please select Start Date and End Date", [
                {
                  text: "Close",
                  onPress: () => {},
                  style: "cancel",
                },
              ]);
              return;
            }
            setOpen("flex");
          }}
        />
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
          display: open,
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", top: 5, right: 5 }}
          onPress={() => {
            setOpen("none");
          }}
        >
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "white",
            height: Dimensions.get("screen").height / 2.5,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <TimeRangePicker
            startDate={selected.startDate}
            endDate={selected.endDate}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

export default CalendarRc;
