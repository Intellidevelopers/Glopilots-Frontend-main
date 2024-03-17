import React from "react";

import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page4() {
  const navigation = useNavigation(); // Get the navigation object
  return (
    <View style={{ flex: 1, backgroundColor: "#0569FF", height: "100%" }}>
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60%",
          }}
        >
          <Image
            style={{ height: 200, width: 200 }}
            source={require("../assets/logo.png")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopStartRadius: 100,
            borderTopEndRadius: 100,
          }}
        >
          <Text style={styles.heading}>Let's Get You In</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Page39")}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}> Login </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Page39")}>
            <View style={styles.signupButton}>
              <Text style={styles.signupButtonText}>SignUp</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0569FF",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: "#0569FF",
    paddingHorizontal: 120,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  signupButton: {
    backgroundColor: "#D1D5DB",
    paddingHorizontal: 120,
    paddingVertical: 10,
    borderRadius: 8,
  },
  signupButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
