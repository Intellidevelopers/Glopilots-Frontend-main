import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RidesItem from './components/RidesItem';
import {
  RIDES_ALL_TOPICS,
  RIDE_DATA,
  RIDE_HELP_CARD,
  SUPPORT_MESSAGE_LIST,
} from './data/data';
import RidesHelpCardItem from './components/RidesHelpCardItem';
import RidesAllTopicItem from './components/RidesAllTopicItem';
import { Divider } from 'react-native-paper';
import SupportMessageItem from './components/SupportMessageItem';

const RidesHelpScreen = ({ navigation }) => {
  const [helpCards, setHelpCards] = React.useState(RIDE_HELP_CARD);
  const [allTopics, setAllTopics] = React.useState(RIDES_ALL_TOPICS);
  const [supportList, setSupportList] = React.useState(SUPPORT_MESSAGE_LIST);
  const [rideItem, setRideItem] = React.useState(RIDE_DATA[0]);

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}> Your last trip</Text>
      </View>

      <RidesItem item={rideItem} navigation={navigation} goNext={false} />

      <View style={{ backgroundColor: '#ffffff', padding: 15 }}>
        <Text style={{ color: '#6c757d', fontSize: 16 }}>
          Need help with this trip?
        </Text>
      </View>

      <View style={{ marginVertical: 20, marginHorizontal: 8 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={helpCards}
          renderItem={({ item }) => <RidesHelpCardItem item={item} />}
        />
      </View>

      <View>
        <Text style={[styles.title, { marginHorizontal: 15 }]}>All topics</Text>

        <Divider style={{ marginTop: 10 }} />

        <FlatList
          scrollEnabled={false}
          data={allTopics}
          renderItem={({ item }) => (
            <RidesAllTopicItem item={item} navigation={navigation} />
          )}
        />
      </View>

      <View>
        <Text style={[styles.title, { margin: 15 }]}>Support Messages</Text>
        <Divider style={{ marginTop: 10 }} />

        <FlatList
          scrollEnabled={false}
          data={supportList}
          renderItem={({ item }) => (
            <SupportMessageItem item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

export default RidesHelpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8f8',
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#0D1317',
    fontWeight: 'bold',
  },
});
