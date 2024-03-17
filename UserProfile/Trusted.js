import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Head from "../Head";

const Trusted = () => {
  
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>

      <Head title="Trusted Contacts" navigation={navigation} />

    
        <View style={styles.content}>
          <Text style={styles.title}>Trusted Contacts</Text>
         
         <TouchableOpacity onPress={() => navigation.navigate("Page46")}>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="location-outline" size={24} color="black" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Share your trip status</Text>
              <Text style={styles.textContent}>
                You'll be able to share your live location with one or more
                contacts during any trip
              </Text>
            </View>
          </View>
          </TouchableOpacity>
          
         <TouchableOpacity onPress={() => navigation.navigate("Page46")}>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <Feather name="headphones" size={24} color="black" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Set your emergency contacts</Text>
              <Text style={styles.textContent}>
                You can make a trusted contact an emergency contact too.
                Glopilot can call them if we can't reach you in case of an
                emergency{" "}
                <Text
                  style={styles.learnMoreText}
                  onPress={() => Linking.openURL("")}
                >
                  Learn more
                </Text>
              </Text>
            </View>
          </View>
           </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "#E5E7EB",
    height: "100%",
    padding: "20" // Change to your desired background color
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB", // Change to your desired border color
    backgroundColor: "#E5E7EB", // Change to your desired background color
  },
  headerText: {
    fontSize: 18,
    fontWeight: "300",
    color: "black",
  },
  content: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 4,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#D1D5DB", // Change to your desired border color
    paddingTop: 8,
    paddingBottom: 8,
  },
  iconContainer: {
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 20
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textContent: {
    fontSize: 16,
    color: "#555555", // Change to your desired text color
  },
  learnMoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2B64E3", // Change to your desired text color
    textDecorationLine: "underline",
  },
});

export default Trusted;
