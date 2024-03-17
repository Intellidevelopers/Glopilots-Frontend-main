import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';

const FlightReviewItem = ({item,  }) => {
  const isLastElement = (element, array) => element === array[array.length - 1];

  return (
    <View style={styles.container}>

      <View style={[styles.lineWrapper, Platform.OS === 'ios' && styles.iosLine]}>
      <View style={styles.airplane}>
        <Ionicons
          name="airplane-outline" 
          size={17}
          color="#454545"
        />
      </View>
        
       <View style={styles.horizontalLine}></View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', gap:3}}>
        <Text style={{fontWeight:'bold', fontSize:16}}>{item.flightSide === "Departure" ? "Depart" : "Return"}.</Text>
        <Text style={{fontSize:16, color:'#0D1317'}}>{item.flightTime}</Text>
        <Text style={{fontSize:16, color:'#0D1317'}}>{item.layover.length} stops</Text>
      </View>

      <View style={styles.flightInfoCard}>
        <Text style={styles.labelText}>{item.takeOffTime} <Text style={{fontWeight:'bold'}}>({item.originShort})</Text> </Text>
         
        <Text>{item.arrivalTime} <Text style={{fontWeight:'bold'}}>({item.destinationShort})</Text></Text>
      </View>

      <View style={styles.flightInfoCard}>
        <View style={{width:'50%'}}>
          <Text numberOfLines={1} style={styles.labelText}>{item.originAirport}</Text>
        </View>
        <View style={{width:'50%', alignItems:'flex-end'}}>
          <Text style={styles.labelText} numberOfLines={1} >{item.destinationAirport}</Text>
        </View>
      </View>

       <View style={styles.flightInfoCard}>
        <Text style={styles.labelText}>{item.originLong}</Text>
        
        <Text style={styles.labelText}>{item.destinationLong}</Text>
      </View>

      <Text style={{alignSelf:'flex-end', color:'red'}}>Arrive on {item.flightDuration}</Text>

      <Divider style={{marginTop:15}}/>
    </View>
  );
};

export default FlightReviewItem;

const styles = StyleSheet.create({
  container:{
    paddingVertical:10
  },
  flightInfoCard:{
    flexDirection:'row', alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:12,
  },
  lineWrapper:{
    //flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center',
    position:'absolute',
    marginTop:'12%',
    alignSelf:'center'
  },
  iosLine:{
    marginTop:'9%'
  },
  horizontalLine:{
    width:70,
    height:1.3,
    backgroundColor:'#454545',
  },
  labelText:{
    color:'#454545',
    fontSize:17
  },
  airplane:{
    alignSelf:'center',
    position:'absolute',
    padding:6,
    backgroundColor:'#ffffff',
    width:40,
    height:40,
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:50,
    zIndex:2
  }
});
