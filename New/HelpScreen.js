import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Header from './components/Header';
import MiniTabHeader from './resources/MiniTabHeader';
import RidesHelpScreen from './RidesHelpScreen';
import DeliverHelpScreen from './DeliverHelpScreen';

const HelpScreen = ({ route, navigation }) => {
  const { rideItem, orderItem } = route.params;
  const [tabScreen, setTabScreen] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <View style={styles.container}>
        <Header navigation={navigation} title={'Help'} />
        <MiniTabHeader tabScreen={tabScreen} setTabScreen={setTabScreen} />

        <ScrollView
          style={{ backgroundColor: '#f8f8f8f8' }}
          showsVerticalScrollIndicator={false}>
          {tabScreen === 0 ? (
            <RidesHelpScreen navigation={navigation} rideItem={rideItem} />
          ) : (
            <DeliverHelpScreen navigation={navigation} orderItem={orderItem} />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8f8',
  },
  activeScreenLabel: {
    marginTop: 10,
  },
});
