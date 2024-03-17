import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodMenuItem_21 = ({ item }) => {

    const handleClick = () => {
        const selected = JSON.stringify(item, 0, 2)
        alert(selected)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}>
            <Image
                source={item.image}
                resizeMode='contain'
                style={{ width: 46, height: 46 }}
            />
            <Text style={{ fontSize: 13 }}>{item.name}</Text>
        </Pressable>
    )
}

export default FoodMenuItem_21

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginHorizontal: 10,
        alignItems: 'center',
    },

})