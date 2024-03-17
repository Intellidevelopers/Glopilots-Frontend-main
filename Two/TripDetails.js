import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import {
  FontAwesome,
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Header from './components/Header';
import RatingStars from './resources/RatingStars';
import {HELP_MENU} from './resources/data';
import HelpListItem from "./components/HelpListItem"

const TripDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const [helpData, setHelpData] = React.useState(HELP_MENU);

  const date = moment(item.tripDate);
  const formattedDate = date.format('DD/MM/YY');

  console.log(HELP_MENU);

  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 20 }}>
      <View style={styles.container}>
        <Header navigation={navigation} title={'Trip Details'} />

        <View style={styles.past_activity_section}>
          <Text
            style={{
              fontSize: 16,
              color: '#0D1317',
              fontWeight: 'bold',
              marginVertical: 15,
            }}>
            Trip Details
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: -15 }}>
            <Image
              source={require('./assets/image3.png')}
              resizeMode="contain"
              style={{ width: '100%', height: 238 }}
            />
          </View>

          <View style={{ paddingHorizontal: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{ fontWeight: 'bold', color: '#0D1317' }}>
                  {formattedDate}, 12:45 PM
                </Text>

                <Text style={{ color: '#545454', fontSize: 12 }}>9AAN342</Text>
              </View>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{ fontWeight: 'bold', color: '#0D1317', right: 15 }}>
                    ${item.tripAmount}
                  </Text>
                  <Octicons name="chevron-right" size={19} color="#000" />
                </View>

                <Text style={{ color: '#4460EF', fontSize: 12 }}>
                  Add a tip
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: '75%',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '10%',
                  }}>
                  <MaterialIcons
                    name="circle"
                    size={9}
                    color="#4460EF"
                    style={styles.linePoints}
                  />
                  <View style={styles.verticalLine}></View>
                  <MaterialCommunityIcons
                    name="square"
                    size={9}
                    color="#4460EF"
                    style={styles.linePoints}
                  />
                </View>

                <View style={{ width: '70%' }}>
                  <View style={{}}>
                    <Text style={styles.locations}>{item.tripFrom}</Text>
                  </View>
                  <View style={{ marginVertical: 30 }}></View>
                  <View style={{}}>
                    <Text style={styles.locations}>{item.tripTo}</Text>
                  </View>
                </View>
              </View>

              <View style={{ width: '25%' }}>
                <Pressable style={styles.receiptButton}>
                  <Text style={{ color: '#0D1317' }}>Receipt</Text>
                </Pressable>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 8,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons
                  name="account-circle"
                  size={21}
                  color="#545454"
                  style={styles.linePoints}
                />

                <Text style={{ left: 10, color: '#0D1317', fontSize: 14 }}>
                  Your trip with {item.tripDriver}
                </Text>
              </View>

              <RatingStars rating={item.tripRating} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 15,
              borderBottomWidth: 0.5,
              borderTopWidth: 0.5,
              borderColor: '#adb5bd',
              marginVertical: 10,
            }}>
            <View style={{ width: '80%' }}>
              <Text style={{ color: '#545454', fontSize: 14 }}>
                After your trip, driver can't see your pickup or dropoff address
                details
              </Text>
              <Text style={{ fontSize: 12, color: '#4460EF' }}>
                View what your driver sees
              </Text>
            </View>
            <View style={{}}>
              <Image
                source={require('./assets/guard.png')}
                resizeMode={'contain'}
                style={{ width: 45, height: 45 }}
              />
            </View>
          </View>

          <View style={{ padding: 15 }}>
            <Text
              style={{
                fontSize: 16,
                color: '#0D1317',
                fontWeight: 'bold',
                bottom: 10,
              }}>
              Help
            </Text>

            <FlatList data={helpData} 
            renderItem={({item}) => (
              <HelpListItem 
              item={item} 
              navigation={navigation}
              />
            )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  past_activity_section: {
    paddingHorizontal: 15,
    //ackgroundColor: 'blue'
  },
  locations: {
    fontSize: 13,
    color: '#545454',
  },
  linePoints: {
    marginTop: -2,
    marginBottom: -2,
    padding: 0,
  },
  verticalLine: {
    width: 3,
    backgroundColor: '#4460EF',
    height: 70,
  },
  receiptButton: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
  },
});
