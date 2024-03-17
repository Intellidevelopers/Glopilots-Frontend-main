import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Octicons} from '@expo/vector-icons';

const Header = ({ navigation, title }) => {

    const canGoBack = navigation.canGoBack()

    // if (canGoBack) {
    //     console.log("yes")
    // } else {
    //     console.log("No")
    // }

    return (
        <View style={styles.container}>

        {
          canGoBack &&  
          <Octicons onPress={() => navigation.goBack()} style={{ marginRight: 15 }} name="chevron-left" size={20} color="#0D1317" />
        }

            <Text style={styles.title}>{title}</Text>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        padding: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: '#adb5bd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        color: "#0E1317"
    }
})