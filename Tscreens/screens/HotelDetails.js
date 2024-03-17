

import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    title: "Millienium Baltimore Los Angeles",
    image: require("../assets/hotel6.png"),
    location: "Los Angeles",
    ratings: "8.5/10 (5,548 reviews)",

    amenities: ["air conditioned", "pool", "free wifi"],
    Price: "$500",
  },
  {
    id: "2",
    title: "Freehand                         Los Angeles",
    image: require("../assets/hotel7.png"),
    location: "Description for Card 2",

    ratings: "8.5/10 (5,548 reviews)",

    amenities: ["air conditioned", "pool", "free wifi"],
    Price: "$550",
  },
  {
    id: "3",
    title: "Hollywood                         Los Angeles",
    image:
      "https://images.unsplash.com/photo-1590656364826-5f13b8e32cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    location: "Description for Card 3",

    ratings: "8.5/10 (5,548 reviews)",

    amenities: ["pool", "free wifi"],
    Price: "$550",
  },
];

const items = [
  {
    img: require("../assets/hotel6.png"),
    name: "Countryyard Los Angeles L.A live",
    location: "Los Angeles",
    ratings: "8.5/10 (4.943 reviews)",
    price: "$550",
    total: "$8,320 total",
    rooms: "for 3 rooms",
  },
  {
    img:require("../assets/hotel7.png"),
    name: "Countryyard Los Angeles L.A live",
    location: "Los Angeles",
    ratings: "8.5/10 (4.943 reviews)",
    price: "$550",
    total: "$8,320 total",
    rooms: "for 3 rooms",
  },
];

const renderCard = ({ item }) => (
  <View style={styles.card}>
    <Image source={  item.image } style={styles.cardImage} />
    <View style={{ paddingHorizontal: 8, paddingVertical: 12 }}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          paddingTop: 6,
        }}
      >
        <Ionicons name="ios-location-outline" size={16} color="#545454" />
        {item.location}
      </Text>

      <Text
        style={{
          paddingTop: 8,
          fontSize: 14,
          textAlign: "left",
          color: "#0D1317",
        }}
      >
        {item.ratings}
      </Text>
      <View style={styles.amenitiesContainer}>
        {item.amenities.map((amenity, index) => (
          <View style={styles.amenityItem} key={index}>
            <AntDesign name="check" size={16} color="#0D1317" />
            <Text
              style={{ fontWeight: "200", color: "#0D1317", marginLeft: 8 }}
            >
              {amenity}
            </Text>
          </View>
        ))}
      </View>
      <Text style={{ fontWeight: "700", fontSize: 20, paddingTop: 12 }}>
        {item.Price}
      </Text>

      <Text
        style={{
          fontWeight: "200",
          fontSize: 16,
          color: "#545454",
          height: 21,
        }}
      >
        Per night, per room
      </Text>
    </View>
  </View>
);

