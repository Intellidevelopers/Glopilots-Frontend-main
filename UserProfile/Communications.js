import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Communications = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'flex-start', marginStart: 20, marginTop: 21 }}>
        <Text style={{ fontFamily: 'Uber Move', fontWeight: 'bold', fontSize: 24, color: 'rgba(13, 19, 23, 255)' }}>
          Contact Preferences
        </Text>
        <Text style={{ fontFamily: 'Uber Move', fontWeight: '400', fontSize: 18, color: 'rgba(84, 84, 84, 255)', marginTop: 6 }}>
          Choose how you want drivers to reach you
        </Text>
      </View>


      <View>
   
  
    
    <View style = {
      {
        "paddingTop": 10,
        "marginStart": 20,
        "marginTop": 23
      }
    } >
    <View style = {
      {
        flexDirection: 'row',
  
      }
    } >
         <View style = {
      {
        "flexDirection": "row",

        "marginTop": 1
      }
    } >

   
    <View style = {
      {
        "width": 21.08,
        "height": 22,
        "backgroundColor": "#000000"
      }
    }
    />

    
    <View style = {
      {
        "width": 13.23,
        "height": 11.8,
        "backgroundColor": "#000000"
      }
    }
    />
    
    </View>
    
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 16,
        "color": "rgba(84, 84, 84, 255)",
        "marginStart": 16,
        "marginTop": 13
      }
    } > 
    Recommended </Text>
    <View style = {
      {
        
       
      }
    } >
    <View style = {
      {
        
        "paddingStart": 4,
        "paddingTop": 4,
        "width": 24,
        "height": 24,
        "borderRadius": 12,
        "borderWidth": 1.5,
        "borderColor": "rgba(68, 96, 239, 255)",
        "backgroundColor": "rgba(248, 248, 248, 255)"
      }
    } >
    
    </View>
    </View>
    </View>
    <View style={styles.lineContainer}>
      <View style={styles.line} />
    </View>
    <View style = {
      {
        "flexDirection": "row",
       
        "marginTop": 19.5
      }
    } >
    <View style = {
      {
        "flexDirection": "row",
       
      }
    } >

   
    <View style = {
      {
        "width": 24,
        "height": 24,
        "backgroundColor": "#000000"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(13, 19, 23, 255)",
        "marginStart": 16
      }
    } > 
    Call 
    </Text>
    </View>
    <View style = {
      {
        
        "marginStart": 200,
        "marginTop": 0.5,
        "width": 24,
        "height": 24,
        "borderRadius": 12,
        "borderWidth": 1.5,
        "borderColor": "rgba(84, 84, 84, 255)",
        "backgroundColor": "rgba(248, 248, 248, 255)"
      }
    }
    />
    </View>
    <View style={styles.lineContainer}>
      <View style={styles.line} />
    </View>
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "marginStart": 0,
        "marginTop": 20
      }
    } >
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start"
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "marginTop": 1
      }
    } >

   
    <View style = {
      {
        "width": 24,
        "height": 22,
        "backgroundColor": "#000000"
      }
    }
    />
    </View>
    <Text style = {
      {
        "fontFamily": "Uber Move",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(13, 19, 23, 255)",
        "marginStart": 16
      }
    } > Chat </Text>
    </View>
   
    </View>
   
    </View>
    </View>




    
      <View style={styles.doneButtonContainer}>
        <View style={{ alignItems: 'center', paddingTop: 13, width: 'auto', marginRight: 20, marginLeft: 20, paddingRight: 30, height: 56, borderRadius: 10, backgroundColor: 'rgba(68, 96, 239, 255)' }}>
          <Text style={{ fontFamily: 'Uber Move', fontWeight: '400', fontSize: 20, textAlign: 'center', color: 'rgba(255, 255, 255, 255)' }}>
            Done
          </Text>
        </View>
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
    paddingBottom: 20,
  },
});

export default Communications;