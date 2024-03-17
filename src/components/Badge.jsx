import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { badgeStyle } from '../../styles/style';
const Badge = ({icon, value}) => {
  return (
      <View style={badgeStyle.container}>
          {icon}
          <Text style={badgeStyle.text}>{value}</Text>

    </View>
  )
}

export default Badge