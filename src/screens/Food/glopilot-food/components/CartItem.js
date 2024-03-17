import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Badge } from '@rneui/themed'

const CartItem = ({ item, pickup }) => {

    const handleClick = () => {
        const product = JSON.stringify(item, 0, 2)
        alert(product)
    }

    return (
        <Pressable
            onPress={handleClick}
            style={styles.container}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
            }}>
                <View>
                    <Image
                        source={item.image}
                        resizeMode='contain'
                        style={{ width: 60, height: 60, borderRadius: 8 }}
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: '#00000099' }}>${item.price * item.qty}</Text>
                    <Text style={{ color: '#00000099', fontSize: 13 }}>{pickup.address} </Text>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
            }}>

                <Badge value={item.qty} status="primary" textStyle={{ fontSize: 11 }} badgeStyle={{ padding: 0 }} />

                <Feather
                    name='chevron-right'
                    color={'#000000'}
                    size={25}
                />
            </View>

        </Pressable>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        justifyContent: 'space-between'
    }
})