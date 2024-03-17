import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import HeaderFile from '../headers/HeaderFile';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { ADD_ONS } from '../data/data';
import AddOnsItem from '../components/AddOnsItem';
import CartItem from '../components/CartItem';
import { Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Screen_203 = ({ navigation, route }) => {
  const [addOnes, setAddOnes] = useState(ADD_ONS);
  const [selectedAddon, setSelectedAddon] = useState([]);
  const { item } = route.params;
  const [tracker, setTracker] = useState(item);
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(1);
  const [showAddons, setShowAddons] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const scrollViewRef = useRef(null);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cart');
      const parsed = JSON.parse(value);
      if (value !== null) {
        setCart(parsed);
        console.log('Data retrieved==>', parsed);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }, 100);
  };

  const isItemInCart = (itemId) => {
    return cart.some((item) => parseInt(item.id) === parseInt(itemId));
  };

  const updateAddons = () => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, addOnes: selectedAddon }
        : cartItem
    );
    setCart(updatedCart);
    AsyncStorage.setItem('@cart', JSON.stringify(updatedCart)).then(() => {
      alert('Add-ons updated');
      setTracker(!tracker);
    });
  };

  const handleAddToCart = (product) => {
    const existingItem = cart.find((cartItem) => cartItem.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              qty: cartItem.qty + itemCount,
              addOnes: selectedAddon,
            }
          : cartItem
      );
      setCart(updatedCart);
      AsyncStorage.setItem('@cart', JSON.stringify(updatedCart))
        .then(() => {
          alert('Quantity updated');
          setTracker(!tracker);
        })
        .catch((error) => console.log(error));
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: itemCount,
        addOnes: selectedAddon,
      };

      const newCart = [...cart, newItem];
      setCart(newCart);
      AsyncStorage.setItem('@cart', JSON.stringify(newCart))
        .then(() => {
          alert('Product added to cart');
          setTracker(!tracker);
        })
        .catch((error) => console.log(error));
    }

    showAddons && setShowAddons(false);
  };

  const removeFromCart = async (product) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== product.id);
    await AsyncStorage.setItem('@cart', JSON.stringify(updatedCart)).then(
      () => {
        setCart(updatedCart);
      }
    );
  };

  const adjustQTY = (action) => {
    if (action === 'up') {
      setItemCount(itemCount + 1);
    } else {
      if (itemCount > 1) {
        setItemCount(itemCount - 1);
      } else {
        isItemInCart(item.id) && alert('hu');
      }
    }
  };

  const myPickup = {
    location: 'my Location',
    address: 'my address',
  };

  useEffect(() => {
    scrollToBottom();
  }, [showAddons]);

  useEffect(() => {
    selectedAddon.length > 0 && updateAddons();
  }, [selectedAddon]);

  useEffect(() => {
    retrieveData();
  }, [tracker]);

  useFocusEffect(
    React.useCallback(() => {
      retrieveData();
      return () => {
        console.log('Component blurred');
      };
    }, [])
  );

  const cartModal = () => {
    return (
      <Modal
        visible={showCart}
        statusBarTranslucent={true}
        transparent={true}
        onRequestClose={() => setShowCart(false)}
        animationType="slide">
        <View style={styles.modalBackground}>
          <Pressable
            style={{ height: '68%' }}
            onPress={() => setShowCart(false)}></Pressable>

          <View style={styles.modalContent}>
            <View style={{ alignItems: 'center', padding: 10 }}>
              <Text style={{ color: '#000000', fontSize: 15 }}>Cart</Text>
            </View>
            <Divider />

            {cart.length ? (
              <FlatList
                scrollEnabled={false}
                data={cart}
                renderItem={({ item }) => (
                  <CartItem item={item} pickup={myPickup} />
                )}
              />
            ) : (
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  height: '70%',
                }}>
                <Text style={{ fontSize: 13, color: '#00000099' }}>
                  No item added yet
                </Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View style={styles.container}>
        <HeaderFile
          navigation={navigation}
          title={'Adds-ons'}
          viewCart={setShowCart}
          tempCart={cart}
        />

        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={{ width: 365, height: 365 }}
            />
          </View>

          <View>
            <View style={styles.paddedView}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={{ color: '#00000099', marginVertical: 3 }}>
                ${item.price}
              </Text>

              <Text style={styles.desc}>{item.desc}</Text>
            </View>

            {showAddons ? (
              <View style={styles.noticeXclude}>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000000',
                      fontWeight: '400',
                    }}>
                    Add-ons
                  </Text>
                  <Text style={[styles.desc, { fontSize: 13 }]}>
                    Choose upto 7
                  </Text>
                </View>

                <Pressable
                  onPress={() => setShowAddons(false)}
                  style={styles.closeAddon}>
                  <Text>Return</Text>
                </Pressable>
              </View>
            ) : (
              <View style={styles.notice}>
                <Text style={{ fontSize: 13, color: '#00000099' }}>
                  You must be atleast 21 years old and show a valid ID at
                  delivery
                </Text>
              </View>
            )}

            <View style={styles.paddedView}>
              {showAddons ? (
                <FlatList
                  scrollEnabled={false}
                  data={addOnes}
                  renderItem={({ item }) => (
                    <AddOnsItem
                      item={item}
                      selectedAddon={selectedAddon}
                      setSelectedAddon={setSelectedAddon}
                    />
                  )}
                />
              ) : (
                <>
                  <Text style={styles.title}>Item Preference</Text>

                  <Pressable
                    onPress={() => setShowAddons(true)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 10,
                      margin: -5,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 6,
                      }}>
                      <MaterialIcons name="loop" size={28} color={'#000000'} />
                      <View>
                        <Text style={[styles.title, { fontSize: 13 }]}>
                          Replacement preference
                        </Text>
                        <Text style={styles.desc}>Best match</Text>
                      </View>
                    </View>
                    <MaterialIcons
                      name="chevron-right"
                      size={25}
                      color={'#000000'}
                    />
                  </Pressable>
                </>
              )}
            </View>

            <View
              style={[
                styles.paddedView,
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 150,
                  alignSelf: 'center',
                },
              ]}>
              <Pressable
                onPress={() => adjustQTY('down')}
                style={styles.addPlusWrapper}>
                <AntDesign name="minus" size={20} color={'#000000'} />
              </Pressable>

              <Text style={{ color: '#000000' }}>{itemCount}</Text>

              <Pressable
                onPress={() => adjustQTY('up')}
                style={styles.addPlusWrapper}>
                <AntDesign name="plus" size={20} color={'#000000'} />
              </Pressable>
            </View>

            <Pressable
              onPress={() =>
                cart.length
                  ? navigation.navigate('Screen_207', {
                      cart: cart,
                      pickup: myPickup,
                    })
                  : alert('Add an item to the cart first')
              }
              style={styles.detailsWrapper}>
              <Text style={styles.title}>Details</Text>
              <MaterialIcons name="chevron-right" size={25} color={'#000000'} />
            </Pressable>

            <Pressable
              onPress={() => handleAddToCart(item)}
              style={styles.button}>
              <Text style={{ color: '#ffffff' }}>
                Add {isItemInCart(item.id) && 'more '}
                {itemCount} item to cart
              </Text>

              <FontAwesome name="circle" size={3} color={'#ffffff'} />

              <Text style={{ color: '#ffffff' }}>
                ${item.price * itemCount}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      {cartModal()}
    </SafeAreaView>
  );
};

export default Screen_203;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  paddedView: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    color: '#00000099',
    fontSize: 14,
  },
  notice: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F9EFDF',
    marginTop: 10,
    justifyContent: 'center',
  },
  addPlusWrapper: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#eeeeee',
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
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
  noticeXclude: {
    padding: 10,
    backgroundColor: '#eeeeee',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeAddon: {
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderColor: '#00000059',
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
});
