import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import TripLayoverItem from './TripLayoverItem';
import TripLogageItem from './TripLogageItem';
import { Feather } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';

const TripSummaryItem = ({ item }) => {

  return (
    <View>
      <View style={styles.klmHolder}>
        <Text style={styles.flightTitle}>
          {item.flightSide} flight : {item.originLong} -{item.destinationLong}
        </Text>
      </View>

      <View style={styles.dataSection}>
        <Text style={{fontSize:18, color:'#0D1317'}}>{item.flightDate}</Text>

        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Image
            source={item.flightCompanyLogo}
            resizeMode={'contain'}
            style={{ width: 25, height: 30 }}
          />
          <View style={{ left: 15 }}>
            <Text
              style={{ color: '#0D1317', fontWeight: 'bold', fontSize: 20 }}>
              {item.takeOffTime} - {item.arrivalTime}
            </Text>
            <Text style={{ color: '#0D1317', marginVertical: 10, fontSize:16 }}>
              {item.originLong} ({item.originAirport}) ({item.originShort}) -{' '}
              {item.destinationLong} ({item.destinationAirport}) (
              {item.destinationShort})
            </Text>
            <Text style={{ color: '#454545', fontSize: 16 }}>
              {item.flightCompany}. {item.flightNumber} Class {item.flightClass}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#454545', fontSize: 15, marginVertical: 5 }}>
            {item.flightGrade}
          </Text>
          <Text style={{ color: '#0D1317', fontWeight: 'bold', fontSize: 15 }}>
            {item.onDuration}
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          data={item.layover}
          renderItem={({ item }) => <TripLayoverItem item={item} />}
        />
      </View>

      <View>
        <TripLogageItem item={item.flightLogages.length} />
      </View>
      
    </View>
  );
};

export default TripSummaryItem;

const styles = StyleSheet.create({
  flightTitle: {
    color: '#4460EF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  klmHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    //borderStyle: 'dashed',
    borderBottomColor: '#ced4da',
  },
  dataSection: {
    marginTop: 10,
    padding: 10,
    width: '89%',
  },
});
