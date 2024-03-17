import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appcolor } from '../../../../UTILS/Color';
import { useNavigation } from '@react-navigation/native';
import { BaseUrl } from '../../../../UTILS/Urls';
import { Skeleton, VStack, Center, NativeBaseProvider } from "native-base";

export default function NewArrival() {
  const [newArrival, setNewArrival] = useState();
  const [loading, setLoading] = useState(true)

  const nav = useNavigation();



  //fetch new arriaval
  async function GetAllProducts() {
    fetch(`${BaseUrl}/home/products/all`, {
      method: "GET"
    }).then((async (res) => {
      const response = await res.json();
      setNewArrival(response.data.rows.slice(0, 10));
      setLoading(false)
    }))
  }

  useEffect(() => {
    GetAllProducts()
  }, [])


  const RenderNewArrival = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          nav.navigate("Product", { productId: item?.unique_id, uid: item.user_data.user_unique_id })
        }}
        activeOpacity={0.7}
        style={{ marginRight: 20, marginTop: 15 }}>
        <View>
          <Image
            source={{ uri: item?.product_images_data ? item?.product_images_data[0].image?.url : 'https://static.thenounproject.com/png/3674270-200.png' }}
            style={{ height: 150, width: 150, backgroundColor: "#eee", borderRadius: 10 }} resizeMode='contain' />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "inter-medium", textAlign: "left", fontSize: 14,width:100 }}>{item?.name}</Text>
          <Text style={{ fontFamily: "inter-bold", fontSize: 18,color:"grey" }}>₦{" "}{item?.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ fontFamily: "inter-bold", fontSize: 20 }}>New Arrival</Text>
          </View>
          <Text>View All</Text>
        </View>

        <View>
          {loading ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
              {[0, 1, 2, 3, 4].map((skel, index) => (
                <View style={{ height: 200, width: 150, backgroundColor: "#eee", marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                  <ActivityIndicator color={Appcolor.blue} size={30} />
                </View>
              ))}
            </ScrollView>
          ) : (
            <FlatList
              horizontal
              maxToRenderPerBatch={5}
              showsHorizontalScrollIndicator={false}
              renderItem={RenderNewArrival}
              data={newArrival}
            />
          )}
        </View>
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({})