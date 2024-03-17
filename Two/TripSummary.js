import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable, 
  SafeAreaView,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Divider, CheckBox } from '@rneui/themed';
import Header from './components/Header';
import Head from '../Head';
import TabHeader from './components/TabHeader';
import { TRAVELLER_INFO } from './resources/task2Data';
import TripSummaryItem from './components/TripSummaryItem';
import FlightReviewItem from './components/FlightReviewItem';

const TripSummary = ({ navigation }) => {
  const [flightData, setFlightData] = React.useState(TRAVELLER_INFO);
  const [activeTab, setActiveTab] = React.useState(0);
  const [reviewModal, setReviewModal] = React.useState(false);

  const handleContinue = () => {
    setReviewModal(false);
    navigation.navigate('TravellerInfo', {
      tripData: flightData,
      amount: flightData.baseFare,
    });
  };

  const handleTabSelect = (activeTab) => {
    setActiveTab(activeTab);
  };

  const TabHeader = () => {
    return (
      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => handleTabSelect(0)}
          style={[
            styles.tab,
            styles.leftTab,
            {
              backgroundColor: activeTab === 0 ? '#4460EF' : '#eeeeee',
            },
          ]}>
          <Text
            style={[
              styles.label,
              { color: activeTab === 0 ? '#ffffff' : '#0D1317' },
            ]}>
            Itinerary
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handleTabSelect(1)}
          style={[
            styles.tab,
            styles.rightTab,
            {
              backgroundColor: activeTab === 1 ? '#4460EF' : '#eeeeee',
            },
          ]}>
          <Text
            style={[
              styles.label,
              { color: activeTab === 1 ? '#ffffff' : '#0D1317' },
            ]}>
            Fare rules
          </Text>
        </Pressable>
      </View>
    );
  };

  const LeftTabPan = () => {
    return (
      <View style={styles.content}>
        <FlatList
          data={flightData.flight}
          renderItem={({ item }) => <TripSummaryItem item={item} />}
          scrollEnabled={false}
        />
      </View>
    );
  };

  const RightTabPan = () => {
    return (
      <View style={{ padding: 15 }}>
        <Text
          onPress={() => navigation.navigate('ChatDriver')}
          style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color:'red' }}>
          Click here to to to chat
        </Text>
      </View>
    );
  };

  const FlightReviewModal = () => {
    return (
      <Modal
        animationType={'slide'}
        visible={reviewModal}
        transparent
        statusBarTranslucent
        onRequestClose={() => setReviewModal(false)}>
        <View
          //onPress={() => setReviewModal(false)}
          style={{
            height: '100%',
            backgroundColor: '#00000099',
            paddingHorizontal: 15,
          }}>
          <Pressable 
            style={{height:'30%'}} 
            onPress={() => setReviewModal(false)}>
          </Pressable>
          <View style={styles.modalContent}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View style={[styles.summaryHeader, { width: '25%' }]}>
                <Feather
                  onPress={() => setReviewModal(false)}
                  name={'x'}
                  color={'red'}
                  size={30}
                />
              </View>
              <View style={[styles.summaryHeader, { width: '50%' }]}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#0D1317',
                    fontSize: 17,
                  }}>
                  Booking Summary
                </Text>
              </View>
              <View style={[styles.summaryHeader, { width: '25%' }]}></View>
            </View>
            <Divider style={{ marginVertical: 5 }} />
            <ScrollView style={{}}>
              <View style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 15 }}>
                  <FlatList
                    data={flightData.flight}
                    renderItem={({ item }) => <FlightReviewItem item={item} />}
                    scrollEnabled={false}
                  />

                  <View style={{}}>
                    <Text style={{ fontWeight: 'bold', fontSize:17 }}>Flight base fare</Text>

                    <View>
                      <View style={styles.flightFareElements}>
                        <Text style={styles.fareLabel}>Adult x 1</Text>
                      </View>

                      <View style={styles.flightFareElements}>
                        <Text style={styles.fareLabel}>Base fare</Text>
                        <Text style={styles.fareVlaue}>
                          ${flightData.baseFare}
                        </Text>
                      </View>

                      <View style={styles.flightFareElements}>
                        <Text style={styles.fareLabel}>Discount</Text>
                        <Text style={styles.fareVlaue}>
                          {flightData.discount > 0
                            ? `$${flightData.discount}`
                            : 'No'}
                        </Text>
                      </View>

                      <View style={styles.flightFareElements}>
                        <Text style={styles.fareLabel}>Total fare</Text>
                        <Text style={styles.fareVlaue}>
                          ${flightData.baseFare - flightData.discount}
                        </Text>
                      </View>

                      <Divider style={{ marginVertical: 15 }} />

                      <View style={styles.flightFareElements}>
                        <Text style={styles.fareLabel}>Total</Text>
                        <Text style={styles.fareVlaue}>
                          ${flightData.baseFare - flightData.discount}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 2,
                          marginVertical: 15,
                        }}>
                        <Text style={{ fontWeight: 'bold', color: 'red' }}>
                          Note:{' '}
                        </Text>
                        <Text style={{ color: 'red' }}>
                          This price may increase if you book later
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
            <Pressable
              onPress={handleContinue}
              style={[styles.continueBotton, { margin: 10, marginBottom: 40 }]}>
              <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>
                Continue
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  React.useEffect(() => {}, [activeTab]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 0 }}>
      <View style={styles.container}>
        <Head navigation={navigation} title={'Trip Summary'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TabHeader />

          {activeTab === 0 ? <LeftTabPan /> : <RightTabPan />}
        </ScrollView>
        <View style={styles.floater}>
          <View>
            <Text
              style={{
                color: '#4460EF',
                fontWeight: 'bold',
                fontSize: 17,
                marginVertical: 3,
                letterSpacing: 1,
              }}>
              ${flightData.baseFare}
            </Text>
            <Text style={{ color: '#4460EF' }}>Pay Full Fare</Text>
          </View>
          <Pressable
            onPress={() => setReviewModal(true)}
            style={styles.continueBotton}>
            <Text style={{ color: '#fff', fontSize: 16 }}>
              Continue Booking
            </Text>
          </Pressable>
        </View>
      </View>
      {FlightReviewModal()}
    </SafeAreaView>
  );
};

export default TripSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  tabContainer: {
    //backgroundColor:'red',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 1,
  },
  tab: {
    padding: 13,
    alignItems: 'center',
    width: '47%',
    //borderWidth:1
  },
  rightTab: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  leftTab: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
  },
  floater: {
    padding: 10,
    backgroundColor: '#ffffff',
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    zIndex: 1,
    bottom: '3%',
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
  },
  continueBotton: {
    backgroundColor: '#4460EF',
    alignItems: 'center',
    padding: 13,
    borderRadius: 6,
  },
  content: {
    padding: 5,
    marginBottom: 90,
  },
  modalContent: {
    //padding:15,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    height: '70%',
  },
  summaryHeader: {
    width: '',
  },
  flightFareElements: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  fareLabel: {
    fontSize:16,
    color: '#454545',
  },
  fareVlaue:{
    fontWeight: 'bold',
    color:'#0D1317',
    fontSize:16,
  }
});
