import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RIDE_DATA } from './data/data';
import RidesItem from './components/RidesItem';

const TripsScreen = ({ navigation }) => {
  const [rideData, setRideData] = React.useState(RIDE_DATA);

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={rideData}
        renderItem={({ item }) => (
          <RidesItem item={item} navigation={navigation} goNext={true} />
        )}
      />
    </View>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
