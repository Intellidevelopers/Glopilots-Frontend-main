import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = () => {
  const [value, setValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState('Percentage'); // Default to Percentage

  const tabsPercentage = [{ name: '0%' }, { name: '10%' }, { name: '15%' }, { name: '20%' }];
  const tabsDollars = [{ name: '$0' }, { name: '$1' }, { name: '$2' }];

  const tabsToDisplay = selectedOption === 'Percentage' ? tabsPercentage : tabsDollars;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {tabsToDisplay.map((item, index) => {
          const isActive = index === value;

          return (
            <View key={item.name} style={{ flex: 1 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setValue(index);
                }}>
                <View
                  style={[
                    styles.item,
                    isActive && { backgroundColor: '#4460EF' },
                  ]}>
                  <Text style={[styles.text, isActive && { color: '#ffffff' }]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
        {selectedOption === 'Dollars' && (
          <TouchableWithoutFeedback onPress={() => handleDotButtonPress()}>
            <View style={styles.dotButton}>
              <MaterialIcons name="fiber-manual-record" size={24} color="black" />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </SafeAreaView>
  );

  const handleDotButtonPress = () => {
    // Handle dot button action for Dollars
    // You can implement the desired behavior here
    console.log('Dot button pressed');
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 6,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
  },
  dotButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 6,
  },
});

export default Tab;
