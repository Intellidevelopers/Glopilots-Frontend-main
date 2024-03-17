import './polyfills';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Divider } from '@rneui/themed';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { ACTIVE_RIDE, CANCEL_RIDE_REASONS, ORDER_SERVICES } from './data/data';
import ServicesItem from './components/ServicesItem';
import CancelRideReasonItem from './components/CancelRideReasonItem';

const ConfirmPickup = ({ navigation }) => {
  const [services, setServices] = useState(ORDER_SERVICES);
  const [trip, setTrip] = useState(ACTIVE_RIDE);
  const [cancelReasons, setCancelReasons] = useState(CANCEL_RIDE_REASONS);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showCancelRideModal, setShowCancelModal] = useState(false);
  const [showConfirmCancelModal, setShowConfirmCancel] = useState(false);
  const [tfx, setTfx] = useState(0);
  const bottomSheetRef = useRef(null);

  const rideCode = '0223';

  const callDriver = () => {
    alert('Calling driver...');
    setShowCallModal(false);
    showConfirmCancelModal && setShowConfirmCancel(false);
  };

  const handleCloseCancelRide = () => {
    setShowConfirmCancel(false);
  };

  const handleCancelButton = () => {
    alert('Order Cancelled');
    setShowCancelModal(false);
    setShowConfirmCancel(false);
  };

  const snapPoints = useMemo(() => ['42%', '60%', '90%'], []);
  const handleSheetChanges = useCallback((index) => {
    setTfx(index);
  }, []);

  const CallModal = () => {
    return (
      <Modal
        transparent
        visible={showCallModal}
        statusBarTranslucent={true}
        onRequestClose={() => setShowCallModal(false)}>
        <View style={{ flex: 1, backgroundColor: '#00000099' }}>
          <Pressable
            onPress={() => setShowCallModal(false)}
            style={{ height: '65%' }}></Pressable>
          <View style={styles.callModalContent}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, color: '#0D1317' }}>
              Contact {trip.driver.name}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 20,
              }}>
              <Text style={{ fontSize: 14, color: '#6c757d' }}>
                Not calling from {trip.driver.phone}
              </Text>

              <Text
                onPress={() => alert('Edit Number')}
                style={{ fontSize: 16, color: '#4460EF' }}>
                Edit
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#eeeeee',
                alignItems: 'center',
                padding: 10,
                borderRadius: 6,
              }}>
              <Text style={{ fontSize: 16, color: '#0D1317' }}>
                {trip.driver.phone}
              </Text>
            </View>

            <Pressable onPress={callDriver} style={styles.callButton}>
              <Text style={{ fontSize: 16, color: '#FFFFFF' }}>Free Call</Text>
            </Pressable>

            <Text style={{ fontSize: 13, color: '#6c757d' }}>
              {' '}
              Carrier charge may apply
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  const CancelRideModal = () => {
    return (
      <Modal
        transparent
        visible={showCancelRideModal}
        statusBarTranslucent={true}
        onRequestClose={() => setShowCancelModal(false)}>
        <View style={{ flex: 1, backgroundColor: '#00000099' }}>
          <Pressable
            onPress={() => setShowCancelModal(false)}
            style={{ height: '30%' }}></Pressable>
          <View
            style={[styles.callModalContent, { height: '70%', padding: 0 }]}>
            <View style={styles.cancelModalHeader}>
              <FontAwesome
                onPress={() => setShowCancelModal(false)}
                name="angle-left"
                size={28}
                color="#0D1317"
              />

              <Text style={{ fontSize: 15, color: '#0D1317' }}>
                Cancel this ride?
              </Text>

              <Text
                onPress={() => setShowCancelModal(false)}
                style={{ fontSize: 16, color: '#0D1317' }}>
                Skip
              </Text>
            </View>

            <Divider />

            <View style={styles.cancelReasonWrapper}>
              <View>
                <Text
                  style={{ marginVertical: 5, color: '#0D1317', fontSize: 16 }}>
                  Why do you want to cancel?
                </Text>
                <Text style={{ color: '#6c757d' }}>Optional</Text>
              </View>

              <View style={{ marginTop: 10 }}>
                <FlatList
                  data={cancelReasons}
                  renderItem={({ item }) => (
                    <CancelRideReasonItem
                      item={item}
                      setShowCancelModal={setShowCancelModal}
                      setShowConfirmCancel={setShowConfirmCancel}
                    />
                  )}
                />
              </View>

              <Pressable
                onPress={() => setShowCancelModal(false)}
                style={styles.callButton}>
                <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                  Keep my ride
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const ConfirmCancelModal = () => {
    return (
      <Modal
        transparent
        visible={showConfirmCancelModal}
        statusBarTranslucent={true}
        onRequestClose={() => setShowConfirmCancel(false)}>
        <View style={{ flex: 1, backgroundColor: '#00000099' }}>
          <Pressable
            onPress={() => setShowConfirmCancel(false)}
            style={{ height: '60%' }}></Pressable>

          <View
            style={[styles.callModalContent, { height: '40%', padding: 0 }]}>
            <View
              style={[styles.cancelModalHeader, { justifyContent: 'center' }]}>
              <Text style={{ fontSize: 15, color: '#0D1317' }}>
                Cancel this ride?
              </Text>
            </View>

            <Divider />

            <View style={{ padding: 15 }}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 16, color: '#0D1317' }}>
                Cancel ride with {trip.driver.name}
              </Text>

              <View style={{ paddingVertical: 10 }}>
                <Text style={{ fontSize: 14, color: '#0D1317' }}>
                  Your driver is already on the way
                </Text>
              </View>

              <Pressable
                onPress={handleCancelButton}
                style={{
                  backgroundColor: '#eeeeee',
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 6,
                }}>
                <Text style={{ fontSize: 16, color: 'red' }}>Yes, Cancel</Text>
              </Pressable>

              <Pressable onPress={callDriver} style={styles.callButton}>
                <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                  Call Driver
                </Text>
              </Pressable>

              <Pressable onPress={handleCloseCancelRide}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#0D1317',
                    alignSelf: 'center',
                  }}>
                  {' '}
                  No
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/vMap.png')}
        style={{ height: '100%', width: '100%' }}
        resizeMode={'cover'}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <View style={styles.meetUpHolder}>
            <Text style={styles.meetUpTitle}>
              Meet at the picking point of {trip.trip.tripFrom}
            </Text>

            <View style={styles.meetUpTimeWrapper}>
              <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
                {trip.trip.tripDuration}
              </Text>
              <Text style={{ color: '#ffffff' }}>Min</Text>
            </View>
          </View>

          <Divider style={{ marginVertical: 2 }} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ zIndex: 1, flex: 1 }}>
            <View style={styles.pinSection}>
              <Text style={{ color: '#0D1317' }}>Pin for this ride</Text>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                {trip.trip.tripPin.split('').map((number, index) => (
                  <Text key={index} style={styles.pinCode}>
                    {number}
                  </Text>
                ))}
              </View>
            </View>

            <Divider style={{ marginVertical: 2 }} />

            <View style={styles.driverSection}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={trip.driver.driverImage}
                  resizeMode={'contain'}
                  style={{ width: 40, height: 40, zIndex: 1 }}
                />
                <Image
                  source={trip.driver.vehicleImage}
                  resizeMode={'contain'}
                  style={{ width: 65, height: 65, left: -25 }}
                />

                <View style={styles.rating}>
                  <Text style={{ color: '#0D1317', fontSize: 13 }}>
                    {trip.driver.rating}
                  </Text>
                  <FontAwesome name={'star'} size={10} color={'#000000'} />
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#0D1317',
                    fontSize: 16,
                  }}>
                  {trip.driver.vehicleNumber}
                </Text>
                <Text style={{ color: '#495057', fontSize: 13 }}>
                  {trip.driver.vehicle}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                //paddingHorizontal:50,
                marginTop: 6,
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name={'account-check'}
                size={22}
                color={'#4460EF'}
              />
              <Text style={{ color: '#4460EF', fontSize: 15 }}>
                {trip.driver.name}
              </Text>
              <FontAwesome name={'circle'} size={5} color={'#000000'} />
              <Text style={{ color: '#000000', fontSize: 15 }}>
                {trip.driver.rating}
              </Text>
              <FontAwesome name={'star'} size={12} color={'#000000'} />
              <FontAwesome name={'circle'} size={5} color={'#000000'} />
              <Text style={{ color: '#495057', fontSize: 15 }}>
                Top-rated driver
              </Text>
            </View>

            <View style={styles.noteSection}>
              <TextInput
                placeholder={'Any pickup notes?'}
                style={styles.notes}
              />

              <Pressable
                onPress={() => setShowCallModal(true)}
                style={styles.roundIcon}>
                <FontAwesome name={'phone'} size={20} color={'#000000'} />
              </Pressable>

              <View style={styles.roundIcon}>
                <MaterialCommunityIcons
                  name={'white-balance-sunny'}
                  size={20}
                  color={'#000000'}
                />
              </View>
            </View>

            <Divider color="#eeeeee" width={6} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                padding: 10,
              }}>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <FontAwesome
                  name={'circle'}
                  size={11}
                  color={'#4460EF'}
                  style={{ left: 0.5, top: 2 }}
                />
                <View style={styles.vertLine}></View>
                <Fontisto
                  name={'rectangle'}
                  size={8}
                  color={'#4460EF'}
                  style={{ bottom: 2 }}
                />
              </View>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '84%',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ width: '90%' }}>
                    <Text
                      numberOfLines={2}
                      style={{
                        fontWeight: 'bold',
                        color: '#0D1317',
                        fontSize: 15,
                      }}>
                      {trip.trip.tripFrom}
                    </Text>
                  </View>

                  <View style={{ width: '25%', alignItems: 'flex-end' }}>
                    <Text style={{ color: '#0D1317' }}>
                      {trip.trip.tripTime}
                    </Text>
                  </View>
                </View>

                <View style={{ paddingVertical: 20 }}>
                  <Text style={{ color: '#6c757d' }}>Ride</Text>
                </View>

                <View style={{}}>
                  <Text style={{ color: '#0D1317' }}>{trip.trip.tripTo}</Text>
                </View>
              </View>
            </View>

            <Divider color="#eeeeee" width={6} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Ionicons
                  name={'person-outline'}
                  size={20}
                  color={'#000000'}
                  style={{ bottom: 2 }}
                />

                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#0D1317',
                    }}>
                    ${trip.trip.tripAmount}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                    }}>
                    <Text style={{ color: '#0D1317' }}>Personal </Text>

                    <FontAwesome name={'circle'} size={5} color={'#000000'} />

                    <Text style={{ color: '#0D1317' }}>Visa 1590</Text>
                  </View>
                </View>
              </View>

              <View>
                <Text style={{ color: '#4460EF' }}>{trip.trip.tripTime}</Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#eeeeee',
                padding: 15,
                margin: 10,
                borderRadius: 8,
              }}>
              <Text>If a co-rider joins, save up to 20% discount</Text>
            </View>

            {tfx === 2 && (
              <>
                <Divider style={{ marginVertical: 2 }} />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                    padding: 10,
                  }}>
                  <AntDesign name={'sharealt'} size={22} color={'#000000'} />
                  <Text style={{ color: '#0D1317', fontSize: 16 }}>
                    Share trip status
                  </Text>
                </View>

                <Divider style={{ marginVertical: 2 }} />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Pressable
                    onPress={() => setShowCancelModal(true)}
                    style={styles.cancel}>
                    <Text style={{ color: 'red', fontSize: 16 }}>Cancel</Text>
                  </Pressable>

                  <Divider orientation={'vertical'} width={1} />

                  <Pressable
                    onPress={() => navigation.navigate('RideHistory')}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50%',
                      gap: 8,
                      padding: 15,
                    }}>
                    <MaterialCommunityIcons
                      name={'shield'}
                      size={22}
                      color={'#4460EF'}
                    />
                    <Text style={{ color: '#0D1317' }}>Safety</Text>
                  </Pressable>
                </View>

                <Divider color="#eeeeee" width={6} />

                <View style={{ paddingVertical: 10 }}>
                  <FlatList
                    data={services}
                    renderItem={({ item }) => <ServicesItem item={item} />}
                    scrollEnabled={false}
                    numColumns={4}
                  />
                </View>
              </>
            )}
          </ScrollView>
        </View>
      </BottomSheet>
      {CallModal()}
      {CancelRideModal()}
      {ConfirmCancelModal()}
    </View>
  );
};

export default ConfirmPickup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    flex: 1,
  },
  meetUpHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10,
    ///borderBottomWidth: 2
  },
  meetUpTimeWrapper: {
    backgroundColor: '#4460EF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 40,
    height: 40,
  },
  meetUpTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '80%',
    color: '#0D1317',
  },
  pinSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  pinCode: {
    backgroundColor: '#000000',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 3,
  },
  driverSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dee2e6',
    paddingHorizontal: 3,
    gap: 3,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 11,
    bottom: 2,
  },
  noteSection: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
    marginVertical: 5,
  },
  roundIcon: {
    backgroundColor: '#eeeeee',
    borderRadius: 40,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notes: {
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    width: '73%',
  },
  vertLine: {
    width: 3,
    height: 80,
    backgroundColor: '#4460EF',
    right: 0,
  },
  callModalContent: {
    backgroundColor: '#ffffff',
    height: '35%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 15,
  },
  callButton: {
    backgroundColor: '#4460EF',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
    marginVertical: 15,
  },
  cancel: {
    alignItems: 'center',
    width: '50%',
    padding: 15,
  },
  cancelModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  cancelReasonWrapper: {
    padding: 15,
  },
});
