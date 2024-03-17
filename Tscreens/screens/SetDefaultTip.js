import React, { useState } from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
// Import useNavigation from React Navigation
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SetDefaultTip = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTipPercentage, setSelectedTipPercentage] = useState(null);
  const [selectedDollarAmount, setSelectedDollarAmount] = useState(null);
  const navigation = useNavigation(); // Get the navigation object

const [activeIcon, setActiveIcon] = useState("");

const handleIconClick = (iconName) => {
  setActiveIcon(iconName);
};

const isIconActive = (iconName) => {
  return iconName === activeIcon ? "#F9FAFF" : "#eeeeee";
};


  const options = [
    { id: 1, label: "Percentages" },
    { id: 2, label: "Dollars" },
  ];

  const [selectedPercentage, setSelectedPercentage] = useState(null);

 

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
    setSelectedTipPercentage(null);
    setSelectedDollarAmount(null);
  };

  const handlePercentageSelect = (percentage) => {
    setSelectedTipPercentage(percentage);
    setSelectedDollarAmount(null);
  };

  const handleDollarSelect = (dollar) => {
    setSelectedDollarAmount(dollar);
    setSelectedTipPercentage(null);
  };

  const renderOptions = () => {
    if (selectedOption === 1) {
      return (
        <View
          style={{
            flexDirection: "row",
            
             paddingTop: 20, 
             borderRadius: 10
          }}
        >
          {[0, 10, 15, 20].map((percentage) => (
            <TouchableOpacity
              key={percentage}
              onPress={() => {
                handlePercentageSelect(percentage);
              }}
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 18,
                  paddingHorizontal: 24,
                  
              backgroundColor: "#eeeeee"

                },
                selectedOption === percentage
                  ? { paddingHorizontal: 12, paddingVertical: 15, backgroundColor: "light" }
                  : null,
              ]}
            >
              <Text
                style={[
                  { marginLeft: 8 },
                  selectedOption === 1
                    ? { color: "black", fontWeight: "200", fontSize:18 }
                    : null,
                ]}
              >{`${percentage}%`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else if (selectedOption === 2) {
      return (
        <View
          style={{
            
            flexDirection: "row",
            
             paddingTop: 20, 
             borderRadius: 10
          }}
        >
          {[0, 1, 2].map((dollar) => (
            <TouchableOpacity
              key={dollar}
              onPress={() => {
                handleDollarSelect(dollar);
              }}
              style={[
                {
                         flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 18,
                  paddingHorizontal: 12,
                 
                 // backgroundColor: isIconActive("") === "red" ? "red" : "#eeeeee",  
             backgroundColor: "#eeeeee",
              

                },
                selectedOption === 2
                  ? { paddingHorizontal: 30, paddingVertical: 15,}
                  : null,
              ]}
            >
              <Text
                style={[
                  { marginLeft: 0 },
                  selectedOption === 2
                    ? { color: "black", fontWeight: "200", fontSize: 18 }
                    : null,
                ]}
              >{`$${dollar}`}</Text>
              <View style={{paddingHorizontal: 0}}>
              {dollar === 2 && ( // Show the menu icon after $2
                <TouchableOpacity onPress={() => navigation.navigate("SetDefaultTip2")}>
                  <Text style={{ marginLeft: 44 }}>
                    <MaterialCommunityIcons
                      name="dots-horizontal"
                      size={24}
                      color="black"
                    />
                  </Text>
                </TouchableOpacity>
              )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <SafeAreaView>
           <View style={{height: 48, backgroundColor: "#f8f8f8", display: "flex", justifyContent: "center", paddingHorizontal: 20,
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",}}>
   <View style={{height: 27, width: 155, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
   <View>
    <Image
            style={{ height: 18, width: 9 }}
            source={require("../assets/arrowback.png")}
            resizeMode="cover"
          /> 
   </View> 
   <View>
   <Text style={{fontSize: 20, fontWeight: 300, lineHeight: 27}}>Set Default Tip</Text>
   </View>
  </View>
    </View>
        <View
          style={{
            display: "flex",
            minHeight: 240,
            backgroundColor: "#dde1f7",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 180, height: 180 }}
            source={require("../assets/Cashhand.png")}
            resizeMode="contain"
          />
        </View>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#0d1317",
              paddingBottom: 2,
            }}
          >
            Set Default Tip
          </Text>
          <Text style={{ fontSize: 18, color: "#545454" }}>
            You can change this at any time; this will not apply on
            international rides
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            justifyContent: "space-between",
            width: 254
          }}
        >
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionSelect(option.id)}
              style={{ flexDirection: "row", alignItems: "center", }}
            >
              <View
                style={[
                  {
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  {
                    borderColor: selectedOption === option.id ? "#4460EF" : "gray",
                  },
                ]}
              >
                {selectedOption === option.id && (
                  <View
                    style={[
                      { width: 12, height: 12, borderRadius: 6 },
                      { backgroundColor: "#4460EF" },
                    ]}
                  />
                )}
              </View>
              <Text style={{ marginLeft: 8 }}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{paddingHorizontal: 20}}>
        <Text>{renderOptions()}</Text>
        {selectedTipPercentage !== null && (
          <Text
            style={{
              textAlign: "left",
              fontSize: 16,
              color: "black",
              marginTop: 16,
              fontWeight: "600"
            }}
          >
            Default Tip Set to {selectedTipPercentage}%
           {"\n"}
          <Text style={{fontSize: 14, color: "#545454"}}>This will only apply when the amount is less than $1</Text>
          </Text>
      
        )}
        </View>
        {selectedDollarAmount !== null && (
         <View style={{alignItems: "flex-start", paddingHorizontal: 20}}>
          <Text
            style={{
              textAlign:  "left",
              fontSize: 16,
              color: "black",
              marginTop: 16,
              fontWeight: "600"
              
            }}
          >
            Default Tip Set to ${selectedDollarAmount}
          </Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default SetDefaultTip;
