import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Divider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const PersonalRideHistoryItem = ({ navigation, item }) => {
  const originalDate = item.tripDate;
  const formattedDate = moment(originalDate).format('MMM D, YYYY');

  const handleItemSelect = () => {
    const rideDate = JSON.stringify(item, 0, 2);
    Alert.alert('Ride Data', rideDate);
  };

  return (
    <>
      <Pressable onPress={handleItemSelect} style={styles.container}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 5,
            marginBottom: 12,
            color: '#0D1317',
          }}>
          {formattedDate}
        </Text>

        <View style={styles.itemWrapper}>
          <View style={styles.withDirection}>
            <Image
              source={item.tripDriverImage}
              resizeMode={'contain'}
              style={{ width: 36, height: 36 }}
            />

            <View>
              <Text style={{ color: '#0D1317' }}>Wait & save ride</Text>
              <View style={[styles.withDirection, { gap: 5 }]}>
                <Text style={{ color: '#0D1317', fontSize: 13 }}>
                  {item.tripTime}
                </Text>
                <FontAwesome name="circle" size={4} />
                <Text style={{ color: '#0D1317' }}>17 min</Text>
              </View>
            </View>
          </View>

          <View style={styles.withDirection}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 16, color: '#0D1317' }}>
              ${item.tripAmount}
            </Text>
            <FontAwesome name="angle-right" size={25} />
          </View>
        </View>
      </Pressable>
      <Divider />
    </>
  );
};

export default PersonalRideHistoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  withDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
