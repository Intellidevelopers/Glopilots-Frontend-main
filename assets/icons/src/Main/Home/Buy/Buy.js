import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Appcolor } from '../../../../UTILS/Color'
import { Topcategories } from '../../../../UTILS/Categories'
import NewArrival from './NewArrival'
import AllProduct from './AllProduct';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { BaseUrl } from '../../../../UTILS/Urls'
import { FlatList } from 'react-native'
import Banner from './Banner'


export default function Buy() {

    const ref = React.useRef(null);
    const [loadedCat, setLoadedCat] = useState([])

    const nav = useNavigation()

    useScrollToTop(ref);

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
    }, [])


    const RenderCat = ({ item }) => {
        return (
            <TouchableOpacity style={{ height: 40, width: 120, backgroundColor: "#eee", marginRight: 20, marginTop: 10, justifyContent: "center", borderRadius: 10 }}>
                <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ height: 30, width: 30, borderRadius: 5 }}
                        source={{ uri: item?.category_image || 'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--M45320_PM2_Front%20view.jpg?wid=750&hei=870' }} />
                    <Text style={{ marginLeft: 5, fontFamily: 'inter-medium' }}>{item?.name.slice(0, 10)}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.wrapper}>
            <View style={{ flexDirection: "row", marginBottom: 20, margin: 15 }}>
                <TouchableOpacity style={styles.touchSearch}>
                    <Text style={{ fontFamily: "inter-bold", marginLeft: 20 }}>Search....</Text>
                </TouchableOpacity>
                <View style={{ width: 10 }} />
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="search" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView ref={ref} showsVerticalScrollIndicator={false} style={{ margin: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: -5 }}>
                    <Text style={{ fontFamily: 'inter-medium', fontSize: 19 }}>Top Categories</Text>
                    <View>
                        <Text>See All</Text>
                    </View>
                </View>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={loadedCat}
                    renderItem={RenderCat}
                />

                <NewArrival />
                <Banner />
                <AllProduct />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#fff"
    },
    touchSearch: {
        height: 50,
        backgroundColor: '#eee',
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
    }
})