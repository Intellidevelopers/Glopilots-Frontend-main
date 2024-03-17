import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MiniTabHeader = ({ setTabScreen, tabScreen }) => {
  const handleTabSwitch = (index) => {
    setTabScreen(index);
    //setTabExtension
  };

  return (
    <View>
      <View style={styles.innerNavHolder}>
        <View style={styles.navHolder}>
          <Pressable
            onPress={() => handleTabSwitch(0)}
            style={[styles.navTab, tabScreen === 0 && styles.activeScreen]}>
            <Text
              style={[
                styles.tabLabel,
                tabScreen === 0 && styles.activeTabLabel,
              ]}>
              Rides
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handleTabSwitch(1)}
            style={[styles.navTab, tabScreen === 1 && styles.activeScreen]}>
            <Text
              style={[
                styles.tabLabel,
                tabScreen === 1 && styles.activeTabLabel,
              ]}>
              Delivery
            </Text>
          </Pressable>
        </View>

        {/* <View style={styles.activeScreenLabel}>
                    <Text style={{ fontSize: 20, color: '#0D1317', fontWeight: 'bold' }}>
                        {tabScreen === 0 ? "Your Trips" : "Your Orders"}
                    </Text>
                </View> */}
      </View>
    </View>
  );
};

export default MiniTabHeader;

const styles = StyleSheet.create({
  innerNavHolder: {
    backgroundColor: '#f8f8f8f8',
    padding: 19,
  },
  navHolder: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  navTab: {
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 20,
    width: 85,
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
