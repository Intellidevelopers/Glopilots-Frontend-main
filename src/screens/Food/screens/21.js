import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import HeaderFile from '../headers/HeaderFile';
import {
  Entypo,
  EvilIcons,
  Feather,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import {
  DINING_OPTIONS,
  FOOD_MENU,
  MAP_LOCATIONS,
  MEAL_BANNER,
} from '../data/data';
import FoodMenuItem_21 from '../components/FoodMenuItem_21';
import MealBannerItem_21 from '../components/MealBannerItem_21';
import PickupItem_12 from '../components/PickupItem_12';
import MapLocationItem_21 from '../components/MapLocationItem_21';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screen_21 = ({ navigation }) => {
  const [foodMenu] = useState(FOOD_MENU);
  const [diningOptions] = useState(DINING_OPTIONS);
  const [mapLocation] = useState(MAP_LOCATIONS);
  const [mealBanners] = useState(MEAL_BANNER);
  const [showMapLocation, setShowMapLocation] = useState(false);
  const [showPickup, setShowPickup] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const [cart, setCart] = useState([]);

  const handleMapLocation = () => {
    setShowMapLocation(true);
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cart');
      const parsed = JSON.parse(value);
      if (value !== null) {
        setCart(parsed);
        console.log('Data retrieved==>', parsed);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const closeLocationModal = () => {
    setShowMapLocation(false);
  };

  const handlePickUp = () => {
    setShowPickup(true);
  };

  const closePickupModal = () => {
    setShowPickup(false);
  };

  const handleConfirmPickup = () => {
    const item = JSON.stringify(selectedOption, 0, 2);
    closePickupModal();
    alert(item);
  };

  const handleSideMap = () => {
    alert('You can handle map here');
  };

  const pickupModal = () => {
    return (
      <Modal
        visible={showPickup}
        statusBarTranslucent={true}
        transparent={true}
        onRequestClose={closePickupModal}
        animationType="slide">
        <View style={styles.modalBackground}>
          <Pressable
            style={{ height: '68%' }}
            onPress={closePickupModal}></Pressable>

          <View style={styles.modalContent}>
            <View style={{ alignItems: 'center', padding: 10 }}>
              <Text style={{ color: '#000000', fontSize: 15 }}>
                Dining Options
              </Text>
            </View>

            <FlatList
              scrollEnabled={false}
              data={diningOptions}
              renderItem={({ item }) => (
                <PickupItem_12
                  item={item}
                  selected={selectedOption}
                  setSelected={setSelectedOption}
                />
              )}
            />

            <Pressable onPress={handleConfirmPickup} style={styles.button}>
              <Text style={{ color: '#ffffff' }}>Confirm PickUp</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  const mapLocationModal = () => {
    return (
      <Modal
        visible={showMapLocation}
        statusBarTranslucent={true}
        transparent={true}
        onRequestClose={closeLocationModal}
        animationType="slide">
        <View style={styles.modalBackground}>
          <Pressable
            style={{ height: '68%' }}
            onPress={closeLocationModal}></Pressable>

          <View style={styles.modalContent}>
            <View style={{ alignItems: 'center', padding: 10 }}>
              <Text style={{ color: '#000000', fontSize: 15 }}>
                Pickup details
              </Text>
            </View>

            <Divider />

            <FlatList
              scrollEnabled={false}
              data={mapLocation}
              renderItem={({ item }) => (
                <MapLocationItem_21
                  item={item}
                  locationModal={setShowMapLocation}
                />
              )}
            />

            <Pressable onPress={closeLocationModal} style={styles.button}>
              <Text style={{ color: '#ffffff' }}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      // This effect runs when the component gains focus (navigated to)
      retrieveData();
      console.log('Component focused');

      // Specify any cleanup logic here if needed
      return () => {
        console.log('Component blurred');
      };
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <HeaderFile
          navigation={navigation}
          title={'Picked just for you'}
          tempCart={cart}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.upperContainer}>
            <View>
              <Text
                style={{ fontSize: 12, letterSpacing: 0.5, marginBottom: 5 }}>
                Pick up now
              </Text>
              <Pressable
                onPress={handleMapLocation}
                style={styles.payNowHolder}>
                <Text style={{ fontWeight: 'bold' }}>Map location</Text>
                <Feather name="chevron-down" size={15} color={'#000000'} />
              </Pressable>
            </View>

            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Pressable onPress={handlePickUp} style={styles.pickUpHolder}>
                <Text>Pick up</Text>
                <Feather name="chevron-down" size={15} color={'#000000'} />
              </Pressable>
              <Ionicons name="person-circle" color={'#000000'} size={30} />
            </View>
          </View>

          <View>
            <View style={styles.searchBar}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <EvilIcons name="search" color={'#00000099'} size={26} />
                <TextInput
                  placeholder="What are you craving?"
                  placeholderTextColor={'#00000099'}
                  style={{ width: '80%', padding: 8 }}
                />
              </View>
              <Divider orientation="vertical" />
              <View style={styles.eqWrapper}>
                <SimpleLineIcons name="equalizer" size={18} color={'#000000'} />
              </View>
            </View>

            <Image
              source={require('../assets/myMap.png')}
              resizeMode="contain"
              style={{ height: 400, width: 400 }}
            />
          </View>

          <View style={{ alignItems: 'center' }}>
            <FlatList
              horizontal
              data={foodMenu}
              renderItem={({ item }) => <FoodMenuItem_21 item={item} />}
            />
          </View>

          <View style={{ alignItems: 'center', padding: 7 }}>
            <FlatList
              scrollEnabled={false}
              data={mealBanners}
              renderItem={({ item }) => (
                <MealBannerItem_21 item={item} navigation={navigation} />
              )}
            />
          </View>
        </ScrollView>

        <Pressable onPress={handleSideMap} style={styles.fl_map}>
          <Feather name="map" size={20} color={'#000000'} />
          <Text>Map</Text>
        </Pressable>
      </View>
      {pickupModal()}
      {mapLocationModal()}
    </SafeAreaView>
  );
};

export default Screen_21;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
  },
  payNowHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  pickUpHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    padding: 10,
    gap: 3,
    borderRadius: 6,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderRadius: 6,
    position: 'absolute',
    top: 30,
    zIndex: 1,
    height: 50,
  },
  eqWrapper: {
    transform: 'rotate(90deg)',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    height: '100%',
    backgroundColor: '#00000099',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    height: '32%',
    //padding: 10,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  button: {
    backgroundColor: '#4460EF',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 15,
  },
  fl_map: {
    position: 'absolute',
    right: 0,
    bottom: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    zIndex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
