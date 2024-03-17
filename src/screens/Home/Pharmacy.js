import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BACK_ICON from "../Food/assets/icons/icon-back.png";
import CART_ICON from "../Food/assets/icons/icon-cart.png";
import SEARCH_ICON from "../Food/assets/icons/icon-search.png";
import HEART_ICON from "../Food/assets/icons/icon-heart.png";
import DOTS_ICON from "../Food/assets/icons/dot_menu_icon.png";
import STAR_ICON from "../Food/assets/icons/star.png";
import ARROW_FORWARD_ICON from "../Food/assets/icons/arrow-forward-fill.png";
import FOOD_DETAILS from "../Food/assets/icons/food-details.png";
import GROUP_ICON from "../Food/assets/icons/group-icon.png";
import ADD_ICON from "../Food/assets/icons/add-icon.png";
import CALENDAR_ICON from "../Food/assets/icons/calendar-icon.png";
import CHICKEN_DONER from "../Food/assets/icons/chicken-doner.png";
import SUSHI_ROLL from "../Food/assets/icons/fresh-plated-sushi-roll.png";
import SPICY_GROZA from "../Food/assets/icons/spicy-groza.png";
import SURF_CITY_WINGS from "../Food/assets/icons/spicy-groza.png";
import GARLIC_GREEN_BEAN from "../Food/assets/icons/garlic-green-bean.png";
import ANGEL_PASTA from "../Food/assets/icons/angel-pasta.png";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
const FoodDetails = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [deliveryTabActive, setDeliveryTabActive] = useState(true);

  const pickedForYouProducts = [
    {
      id: "1",
      title: "Chicken Teriyaki Bowl",
      price: "$19.99",
      description:
        "Grilled marinated skinless and bone-less chicken filet topped with home...",
      imageUri: CHICKEN_DONER,
    },
    {
      id: "2",
      title: "Shrimp Tempura Roll",
      price: "$29.99",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
      imageUri: SUSHI_ROLL,
    },
    // Add more product items here
  ];

  const AppetizersProducts = [
    {
      id: "1",
      title: "Spicy Gyoza",
      price: "$12.00",
      imageUri: SPICY_GROZA,
    },
    {
      id: "2",
      title: "Garlic Green Bean",
      price: "$9.00",
      imageUri: GARLIC_GREEN_BEAN,
    },
    {
      id: "3",
      title: "Angel Pasta",
      price: "$9.00",
      imageUri: ANGEL_PASTA,
    },
    {
      id: "4",
      title: "Surf City Wings",
      price: "$9.00",
      imageUri: SURF_CITY_WINGS,
    },
    // Add more product items here
  ];

  const [fontsLoaded] = Font.useFonts({
    "UberMove-Medium": require("../Food/assets/fonts/UberMove-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleIcon1Press = () => {
    // Handle the first icon's action
  };

  const handleIcon2Press = () => {
    // Handle the second icon's action
  };

  const handleIcon3Press = () => {
    // Handle the third icon's action
  };

  const ProductItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.imageUri} style={styles.productsListImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.productsListTitle}>{item.title}</Text>
          <Text style={styles.productsListPrice}>{item.price}</Text>
          <Text style={styles.productsListDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  console.log("Food details");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{ ...styles.container, flexGrow: 1 }}
        onLayout={onLayoutRootView}
      >
        <View style={styles.top}>
          <StatusBar style="auto" />
          <View style={styles.divider} />
        </View>
        <View>
        <View  style={styles.rectangle}>
          
        
          <Text style={{ fontSize: 20, color: "#fff", justifyContent: "center" }}>Glopilot pharmacy promtion image</Text>
       
          </View>
       
      
       
          <View
            style={{
              ...styles.row,
              paddingHorizontal: 15,
              marginTop: 20,
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.pickedHeading}>Drug 1 Cat</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {AppetizersProducts.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: "50%", // Each item takes up 50% of the container's width
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <Image
                    source={item.imageUri}
                    style={{ width: 160, height: 110, borderRadius: 10 }}
                    resizeMode="cover"
                  />
                  <Text style={styles.pick4uTitle}>{item.title}</Text>
                  <Text style={styles.pick4uPrice}>{item.price}</Text>
      {/*            <Image
                    source={ADD_ICON}
                    style={{ ...styles.addToCartIcon, top: 15, right: 15 }}
                  /> */}
                </View> 
              );
            })}
          </View>


          <View
            style={{
              ...styles.row,
              paddingHorizontal: 15,
              marginTop: 20,
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.pickedHeading}>Drug 2 Cat</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {AppetizersProducts.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: "50%", // Each item takes up 50% of the container's width
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <Image
                    source={item.imageUri}
                    style={{ width: 160, height: 110, borderRadius: 10 }}
                    resizeMode="cover"
                  />
                  <Text style={styles.pick4uTitle}>{item.title}</Text>
                  <Text style={styles.pick4uPrice}>{item.price}</Text>
          {/*         <Image
                    source={ADD_ICON}
                    style={{ ...styles.addToCartIcon, top: 15, right: 15 }}
                /> */}
                </View>
              );
            })}
          </View>


          <View
            style={{
              ...styles.row,
              paddingHorizontal: 15,
              marginTop: 20,
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.pickedHeading}>Drug 3 Cat</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {AppetizersProducts.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: "50%", // Each item takes up 50% of the container's width
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <Image
                    source={item.imageUri}
                    style={{ width: 160, height: 110, borderRadius: 10 }}
                    resizeMode="cover"
                  />
                  <Text style={styles.pick4uTitle}>{item.title}</Text>
                  <Text style={styles.pick4uPrice}>{item.price}</Text>
         {/*          <Image
                    source={ADD_ICON}
                    style={{ ...styles.addToCartIcon, top: 15, right: 15 }}
                /> */}
                </View>
              );
            })}
          </View>

          <View
            style={{
              ...styles.row,
              paddingHorizontal: 15,
              marginTop: 20,
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.pickedHeading}>Drug 1 Cat</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {AppetizersProducts.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: "50%", // Each item takes up 50% of the container's width
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <Image
                    source={item.imageUri}
                    style={{ width: 160, height: 110, borderRadius: 10 }}
                    resizeMode="cover"
                  />
                  <Text style={styles.pick4uTitle}>{item.title}</Text>
                  <Text style={styles.pick4uPrice}>{item.price}</Text>
          {/*         <Image
                    source={ADD_ICON}
                    style={{ ...styles.addToCartIcon, top: 15, right: 15 }}
                /> */}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
  },
  top: {
    display: "flex",
  },
  row: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    backgroundColor: "gray",
    height: 1,
    marginTop: 10,
    width: "100%",
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#4460EF",
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    top: -10,
    left: 10,
    zIndex: 1000,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  image: {
    // flex: 1,
    // position: "absolute",
    top: 0,
    width: "100%",
    height: 200, // This allows the image to maintain its aspect ratio
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginRight: 10,
  },
  foodDetailsContainer: {
    width: "100%",
    marginTop: 10,
    // backgroundColor: "red",
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 24,
    fontFamily: "UberMove-Bold",
    fontWeight: "bold",
    textAlign: "left",
    color: "#0D1317",
  },
  productDesc: {
    fontSize: 20,
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
    textAlign: "left",
    color: "#0D1317",
  },
  tab: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    height: 50,
  },
  tabText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
  },
  orderOption: {
    width: 140,
    height: 40,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
  },
  orderOptionText: {
    fontSize: 16,
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
    color: "#0D1317",
    textAlign: "left",
    marginLeft: 5,
  },
  pickedHeading: {
    fontSize: 24,
    fontFamily: "UberMove-Bold",
    fontWeight: "bold",
  },
  pick4uColumn: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
  },
  addToCartIcon: {
    position: "absolute",
    backgroundColor: "#4460EF",
    width: 36,
    height: 36,
    borderRadius: 18,
    top: 5,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },



  rectangle: {
 //   position: "absolute",
    backgroundColor: "#4460EF",
    width: "100%",
    justifyContent: "center",
    
    height: "10%",
  },
  pick4uTitle: {
    fontFamily: "UberMove-Bold",
    fontSize: 20,
    fontWeight: "bold",
  },
  pick4uPrice: {
    fontFamily: "UberMove-Medium",
    fontSize: 16,
    fontWeight: "600",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  productsListImage: {
    width: 104,
    height: 104,
    borderRadius: 10,
    // marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  productsListTitle: {
    fontSize: 20,
    fontFamily: "UberMove-Bold",
    fontWeight: "bold",
    marginBottom: 4,
    color: "#0D1317",
  },
  productsListPrice: {
    fontSize: 16,
    fontFamily: "UberMove-Medium",
    fontWeight: "600",
    color: "#0D1317",
    marginBottom: 4,
  },
  productsListDescription: {
    fontFamily: "UberMove-Medium",
    fontSize: 16,
    fontWeight: "600",
    color: "#545454",
  },
});
