import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
// import Header from './components/Header';
import moment from 'moment';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { RIDE_DATA, WHEELS, FOODY, PACKAGES, TRAVELS } from './resources/data';
import RideListItem from './components/RideListItem';
import WheelsListItem from './components/WheelsListItem';
import FoodyListItem from './components/FoodyListItem';
import PackageListItem from './components/PackageListItem';
import TravelsListItem from './components/TravelsListItem';

const Activity = ({ navigation }) => {
  const [rideData, setRideData] = React.useState(RIDE_DATA.slice(0, 2));
  const [wheels, setWheels] = React.useState(WHEELS.slice(0, 2));
  const [foody, setFoody] = React.useState(FOODY.slice(0, 2));
  const [packages, setPackages] = React.useState(PACKAGES.slice(0, 2));
  const [travels, setTravels] = React.useState(TRAVELS.slice(0, 2));

  const [targetCode, setTargetCode] = React.useState(null);

  // React.useEffect(() => {
  //   console.log('wheels==>', wheels);
  // }, [wheels]);

  const loadMoreItems = (allData, stateDate, setter) => {
    const currentLength = stateDate.length;
    const newLength = currentLength + 1; 
    const newData = allData.slice(0, newLength);
    setter(newData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.past_activity_section}>
            <Text
              style={{
                fontSize: 20,
                color: '#0D1317',
                fontWeight: 'bold',
                marginVertical: 15,
              }}>
              Past Activities
            </Text>
            <View
              style={{
                backgroundColor: '#EEEEEE',
                padding: 15,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: '#adb5bd',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <View style={{}}>
                    <Text style={{ color: '#545454', fontSize: 18 }}>
                      You have no upcoming trips
                    </Text>
                  </View>
                  <View style={styles.reserveRideContainer}>
                    <Text style={{ color: '#0D1317', fontSize: 16 }}>
                      Reserve your ride   
                    </Text>
                    <Octicons
                      style={{ left: 10, marginTop: 3 }}
                      name="chevron-right"
                      size={18}
                      color="#000"
                    />
                  </View>
                </View>
                <View>
                  <Image
                    source={require('./assets/calder.jpg')}
                    resizeMode="contain"
                    style={{ width: 24, height: 24 }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{}}>
            <Image
              source={require('./assets/image3.png')}
              resizeMode="contain"
              style={{ width: '100%', height: 238 }}
            />
          </View>

          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontWeight: 'bold', color: '#0D1317', fontSize: 18 }}>
                2491 Purdue Ave, Los Angeles
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                <Text style={{ color: '#545454', fontSize: 16 }}>Dec 12</Text>
                <MaterialIcons
                  style={{ marginHorizontal: 5 }}
                  name="circle"
                  size={4}
                  color="#0D1317"
                />
                <Text style={{ color: '#545454', fontSize: 16 }}>05:36 PM</Text>
              </View>
              <Text style={{ color: '#0D1317', fontSize: 16 }}>$14.98</Text>
    
      <Pressable
        onPress={() => {
        }}
        style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#EEEEEE', borderRadius: 20, width: '25%', paddingVertical: 10, justifyContent: 'center'}}
      >
       
        <Text style={{ marginLeft: 5, fontsize: 18, marginRight: 2,}}>Reorder</Text>
      </Pressable>

            </View>

            {/* Ride Section */}
            <View style={{ marginBottom: 15, fontSize: 20 }}>
              <Text style={styles.sectionListTitle}>Ride</Text>

              {/* Ride Section Item 1 */}
              <FlatList
                data={rideData}
                renderItem={({ item }) => (
                  <RideListItem 
                  item={item} 
                  navigation={navigation}
                  />
                )}
              />
              <View style={{ padding: 10, fontSize: 18 }}>
                {rideData.length < RIDE_DATA.length && (
                  <Text
                    onPress={() => loadMoreItems(RIDE_DATA, rideData, setRideData)}
                    style={{ color: '#4460EF', alignSelf: 'flex-end', fontSize: 18 }}>
                    View more
                  </Text>
                )}
              </View>
            </View>

            {/* Scooter, 2 Wheels & Tri-Cycle Section */}
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.sectionListTitle}>
                Scooter, 2 Wheels & Tri-Cycle
              </Text>

              {/* Scooter Section Item 1 */}
              <FlatList
                data={wheels}
                renderItem={({ item }) => (
                  <WheelsListItem 
                  item={item} 
                   navigation={navigation}
                  />
                )}
              />

              <View style={{ padding: 10 }}>
                {wheels.length < WHEELS.length && (
                  <Text
                    onPress={() => loadMoreItems(WHEELS, wheels, setWheels)}
                    style={{ color: '#4460EF', alignSelf: 'flex-end' }}>
                    View more
                  </Text>
                )}
              </View>
            </View>

            {/* Food & Grocery Section */}
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.sectionListTitle}>Food & Grocery</Text>

              {/* Food & Grocery Section Item 1 */}
              <FlatList
                data={foody}
                renderItem={({ item }) => (
                  <FoodyListItem 
                  item={item} 
                   navigation={navigation}
                  />
                )}
              />

              <View style={{ padding: 10 }}>
                {foody.length < FOODY.length && (
                  <Text
                    onPress={() => loadMoreItems(FOODY, foody, setFoody)}
                    style={{ color: '#4460EF', alignSelf: 'flex-end' }}>
                    View more
                  </Text>
                )}
              </View>
            </View>

            {/* Package Section */}
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.sectionListTitle}>Package</Text>

              {/* Package Section Item 1 */}
              <FlatList
                data={packages}
                renderItem={({ item }) => (
                  <PackageListItem 
                  item={item} 
                   navigation={navigation}
                  />
                )}
              />

              <View style={{ padding: 10 }}>
                {packages.length < PACKAGES.length && (
                  <Text
                    onPress={() => loadMoreItems(PACKAGES, packages, setPackages)}
                    style={{ color: '#4460EF', alignSelf: 'flex-end' }}>
                    View more
                  </Text>
                )}
              </View>
            </View>

            {/* Travel & Explore Section */}
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.sectionListTitle}>Travel & Explore</Text>

              {/* Travel Section Item 1 */}
              <FlatList
                data={travels}
                renderItem={({ item }) => (
                  <TravelsListItem 
                  item={item} 
                   navigation={navigation}
                  />
                )}
              />

              <View style={{ padding: 10 }}>
                {travels.length < TRAVELS.length && (
                  <Text
                    onPress={() => loadMoreItems(TRAVELS, travels, setTravels)}
                    style={{ color: '#4460EF', alignSelf: 'flex-end' }}>
                    View more
                  </Text>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  past_activity_section: {
    paddingHorizontal: 15,
    //backgroundColor: 'blue'
  },
  reserveRideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionListTitle: {
    fontWeight: 'bold',
    color: '#0D1317',
    fontSize: 18,
  },
});
