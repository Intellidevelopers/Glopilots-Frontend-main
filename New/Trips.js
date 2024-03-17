import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import Header from './components/Header';
import TripsScreen from './TripsScreen';
import OrderScreen from './OrderScreen';

const Trips = ({ navigation }) => {
  const [tabScreen, setTabScreen] = React.useState(0);

  const handleTabSwitch = (index) => {
    setTabScreen(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <View style={styles.container}>
        <Header navigation={navigation} title={'Your Trips'} />
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

          <View style={styles.activeScreenLabel}>
            <Text
              style={{ fontSize: 20, color: '#0D1317', fontWeight: 'bold' }}>
              {tabScreen === 0 ? 'Your Trips' : 'Your Orders'}
            </Text>
          </View>
        </View>
        <ScrollView
          style={{ backgroundColor: '#f8f8f8f8' }}
          showsVerticalScrollIndicator={false}>
          {tabScreen === 0 ? (
            <TripsScreen navigation={navigation} />
          ) : (
            <OrderScreen navigation={navigation} />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  activeScreenLabel: {
    marginTop: 10,
  },
});
