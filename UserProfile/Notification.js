import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Head from '../Head';

export default () => {
  return (
    <View>
    <Head title="Notifications" />
    <View style = {
      {
        "alignItems": "flex-start",
        padding: 20,
      }
    } >
    <View style = {
      {
       
        "paddingStart": 16,
        "paddingTop": 14,
        "width": '100%',
        "height": 202,
        "borderRadius": 10,
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    } >
    <View style = {
      {
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
    } > 
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 14,
        "color": "rgba(84, 84, 84, 255)"
      }
    } > Promo </Text>
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 14,
        "textAlign": "right",
        "color": "rgba(84, 84, 84, 255)",
        
      
      }
    } > 01 / 21 / 2023 </Text>
    </View>
    <View style = {
      {
        "marginTop": 15,
        "backgroundColor": "rgba(228, 228, 228, 255)",
        "width": '95%',
        
        "height": 1.5
      }
    }
    />
    <View style = {
      {
        flexDirection: 'row',
        alignItems: 'flex-start'
      }
    } > 
    <View style = {
      {
        "alignItems": "flex-start",
        "marginTop": 13
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "bold",
        "fontSize": 24,
        "color": "rgba(13, 19, 23, 255)"
      }
    } > 10 % off your next 1 ride </Text>
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(84, 84, 84, 255)",
        "marginTop": 6
      }
    } > Valid until Jan 28, 2023, 11: 59 PM </Text>
    </View>
    </View>

    
    <View style = {
      {
        "width": 48,
        "height": 48,
        "backgroundColor": "#000000"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 3.69,
        "paddingTop": 3.76,
        "marginStart": -48,
        "marginTop": 21
      }
    } >

    
    <View style = {
      {
        "width": 40.62,
        "height": 40.57,
        "backgroundColor": "#000000"
      }
    }
    />
    </View>
    </View>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginTop": 15
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 38,
        "paddingTop": 12,
        "width": 160,
        "height": 48,
        "borderRadius": 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(13, 19, 23, 255)"
      }
    } > See details </Text>
    </View>
    </View>
    </View>
    </View>
    </View>

  );
};