import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

const RidesAllTopicItem = ({ navigation, item }) => {
  const handlePress = () => {
    console.log('Topic==>', item);
    alert('Handle press and navigation here');
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.itemWrapper}>
        <View
          style={[
            styles.itemWrapper,
            { padding: 0, justifyContent: 'flex-start', gap: 10 },
          ]}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={28}
            color="#0D1317"
          />
          <Text style={{ color: '#0D1317', fontSize: 17 }}>
            {item.topicTitle}
          </Text>
        </View>
        <FontAwesome name="angle-right" size={28} color="#0D1317" />
      </View>
      <Divider style={{ marginTop: 15 }} />
    </Pressable>
  );
};

export default RidesAllTopicItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
