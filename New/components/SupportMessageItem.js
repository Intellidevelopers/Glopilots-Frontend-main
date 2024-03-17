import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const SupportMessageItem = ({ navigation, item }) => {
  const handlePress = () => {
    alert('Handle press and navigation here');
    navigation.navigate(item.navPath);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.itemWrapper}>
        <Text style={styles.supportTitle}>{item.supportTitle}</Text>
        <FontAwesome name="angle-right" size={28} color="#0D1317" />
      </View>
      <Divider style={{ marginTop: 3 }} />
    </Pressable>
  );
};

export default SupportMessageItem;

const styles = StyleSheet.create({
  itemWrapper: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  supportTitle: {
    color: '#0D1317',
    fontSize: 17,
  },
});
