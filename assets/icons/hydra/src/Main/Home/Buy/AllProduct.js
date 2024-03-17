import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appcolor } from '../../../../UTILS/Color';
import { useNavigation } from '@react-navigation/native';
import { BaseUrl } from '../../../../UTILS/Urls';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const nav = useNavigation();

  //function to get all Products
  async function GetAllProducts() {
    fetch(`${BaseUrl}/home/products/all`, {
      method: "GET"
    }).then((async (res) => {
      const response = await res.json();
      setProducts(response.data.rows);
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
    <View style={{ flex: 1, marginTop: 70 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View>
          <Text style={{ fontFamily: "inter-bold", fontSize: 20 }}>All Products</Text>
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
            showsHorizontalScrollIndicator={false}
            renderItem={RenderNewArrival}
            data={products}
          />
        )}


      </View>
    </View>
  )
}

const styles = StyleSheet.create({})