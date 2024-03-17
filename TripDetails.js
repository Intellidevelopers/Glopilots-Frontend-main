import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  FontAwesome,
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Header from './components/Header';

const TripDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1, marginVertical:20}}>
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
                  01/14/23, 12:45 PM
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
                    $14.98
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
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
              <View style={{ left: 6 }}>
                <View style={{ width: '75%' }}>
                  <Text style={styles.locations}>
                    2491 Purdue Ave, Los Angeles, CA 90064, US
                  </Text>
                </View>
                <View style={{ marginVertical: 20 }}></View>
                <View style={{ width: '75%' }}>
                  <Text style={styles.locations}>
                    401 E Hillcrest Blvd, Inglewood, CA 90301, US
                  </Text>
                </View>
              </View>
              <View style={{}}>
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
                  Your trip with Jesse
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome
                  name="star"
                  size={16}
                  color="#4460EF"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={16}
                  color="#4460EF"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={16}
                  color="#4460EF"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={16}
                  color="#4460EF"
                  style={styles.star}
                />
                <FontAwesome
                  name="star"
                  size={16}
                  color="#4460EF"
                  style={styles.star}
                />
              </View>
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

            <View
              style={{
                padding: 10,
                backgroundColor: '#fff',
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{ padding: 5 }}>
                <Image
                  source={require('./assets/key_tag.png')}
                  resizeMode={'contain'}
                  style={{ width: 45, height: 45 }}
                />
              </View>
              <View style={{ left: 10 }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#0D1317',
                    fontWeight: 'bold',
                  }}>
                  Find Lost Item
                </Text>
                <Text style={{ color: '#545454', fontSize: 12 }}>
                  We can help you get in touch with your driver
                </Text>
              </View>
            </View>

            <View
              style={{
                padding: 10,
                backgroundColor: '#fff',
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{ padding: 5 }}>
                <Image
                  source={require('./assets/secured.png')}
                  resizeMode={'contain'}
                  style={{ width: 45, height: 45 }}
                />
              </View>
              <View style={{ left: 10 }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#0D1317',
                    fontWeight: 'bold',
                  }}>
                  Report Safety Issues
                </Text>
                <Text style={{ color: '#545454', fontSize: 12 }}>
                  Let us know if you have safety related issue
                </Text>
              </View>
            </View>

            <View
              style={{
                padding: 10,
                backgroundColor: '#fff',
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{ padding: 5 }}>
                <Image
                  source={require('./assets/wheel.png')}
                  resizeMode={'contain'}
                  style={{ width: 45, height: 45 }}
                />
              </View>
              <View style={{ left: 10 }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#0D1317',
                    fontWeight: 'bold',
                  }}>
                  Provide Driver Feedback
                </Text>
                <Text style={{ color: '#545454', fontSize: 12 }}>
                  For issues that aren't safety related
                </Text>
              </View>
            </View>

            <View
              style={{
                padding: 10,
                backgroundColor: '#fff',
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{ padding: 5 }}>
                <Image
                  source={require('./assets/output.png')}
                  resizeMode={'contain'}
                  style={{ width: 45, height: 45 }}
                />
              </View>
              <View style={{ left: 10 }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#0D1317',
                    fontWeight: 'bold',
                  }}>
                  Get Trip Help
                </Text>
                <Text style={{ color: '#545454', fontSize: 12 }}>
                  Need help for something else? Find it here
                </Text>
              </View>
            </View>

            <View
              style={{
                padding: 10,
                backgroundColor: '#fff',
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{ padding: 5 }}>
                <Image
                  source={require('./assets/cc.png')}
                  resizeMode={'contain'}
                  style={{ width: 45, height: 45 }}
                />
              </View>
              <View style={{ left: 10 }}>
                <Text style={{ color: '#4460EF', fontSize: 12 }}>
                  Safety Incident Reporting Line
                </Text>
              </View>
            </View>
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
  star: {
    paddingHorizontal: 2,
  },
});
