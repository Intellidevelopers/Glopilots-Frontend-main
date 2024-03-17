import { StyleSheet, Text, View,Animated } from 'react-native'
import React from 'react'

export default function Welcome() {

    //const onboard data
    const OnboardData=[
        {
            title:"Let's Shop",
            desc:"Sign up now to create your account and start browsing our unbeatable deals.",
         
        }
    ]
    function RenderContent(){
        return(
            <Animated.ScrollView>

            </Animated.ScrollView>
        )
    }
  return (
    <View style={styles.wrapper}>
      <Text>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff"
    }
})