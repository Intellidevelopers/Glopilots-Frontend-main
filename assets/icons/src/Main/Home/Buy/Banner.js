import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'

export default function Banner() {
    return (
        <View style={{ marginTop: 15,marginBottom:-20}}>
            <Image
                style={{ height: 200, width: Dimensions.get('screen').width-30,borderRadius:10,alignSelf:"center"}}
                source={{ uri: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w33-Back-to-school/Desktop_Homepage_Slider__712x384.jpg" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})