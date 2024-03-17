import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const RidesHelpCardItem = ({ item }) => {
  const handleEdit = () => {
    alert(`Handle edit ${item.cardName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', color: '#0D1317', fontSize: 16 }}>
        {item.cardTitle}
      </Text>
      <Text style={{ color: '#6c757d', marginVertical: 5, fontSize: 16 }}>
        {item.cardDescription}
      </Text>

      <Text
        onPress={handleEdit}
        style={{ color: '#4460EF', marginTop: 15, fontSize: 16 }}>
        Edit {item.cardName}
      </Text>
    </View>
  );
};

export default RidesHelpCardItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ffffff',
    marginHorizontal: 8,
    width: 260,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 6,
  },
});
