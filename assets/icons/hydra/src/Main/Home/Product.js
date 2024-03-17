import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { Appcolor } from '../../../UTILS/Color';
import { useNavigation } from '@react-navigation/native';
import { BaseUrl } from '../../../UTILS/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';

export default function Product({ route }) {

    const { uid, productId } = route.params;
    const [fetchedProduct, setFetchedProduct] = useState({})
    const [pageLoading, setPageLoading] = useState(true);

    const [userToken, setUserToken] = useState('')

    const nav = useNavigation();

    const [quantity, setQuantity] = useState(0)

    const [activeColor, setActiveColor] = useState('coral')

    const color = [
        {
            clr: 'coral'
        },
        {
            clr: 'skyblue'
        },
        {
            clr: 'violet'
        },
        {
            clr: 'maroon'
        },
    ];

    const getUserToken = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {
                setUserToken(value)
            }
        } catch (e) {
            // error reading value
        }
    };

    async function GetSingleProduct() {
        fetch(`${BaseUrl}/home/product?user_unique_id=${uid}&unique_id=${productId}`, {
            method: "GET"
        }).then((async (res) => {
            const response = await res.json();
            setFetchedProduct(response.data);
            setPageLoading(false)
            console.log(response)
            // setLoading(false)
        }))
    }

    useEffect(() => {
        getUserToken()
        GetSingleProduct()
    }, [])


    //add to cart
    async function addToCart() {
        if (userToken) {
            fetch(`${BaseUrl}/user/cart/add`, {
                method: "POST",
                headers: {
                    'hydra-express-access-token': userToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_unique_id: productId,
                    shipping_fee: '500',
                    quantity: 1
                })
            }).then(async (res) => {
                const response = await res.json();
                if (response.message === 'Unable to add to cart, add address') {
                    nav.navigate('Address')
                } else if (response.success) {
                    Toast.show({
                        type: 'success',
                        text1: 'Success',
                        text2: 'Item added to cart!'
                    });
                }
            }).catch((e) => {

            })
        } else {
            nav.navigate("Profile")
        }
    }


    //renderImages
    const RenderImages = ({ item }) => {
        return (
            <View>
                <Image
                    style={{ height: 300, width: Dimensions.get('screen').width }}
                    source={{ uri: item?.image.url }} />
            </View>
        )
    }


    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={{ margin: 15, marginTop: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => {
                    nav.goBack()
                }} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#eee", borderRadius: 100, padding: 10 }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <View >
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#eee", padding: 10, flex: 1, width: 250, borderRadius: 10 }}>
                        <EvilIcons name="search" size={25} color="black" />
                        <Text style={{ color: 'grey', fontFamily: 'inter-bold', marginLeft: 5 }}>Search here!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Feather name="shopping-cart" size={24} color={Appcolor.blue} onPress={() => nav.navigate('Cart')} />
                </View>
            </View>

            {pageLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                    <ActivityIndicator color={Appcolor.blue} size={50} />
                </View>
            ) : null}

            {!pageLoading ? (
                <>
                    <ScrollView>
                        <FlatList
                            horizontal
                            pagingEnabled
                            renderItem={RenderImages}
                            data={fetchedProduct?.product_images_data}
                        />
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontFamily: "inter-bold", fontSize: 19, color: Appcolor.blue, marginBottom: 10 }}>{fetchedProduct?.name}</Text>
                            <Text style={{ fontFamily: 'inter-medium', fontSize: 17.5, marginBottom: 10 }}><Text style={{ fontFamily: 'inter-bold' }}>NGN</Text>{" "}{fetchedProduct?.price}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 3, backgroundColor: "#EDF6FF", padding: 8, borderRadius: 10 }}>
                                    <Ionicons name="location-outline" size={22} color="#007AFF" />
                                    <Text style={{ fontFamily: "inter-bold", color: '#007AFF' }}>{fetchedProduct?.location}</Text>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'inter-light', fontSize: 12.5, marginBottom: 10 }}>{fetchedProduct?.description}</Text>
                            <View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10, marginTop: 10 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#eee", width: 150, padding: 10, borderRadius: 10, marginBottom: 10 }}>
                                        <Text style={{ fontFamily: 'inter-medium' }}>{fetchedProduct?.category_data?.name}</Text>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={{ fontFamily: "inter-medium" }}>{fetchedProduct?.remaining}</Text>
                                        <Text style={{ fontFamily: "inter-bold", color: "#000" }}>Remaining</Text>
                                    </View>
                                </View>

                                <Text style={{ fontFamily: "inter-bold", fontSize: 18 }}>Vendor</Text>
                                <View style={{ marginTop: 10, alignItems: "center", flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <Image
                                            style={{ height: 45, width: 45, borderRadius: 100 }}
                                            source={{ uri: fetchedProduct?.user_data?.photo }}
                                        />
                                        <View>
                                            <Text style={{ fontFamily: "inter-regular", marginLeft: 10 }}>{fetchedProduct?.user_data?.firstname}{' '}{fetchedProduct?.user_data?.lastname}</Text>
                                            <Text style={{ fontFamily: "inter-regular", marginLeft: 10, fontSize: 10 }}>{fetchedProduct?.user_data?.email}</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity style={{ height: 45, width: 45, borderRadius: 100, justifyContent: "center", alignItems: "center", backgroundColor: '#eee' }}>
                                        <Ionicons name="call-outline" size={22} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                <Text style={{ fontFamily: "inter-bold", fontSize: 15.5 }}>{fetchedProduct?.good_rating}{"  "}|{" "}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <AntDesign name="star" size={20} color="gold" />
                                    <AntDesign name="star" size={20} color="gold" />
                                    <AntDesign name="star" size={20} color="gold" />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                {color.map((color, index) => (
                                    <TouchableOpacity key={index} onPress={() => {
                                        setActiveColor(color.clr)
                                    }}>
                                        <View style={{ backgroundColor: color.clr, padding: 20, marginRight: 15, borderRadius: 10, borderWidth: activeColor === color.clr ? 2 : null }} />
                                    </TouchableOpacity>
                                ))}
                            </View>

                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                        <TouchableOpacity onPress={addToCart} style={{ backgroundColor: Appcolor.blue, justifyContent: "center", alignItems: "center", height: 55, flex: 1, borderRadius: 10 }}>
                            <Text style={{ color: "#fff", fontFamily: "inter-bold" }}>Add to cart</Text>
                        </TouchableOpacity>
                        <View style={{ width: 30 }} />
                        <TouchableOpacity onPress={() => {
                            nav.navigate("Buynow")
                        }} style={{ backgroundColor: 'coral', justifyContent: "center", alignItems: "center", height: 55, flex: 1, borderRadius: 10 }}>
                            <Text style={{ color: "#fff", fontFamily: "inter-bold" }}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : null}



        </View>
    )
}

const styles = StyleSheet.create({})