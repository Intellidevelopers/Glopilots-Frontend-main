import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    StyleSheet,
    ScrollView
  } from "react-native";
  import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { AntDesign, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import BottomSheet from "@gorhom/bottom-sheet";
  import { Animated, Easing } from "react-native";
//  import MapView from "react-native-maps";  
  import MapView, { Marker } from "react-native-maps"; // Import Marker from react-native-maps
  import * as Location from "expo-location";

  import Divider from "../components/Divider";
  import Switch from "../components/Switch";
  import Button from "../components/Button";
  const PickupHere = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const [showTabs, setShowTabs] = useState(false); 
    const [userLocation, setUserLocation] = useState(null);    
    const [isConfirmButtonVisible, setIsConfirmButtonVisible] = useState(true);

  
    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };
  
    
    const bottomSheetRef = useRef(null);
  
    // variables
    const snapPoints = useMemo(() => ["45%", "45%"], []);
  
    // callbacks
    const handleSheetChanges = useCallback((index) => {
      console.log("handleSheetChanges", index);
    }, []);

    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(true);

    


    const toggleBottomSheet = () => {
        setShowTabs(!showTabs); // Toggle the visibility of tabs
        setIsConfirmButtonVisible(false); // Hide the "Confirm Pickup" button
      };
      

    const tabsContent = [
        (
          <ScrollView key={0} style={{ flex: 1 }}>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: Dimensions.get("screen").width - 24,
                paddingVertical: 8,
                alignItems: "center"
              }}
            >

<Image source={require('../../assets/icons/p1.png')}  style={styles.logo}/>

          
            
            </View>

            <Text
                style={{ fontWeight: "400", fontSize: 18, textAlign: "center", marginTop: 10 }}
              >
               03:35am-03:41am drop-off
              </Text>
            {/* Add more text and images here */}
          </ScrollView>
        ),
        (
          <ScrollView key={1} style={{ flex: 1 }}>
             <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: Dimensions.get("screen").width - 24,
                paddingVertical: 8,
                alignItems: "center"
              }}
            >

<Image source={require('../../assets/icons/pickup-icon.png')}  style={styles.logo}/>

          
            
            </View>

            <Text
                style={{ fontWeight: "400", fontSize: 18, textAlign: "center", marginTop: 10 }}
              >
               03:35am-03:41am drop-off
              </Text>
          </ScrollView>
        ),
        (
          <ScrollView key={2} style={{ flex: 1 }}>
             <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: Dimensions.get("screen").width - 24,
                paddingVertical: 8,
                alignItems: "center"
              }}
            >

<Image source={require('../../assets/icons/p2.png')}  style={styles.logo}/>

          
            
            </View>

            <Text
                style={{ fontWeight: "400", fontSize: 18, textAlign: "center", marginTop: 10 }}
              >
               03:35am-03:41am drop-off
              </Text>
          </ScrollView>
        ),
        (
          <ScrollView key={3} style={{ flex: 1 }}>
             <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: Dimensions.get("screen").width - 24,
                paddingVertical: 8,
                alignItems: "center"
              }}
            >

