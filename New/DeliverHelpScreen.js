import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ORDERS_DATA } from './data/data';
import RestaurantsScreen from './RestaurantsScreen';
import StoresScreen from './StoresScreen';

const DeliverHelpScreen = ({ orderItem, navigation }) => {
  const [orderData, setOrderData] = React.useState(ORDERS_DATA[0]);
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.activeScreenLabel}>
        <View style={styles.innerNavHolder}>
          <View style={styles.navHolder}>
            <Pressable
              onPress={() => handleTabChange(0)}
              style={[styles.navTab, tabIndex === 0 && styles.activeScreen]}>
              <Text
                style={[
                  styles.tabLabel,
                  tabIndex === 0 && styles.activeTabLabel,
                ]}>
                Restaurants
              </Text>
            </Pressable>

            <Pressable
              onPress={() => handleTabChange(1)}
              style={[styles.navTab, tabIndex === 1 && styles.activeScreen]}>
              <Text
                style={[
                  styles.tabLabel,
                  tabIndex === 1 && styles.activeTabLabel,
                ]}>
                Stores
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      {tabIndex === 0 ? (
        <RestaurantsScreen item={orderData} navigation={navigation} />
      ) : (
        <StoresScreen />
      )}
    </View>
  );
};

export default DeliverHelpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8f8',
  },
  innerNavHolder: {
    backgroundColor: '#f8f8f8f8',
    padding: 15,
  },
  navHolder: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  navTab: {
    backgroundColor: '#eeeeee',
    padding: 12,
    borderRadius: 20,
    width: 120,
    alignItems: 'center',
  },
  activeScreen: {
    backgroundColor: '#4460EF',
  },
  tabLabel: {
    color: '#0D1317',
  },
  activeTabLabel: {
    color: '#ffffff',
  },
});
