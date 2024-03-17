import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Sales() {

    const FakeNoti = [
        {
            title: "Brian just supported 4M",
            time: '4mins',
            desc: 'the head and ceo of Bit mama just supported the happie_boys with the sum of 4 million naira but gave them condition before they can claim this money'
        },
        {
            title: "Discount on Hydra Store",
            time: '48mins',
            desc: 'get discounted goods when you shop from the hydra express store'
        },
        {
            title: "New order",
            time: '2hrs',
            desc: 'Emmanuel just paid for new pairs of shoe, rush now and accept the order'
        },
        {
            title: "New Follower",
            time: '4mins',
            desc: 'Daniel you just earned a new follower by name Brian Dennis'
        },
        {
            title: "Discount on Hydra Store",
            time: '48mins',
            desc: 'get discounted goods when you shop from the hydra express store'
        },
        {
            title: "New order",
            time: '2hrs',
            desc: 'Emmanuel just paid for new pairs of shoe, rush now and accept the order'
        },
        {
            title: "New Follower",
            time: '4mins',
            desc: 'Daniel you just earned a new follower by name Brian Dennis'
        },
    ]


    const RenderNotification = ({ item }) => {
        return (
            <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginBottom:20}}>
                <View style={{ height: 55, width: 55, borderRadius: 100, backgroundColor: "#eee",justifyContent:"center",alignItems:"center" }}>
                    <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
                </View>
                <View style={{flex:1,marginLeft:10}}>
                    <Text style={{fontFamily:'inter-bold',fontSize:15}}>{item?.title}</Text>
                    <Text style={{fontFamily:'inter-regular',fontSize:8}}>{item?.desc}</Text>
                </View>
                <View>
                    <Text style={{fontFamily:'inter-medium',fontSize:13}}>{item?.time}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ margin: 15 }}>
            <FlatList
                renderItem={RenderNotification}
                data={FakeNoti}
            />
        </View>
    )
}

const styles = StyleSheet.create({})