import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { homestyle } from "../../styles/style";
import Button from "./Button";

const TimeRangePicker = ({ startDate, endDate, navigation }) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

      const [modalVisible, setModalVisible] = useState(false);
    
    
    
  const formatTime = (time) => {
    const hours = Math.floor(time);
      const minutes = Math.round((time - hours) * 60);
      const period = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${displayHours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${period}`;
  };
    
    
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
    function formatDateToCustomFormat(dateString) {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const [year, month, day] = dateString.split("-").map(Number);
      const date = new Date(year, month - 1, day); // Month is 0-based in JavaScript Date object
      const dayOfWeek = daysOfWeek[date.getDay()];
      const monthName = months[date.getMonth()];
      const dayOfMonth = date.getDate();

      return `${dayOfWeek} ${dayOfMonth} ${monthName}`;
    }


  

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={homestyle.locationButtonTextBold}>
          Pick up - {formatDateToCustomFormat(startDate)}
        </Text>
        <Text style={homestyle.locationButtonTextBold}>
          Start Time: {formatTime(startTime)}
        </Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={24}
        step={0.01}
        thumbTintColor="#4460ef"
        minimumTrackTintColor="#4460ef"
        value={startTime}
        onValueChange={(value) => setStartTime(value)}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={homestyle.locationButtonTextBold}>
          Return - {formatDateToCustomFormat(endDate)}
        </Text>
        <Text style={homestyle.locationButtonTextBold}>
          End Time: {formatTime(endTime)}
        </Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        thumbTintColor="#4460ef"
        maximumValue={24}
        minimumTrackTintColor="#4460ef"
        step={0.01}
        value={endTime}
        onValueChange={(value) => setEndTime(value)}
      />
      <View style={{ marginTop: "auto" }}>
        <Button
          text="Select Time"
          onPress={() => navigation.navigate("Location")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 20,
    paddingBottom:40,
  },
  slider: {
    width: "100%",
    marginTop: 10,
  },
});

export default TimeRangePicker;
