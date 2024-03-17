import { EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  SectionList,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Contacts from "expo-contacts";
import { SafeAreaView } from "react-native-safe-area-context";
import RBSheet from "react-native-raw-bottom-sheet";

import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ManageTrustedContacts2 = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);

  const navigation = useNavigation(); // Get the navigation object

  const handleCloseSheet = () => {
    sheet.current.close(); // Close the bottom sheet when the close icon is pressed
  };

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // Filter out contacts with the same first letter
          const uniqueContacts = {};
          data.forEach((contact) => {
            if (contact.phoneNumbers && contact.phoneNumbers.length > 0) {
              const firstLetter = contact.name[0].toUpperCase();
              if (!uniqueContacts[firstLetter]) {
                uniqueContacts[firstLetter] = [];
              }
              uniqueContacts[firstLetter].push(contact);
            }
          });

          const sortedContacts = Object.keys(uniqueContacts)
            .sort()
            .map((key) => ({
              title: key,
              data: uniqueContacts[key],
            }));

          setContacts(sortedContacts);
          setFilteredContacts(sortedContacts);
        }
      }
    })();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts
        .map((section) => ({
          ...section,
          data: section.data.filter(
            (contact) =>
              contact.name &&
              contact.name.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((section) => section.data.length > 0);
      setFilteredContacts(filtered);
    }
  };

  const toggleContactSelection = (contact) => {
    // Check if the contact is already selected
    const isSelected = selectedContacts.some(
      (selected) => selected.id === contact.id
    );

    if (isSelected) {
      // If selected, remove it from the selectedContacts array
      setSelectedContacts(
        selectedContacts.filter((selected) => selected.id !== contact.id)
      );
    } else {
      // If not selected, add it to the selectedContacts array
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const sheet = useRef();

  useEffect(() => {
    sheet.current.open();
  }, []);

  const renderContactItem = ({ item }) => {
    // Check if the contact is selected
    const isSelected = selectedContacts.some(
      (selected) => selected.id === item.id
    );

    return (
      <TouchableOpacity
        onPress={() => toggleContactSelection(item)}
        style={{
          borderColor: "lightgray",
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#4460ef",
                width: 48,
                height: 48,
                borderRadius: 24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {item.name[0].toUpperCase()}
              </Text>
            </View>
            <View style={{ paddingLeft: 12 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "200",
                  color: "#0d1317",
                  height: 24,
                }}
              >
                {item.name}
              </Text>
              {item.phoneNumbers && item.phoneNumbers.length > 0 && (
                <Text
                  style={{ fontSize: 18, fontWeight: "200", color: "#0d1317" }}
                >
                  {item.phoneNumbers[0].number}
                </Text>
              )}
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => toggleContactSelection(item)}
              style={{
                width: 20,
                height: 20,
                borderRadius: 1,
                borderWidth: 1,
                borderColor: isSelected ? "#4460ef" : "gray",
                backgroundColor: isSelected ? "#4460ef" : "white",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 8,
              }}
            >
              {isSelected && (
                <MaterialIcons name="check" size={12} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <RBSheet
        height={700}
        openDuration={250}
        ref={sheet}
        customStyles={{
          container: { borderTopLeftRadius: 18, borderTopRightRadius: 18 },
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              handleCloseSheet;
            }}
          >
            <AntDesign name="close" size={24} color="#0d1317" />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "black",
              height: 27,
            }}
          >
            Choose Contacts
          </Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <Image
              style={{ height: 24, width: 24 }}
              source={require("../assets/add.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 12 }}
        >
          <View style={{ position: "relative", width: "100%" }}>
            <TextInput
              placeholder="Search name or number"
              placeholderTextColor="#545454"
              value={searchQuery}
              onChangeText={handleSearch}
              style={{
                height: 44,
                backgroundColor: "#eeeeee",
                paddingLeft: 44,
                paddingRight: 24,
                borderRadius: 10,
                fontSize: 14,
                fontWeight: "500",
                color: "#222",
              }}
            />

            <View
              style={{
                position: "absolute",
                width: 44,
                height: 44,
                top: 0,
                left: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EvilIcons name="search" size={28} color="black" />
            </View>
          </View>
        </View>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <SectionList
            sections={filteredContacts}
            keyExtractor={(item) => item.id}
            renderItem={renderContactItem}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingTop: 12,
                }}
              >
                {title}
              </Text>
            )}
          />
               
        </ScrollView>
   <View style={{display: "flex", height: 53,padding: 20, marginBottom: 75  }}>
            <TouchableOpacity >
              <View
                style={{
                  backgroundColor: "#4460ef", // Background color
                  display: "flex",
                  height: 56,
                  borderRadius: 8,
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
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      </RBSheet>
    </View>
  );
};

export default ManageTrustedContacts2;
