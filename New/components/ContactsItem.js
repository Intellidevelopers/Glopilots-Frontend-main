import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Checkbox, Divider, RadioButton } from 'react-native-paper';

const ContactsItem = ({
  item,
  selectedRider,
  setSelectedRider,
  navigation,
}) => {
  const [checked, setChecked] = React.useState('');

  const letter = item.firstName[0].toUpperCase();
  const handleSelect = () => {
    setSelectedRider(item);
    setChecked(item.userNumber); // Toggle the checked state
    const contact = JSON.stringify(item, 0, 2);
    //alert(contact);
  };

  return (
    <Pressable onPress={handleSelect} style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.itemWrapper}>
          <View style={styles.shortName}>
            <Text
              style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold' }}>
              {letter}
            </Text>
          </View>
          <View>
            <Text style={styles.labels}>
              {item?.firstName} {item?.lastName}
            </Text>
            <Text style={styles.labels}>{item?.userNumber}</Text>
          </View>
        </View>

        <RadioButton
          value={selectedRider.userNumber}
          status={
            checked === selectedRider.userNumber ? 'checked' : 'unchecked'
          }
          onPress={() => handleSelect(item)}
        />
      </View>

      <Divider />
    </Pressable>
  );
};

export default ContactsItem;

const styles = StyleSheet.create({
  container: {},
  itemWrapper: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  shortName: {
    backgroundColor: '#4460EF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    width: 38,
    height: 38,
  },
  labels: {
    fontSize: 16,
    color: '#0D1317',
    marginVertical: 1,
  },
});
