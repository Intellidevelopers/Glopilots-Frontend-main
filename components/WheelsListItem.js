import React from 'react';
import { StyleSheet, Pressable, Image, View, Text } from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import moment from 'moment';

const WheelsListItem = ({ navigation, item }) => {
  const date = moment(item.tripDate);
  const formattedDate = date.format('MMM DD');

  const viewRide = () => {
    navigation.navigate('TripDetails', { item: item });
  };

  return (
    <Pressable onPress={viewRide} style={styles.sectionItemContainer}>
      <View
        style={styles.sectionListItemHolder}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            padding: 2,
            alignItems: 'center',
            borderRadius: 2,
          }}>
          <Image
            source={item.tripIcon}
            resizeMode="contain"
            style={{ width: 48, height: 48 }}
          />
        </View>

        <View style={{ left: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#0D1317' }}>
            {item.tripFrom}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {formattedDate}
            </Text>
            <MaterialIcons
              style={{ marginHorizontal: 5 }}
              name="circle"
              size={4}
              color="#0D1317"
            />
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {item.tripTime}
            </Text>
          </View>
          <Text style={{ color: '#0D1317', fontSize: 12 }}>
            ${item.tripAmount}
          </Text>
        </View>
      </View>
      <Octicons name="chevron-right" size={19} color="#000" />
    </Pressable>
  );
};

export default WheelsListItem;

const styles = StyleSheet.create({
  sectionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    borderBottomColor: '#adb5bd',
  },
  sectionListItemHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
