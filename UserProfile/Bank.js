import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BankHead from '../BankHead';

const banks = [
  { name: 'Chase Bank', flag: require('../assets/icons/chase.png') },
  { name: 'Bank of America', flag: require('../assets/icons/pnc.png') },
  { name: 'Wells Fargo Bank', flag: require('../assets/icons/boa.png') },
  { name: 'PNC Bank', flag: require('../asset/wf.png') },
  { name: 'TD Bank', flag: require('../assets/icons/td.png') },
];

const Bank = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [selectedBank, setSelectedBank] = useState(banks[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleDropdown = () => {
    setVisible(!visible);
  };

  const handleSelectItem = (item) => {
    const selectedBank = banks.find((bank) => bank.name === item);
    setSelectedBank(selectedBank);
    setVisible(false);

    // Navigate to the SelectedBank screen and pass the selected bank as a parameter
    navigation.navigate('SelectedBank', { name: selectedBank });
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const renderBankSections = () => {
    const filteredBanks = banks.filter((bank) =>
      bank.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <View>
      <View style={styles.searchContainer}>
      <Image
                source={require('../assets/icons/search.png')}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
        <TextInput
          style={styles.searchInput}
          placeholder="Search among 3k+ banks"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <Text style={styles.sectionHeader}>Most Popular</Text>
      {filteredBanks.map((bank, index) => {
        const isSelected = bank.name === selectedBank.name;
        return (
          <TouchableOpacity
            key={index}
            style={styles.modalItems}
            onPress={() => handleSelectItem(bank.name)}
          >
            <View style={styles.modalItem}>
              <Image
                source={bank.flag}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
              <Text style={[styles.modalItemText, { flex: 1 }]}>
                {bank.name}
              </Text>
              <Icon name="chevron-right" />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
    );
  };

  return (
    <View style={styles.container}>
      <BankHead title="Select Bank" navigation={navigation}/>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>{renderBankSections()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  modalHeading: {
    fontSize: 20,
    borderBottomColor: '#F4F4F4F4',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalContent: {
    flexGrow: 1,
  },
  sectionHeader: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 18,
    fontWeight: 'bold',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  modalItemText: {
    fontSize: 20,
    textAlign: 'left',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 16,
    borderColor: '#F4F4F4F4',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    height: 56,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,

  },
});

export default Bank;

