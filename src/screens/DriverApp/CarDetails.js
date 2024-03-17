import React from "react";
import {StatusBar} from "expo-status-bar"
import Header from "../../../components/Header.js"

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";

const CarDetails = () => {
  
  const navigation = useNavigation(); // Get the navigation object
  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);



  const yearData = [
    { key: "2022", value: "2022" },
    { key: "2021", value: "2021" },
    { key: "2020", value: "2020" },
    { key: "2019", value: "2019" },
    { key: "2018", value: "2018" },
  ];

  const makeData = [
    { key: "honda", value: "honda" },
    { key: "mazda", value: "mazda" },
    { key: "Benz", value: "Benz" },
    { key: "Toyota", value: "Toyota" },
    { key: "BMW", value: "BMW" },
  ];

  const modelData = [
    { key: "honda", value: "honda" },
    { key: "mazda", value: "mazda" },
    { key: "Benz", value: "Benz" },
    { key: "Toyota", value: "Toyota" },
    { key: "BMW", value: "BMW" },
  ];

  const colorData = [
    { key: "black", value: "black" },
    { key: "blue", value: "blue" },
    { key: "red", value: "red" },
    { key: "white", value: "white" },
    { key: "green", value: "green" },
  ];

  const doorData = [
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
  ];

  const seatData = [
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
  ];

  const typeData = [
    { key: "Personal", value: "Personal" },
    { key: "Livery", value: "Livery" },
  ];
  const rampData = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  return (
       <SafeAreaView style={{flex: 1}}>
     <StatusBar backgroundColor="#F8F8F8" />
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
     <ScrollView style={{backgroundColor: "#F8F8F8",}}>
      <KeyboardAwareScrollView>
     <View style={{padding: 20,backgroundColor: "#F8F8F8", display:"flex", gap: 20}}>
     
     <View style={{display: "flex", justifyContent: "space-between", gap: 7, position: "relative", zIndex: 10}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300, color: "#0d1317"}}>Year</Text>
     </View>
         <SelectList
            setSelected={setSelected}
            data={yearData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56, display: "flex", alignItems: "center", flexDirection: "row", borderStyle: "none" }}
            placeholder="Select Year"
            inputStyles={{ color: "#545454", fontWeight: "100",  fontSize:16, marginTop: 4  }}
              dropdownStyles={{backgroundColor: "#eeeeee", position: "absolute", zIndex:10, width: "100%", top: "100%",borderStyle: "none"}}
          />
   
     </View>

        <View style={{ display: "flex", justifyContent: "space-between", gap: 7, position: "relative", zIndex: 9}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300,color: "#0d1317"}}>Make</Text>
     </View>
         <SelectList
            setSelected={setSelected}
            data={makeData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56, display: "flex", alignItems: "center", flexDirection: "row",borderStyle: "none" }}
           
            placeholder="Select Make"
            inputStyles={{ color: "#545454", fontWeight: "100",  fontSize:16, marginTop: 4  }}
             dropdownStyles={{backgroundColor: "#eeeeee", position: "absolute", zIndex:10, width: "100%", top: "100%",borderStyle: "none"}}
          />
  
     </View>
     
        <View style={{ display: "flex", justifyContent: "space-between", gap: 7, position: "relative", zIndex: 8}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300,color: "#0d1317"}}>Model</Text>
     </View>
         <SelectList
            setSelected={setSelected}
            data={modelData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56, display: "flex", alignItems: "center", flexDirection: "row",borderStyle: "none"  }}
            placeholder="Select Model"
            
            inputStyles={{ color: "#545454", fontWeight: "100",  fontSize:16, marginTop: 4  }}
             dropdownStyles={{backgroundColor: "#eeeeee", position: "absolute", zIndex:10, width: "100%", top: "100%",borderStyle: "none"}}
          />
     </View>

       <View style={{ display: "flex", justifyContent: "space-between", gap: 7, position: "relative", zIndex: 7}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300,color: "#0d1317"}}>Color</Text>
     </View>
         <SelectList
            setSelected={setSelected}
            data={colorData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56, display: "flex", alignItems: "center", flexDirection: "row"  }}
            placeholder="Select Color"
            
            inputStyles={{ color: "#545454", fontWeight: "100",  fontSize:16, marginTop: 4  }}
             dropdownStyles={{backgroundColor: "#eeeeee", position: "absolute", zIndex:10, width: "100%", top: "100%"}}
          />
     </View>

  <View style={{ display: "flex", justifyContent: "space-between", gap: 7, position: "relative", zIndex: 6}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300,color: "#0d1317"}}>Number of doors</Text>
     </View>
         <SelectList
            setSelected={setSelected}
            data={doorData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56 , display: "flex", alignItems: "center", flexDirection: "row" }}
            placeholder="Select Number of doors"
            
            inputStyles={{ color: "#545454", fontWeight: "100",  fontSize:16, marginTop: 4  }}
             dropdownStyles={{backgroundColor: "#eeeeee", position: "absolute", zIndex:10, width: "100%", top: "100%"}}
          />
     </View>


  <View style={{ display: "flex", justifyContent: "space-between", gap: 7, position: "relative", zIndex: 5}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300,color: "#0d1317"}}>Number of Seat Belts</Text>
     </View>
         <SelectList
            setSelected={setSelected}
            data={seatData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56, display: "flex", alignItems: "center", flexDirection: "row"  }}
            placeholder="Select Number of Seat Belts"
            inputStyles={{ color: "#545454", fontWeight: "100",  fontSize:16, marginTop: 4  }}
             dropdownStyles={{backgroundColor: "#eeeeee", position: "absolute", zIndex:10, width: "100%", top: "100%"}}
          />
     </View>

     <View style={{ display: "flex", justifyContent: "space-between", gap: 7, position: "relative", zIndex: 4}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300,color: "#0d1317"}}>Vehical Type</Text>
     </View>
         <SelectList
            setSelected={setSelected}
            data={typeData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56, display: "flex", alignItems: "center", flexDirection: "row"  }}
            placeholder="Select Vehicle Type"
             dropdownStyles={{backgroundColor: "#eeeeee", position: "absolute", zIndex:10, width: "100%", top: "100%"}}
            inputStyles={{ color: "#545454", fontWeight: "100",  fontSize:16, marginTop: 4  }}
            
          />
     </View>

       <View style={{ display: "flex", justifyContent: "space-between", gap: 7, position: "relative", zIndex: 3}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300,color: "#0d1317"}}>Vehical has a Wheelchair accessible ramp</Text>
     </View>
         <SelectList
            setSelected={setSelected}
            data={rampData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56, display: "flex", alignItems: "center", flexDirection: "row"  }}
            placeholder="Select Wheelchair accessible ramp"
            
            inputStyles={{ color: "#545454", fontWeight: "100",  fontSize:16, marginTop: 4  }}
             dropdownStyles={{backgroundColor: "#eeeeee", position: "absolute", zIndex:10, width: "100%", top: "100%"}}
          />
     </View>
<View style={{paddingBottom: 62}}>
  <TouchableOpacity
       
            onPress={() => navigation.navigate("Page153")}
        >
          <View
            style={{
              backgroundColor: "#4460EF", // Background color
              marginTop: 6, // Margin top
              height: 56,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Save
            </Text>
          </View>
        </TouchableOpacity>
        </View>
     </View>
      </KeyboardAwareScrollView>
     </ScrollView>
    </SafeAreaView>
    
  );
};

export default CarDetails;
