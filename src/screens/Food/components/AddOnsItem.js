import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Checkbox, Divider } from 'react-native-paper'

const AddOnsItem = ({ item, selectedAddon, setSelectedAddon }) => {


    const isItemInCart = (data, itemId) => {
        return data.some(item => item.id === itemId);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = selectedAddon.filter(item => item.id !== itemId);
        setSelectedAddon(updatedCart);
    };

    const handleClick = () => {

        isItemInCart(selectedAddon, item.id) ? removeFromCart(item.id) : setSelectedAddon([...selectedAddon, item])
    }

    return (

        <>
            <Pressable
                onPress={handleClick}
                style={styles.container}
            >
                <View>

                    <Text style={styles.name}>Add {item.name}</Text>
                    <Text style={{ color: '#00000099' }}>${item.price}</Text>
                    {
                        item.isPopular &&
                        <Text style={{ color: '#7fc582' }}>Popular</Text>
                    }
                </View>

                <Checkbox
                    status={isItemInCart(selectedAddon, item.id) ? 'checked' : 'unchecked'}
                //onPress={handleClick}
                />



            </Pressable>
            <Divider style={{ marginVertical: 5 }} />
        </>


    )
}

export default AddOnsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 3
    },
    name: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 15
    }
})