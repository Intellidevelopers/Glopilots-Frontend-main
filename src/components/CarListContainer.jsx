import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import { EvilIcons } from "@expo/vector-icons";
import { carListStyle, colors, homestyle } from "../../styles/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Badge from "./Badge";
const dataProvider = new DataProvider((r1, r2) => r1 !== r2);
const ViewTypes = {
  Details: "Details",
  Cars: "Cars",
  Else: "Else",
};
const layoutProvider = new LayoutProvider(
  (index) => {
    if (index === 0) {
      return ViewTypes.Details;
    } else if (index > 0) {
      return ViewTypes.Cars;
    } else {
      return ViewTypes.Else;
    }
  },
  (type, dim) => {
    switch (type) {
      case "Details":
        dim.width = Dimensions.get("screen").width;
        dim.height = Dimensions.get("screen").height / 5;
        break;
      case "Else":
        dim.width = Dimensions.get("screen").width;
        dim.height = Dimensions.get("screen").height / 6;
        break;
      case "Cars":
        dim.width = Dimensions.get("screen").width;
        dim.height = Dimensions.get("screen").height / 3.8;
        break;
      default:
        dim.width = Dimensions.get("screen").width;
        dim.height = Dimensions.get("screen").height / 3.8;
    }
  }
);

const CarListContainer = ({ navigation }) => {
  const ndata = [
    {},

    {
      id: 1,
      title: "Toyota Camry or similar",
      category: "Full Size",
      price: "$79",
      total: "$318",
      image: require("../../assets/car1.png"),
    },
    {
      id: 2,
      title: "volkswagen or similar",
      category: "Intermediate",
      price: "$79",
      total: "$318",
      image: require("../../assets/car2.png"),
    },
    {
      id: 3,
      title: "Nissan versa or similar",
      category: "Compact",
      price: "$79",
      total: "$318",
      image: require("../../assets/car3.png"),
    },
    {
      id: 4,
      title: "Nissan versa or similar",
      category: "Intermediate",
      price: "$79",
      total: "$318",
      image: require("../../assets/car4.png"),
    },
    {
      id: 5,
      title: "Toyota Camry or similar",
      category: "Intermediate",
      price: "$79",
      total: "$318",
      image: require("../../assets/car4.png"),
    },
  ];

  const rowRenderer = (type, data) => {
    if (type === "Details") {
      return (
        <View style={{ gap: 5, paddingTop: 4 }}>
          <View style={carListStyle.selectContainer}>
            <TouchableOpacity style={carListStyle.select}>
              <MaterialCommunityIcons name="calendar" size={24} color="black" />
              <Text
                style={{ fontSize: Dimensions.get("screen").fontScale * 18 }}
              >
                02/09-02/13
              </Text>
              <FontAwesome name="angle-down" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={carListStyle.select}>
              <EvilIcons name="location" size={24} color="black" />

              <Text
                style={{ fontSize: Dimensions.get("screen").fontScale * 18 }}
              >
                02/09-02/13
              </Text>
              <FontAwesome name="angle-down" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={carListStyle.info}>
            <EvilIcons name="tag" size={30} color="#54b358" />
            <View
              style={{
                flex: 1,
                width: Dimensions.get("screen").width - 20,
              }}
            >
              <Text
                style={{
                  fontSize: Dimensions.get("screen").fontScale * 20,
                  fontWeight: "bold",
                }}
              >
                Get up to $10 GloPilot ride Credit
              </Text>
              <Text
                style={{
                  fontSize: Dimensions.get("screen").fontScale * 18,
                  color: colors.grey,
                }}
              >
                Enjoy a discounted rid to pick up your rental car
              </Text>
            </View>
          </View>
        </View>
      );
    } else if (type === "Cars") {
      return (
        <TouchableOpacity
          style={carListStyle.cardContainer}
          onPress={() => navigation.navigate("CarDetails")}
        >
          <View style={carListStyle.tag}>
            <Image
              source={require("../../assets/hertz.png")}
              style={{ width: 35, height: 35, marginRight: 5 }}
              resizeMethod="scale"
              resizeMode="contain"
            />

            <Text style={carListStyle.tagText}>2.31 mi</Text>
          </View>

          <View>
            <Image source={data.image} />
          </View>
          <View style={{ width: "100%", gap: 7 }}>
            <View style={carListStyle.carInfo}>
              <View style={carListStyle.badgeContainer}>
                <Text style={carListStyle.textBold}>{data.category}</Text>
                <Badge
                  icon={
                    <Ionicons
                      name="md-person-outline"
                      size={24}
                      color="black"
                    />
                  }
                  value={5}
                />
                <Badge
                  icon={<SimpleLineIcons name="bag" size={24} color="black" />}
                  value={4}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={carListStyle.textBold}>{data.price}</Text>
                <Text style={carListStyle.tagText}>/day</Text>
              </View>
            </View>

            <View style={carListStyle.carInfo}>
              <Text style={carListStyle.tagText}>{data.title}</Text>

              <Text style={carListStyle.tagText}>{data.total} total</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <RecyclerListView
      canChangeSize={true}
      style={{ flex: 1 }}
      dataProvider={dataProvider.cloneWithRows(ndata)}
      layoutProvider={layoutProvider}
      rowRenderer={rowRenderer}
      renderFooter={() => (
        <TouchableOpacity style={carListStyle.footer}>
          <View style={{ gap: 5 }}>
            <Text style={carListStyle.footerText1}>
              Looking for Something else?
            </Text>
            <Text style={carListStyle.footerText2}>
              Try changing your dates or times
            </Text>
          </View>
          <FontAwesome name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      )}
    />
  );
};

export default CarListContainer;
