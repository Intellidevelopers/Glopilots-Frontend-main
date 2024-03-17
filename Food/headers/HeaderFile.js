import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Badge, Divider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderFile = ({ navigation, title, viewCart, tempCart, loader }) => {
  const [cart, setCart] = useState([]);

  const canGoBack = navigation.canGoBack();

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

  useEffect(() => {
    retrieveData();
  }, [tempCart, loader]);

  const handleViewCart = () => {
    if (viewCart) {
      viewCart(true);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#f8f8f8" style="dark" />
      <View style={styles.container}>
        {canGoBack === true && (
          <Entypo
            onPress={() => navigation.goBack()}
            name="chevron-thin-left"
            size={18}
            color={'#000000'}
          />
        )}

        <Text style={styles.title}>{title}</Text>

        <Pressable onPress={handleViewCart}>
          {cart.length > 0 && (
            <Badge
              value={cart.length}
              status="primary"
              containerStyle={styles.counter}
              textStyle={{ fontSize: 11 }}
              badgeStyle={{ padding: 0 }}
            />
          )}

          <MaterialCommunityIcons name="cart" color={'#000000'} size={26} />
        </Pressable>
      </View>
      <Divider />
    </>
  );
};

export default HeaderFile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  title: {
    color: '#000000',
    fontSize: 15,
  },
  counter: {
    position: 'absolute',
    right: -5,
    zIndex: 2,
    top: -8,
    padding: 2,
  },
});
