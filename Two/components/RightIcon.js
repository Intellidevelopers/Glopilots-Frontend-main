import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import {Octicons, Feather} from '@expo/vector-icons';

const RightIcon = ({ iconName, hasColor=false, handleAction }) => {

    return(
      <Pressable onPress={handleAction} style={[styles.iconHolder, {
        backgroundColor: hasColor ? '#eeeeee' : '',
      }]} >
        <Feather 
          name={iconName} 
          size={21} 
          color="#0D1317" 
        />
      </Pressable>
      
  )
}

export default RightIcon

const styles = StyleSheet.create({
  iconHolder:{
    padding:6,
    width:35,
    height:35,
    
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center' 
  }
})
