import React from 'react';
import { StyleSheet, Pressable, Image, View, Text, Alert } from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import moment from 'moment';

const FoodyListItem = ({ item, navigation }) => {

  const date = moment(item.tripDate);
  const formattedDate = date.format('MMM DD');

  const viewFoodye = () => {
    //navigation.navigate('TripDetails', { item: item });
    Alert.alert("Food Navigtion Data", JSON.stringify(item, null, 2))

  };

  return (
    <Pressable onPress={viewFoodye} style={styles.sectionItemContainer}>
      <View style={styles.sectionListItemHolder}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            padding: 2,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Image
            source={item.foodyIcon}
            resizeMode="contain"
            style={{ width: 64, height: 64 }}
          />
        </View>

        <View style={{ left: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#0D1317' }}>
            {item.foodyTItle}
          </Text>
          <View
            style={{
              paddingVertical: 2,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {item.foodyDate}
            </Text>
            <MaterialIcons
              style={{ marginHorizontal: 5 }}
              name="circle"
              size={4}
              color="#0D1317"
            />
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {item.foodyTime}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#545454', fontSize: 12 }}>
              ${item.foodyAmount}
            </Text>
            <MaterialIcons
              style={{ marginHorizontal: 5 }}
              name="circle"
              size={4}
              color="#0D1317"
            />
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {item.foodyQuantity} Items
            </Text>
          </View>
        </View>
      </View>

      <Octicons name="chevron-right" size={19} color="#000" />
    </Pressable>
  );
};

export default FoodyListItem;

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
