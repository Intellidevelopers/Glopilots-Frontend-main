import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import RatingStars from '../resources/RatingStars';
import moment from 'moment';

const RidesItem = ({ item, navigation, goNext }) => {
  const date = moment(item.tripDate);
  const formattedDate = date.format('DD/MM/YY');

  const handleViewDetail = () => {
    const rideDetails = JSON.stringify(item, 0, 2);
    Alert.alert('Trip Data', rideDetails);
    navigation.navigate('HelpScreen', { rideItem: item });
  };

  return (
    <Pressable
      onPress={() => goNext && handleViewDetail()}
      style={styles.container}>
      <View style={styles.tripHolder}>
        <View style={styles.tripInfo}>
          <Text style={styles.tripPrice}>
            {formattedDate}, {item.tripTime}
          </Text>
          <Text style={{ color: '#adb5bd', fontSize: 14 }}>
            {item.tripCode}
          </Text>
        </View>
        <View style={styles.rightPan}>
          <View style={styles.amountWrapper}>
            <Text style={styles.tripPrice}>${item.tripAmount}</Text>
            <FontAwesome name="angle-right" size={25} color="#0D1317" />
          </View>
          <RatingStars rating={item.tripRating} />
        </View>
      </View>

      <View>
        <Image
          source={item.tripMap}
          resizeMode={'contain'}
          style={{ width: '100%', height: 200 }}
        />
      </View>
    </Pressable>
  );
};

export default RidesItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tripHolder: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tripInfo: {},
  rightPan: {
    alignItems: 'flex-end',
  },
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tripPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
