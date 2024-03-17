import React from 'react';
import { View, Text } from 'react-native';
import Head from '../Head';
import { TouchableOpacity } from 'react-native-gesture-handler';

  export default ({navigation}) => {
  const onPressLink = () => {
    navigation.navigate('WelcomeBack'); 
  };

  return (


    
    <View style={{ backgroundColor: '#fff', flex: 1, }}>
       <Head title='Login' />
    <View style={{  padding: 20, backgroundColor: '#fff', flex: 1, }}>
     
      <Text style={{ fontFamily: 'Uber Move', fontWeight: '400', fontSize: 20, color: 'rgba(13, 19, 23, 255)' }}>
        Enter the 4 - digits code sent to you at *****70.
      </Text>
      <View style={{ flexDirection: 'row',  justifyContent: 'center',  }}>
      <View style = {
      {
        flexDirection: 'row',
        "marginTop": 24
      }
    } >
    <View style = {
      {
      
        "paddingTop": 13,
        "width": 56,
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        "color": "rgba(13, 19, 23, 255)",
        textAlign: 'center',
      }
    } > 5 </Text>
    </View>
    <View style = {
      {
        marginLeft: 10,
        "paddingTop": 13,
        "width": 56,
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        textAlign: 'center',
        "fontSize": 20,
        "color": "rgba(13, 19, 23, 255)"
      }
    } > 5 </Text>
    </View>

    <View style = {
      {
     
        "paddingTop": 13,
        "width": 56,
        "height": 56,
        "borderRadius": 10,
        marginHorizontal: 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        textAlign: 'center',
        "color": "rgba(13, 19, 23, 255)"
      }
    } > 5 </Text>
    </View>

    <View style = {
      {
     
        "paddingTop": 13,
        "width": 56,
        "height": 56,
        "borderRadius": 10,
        "backgroundColor": "rgba(238, 238, 238, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 20,
        textAlign: 'center',
        "color": "rgba(13, 19, 23, 255)"
      }
    } > 5 </Text>
    </View>
    
   
    
    </View>

      </View>
      <View style={{ marginStart: 53, marginTop: 30 }}>
        <Text style={{ fontFamily: 'Uber Move', fontWeight: '400', fontSize: 16, color: 'rgba(13, 19, 23, 255)' }}>
          Trouble receiving the OTP?{' '}
          <Text style={{ fontFamily: 'Uber Move', fontWeight: 'bold', fontSize: 16, textDecorationLine: 'underline', color: 'rgba(68, 96, 239, 255)' }}>
            Resend OTP
          </Text>
        </Text>
      </View>
      <View style={{  marginTop: 32 }}>
        <TouchableOpacity style={{ paddingTop: 13, width: '100%', height: 56, borderRadius: 10, backgroundColor: 'rgba(68, 96, 239, 255)' }}
        onPress={{onPressLink}}>
          <Text style={{ fontFamily: 'Uber Move', fontWeight: '400', fontSize: 20, textAlign: 'center', color: 'rgba(255, 255, 255, 255)' }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

