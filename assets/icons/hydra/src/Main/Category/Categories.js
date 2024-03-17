import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Appcolor } from '../../../UTILS/Color'
import { Catdata } from '../../../UTILS/Categories'
import { useNavigation } from '@react-navigation/native'
import { BaseUrl } from '../../../UTILS/Urls'

export default function Categories() {

  const [catId, setCatId] = useState('9vmSKMKFQshEVLHr7ylz');

  const [selectedCat, setSelctedCat] = useState("Thrifts and Okrika");

  const [fetchedCat, setFetchedData] = useState([])

  const [loadedCat, setLoadedCat] = useState([])


  //funtion to get categories
  async function GetCategories() {
    fetch(`${BaseUrl}/categories`, {
      method: "GET"
    }).then(async (res) => {
      const response = await res.json();
      setLoadedCat(response.data)
    })
  };

  useEffect(() => {
    GetCategories()
  }, [catId])

  const nav = useNavigation()

  //fetch new arriaval
  async function GetAllProducts() {
    fetch(`${BaseUrl}/home/products/via/category?category_unique_id=${catId}`, {
      method: "GET"
    }).then((async (res) => {
      const response = await res.json();
      if (response.data) {
        setFetchedData(response.data.rows)
      } else {
        setFetchedData([])
      }
    }))
  }

  useEffect(() => {
    GetAllProducts()
  }, [catId])

  const RenderCategory = ({ item }) => (
    <View style={{ marginBottom: 25, marginLeft: 10 }}>
      <Image source={{ uri: item?.product_images_data ? item?.product_images_data[0].image?.url : 'https://static.thenounproject.com/png/3674270-200.png' }} style={{ height: 90, width: 90, alignSelf: "center",borderRadius:10 }} />
      <Text style={{  fontFamily: "inter-bold" }}>{item?.name?.slice(0, 10)}...</Text>
      <Text style={{ fontFamily: "inter-bold", fontSize: 12.5,color:"grey" }}>₦{" "}{item?.price}</Text>
      {/* <TouchableOpacity onPress={() => {
        nav.navigate("Product", { id: item?.id })
      }} style={{ backgroundColor: Appcolor.blue, alignSelf: 'center', width: 100, height: 30, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 5 }}>
        <Text style={{ color: "#fff", fontFamily: "inter-medium" }}>View</Text>
      </TouchableOpacity> */}
    </View>
  )


  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 50, margin: 15, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
        <View>
          <Text style={{ fontFamily: 'inter-bold', fontSize: 25 }}>Category</Text>
          <View style={{ height: 2, width: 60, backgroundColor: "#000", borderRadius: 100 }} />
        </View>
        <View />
      </View>

      <View style={{ flexDirection: "row", margin: 15 }}>
        <TouchableOpacity style={styles.touchSearch}>
          <Text style={{ fontFamily: "inter-bold", marginLeft: 20 }}>Search....</Text>
        </TouchableOpacity>
        <View style={{ width: 10 }} />
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
        <View>
          {loadedCat.map((cat, index) => (
            <View key={index} style={{ marginBottom: 0 }}>
              <TouchableOpacity style={[styles.catTouch, { borderLeftWidth: selectedCat === cat.name ? 3 : null, borderColor: Appcolor.blue }]} onPress={() => {
                setSelctedCat(cat?.name);
                setCatId(cat?.unique_id)
              }}>
                <Text style={{ fontFamily: "inter-bold", fontSize: 12 }}>{cat?.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={{ backgroundColor: "#fff", height: 500, width: 250, marginBottom: 20, marginLeft: -10,borderRadius:10 }}>
          <FlatList
            ListEmptyComponent={() => {
              return (
                <View style={{ flex1: 1, justifyContent: "center", alignItems: "center", marginTop: 120 }}>
                  <Image
                    resizeMode='contain'
                    style={{ height: 100, width: 100 }}
                    source={{ uri: 'https://main--hilarious-mandazi-5277d6.netlify.app/static/media/5%E8%B4%AD%E7%89%A9%E6%B8%90%E5%8F%98%E6%89%81%E5%B9%B3%E7%9F%A2%E9%87%8F%E4%BA%BA%E7%89%A9%E6%8F%92%E7%94%BB2420220903%E6%9E%9C%E5%86%BB_%E7%94%BB%E6%9D%BF%201.1a83a38f8865edfc1511.png' }}
                  />
                  <Text style={{ fontFamily: "inter-medium" }}>No Item Found</Text>
                </View>
              )
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: "space-between", margin: 15, paddingBottom: 300 }}
            numColumns={2}
            data={fetchedCat}
            renderItem={RenderCategory}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  touchSearch: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: "center",
    flex: 1
  },
  searchBtn: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Appcolor.blue,
    justifyContent: "center",
    alignItems: "center",
    width: 55
  },
  catTouch: {
    height: 55,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    width: 120,
    // alignItems: "center"
  }
})