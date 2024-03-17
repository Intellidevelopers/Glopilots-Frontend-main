import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import { buttonStyle } from '../../styles/style'

const Button = ({text,  onPress}) => {
  return (
    <TouchableOpacity style={buttonStyle.button} onPress={onPress}>
          <Text style={buttonStyle.text}>{ text}</Text>
    </TouchableOpacity>
  )
}

export default Button