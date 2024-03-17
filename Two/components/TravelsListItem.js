import React from 'react';
import { StyleSheet, Pressable, Image, View, Text, Alert } from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import moment from 'moment';

const TravelsListItem = ({ item, navigation }) => {
  const date = moment(item.tripDate);
  const formattedDate = date.format('MMM DD');

  const viewTravels = () => {
    //navigation.navigate('TripDetails', { item: item });
    Alert.alert('Travels Navigtion Data', JSON.stringify(item, null, 2));
  };

  return (
    <Pressable onPress={viewTravels} style={styles.sectionItemContainer}>
      <View style={styles.sectionListItemHolder}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            padding: 2,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Image
            source={item.travelIcon}
            resizeMode="contain"
            style={{ width: 48, height: 48 }}
          />
        </View>

        <View style={{ left: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#0D1317' }}>
            {item.travelFrom} - {item.travelTo}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 2,
            }}>
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {item.travelDate}
            </Text>
            <MaterialIcons
              style={{ marginHorizontal: 5 }}
              name="circle"
              size={4}
              color="#0D1317"
            />
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {item.travelTime}
            </Text>
          </View>
          <Text style={{ color: '#545454', fontSize: 12 }}>
            ${item.travelAmount}
          </Text>
        </View>
      </View>

      <Octicons name="chevron-right" size={19} color="#000" />
    </Pressable>
  );
};

export default TravelsListItem;

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
