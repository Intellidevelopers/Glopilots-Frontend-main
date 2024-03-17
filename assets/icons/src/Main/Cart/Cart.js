import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { Appcolor } from '../../../UTILS/Color'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseUrl } from '../../../UTILS/Urls';
import { ActivityIndicator } from 'react-native';
import RequireAuth from '../../../Components/RequireAuth';
import { RefreshControl } from 'react-native';
import Toast from 'react-native-toast-message';


export default function Cart() {
  const nav = useNavigation();

  const [checkUser, setCheckUser] = useState(false);
  const [userToken, setUserToken] = useState('');

  const [pageLoading, setPageLoading] = useState(true);
  const [currentUserData, setCurrentUserData] = useState({})
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    FetchCartItems().then(() => {
      setIsRefreshing(false)
    })
  }, []);

  const [cartItems, setCartItems] = useState([])


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken')
      if (value !== null) {
        setUserToken(value)
        FetchCartItems()
      }
    } catch (e) {
      console.warn(e)
    }
  }


  //fetch user cart items
  async function FetchCartItems() {
    fetch(`${BaseUrl}/user/carts`, {
      method: "GET",
      headers: {
        'hydra-express-access-token': userToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const response = await res.json();
      if (response.success) {
        setPageLoading(false);
        if (response?.data) {
          setCartItems(response.data.rows)
        } else {
          null
        }
      } else {
        setPageLoading(false);
      }
    })
  }

  //get current user items
  async function GetCurrentUser() {
    fetch(`${BaseUrl}/user/profile`, {
      method: "GET",
      headers: {
        'hydra-express-access-token': userToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const respone = await res.json();
      setCurrentUserData(respone.data)
    })
  }



  useEffect(() => {
    getData();
    GetCurrentUser()
  }, [userToken, checkUser]);


  async function DeleteCartItem(id) {
    fetch(`${BaseUrl}/user/cart`, {
      method: "DELETE",
      headers: {
        'hydra-express-access-token': userToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        unique_id: id
      })
    }).then(async (res) => {
      const response = await res.json();
      FetchCartItems().then(() => {
        Toast.show({
          type: 'success',
          text1: "Success",
          text2: "Item Deleted!"
        })
      })
    })
  }

  const RenderCartItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: "#fff", borderRadius: 10, padding: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <View>
          <Image
            resizeMode='contain'
            style={{ height: 80, width: 80, borderRadius: 10 }}
            source={{ uri: item?.product_images_data[0].image.url }} />
        </View>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontFamily: "inter-bold" }}>{item?.product_data?.name}</Text>
          <Text style={{ fontFamily: "inter-regular" }}>NGN{' '}{item?.product_data?.price}</Text>
        </View>

        <TouchableOpacity
          onPress={() => DeleteCartItem(item?.cart_unique_id)}
          style={{ height: 35, width: 35, justifyContent: "center", alignItems: 'center', backgroundColor: "#eee", borderRadius: 100 }}>
          <Feather name="trash-2" size={20} color="black" />
        </TouchableOpacity>
      </View>
    )
  }


  const ListFooter = () => {
    return (
      <View>
        <View>
          <Text style={{ fontFamily: "inter-medium", fontSize: 16, marginBottom: 10 }}>Delivery Address</Text>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={styles.deliveryLeftBox}>
              <MaterialCommunityIcons name="bike-fast" size={24} color="#007AFF" />
            </View>
            <View style={{flex:1,marginLeft:10}}>
              <Text style={{fontFamily:"inter-light"}}>{currentUserData?.address}</Text>
            </View>
            <Ionicons name="md-checkmark-circle" size={24} color="green" />
          </View>
        </View>
      </View>
    )
  }


  return (
    <View style={styles.wrapper}>
      <View style={{ marginTop: 50, margin: 15, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
        <View>
          <Text style={{ fontFamily: 'inter-bold', fontSize: 25 }}>Cart</Text>
          <View style={{ height: 2, width: 60, backgroundColor: "#000", borderRadius: 100 }} />
        </View>
      </View>

      {userToken ? (
        pageLoading ? (
          <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <ActivityIndicator color={Appcolor.blue} size={50} />
          </View>
        ) : (
          cartItems ? (
            <View style={{ margin: 15 }}>
              <FlatList
                ListFooterComponent={() => (
                  <ListFooter />
                )}
                ListEmptyComponent={() => (
                  <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 130 }}>
                    <Image
                      resizeMode='contain'
                      style={{ height: 150, width: 150 }}
                      source={{ uri: 'https://main--hilarious-mandazi-5277d6.netlify.app/static/media/5%E8%B4%AD%E7%89%A9%E6%B8%90%E5%8F%98%E6%89%81%E5%B9%B3%E7%9F%A2%E9%87%8F%E4%BA%BA%E7%89%A9%E6%8F%92%E7%94%BB2420220903%E6%9E%9C%E5%86%BB_%E7%94%BB%E6%9D%BF%201.1a83a38f8865edfc1511.png' }}
                    />
                    <Text style={{ fontFamily: "inter-medium", fontSize: 18 }}>Your Cart is currently empty</Text>
                  </View>
                )}
                data={cartItems}
                renderItem={RenderCartItem}
                refreshing={isRefreshing} // Added pull to refesh state
                onRefresh={onRefresh} // Added pull to refresh control
              />
            </View>
          ) : (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <View style={{ alignItems: "center" }}>
                <Image resizeMode="contain" style={{ height: 200, width: 200 }} source={{ uri: 'https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-4/256/shopping-cart-simple-256.png' }} />
                <Text style={{ textAlign: "center", fontFamily: 'inter-bold', fontSize: 20 }}>Cart is Empty</Text>
                <Text style={{ textAlign: "center", fontFamily: 'inter-regular', fontSize: 15, color: "grey" }}>Click on the button below to add items to your cart!</Text>

                <TouchableOpacity onPress={() => nav.goBack()} style={{ height: 45, width: 150, justifyContent: "center", alignItems: "center", backgroundColor: Appcolor.blue, borderRadius: 8, marginTop: 10 }}>
                  <Text style={{ color: "#fff", fontFamily: 'inter-bold' }}>Add items</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        )
      ) : (
        <View style={{ justifyContent: 'center', alignItems: "center", flex: 1 }}>
          <RequireAuth />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  deliveryLeftBox: {
    height: 65,
    width: 65,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})