const HotelDetails = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            height: 48,
            backgroundColor: "#f8f8f8",
            display: "flex",
            justifyContent: "center",
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: "lightgray",
          }}
        >
          <View
            style={{
              height: 27,
              width: 138,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Image
                style={{ height: 18, width: 9 }}
                source={require("../assets/arrowback.png")}
                resizeMode="cover"
              />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "300", lineHeight: 27 }}>
                Hotel Details
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            style={{ height: 240, width: "100%" }}
            source={require("../assets/hotel1.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.content}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 24,
              color: "#0D1317",
              height: 38,
              paddingBottom: 12,
            }}
          >
            Kawada Hotel
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <AntDesign name="star" size={24} color="#4460EF" />
            <AntDesign name="star" size={24} color="#4460EF" />
            <AntDesign name="star" size={24} color="#4460EF" />
          </View>
          <Text style={{ color: "#0D1317", paddingTop: 8 }}>
            3 star hotel with resturant near Grand central market
          </Text>
          <Text
            style={{
              fontWeight: "700",
              paddingTop: 12,
              fontSize: 20,
              color: "##4460EF",
            }}
          >
            8.5/10 (4,948 reviews){" "}
          </Text>
          <Text style={{ color: "#4460EF", fontSize: 18, paddingTop: 6 }}>
            See all reviews{" "}
            <MaterialIcons
              name="arrow-forward-ios"
              size={10}
              color="##4460EF"
            />
          </Text>
          <Text
            style={{
              paddingTop: 12,
              fontWeight: "700",
              fontSize: 20,
              paddingBottom: 8,
              color: "#0D1317",
            }}
          >
            Popular amenities
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <View style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <View
                style={{
                  display: "flex",
                  textAlign: "center",
                  gap: 8,
                  fontWeight: "200",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>
                  <FontAwesome5 name="car-alt" size={18} color="black" />
                </Text>
                <Text> Parking avaliable</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  textAlign: "center",
                  gap: 8,
                  fontWeight: "200",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>
                  <MaterialCommunityIcons
                    name="smoking-off"
                    size={18}
                    color="black"
                  />
                </Text>
                <Text> Non-smoking</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  textAlign: "center",
                  gap: 8,
                  fontWeight: "200",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>
                  <Image
                    style={{ height: 27, width: 14 }}
                    source={require("../assets/temp.png")}
                    resizeMode="cover"
                  />
                </Text>
                <Text> Refrigerator</Text>
              </View>
            </View>
            <View style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <View
                style={{
                  display: "flex",
                  textAlign: "center",
                  gap: 8,
                  fontWeight: "200",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>
                  <AntDesign name="wifi" size={18} color="black" />
                </Text>
                <Text> Free Wifi</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  textAlign: "center",
                  gap: 8,
                  fontWeight: "200",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>
                  <Image
                    style={{ height: 21, width: 24 }}
                    source={require("../assets/air-condition.png")}
                    resizeMode="cover"
                  />
                </Text>
                <Text>Air Conditioning</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  textAlign: "center",
                  gap: 8,
                  fontWeight: "200",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>
                  {" "}
                  <Image
                    style={{ height: 24, width: 18 }}
                    source={require("../assets/bar.png")}
                    resizeMode="cover"
                  />
                </Text>
                <Text>Bar</Text>
              </View>
            </View>
          </View>
          <Text style={{ color: "#4460EF", paddingTop: 12, fontSize: 18 }}>
            See all amenties{" "}
            <MaterialIcons name="arrow-forward-ios" size={12} color="#4460EF" />
          </Text>
          <View style={{ paddingTop: 12 }}>
            <Image
              style={{ height: 200, width: "100%" }}
              source={require("../assets/hotel2.png")}
              resizeMode="cover"
            />
          </View>
          <Text style={{ paddingTop: 6, fontSize: 14, height: 21 }}>
            200 S Hill St, los Angeles, CA, 90012
          </Text>
          <Text
            style={{
              color: "#4460EF",
              height: 24,
              paddingTop: 6,
              fontSize: 18,
            }}
          >
            View in map{" "}
            <MaterialIcons name="arrow-forward-ios" size={8} color="blue" />
          </Text>
          <Text
            style={{
              paddingTop: 12,
              fontWeight: "700",
              fontSize: 20,
              height: 32,
              color: "#0D1317",
            }}
          >
            Select a room
          </Text>
          <View style={{ paddingTop: 14, display: "flex" }}>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <View>
                <Image
                  style={{ height: 23, width: 24 }}
                  source={require("../assets/calender.png")}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text>Dates</Text>
                <Text style={{ fontWeight: "200" }}>
                  Jan 16 2023- Jan 19, 2023
                </Text>
              </View>
            </View>
            <View style={{ paddingTop: 8 }}>
              <View
                style={{
                  backgroundColor: "#EEEEEE",
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "center",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <View>
                  <Image
                    style={{ height: 26, width: 22 }}
                    source={require("../assets/users.png")}
                    resizeMode="cover"
                  />
                </View>
                <View>
                  <Text style={{ fontWeight: "200" }}>Rooms & Guests</Text>
                  <Text style={{ fontWeight: "200" }}>3 room, 7 guest</Text>
                </View>
              </View>
            </View>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 12,
                paddingBottom: 12,
                fontSize: 16,
              }}
            >
              <AntDesign name="check" size={12} color="black" /> All rooms
              include free wifi
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white" }}>
          <Image
            style={{ height: 240, width: "100%" }}
            source={require("../assets/hotel33.png")}
            resizeMode="cover"
          />
          <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: "700", fontSize: 22 }}>
              Deluxe room, 1 king bed, Accessible, Refrigerator & Microwave
            </Text>
            <View style={{ display: "flex", gap: 16, paddingTop: 12 }}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",

                  gap: 16,
                  flexDirection: "row",
                }}
              >
                <Text>
                  <Image
                    style={{ height: 19, width: 24 }}
                    source={require("../assets/measure.png")}
                    resizeMode="cover"
                  />
                </Text>
                <Text style={{ color: "#0D1317", fontSize: 16 }}>
                  {" "}
                  220 sq ft
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexDirection: "row",
                }}
              >
                <Text>
                  <Image
                    style={{ height: 24, width: 24 }}
                    source={require("../assets/group.png")}
                    resizeMode="cover"
                  />
                </Text>
                <Text
                  style={{
                    color: "#0D1317",
                    fontSize: 16,
                  }}
                >
                  3 person sleeps
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexDirection: "row",
                }}
              >
                <Text>
                  <MaterialCommunityIcons
                    name="bed-outline"
                    size={24}
                    color="#545454"
                  />
                </Text>
                <Text
                  style={{
                    color: "#0D1317",
                    fontSize: 16,
                  }}
                >
                  1 King bed
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexDirection: "row",
                }}
              >
                <Text>
                  <Ionicons name="ios-wifi-outline" size={24} color="#545454" />
                </Text>
                <Text
                  style={{
                    color: "#0D1317",
                    fontSize: 16,
                  }}
                >
                  Free Wifi
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexDirection: "row",
                }}
              >
                <Text>
                  <Feather name="check" size={24} color="#545454" />
                </Text>
                <Text
                  style={{
                    color: "#0D1317",
                    fontSize: 16,
                  }}
                >
                  Reserve now, pay later
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexDirection: "row",
                }}
              >
                <Text>
                  <Image
                    style={{ height: 24, width: 24 }}
                    source={require("../assets/moon.png")}
                    resizeMode="cover"
                  />
                </Text>
                <Text
                  style={{
                    color: "#0D1317",
                    fontSize: 16,
                  }}
                >
                  Collect
                </Text>
              </View>

              <Text
                style={{
                  color: "#0F834D",
                  paddingTop: 12,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 16,
                  justifyContent: "flex-start",
                }}
              >
                Fully refundable{" "}
                <Ionicons
                  name="information-circle-outline"
                  size={16}
                  color="#0F834D"
                />
              </Text>
              <Text style={{ color: "#545454", fontSize: 14, marginBottom: 6 }}>
                Before Tue, Jan 10
              </Text>
              <Text style={{ color: "#4460EF", paddingTop: 6 }}>
                More details{" "}
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={8}
                  color="#4460EF"
                />
              </Text>
              <View
                style={{
                  backgroundColor: "#D00000",
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 93,
                  borderRadius: 5,
                  height: 32,
                  gap: 4,
                }}
              >
                <View>
                  <Text style={{ color: "#ffffff", fontWeight: "200" }}>
                    15% off
                  </Text>
                </View>
                <View>
                  <Image
                    style={{ height: 18, width: 18 }}
                    source={require("../assets/tag.png")}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <Text style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Text style={{ fontWeight: "700", fontSize: 24 }}>$410 </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    fontSize: 16,
                    color: "#545454",
                  }}
                >
                  $210
                </Text>
              </Text>
              <Text style={{ color: "#545454", fontSize: 16 }}>
                $7,540 total{"\n"}for 3 months{" "}
              </Text>
              <View style={{ display: "flex", alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <View
                    style={{
                      backgroundColor: "#4460EF", // Background color
                      marginTop: 6, // Margin top
                      height: 56,
                      paddingHorizontal: 18,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16, // Font size
                        fontWeight: "normal", // Font weight
                        color: "#fff", // Text color
                      }}
                    >
                      Reserve 3 rooms
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: "white" }}>
          <Image
            style={{ height: 240, width: "100%" }}
            source={require("../assets/hotel4.png")}
            resizeMode="cover"
          />
          <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: "700", fontSize: 22 }}>
              Deluxe room, 1 queen bed, Accessible, Refrigerator & Microwave
            </Text>
            <View style={{ display: "flex", gap: 16, paddingTop: 12 }}>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Image
                  style={{ height: 19, width: 24 }}
                  source={require("../assets/measure.png")}
                  resizeMode="cover"
                />
                <Text> 220 sq ft</Text>
              </Text>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",

                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/group.png")}
                  resizeMode="cover"
                />
                <Text> 3 person sleeps</Text>
              </Text>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",

                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <MaterialCommunityIcons
                  name="bed-outline"
                  size={24}
                  color="#545454"
                />
                <Text> 1 King bed</Text>
              </Text>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",

                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Ionicons name="ios-wifi-outline" size={24} color="#545454" />
                <Text> Free WiFi</Text>
              </Text>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Feather name="check" size={24} color="#545454" />
                <Text> Reserve now, pay later</Text>
              </Text>

              <Text
                style={{
                  display: "flex",
                  alignItems: "center",

                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/moon.png")}
                  resizeMode="cover"
                />
                <Text> Collect</Text>
              </Text>
              <Text
                style={{
                  color: "#0F834D",
                  paddingTop: 12,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 16,
                  height: 21,
                  textAlign: "center",
                }}
              >
                Fully refundable{" "}
                <Ionicons
                  name="information-circle-outline"
                  size={16}
                  color="#0F834D"
                />
              </Text>
              <Text style={{ color: "#545454", fontSize: 14, marginBottom: 6 }}>
                Before Tue, Jan 10
              </Text>
              <Text style={{ color: "#4460EF", paddingTop: 6 }}>
                More details{" "}
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={8}
                  color="#4460EF"
                />
              </Text>
              <View
                style={{
                  backgroundColor: "#D00000",
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 93,
                  borderRadius: 5,
                  height: 32,
                  gap: 4,
                }}
              >
                <View>
                  <Text style={{ color: "#ffffff", fontWeight: "200" }}>
                    15% off
                  </Text>
                </View>
                <View>
                  <Image
                    style={{ height: 18, width: 18 }}
                    source={require("../assets/tag.png")}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <Text style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Text style={{ fontWeight: "700", fontSize: 24 }}>$550 </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    fontSize: 16,
                    color: "#545454",
                  }}
                >
                  $210
                </Text>
              </Text>
              <Text style={{ color: "#545454", fontSize: 16 }}>
                $8,320 total{"\n"}for 3 months{" "}
              </Text>
              <View style={{ display: "flex", alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <View
                    style={{
                      backgroundColor: "#4460EF", // Background color
                      marginTop: 6, // Margin top
                      height: 56,
                      paddingHorizontal: 18,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16, // Font size
                        fontWeight: "normal", // Font weight
                        color: "#fff", // Text color
                      }}
                    >
                      Reserve 3 rooms
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: "white" }}>
          <Image
            style={{ height: 240, width: "100%" }}
            source={require("../assets/hotel5.png")}
            resizeMode="cover"
          />
          <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: "700", fontSize: 22 }}>
              Twin rooms, 2 twin beds, Refrigerator & Microwave
            </Text>
            <View style={{ display: "flex", gap: 16, paddingTop: 12 }}>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Image
                  style={{ height: 19, width: 24 }}
                  source={require("../assets/measure.png")}
                  resizeMode="cover"
                />
                <Text> 250 sq ft</Text>
              </Text>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",

                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/group.png")}
                  resizeMode="cover"
                />
                <Text> 2 person sleeps</Text>
              </Text>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",

                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <MaterialCommunityIcons
                  name="bed-outline"
                  size={24}
                  color="#545454"
                />
                <Text> 2 twin bed</Text>
              </Text>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",

                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Ionicons name="ios-wifi-outline" size={24} color="#545454" />
                <Text> Free WiFi</Text>
              </Text>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#0D1317",
                  gap: 16,
                  fontSize: 16,
                }}
              >
                <Feather name="check" size={24} color="#545454" />
                <Text> Reserve now, pay later</Text>
              </Text>

              <Text style={{ color: "#4460EF", paddingTop: 6 }}>
                More details{" "}
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={8}
                  color="#4460EF"
                />
              </Text>

              <View style={{ display: "flex", alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <View
                    style={{
                      // Background color
                      marginTop: 6, // Margin top
                      height: 56,
                      paddingHorizontal: 18,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20, // Font size
                        fontWeight: "normal", // Font weight
                        color: "#D00000", // Text color
                      }}
                    >
                      Sold out
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ padding: 20, backgroundColor: "#eeeeee" }}>
          <Text style={{ fontWeight: "700", paddingBottom: 12, fontSize: 20 }}>
            Similar properties nearby
          </Text>

          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderCard}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ padding: 20, backgroundColor: "#eeeeee" }}>
          <Text style={{ fontWeight: "700", fontSize: 24, color: "#0D1317" }}>
            About this property
          </Text>

          <Text style={{ fontWeight: "600", fontSize: 20, color: "#0D1317" }}>
            Kawada hotel
          </Text>

          <Text style={{ fontWeight: "600", fontSize: 16, color: "#0D1317" }}>
            Kawada hotel puts you winthin a 15 minutes drive of crypto.com Arena
            Guests bookin for a bite to eat can checkout the coffe shop/cafe,
            and the bar/ lounge is the perfect spot to grab a drink at the end
            of the day. Also this hotel is within a short drive of Dodger
            stadium fellow travler{" "}
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
              paddingTop: 12,
              color: "#0D1317",
            }}
          >
            Languages
          </Text>
          <Text style={{ color: "#0D1317", paddingTop: 6 }}>
            English, Japanese, Spanish
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
          }}
        ></View>
        <View style={{ padding: 20, backgroundColor: "#eeeeee" }}>
          <Text style={{ fontWeight: "700", fontSize: 24 }}>
            Cleaning and safety practises
          </Text>

          <View style={{ gap: 12, paddingTop: 12 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Image
                  style={{ height: 19, width: 19 }}
                  source={require("../assets/star.png")}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#0D1317",
                    height: 24,
                  }}
                >
                  Enhance Cleaning measures
                </Text>
                <Text style={{ color: "#545454", width: "30%" }}>
                  Disinfection used to clean the property high touch surfaces
                  are cleaned and disinfected sheets and towels are washed at
                  60c/140F or hotter Follows industry cleaning and disinfection
                  practises of Safe =Stay (AHLA_USA)
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Image
                  style={{ height: 24, width: 24 }}
                  source={require("../assets/distance.png")}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#0D1317",
                    height: 24,
                  }}
                >
                  Social Distancing
                </Text>
                <Text style={{ color: "#545454" }}>
                  Protective shields in place at main contact areas, Guest rooms
                  kept vacant for 48houts between stays. Social distancing
                  measures in place.
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#0D1317",
                    height: 24,
                  }}
                >
                  Safety measures
                </Text>
                <Text style={{ color: "#545454" }}>
                  Personal protective equipment warn by staff Temperature checks
                  gives to staff, hand sanitizer provided.
                </Text>
              </View>
            </View>
          </View>
          <Text style={{ paddingTop: 12, fontSize: 16, color: "#0D1317" }}>
            This information is provided by our partners
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
            paddingTop: 6,
          }}
        ></View>

        <View style={{ padding: 20, backgroundColor: "#eeeeee" }}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 24,
              color: "#0D1317",
              height: 32,
            }}
          >
            At a glance
          </Text>
          <View style={{ gap: 12, paddingTop: 8 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Hotel Size
                </Text>
                <Text style={{ color: "#545454" }}>
                  116 rooms{"\n"}Arranged over 4 floors
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Arriving/Leaving
                </Text>
                <Text style={{ color: "#545454" }}>
                  Check-in time from 03:00 PM-11:00 PM Late{"\n"}
                  check-in subject to avaliability{"\n"}
                  Minimum check-in age is 18{"\n"}
                  checkout time is 11:00AM{"\n"}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Restrictions related to your trip
                </Text>
                <Text style={{ color: "#545454" }}>
                  Check Covid-19 restrictions
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Special Check-in instructions
                </Text>
                <Text style={{ color: "#545454" }}>
                  An adult age 18 must resume all liablity for the booking,Front
                  desk staff will greet guests on arrival
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Required at check-in
                </Text>
                <Text style={{ color: "#545454" }}>
                  Credit card required for incidental charges Governmrnt issued
                  photo ID may be required Minimum check-in age is 18
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Children
                </Text>
                <Text style={{ color: "#545454" }}>
                  One child (12 years old and younger) stays free when occupying
                  the parent or guardian rooms using existing bedding. No crib
                  (infant Beds)
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>Pets</Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  Pets not allowed
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="wifi" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Internet
                </Text>
                <Text style={{ color: "#545454" }}>
                  Free WiFi in public areas{"\n"}
                  Free WiFI in rooms
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Image
                  style={{ height: 20, width: 24 }}
                  source={require("../assets/police.png")}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>Parking</Text>
                <Text style={{ color: "#545454" }}>
                  Secured covered onset valet parking (USD 40 per day includes
                  in/out previleges)
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <AntDesign name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Other infromation
                </Text>
                <Text style={{ color: "#545454" }}>Smoke free property</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "lightgray",
              }}
            ></View>

            <Text style={{ fontWeight: "700", fontSize: 18 }}>
              Properties amenities
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Image
                  style={{ height: 24, width: 20 }}
                  source={require("../assets/spoon.png")}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Food and drink
                </Text>
                <Text style={{ color: "#545454" }}>
                  Smoke free property Cooked-to-order breakfast (Surcharge) each
                  {"\n"}
                  monring 06:00 AM - 11:00AM{"\n"}
                  Resturant{"\n"}
                  Bar/Lounge{"\n"}
                  Coffee shop{"\n"}
                  Snacks bar
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Image
                  style={{ height: 26, width: 24 }}
                  source={require("../assets/child.png")}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Travelling with children
                </Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  Children stay free (see details){"\n"}
                  Grocery/Convenience store
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Ionicons name="briefcase-outline" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Working away
                </Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  Business center
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <MaterialCommunityIcons
                  name="room-service-outline"
                  size={24}
                  color="black"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Services
                </Text>
                <Text style={{ color: "#545454" }}>
                  24-hour front desk {"\n"}
                  Conciege service{"\n"}
                  Tour/ticket assistance{"\n"}
                  On-set car rental{"\n"}
                  Dry cleaning/Laundry services{"\n"}
                  Luggage storage{"\n"}
                  Multilingual staff{"\n"}
                  Porter/bellhop{"\n"}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Feather name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Facilities
                </Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  Built in 1990{"\n"}
                  ATM/banking{"\n"}
                  Safe deposit box at front desk
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Image
                  style={{ height: 24, width: 18 }}
                  source={require("../assets/disable.png")}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Accessiblity
                </Text>
                <Text style={{ color: "#545454" }}>
                  Wheelchair accessible{"\n"}
                  Bralle/raised signage{"\n"}
                  Elevator{"\n"}
                  Accessible bathroom(Selective room) {"\n"}
                  In-room accesibility(Selective room) {"\n"}
                  Assistive Listening devices avaliable{"\n"}
                  Grab bar near toilet
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Feather name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Languages
                </Text>
                <Text style={{ color: "#545454" }}>
                  English{"\n"}
                  Japanese{"\n"}
                  Sapnish{"\n"}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
              paddingTop: 12,
            }}
          ></View>

          <Text style={{ fontWeight: "700", fontSize: 18, paddingTop: 12 }}>
            Room amenities
          </Text>
          <View style={{ paddingTop: 12, gap: 8 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Feather name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Be entertained
                </Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  Flat-screen television{"\n"}
                  Prenium cable channel
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Feather name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Home comfort
                </Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  AIr conditioning{"\n"}
                  Coffee/tea maker
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Feather name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Sleep well
                </Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  Rollaway/extra bed(Surcharge) {"\n"}
                  Bed Sheets provided
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Feather name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Freshen up
                </Text>
                <Text style={{ color: "#545454" }}>
                  Shower only{"\n"}
                  Free toiletries{"\n"}
                  Hair dryer (on request){"\n"}
                  Towels{"\n"}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Feather name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Stay connected
                </Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  Desk{"\n"}
                  Free Wifi{"\n"}
                  Phone
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Image
                  style={{ height: 24, width: 20 }}
                  source={require("../assets/spoon.png")}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  Food and drink
                </Text>
                <Text style={{ color: "#545454" }}>
                  Refrigerator{"\n"}
                  Microwave
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                width: "90%",
              }}
            >
              <View>
                <Feather name="check" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>More</Text>
                <Text style={{ color: "#545454", fontWeight: "100" }}>
                  Daily housekeeping{"\n"}
                  in-room safe
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
              paddingTop: 12,
            }}
          ></View>

          <View>
            <Text style={{ fontWeight: "700", fontSize: 24, paddingTop: 12 }}>
              Fees & policies
            </Text>
            <View>
              <Text style={{ fontWeight: "600", paddingTop: 6, fontSize: 18 }}>
                Refundable deposit
              </Text>
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#545454",
                }}
              >
                <Entypo name="dot-single" size={15} color="black" /> Deposit:
                USD 100.00 per accomodation per stay.
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600", paddingTop: 6, fontSize: 18 }}>
                Optional extras
              </Text>
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#545454",
                }}
              >
                <Entypo name="dot-single" size={15} color="black" /> Breakfast
                costs between USD 10 and USD 25 for adults {""} and USD 10 25
                for children (approximately)
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600", paddingTop: 6, fontSize: 18 }}>
                Children & Extra beds
              </Text>
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#545454",
                }}
              >
                <Entypo name="dot-single" size={15} color="black" /> Rollaway
                bed are avaliable for USD 20 per day
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600", paddingTop: 6, fontSize: 18 }}>
                Parking
              </Text>
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#545454",
                }}
              >
                <Entypo name="dot-single" size={15} color="black" /> Covered
                valet parking costs USD 40 per day with in/out privileges
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600", paddingTop: 6, fontSize: 18 }}>
                Hygiene & cleanliness{" "}
              </Text>
              <Text style={{ color: "#545454", fontWeight: "200" }}>
                This property advises that enhanced clearing and guest safetly
                measures are currently in place. Disinfectant is used to clean
                the property commonly touched surfaces are cleaned with
                disinfectant between stays, bed sheets and towels are launchered
                at a temperature of at least 60C/140F. Social distancing
                measures are in place at the property, wear personal protective
                equipment, a shield is in place between staff and guests in main
                contact areas, periodic temperatures checks are conducted on
                staff guests are provided with hand sanitizsers. This property
                affirms that it adheres to the clearing and disinfection
                practises of SafeStay (AHLA-USA)
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "600", paddingTop: 6, fontSize: 18 }}>
                Policies
              </Text>
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#545454",
                }}
              >
                The property is managed by a professional host. The provision of
                housing is linked to their trade, business, or profession. The
                name on the credit card used at check-in to pay for the
                incidential must be the primary name on the guestroom
                reservations. This property accepts credit card. Cash is not
                accepted. This property reserves the right to pre-authorize the
                guests credit card prior to arrival
              </Text>
            </View>
            <Text style={{ paddingTop: 12, fontWeight: "600", fontSize: 18 }}>
              Also known as
            </Text>
            <Text style={{ color: "#545454" }}>
              Hotel Kawada{"\n"}
              Kawada{"\n"}
              Kawada Hotel{"\n"}
              Kawada Hotel Los Angeles{"\n"}
              Kawada Los Angeles{"\n"}
              Hotel Kawada{"\n"}
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "lightgray",
              paddingBottom: 5,
            }}
          ></View>
          <Text style={{ fontSize: 18, fontWeight: "600", paddingTop: 12 }}>
            You may also like
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <View style={styles.undercard}>
                  <View style={styles.undercardTop}>
                    <Image
                      alt=""
                      resizeMode="cover"
                      style={styles.undercardImg}
                      source={item.img }
                    />
                  </View>

                  <View style={styles.undercardBody}>
                    <View style={styles.undercardHeader}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#0D1317",
                          fontWeight: "700",
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "#545454",
                        fontSize: 14,
                        paddingBottom: 8,
                      }}
                    >
                      <Ionicons
                        name="location-outline"
                        size={16}
                        color="#545454"
                      />
                      {item.location}
                    </Text>
                    <Text style={{ fontSize: 14 }}>{item.ratings}</Text>

                    <View style={styles.undercardFooter}>
                      <Text style={styles.undercardFooterText}></Text>

                      <Text style={styles.undercardFooterText}></Text>
                      <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        {item.price}
                      </Text>
                    </View>
                    <View style={{ display: "flex" }}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "200",
                            color: "#545454",
                            fontSize: 13,
                          }}
                        >
                          Fully refundable
                        </Text>
                        <Text style={{ fontWeight: "200" }}>{item.total}</Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "200",
                            color: "#545454",
                            fontSize: 13,
                          }}
                        >
                          Reserve now, pay later
                        </Text>
                        <Text style={{ fontWeight: "200" }}>{item.rooms}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            horizontal
          />
        </View>
        <View
          style={{
            paddingVertical: 25,
            paddingHorizontal: 12,
            paddingTop: 34,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#4460EF", // Background color
                marginTop: 6, // Margin top
                height: 56,
                paddingHorizontal: 18,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Select a room
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  undercard: {
    borderRadius: 12,
    backgroundColor: "white",
    marginRight: 16,
    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  undercardTop: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  undercardImg: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  undercardBody: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  undercardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  undercardTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#2d2d2d",
  },
  undercardPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444",
  },
  undercardStats: {
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: -12,
  },
  undercardStatsItem: {
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  undercardStatsItemText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#48496c",
    marginLeft: 4,
  },
  undercardFooter: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  undercardFooterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#909090",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 160,
    marginRight: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  amenitiesContainer: {
    marginTop: 13,
  },
  amenityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  amenityText: {
    marginLeft: 4,
    fontSize: 12,
  },

  container: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    height: "100%", // Change to your desired background color
  },

  content: {
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D1317",
    paddingBottom: 4,
    height: 24,
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
