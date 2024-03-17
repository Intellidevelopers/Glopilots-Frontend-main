import {
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderFile from '../headers/HeaderFile';
import {
  AntDesign,
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screen_207 = ({ navigation, route }) => {
  const [itemIndex, setItemIndex] = useState(0);
  const [showIndex, setShowIndex] = useState(false);
  const [loader, setLoader] = useState(false);
  const { cart, pickup } = route.params;
  const prices = cart[itemIndex]?.addOnes.map((item) => item.price);
  const totalSum = prices?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const formattedTotalSum = totalSum?.toFixed(2);
  const [newCart, setNewCart] = useState(itemIndex);

  const clearLocalStorage = async () => {
    try {
      await AsyncStorage.clear().then(() => {
        setLoader(true);
      });
    } catch (error) {
      console.error('Error clearing local storage:', error);
    }
  };

  const handleShowIndex = () => {
    setShowIndex(!showIndex);
  };

  const handleItemNumber = (val) => {
    setItemIndex(val);
    handleShowIndex();
  };

  const clearCart = () => {
    clearLocalStorage().then(() => {
      alert('Cart cleared successfully');
      navigation.goBack();
    });
  };

  const handleGroupOrder = () => {
    alert('This is for group order');
  };

  const addItems = () => {
    alert('Add items here');
  };

  useEffect(() => {
    console.log('cart==>', cart);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View style={styles.container}>
        <HeaderFile
          navigation={navigation}
          title={''}
          tempCart={newCart}
          loader={loader}
        />

        <ScrollView>
          <View style={{ padding: 15 }}>
            <Text style={styles.title}>{pickup.location}</Text>

            <Text style={[styles.desc, { marginVertical: 5 }]}>
              {pickup.address}
            </Text>

            <View style={styles.flatButtonWrapper}>
              <Pressable onPress={addItems} style={styles.flatButton}>
                <AntDesign name="plus" size={18} color={'#000000'} />
                <Text style={styles.flatButtonLabel}>Add items</Text>
              </Pressable>
              <Pressable onPress={handleGroupOrder} style={styles.flatButton}>
                <MaterialCommunityIcons
                  name="account-group-outline"
                  size={20}
                  color={'#000000'}
                />
                <Text style={styles.flatButtonLabel}>Group order</Text>
              </Pressable>
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row', gap: 15 }}>
              <View style={{}}>
                <Pressable onPress={handleShowIndex} style={styles.qtyWrapper}>
                  <Text>{itemIndex + 1}</Text>
                  <EvilIcons name="chevron-down" size={25} color={'#000000'} />
                </Pressable>
                {showIndex && (
                  <View style={styles.popNum}>
                    {cart.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => handleItemNumber(index)}
                        key={index}
                        style={{
                          flexDirection: 'row',
                          margin: 5,
                          backgroundColor:
                            itemIndex === index ? 'red' : '#ffffff',
                          width: 40,
                          height: 40,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 30,
                        }}>
                        <Text style={{ fontSize: 18 }}>{index + 1}</Text>
                        <Divider />
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              <View>
                <Text style={[styles.title, { fontSize: 13 }]}>
                  {cart[itemIndex].name}
                </Text>

                <Text style={styles.desc}>
                  ${cart[itemIndex].price * cart[itemIndex].qty}
                </Text>

                <View>
                  <Text style={styles.desc}>Add-ones</Text>
                  {cart[itemIndex]?.addOnes.map((addOn, index) => (
                    <Text style={styles.desc} key={index}>
                      {addOn.name}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <Pressable
          onPress={clearCart}
          style={{ alignItems: 'center', padding: 10 }}>
          <Text style={{ color: 'red' }}>Clear Cart</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => alert('Go go checkout')}>
          <Text style={{ color: '#ffffff' }}>Go to checkout</Text>

          <FontAwesome name="circle" size={3} color={'#ffffff'} />

          <Text style={{ color: '#ffffff' }}>
            ${cart[itemIndex].price * cart[itemIndex].qty}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen_207;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 13,
    color: '#00000099',
  },
  flatButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  flatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 12,
  },
  flatButtonLabel: {
    fontSize: 13,
    color: '#000000',
  },
  qtyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    padding: 4,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    width: 50,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4460EF',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 15,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },

  popNum: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
});
