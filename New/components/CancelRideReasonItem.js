import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Alert } from 'react-native';
import { Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CancelRideReasonItem = ({
  item,
  setShowCancelModal,
  setShowConfirmCancel,
}) => {
  const handleSelect = () => {
    const reason = JSON.stringify(item, 0, 2);
    Alert.alert('Reason', reason);
    setShowCancelModal(false);
    setShowConfirmCancel(true);
  };

  return (
    <>
      <Pressable onPress={handleSelect} style={styles.container}>
        <MaterialCommunityIcons
          name={item.reasonIcon}
          color={'#000000'}
          size={20}
        />
        <Text style={{ color: '#0D1317', fontSize: 16 }}>
          {item.reasonTile}
        </Text>
      </Pressable>
      <Divider />
    </>
  );
};

export default CancelRideReasonItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
