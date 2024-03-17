import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RIDE_DATA } from './data/data';
import AllRideHistoryItem from './components/AllRideHistoryItem';

const AllRideHistoryTab = ({ navigation }) => {

    const [rideData, setRideData] = React.useState(RIDE_DATA)


    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={rideData}
                renderItem={({ item }) => (
                    <AllRideHistoryItem
                        item={item}
                        avigation={navigation}
                    />
                )}
            />
        </View>
    )
}

export default AllRideHistoryTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8f8'
    }
})