<Image source={require('../../assets/icons/p3.png')}  style={styles.logo}/>

          
            
            </View>

            <Text
                style={{ fontWeight: "400", fontSize: 18, textAlign: "center", marginTop: 10 }}
              >
               03:35am-03:41am drop-off
              </Text>
          </ScrollView>
        ),
      ];

      const [activeTabIndex, setActiveTabIndex] = useState(0);

      // Function to switch to the next tab
      const switchToNextTab = () => {
        const nextTabIndex = (activeTabIndex + 1) % tabsContent.length;
        setActiveTabIndex(nextTabIndex);
      };
    
      // Start the timer to switch tabs automatically
      useEffect(() => {
        const timer = setInterval(() => {
          switchToNextTab();
          if (activeTabIndex === 3) {
            clearInterval(timer); // Stop the timer after reaching Tab 4
            navigation.navigate("ConfirmPickup"); // Navigate to the Meetup screen
          }
        }, 10000); // Switch every 3 seconds
    
        // Clean up the timer when the component unmounts
        return () => clearInterval(timer);
      }, [activeTabIndex]);

      useEffect(() => {
        // Function to request user's location
        const getUserLocation = async () => {
          try {
            // Request permission to access user's location
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === "granted") {
              // Get the user's current location
              const location = await Location.getCurrentPositionAsync({});
              setUserLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.002,
                longitudeDelta: 0.00421,
              });
            } else {
              // Handle the case where location permission is not granted
              console.error("Location permission not granted.");
            }
          } catch (error) {
            console.error("Error getting user location: ", error);
          }
        };
    
        // Call the function to get user location
        getUserLocation();
      }, []);

      
      const [animatedValue] = useState(new Animated.Value(0));

  // Start the color animation
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false, // Set to false for Expo
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false, // Set to false for Expo
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [animatedValue]);



    return (
      <SafeAreaView
        style={{ position: "relative", flex: 1 }}
        edges={["left", "right", "top"]}
      >
       <MapView // Replace with your MapView component
        style={{ flex: 1 }}
        initialRegion={userLocation}
        mapType="standard"
        showsUserLocation={true}
        loadingEnabled={true}
        showsTraffic={false}
      />

      
        <View style={{ padding: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-small-left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "flex-end", position: "relative", top: -25 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                backgroundColor: "#4460ef",
                textAlign: "center",
                padding: 5,
              }}
            >
              4 {"\n"} Min
            </Text>
            {/* <View style={{ flexDirection: "row", justifyContent: "space-between",}}> */}
            <Text>University of {"\n"} SouthernCalifornia</Text>
            {/* </View> */}
            <Entypo name="chevron-small-right" size={30} color="black" />
          </TouchableOpacity>
        </View>
  
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              padding: 10,
              borderRadius: 5,
              width: Dimensions.get("screen").width - 20,
              margin: "auto",
              backgroundColor: "white",
            }}
          >
            <Octicons name="dot-fill" size={24} color="black" />
            <TextInput
              placeholder="Where to?"
              style={{ width: "100%" }}
              placeholderTextColor="black"
            />
          </View>
        </View>
  
        <BottomSheet
        ref={bottomSheetRef}
        index={isBottomSheetVisible ? 1 : -1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
          <View style={styles.contentContainer}>

         

          {/* Content */}
          


            <View
              style={{
                borderBottomColor: "#cccccc",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: Dimensions.get("screen").width - 24,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{ fontWeight: "800", fontSize: 18, textAlign: "center" }}
              >
                Confirm the Pickup Point
              </Text>
            </View>
  
            {!isConfirmButtonVisible && (
            


            
            <View style={styles.tabBar}>

                
            <TouchableOpacity
               style={[
                styles.tabButton,
                {
                  backgroundColor: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["#eee", "#4460ef"],
                  }),
                },
              ]}
              onPress={() => bottomSheetRef.current.snapTo(0)}
            >
             
            </TouchableOpacity>
            <TouchableOpacity
               style={[
                styles.tabButton,
                {
                  backgroundColor: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["#eee", "#4460ef"],
                  }),
                },
              ]}
              onPress={() => bottomSheetRef.current.snapTo(1)}
            >
             
            </TouchableOpacity>
            <TouchableOpacity
               style={[
                styles.tabButton,
                {
                  backgroundColor: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["#eee", "#4460ef"],
                  }),
                },
              ]}
              onPress={() => bottomSheetRef.current.snapTo(2)}
            >
             
            </TouchableOpacity>
            <TouchableOpacity
               style={[
                styles.tabButton,
                {
                  backgroundColor: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["#eee", "#4460ef"],
                  }),
                },
              ]}
              onPress={() => bottomSheetRef.current.snapTo(3)}
            >
              
            </TouchableOpacity>
          </View>
          
            )}
  
            <View style={{ width: "100%" }}>
             
            {isConfirmButtonVisible && (
 


             
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: 'space-between',
                  gap: 20,
                  padding: 10,
                  
                }}
              >
                <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 20,
                        marginLeft: 10,
                      }}
                    >
                         DMV </Text>
  
               <View style={{
                 backgroundColor: '#eee',
                 padding: 10,
                 borderRadius: 20,
 //                marginBottom: 10,
                }}>
               
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 16,
                      }}
                    >
                      Search
                    </Text>
                 
                 
                    </View> 
              </View>
              )}
            
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  paddingHorizontal: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
  
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    alignItems: "center",
                  }}
                >
                  
                </View>
  
                
              </View>
            </View>

            {isConfirmButtonVisible && (
  <View style={{ paddingTop: 10, alignItems: "center", marginTop: -20 }}>
    <Button text="Confirm Pickup" onPress={toggleBottomSheet} />
  </View>
)}


            {showTabs && ( // Conditionally render tabs based on showTabs
          <View style={styles.contentContainer}>
           {tabsContent[activeTabIndex]}
          </View>
        )}


          </View>
        </BottomSheet>
      </SafeAreaView>
    );
  };
  
  export default PickupHere;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "pink",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      paddingBottom: 30,
    },

    tabBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        borderRadius: 20,
    
    
      },
      tabButton: {
        flex: 1,
        alignItems: "center",
        marginHorizontal: 5,
        height: 5,
        borderRadius: 20,
      },
      logo: {
        width: 96,
        height: 96,
        alignItems: 'center',
        marginBottom: 20,
      },
      


  });