import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Octicons } from '@expo/vector-icons';

const HelpScreen = ({ navigation, tip }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.supportLabel}>
        {tip.tipLabel}
      </Text>
      <Octicons name="chevron-right" size={15} color="#000" />
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eeeeee',
  },
  supportLabel: {
    fontSize: 12,
  },
});
