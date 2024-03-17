import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import { Image } from 'react-native';

export default function All() {

    const [products, setProducts] = useState([]);

    //fetch products
    async function GetProduct() {
        fetch('https://fakestoreapi.com/products').then(async (res) => {
            const result = await res.json();
            setProducts(result)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        GetProduct()
    }, [])


    const RenderProduct = ({ item }) => {
        return (
            <View style={{ backgroundColor: "#eee", padding: 15, marginBottom: 10 ,borderRadius:10}}>
                <Image source={{ uri: item?.image }} resizeMode='contain' style={{ height: 100, width: 100 }} />
                <Text style={{ flexWrap: 'wrap', fontFamily: "inter-bold" }}>{item.title.slice(0, 10)}...</Text>
                <Text style={{ fontFamily: "inter-regular" }}>₦{' '}{item?.price}</Text>
                <Text style={{ fontFamily: "inter-regular" }}>Purchased:{" "}9</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ overflow: 'hidden' }}>
                <FlatList
                    contentContainerStyle={{ marginTop: 15,paddingBottom:20}}
                    columnWrapperStyle={{ justifyContent: "space-evenly", alignItems: "center", overflow: 'hidden',paddingBottom:5}}
                    numColumns={3}
                    data={products}
                    renderItem={RenderProduct}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})