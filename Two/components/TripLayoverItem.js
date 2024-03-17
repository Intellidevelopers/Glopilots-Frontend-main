import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';

const TripLayoverItem = ({ item, allTravel }) => {
  const isLastElement = (element, array) => element === array[array.length - 1];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.layoverHeader}>
          <Text numberOfLines={1} style={styles.flightTitle}>
            Layover At : {item.layoverLocation}
          </Text>
          <Text style={{ color: '#4460EF', fontWeight: 'bold', fontSize: 16 }}>
            {item.layoverDuration}
          </Text>
        </View>

        <View style={styles.dataSection}>
          <Text style={{ color: '#454545', fontSize: 18 }}>
            {item.layoverDate}
          </Text>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Image
              source={item.layoverLogo}
              resizeMode={'contain'}
              style={{ width: 25, height: 30 }}
            />
            <View style={{ left: 15, width:'89%' }}>
              <Text
                style={{ color: '#0D1317', fontWeight: 'bold', fontSize: 20 }}>
                {item.layoverStart} - {item.layoverEnd}
              </Text>
              <Text style={{ color: '#0D1317', marginVertical: 10 }}>
                {item.layoverFromLong} ({item.layoverFromAirport}) ({item.layoverFromShort}) - {' '}
                {item.layoverToLong} ({item.layoverToAirport}) (
                {item.layoverToShort})
              </Text>
              <Text style={{ color: '#454545', fontSize: 16 }}>
                {item.layoverLocation}. {item.layoverNumber} Class {item.layoverClass}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#454545', fontSize: 15, marginVertical: 5 }}>
              {item.layoverGrade}
            </Text>
            <Text
              style={{ color: '#0D1317', fontWeight: 'bold', fontSize: 15 }}>
              {item.layoverDuration}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TripLayoverItem;

const styles = StyleSheet.create({
  container: {
    //paddingVertical: 10,
  },
  content: {
    padding: 10,
  },
  flightTitle: {
    color: '#4460EF',
    fontWeight: '400',
    fontSize: 15,
  },
  layoverHeader: {
    marginVertical: 0,
    backgroundColor: '#ECEDF6',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dataSection: {
    marginTop: 10,
    //padding: 10,
    //width: '89%',
  },
});
