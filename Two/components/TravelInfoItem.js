import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';

const TravelInfoItem = ({item, allTravel }) => {
  const isLastElement = (element, array) => element === array[array.length - 1];

  return (
    <View style={styles.container}>

      <View style={[styles.lineWrapper, Platform.OS === 'ios' && styles.iosLine]}>
        <Feather
          name="circle" 
          size={10}
          color="#4460EF"
        />
        <View style={styles.horizontalLine}></View>
        <Feather
          name="circle" 
          size={10}
          color="#4460EF"
        />
      </View>

      <View style={styles.flightInfoCard}>
        <Text style={styles.labelText}>{item.takeOffTime} <Text style={{fontWeight:'bold'}}>({item.originShort})</Text> </Text>
          <Text style={[styles.labelText,{alignSelf:'center'}]}>{item.onDuration}</Text>
        <Text>{item.arrivalTime} <Text style={{fontWeight:'bold'}}>({item.destinationShort})</Text></Text>
      </View>

      <View style={styles.flightInfoCard}>
        <Text style={styles.labelText}>{item.originLong}</Text>
        <Text style={[styles.labelText,{alignSelf:'center'}]}>{item.layover.length} stop</Text>
        <Text style={styles.labelText}>{item.destinationLong}</Text>
      </View>

      <View style={styles.flightInfoCard}>
        <View style={{width:'50%'}}>
          <Text numberOfLines={1} style={styles.labelText}>{item.originAirport}</Text>
        </View>
        <View style={{width:'50%', alignItems:'flex-end'}}>
          <Text style={styles.labelText} numberOfLines={1} >{item.destinationAirport}</Text>
        </View>
      </View>

      <Text style={{alignSelf:'flex-end', color:'red'}}>Arrive on {item.flightDuration}</Text>
      {!isLastElement(item, allTravel) && <Divider style={{marginVertical:15}} /> }
      
    </View>
  );
};

export default TravelInfoItem;

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
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center',
    position:'absolute',
    marginTop:'10%',
    alignSelf:'center'
  },
  iosLine:{
    marginTop:'9%'
  },
  horizontalLine:{
    width:60,
    height:1.3,
    backgroundColor:'#4460EF',
  },
  labelText:{
    color:'#454545',
    fontSize:16,
  }
});
