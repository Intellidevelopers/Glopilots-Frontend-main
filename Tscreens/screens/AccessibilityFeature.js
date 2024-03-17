import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

const AccessibilityFeature = () => {
  
  const navigation = useNavigation(); // Get the navigation object
  return (
    <SafeAreaView style={{ flex: 1 }}>
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

  </View>
    </View>



      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: "600", fontSize: 24 }}>
          Accessibility Features
        </Text>
        <Text style={{ color: "#545454", fontWeight: "200", paddingTop: 8 }}>
          This info was provided by the host and reviewed by Glopilots.
        </Text>
        <Text style={{ paddingTop: 12, color: "#545454", fontSize: 16 }}>
          Guest entrance and parking
        </Text>
        <Text style={{ fontWeight: "700", paddingTop: 8, fontSize: 18, color: "#0D1317" }}>
          Step-free guest entrance
        </Text>
        <TouchableOpacity  onPress={() => navigation.navigate("Page221")}>
        <View style={{ display: "flex", paddingTop: 12 }}>
          <Image
            style={{
              width: "100%",
              height: 240,
              borderRadius: 10,
            }}
            source={require("../assets/door.jpg")}
            resizeMode="cover"
          />
        </View>
        </TouchableOpacity>
        <Text style={{ paddingTop: 12, color: "#545454", fontWeight: "200" }}>
          There are no steps or thresholds greater than 2 inches at thw guest
          entrance
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AccessibilityFeature;


