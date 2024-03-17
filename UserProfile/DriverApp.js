import React from 'react';
import {
  View,
  Text, ScrollView
} from 'react-native';

export default () => {
  return (
  
    
   
   
    <View style = {
      {
        justifyContent: 'flex-end',
        "paddingStart": 20,
        "width": '100%',
        "backgroundColor": "rgba(13, 19, 23, 255)",
        flex : 1,
       
      }
    } >
   
    <View>
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "bold",
        "fontSize": 24,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > You have taken the first step </Text>
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(255, 255, 255, 255)",
        "marginTop": 8,
        marginRight: 20,
      }
    } >Driving with GloPilots is an easy way to earn money whenever you want. </Text>
    </View>
    <View style = {
      {
        "marginTop": 34,
        marginRight: 20,
        marginBottom: 20,
      }
    } >
    <View style = {
      {

        "paddingTop": 13,
        "width": "100%",
        "height": 56,
        "borderRadius": 10,

        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
      
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)",
      
      
      }
    } > Open the Driver App </Text>
    </View>
    </View>
   
    </View>
  
    
  );
};