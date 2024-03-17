import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RIDE_DATA } from './data/data';
import PersonalRideHistoryItem from './components/PersonalRideHistoryItem';

const PersonalRideHistoryTab = ({ navigation }) => {
  const [rideData, setRideData] = React.useState(RIDE_DATA);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={rideData}
        renderItem={({ item }) => (
          <PersonalRideHistoryItem item={item} avigation={navigation} />
        )}
      />
    </View>
  );
};

export default PersonalRideHistoryTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8f8',
  },
});
