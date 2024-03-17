import React from 'react';
import {
  View,
  Text, StyleSheet
} from 'react-native';



const SModal = ({ navigation }) => {
  return (
    <View style = {
      {
   //     "alignItems": "flex-start"
      }
    } >
    <View style = {
      {
      //  "alignItems": "flex-start",
   //     "paddingStart": 36,
        "paddingTop": 40,
        "width": '100%',
        "height": 453,
        "borderRadius": 30,
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    } >
    <View style = {
      {
      //  "alignItems": "flex-start",
        "marginStart": 84
      }
    } >
    <View style = {
      {
        flexDirection: 'row',
      //  alignItems: 'flex-start'
      }
    } >
       <View style = {
      {
   //     "alignItems": "flex-start",
        "marginStart": 5
      }
    } >
    <View style = {
      {
    //    "alignItems": "flex-start",
        "width": 20,
        "height": 20,
        "borderRadius": 10,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
    <View style = {
      {
        "flexDirection": "row",
    //    "alignItems": "flex-start",
        "marginStart": 9,
        "marginTop": 4
      }
    } >
    <View style = {
      {
      //  "alignItems": "flex-start",
        "width": 120,
        "height": 120,
        "borderRadius": 60,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
<Text></Text>
    </View>
    </View>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": -86,
        "marginTop": 11,
        "width": 12,
        "height": 12,
        "borderRadius": 6,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": -60,
        "marginTop": 11
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 107,
        "width": 18,
        "height": 18,
        "borderRadius": 9,
        "backgroundColor": "rgba(68, 96, 239, 255)"
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
        "marginStart": 107,
        "marginTop": -18,
        "width": 18,
        "height": 18,
        "borderRadius": 9,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": -125,
        "marginTop": 37,
        "width": 6,
        "height": 6,
        "borderRadius": 3,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 134,
        "marginTop": 40,
        "width": 8,
        "height": 8,
        "borderRadius": 4,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
    </View>
    </View>
    </View>
    <View style = {
      {
        flexDirection: 'row',
     //   alignItems: 'flex-start'
      }
    } >
       <View style = {
      {
    //    "alignItems": "flex-start",
        "marginStart": 9,
        "marginTop": -23.01,
        "width": 8,
        "height": 8,
        "borderRadius": 4,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
    <View style = {
      {
      //  "alignItems": "flex-start",
        "marginStart": 115,
        "marginTop": -23.01,
        "width": 6,
        "height": 6,
        "borderRadius": 3,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
    </View>
    <View style = {
      {
      //  "alignItems": "flex-start",
        "marginStart": 98,
        "marginTop": 17,
        "width": 4,
        "height": 4,
        "borderRadius": 2,
        "backgroundColor": "rgba(68, 96, 239, 255)"
      }
    }
    />
    </View>
    <Text style = {
      {
        "fontWeight": "bold",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(68, 96, 239, 255)",
     //   "marginStart": 79,
        "marginTop": 37
      }
    } > Congratulations! </Text>
    <Text style = {
      {
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(84, 84, 84, 255)",
        "marginTop": 14,
        marginRight: 20,
        marginHorizontal: 25,
      }
    } > Your account is ready to use.You will be redirected to the Home page in few seconds. </Text>
   


   <View style={styles.loadingScreen}>
      <View style={styles.dotsWrapper}>
        <Text>Loading dots</Text>
      </View>
    </View>

    </View>

   
    
    
    </View>

  );

};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dotsWrapper: {
    width: 100,
  },
});

export default SModal;