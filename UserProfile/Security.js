import React from 'react';
import {
  View,
  Text, TouchableOpacity, StyleSheet, Image
} from 'react-native';
import Head from '../Head';
export default ({navigation}) => {


   const handleSetUpNowPress = () => {
    // Replace 'AnotherScreen' with the name of the screen you want to navigate to
    navigation.navigate('Pin');
  };
  return (
    <View style = {
      {
        flex: 1,
        "backgroundColor": "white",
        "paddingRight": 20, 
       
      }
    } >
      <Head title="2-Step Security" navigation={navigation} />
    
    <View style = {
      {
        "alignItems": "flex-start",
        marginTop: 40,
      }
    } >



    </View>
    <Text style = {
      {
        
        "fontWeight": "bold",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(13, 19, 23, 255)",
        marginHorizontal: 60,
        marginTop: 20,
        marginBottom: 20

      }
    } > Security beyond your password </Text>

<View style = {
      {
        "alignItems": "center",
        marginBottom: 20
      }
    } >

<Image
          source={require("../assets/icons/export/secure.png")}
          resizeMode="contain"
         // resizeMethod=""
          style={{width: "50%", height: 160}}
        />

        </View>

    <Text style = {
      { "fontWeight": "400",
        "fontSize": 16,
        "textAlign": "center",
        "color": "rgba(84, 84, 84, 255)",
        marginLeft: 20,
       
      }
    } > To keep your account more secure, we 'll ask your password and verification code at sign in.</Text>


<View style={styles.doneButtonContainer}>
        

        <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingRight: 20, 
            paddingTop: 13,
            paddingLeft: 20,
            width: "100%",
            height: 56,
          
            borderRadius: 10,
            backgroundColor: 'rgba(68, 96, 239, 255)',
          }}
          onPress={handleSetUpNowPress} // Attach the onPress event handler
        >
          <Text
            style={{
              fontFamily: 'Uber Move',
              fontWeight: '400',
              fontSize: 20,
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 255)',
            }}
          >
            Set Up Now
          </Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  line: {
    backgroundColor: 'rgba(228, 228, 228, 255)',
    flex: 1,
    height: 1.5,
    marginRight: 20,
  },
  doneButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 20,
  },
});

