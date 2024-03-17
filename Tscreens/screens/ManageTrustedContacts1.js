import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import RBSheet from "react-native-raw-bottom-sheet";
import { Foundation } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

const ManageTrustedContacts1 = () => {
  const navigation = useNavigation(); // Get the navigation object
  const sheet = useRef();

  useEffect(() => {
    sheet.current.open();
  }, []);

  const handleCloseSheet = () => {
    sheet.current.close(); // Close the bottom sheet when the close icon is pressed
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <RBSheet
          height={730}
          ref={sheet}
          customStyles={{ container: styles.sheet }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={handleCloseSheet}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.headerText}>Trusted Contacts</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <TouchableOpacity 
                onPress={() => navigation.navigate("ManageTrustedContacts2")}>
                <Image 
                      style={{ height: 24, width: 24 }}
                      source={require("../assets/add.png")} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.contentContainer}>
              <Foundation name="info" size={72} color="black" style={{ width: 64}} />
              <Text style={styles.title}>
                To use your device contact, turn on {'\n'} contact access.
              </Text>

              <Text style={styles.subtitle}>
                Turn on contact access to set an emergency contact and to
                enhance other features.
              </Text>

              <TouchableOpacity
              
                onPress={() => navigation.navigate("Page86")}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Device Access Setting</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.spacer} />
            </View>
          </View>
        </RBSheet>
      </SafeAreaView>
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
    padding: 20
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0d1317",
  },
  sheet: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  contentContainer: {
    width: 316,
    height: 246,
    alignItems: "center",
    textAlign: "center"
    
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: "#0d1317",
    paddingTop: 16,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#545454",
    marginTop: 2,
    textAlign: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    marginTop: 24,height: 40,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "300",
    color: "#od1317",
  },
  spacer: {
    marginBottom: 12,
  },
});

export default ManageTrustedContacts1;
