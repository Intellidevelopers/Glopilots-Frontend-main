import React from 'react';
import { StyleSheet, Pressable, Image, View, Text, Alert } from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import moment from 'moment';

const SupportTipListItem = ({ item, navigation }) => {
  const date = moment(item.tripDate);
  const formattedDate = date.format('MMM DD');

  const viewPackage = () => {
    //navigation.navigate('TripDetails', { item: item });
    Alert.alert('Packages Navigtion Data', JSON.stringify(item, null, 2));
  };

  return (
    <Pressable onPress={viewPackage} style={styles.sectionItemContainer}>
      <View style={styles.sectionListItemHolder}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            padding: 2,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Image
            source={require('../assets/tricycle.png')}
            resizeMode="contain"
            style={{ width: 48, height: 48 }}
          />
        </View>

        <View style={{ left: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#0D1317' }}>
            {item.packageTItle}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 2,
            }}>
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {item.packageDate}
            </Text>
            <MaterialIcons
              style={{ marginHorizontal: 5 }}
              name="circle"
              size={4}
              color="#0D1317"
            />
            <Text style={{ color: '#545454', fontSize: 12 }}>
              {item.packageTime}
            </Text>
          </View>
          <Text style={{ color: '#545454', fontSize: 12 }}>
            ${item.packageAmount}
          </Text>
        </View>
      </View>

      <Octicons name="chevron-right" size={19} color="#000" />
    </Pressable>
  );
};

export default SupportTipListItem;

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
