import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Divider } from '@rneui/themed'

const MapLocationItem_21 = ({ item, locationModal }) => {

    const handleAction = () => {
        if (item.address && item.location) {
            const location = JSON.stringify(item, 0, 2)
            alert(location)
        } else {
            alert("Schedule pickup now")
        }
        locationModal(false)
    }

    return (
        <>
            <Pressable
                onPress={handleAction}
                style={styles.container}>
                <View style={styles.location}>
                    <View style={{ width: 30, height: 30, alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 30, justifyContent: 'center' }}>
                        <Ionicons
                            name={item.image}
                            size={20}
                            color={'#000000'}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#000000', fontWeight: 'bold' }}>{item.address ? item.address : "Pick up now"}</Text>
                        {
                            item.location &&
                            <Text style={{ fontSize: 12, color: '#00000099' }}>{item.location}</Text>
                        }
                    </View>
                </View>
                <Pressable
                    onPress={handleAction}
                    style={styles.button}>
                    <Text>{!item.address ? "Schedule" : "Change"}</Text>
                </Pressable>
            </Pressable>
            <Divider />
        </>

    )
}

export default MapLocationItem_21

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    button: {
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        borderRadius: 8,
        padding: 8,
        width: 90
    }
})