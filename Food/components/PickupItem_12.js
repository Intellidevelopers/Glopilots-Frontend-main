import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox, Divider } from 'react-native-paper'

const PickupItem_12 = ({ item, selected, setSelected }) => {

    const handleClick = () => {
        setSelected(item)
    }

    return (
        <>
            <Pressable
                onPress={handleClick}
                style={styles.container}>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Image
                        source={item.image}
                        resizeMode='contain'
                        style={{ width: 40, height: 40 }}
                    />
                    <Text style={styles.textLabel}>{item.name}</Text>
                </View>

                <Checkbox
                    status={selected.id === item.id ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setSelected(item);
                    }}
                />

            </Pressable>
            <Divider />
        </>
    )
}

export default PickupItem_12

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15,
        padding: 10
    }
})