import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from "./Header.jsx"
import { SafeAreaView } from "react-native-safe-area-context";


import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

const Body = () => {


  const [selected, setSelected] = React.useState("");
  const yearData = [
    { key: "2022", value: "2022" },
    { key: "2021", value: "2021" },
    { key: "2020", value: "2020" },
    { key: "2019", value: "2019" },
    { key: "2018", value: "2018" },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
     <Header />
     <ScrollView>
     <View style={{padding: 20,backgroundColor: "#F8F8F8", display:"flex", gap: 20}}>
     
     <View style={{height: 87, display: "flex", justifyContent: "space-between"}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300, color: "#0d1317"}}>Year</Text>
     </View>
    <View style={{height: 56, backgroundColor: "white"}}>
         <SelectList
            setSelected={setSelected}
            data={yearData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56 }}
            placeholder="Select Year"
            inputStyles={{ color: "#545454", fontWeight: "100", height: "100%", fontSize:16, height: 21  }}
            
          />
    </View>
     </View>

        <View style={{height: 87, display: "flex", justifyContent: "space-between"}}>
     <View style={{height: 24}}>
      <Text style={{fontSize: 18, fontWeight: 300,color: "#0d1317"}}>Year</Text>
     </View>
    <View style={{height: 56, backgroundColor: "white"}}>
         <SelectList
            setSelected={setSelected}
            data={yearData}
            boxStyles={{ backgroundColor: "#Eeeeee",height:56 }}
            placeholder="Select Year"
            inputStyles={{ color: "#545454", fontWeight: "100", height: "100%", fontSize:16, height: 21  }}
            
          />
    </View>
     </View>
     
     </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Body

const styles = StyleSheet.create({})