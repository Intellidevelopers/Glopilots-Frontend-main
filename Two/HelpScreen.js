import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  FlatList,
  Alert
} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {SUPPORT_TIPS} from './resources/data';
import SupportTipListItem from './components/SupportTipListItem';
import moment from 'moment';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

const HelpScreen = ({ navigation }) => {
  const [supportTips, setsupportTips] = React.useState( SUPPORT_TIPS.slice(0, 2));

const handleMoreOptios = () => {

  Alert.alert("All Tips", JSON.stringify(SUPPORT_TIPS, null, 2))
  
}

  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 20 }}>
      <View style={styles.container}>
        <Header navigation={navigation} title={'Help Center'} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.past_activity_section}>
            <Text
              style={{
                fontSize: 16,
                color: '#0D1317',
                fontWeight: 'bold',
                marginVertical: 15,
              }}>
              Conversation
            </Text>
          </View>

          <View style={styles.checkHolder}>
            <Image
              source={require('./assets/goodCheck.png')}
              resizeMode="contain"
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ left: 10, color: '#52b788', fontSize: 12 }}>
              Completed trip, $14.98
            </Text>
          </View>

          <View style={{ padding: 15 }}>
            <Text
              style={{ alignSelf: 'center', fontSize: 12, color: '#454545' }}>
              01/14/23, 12:45 PM
            </Text>
          </View>

          <View style={{ paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 12, color: '#6c757d' }}>
              Support Assistant
            </Text>
          </View>

          <View style={{ padding: 15, flexDirection: 'row' }}>
            <View style={{ width: '12%' }}>
              <Image
                source={require('./assets/userIcon.png')}
                resizeMode={'contain'}
                style={{ width: 25, height: 25, marginTop: 12 }}
              />
            </View>
            <View style={{ width: '88%' }}>
              <View
                style={{
                  backgroundColor: '#EEEEEE',
                  padding: 10,
                  width: '70%',
                  borderRadius: 8,
                }}>
                <Text style={{ fontSize: 11 }}>
                  Hi, Chris, Welcome to GloPilot support. How can we help you?
                </Text>
              </View>

              <View style={styles.listContainer}>
                <FlatList
                  data={supportTips}
                  renderItem={({ item }) => (
                    <SupportTipListItem tip={item} navigation={navigation} />
                  )}
                />

                <Pressable onPress={handleMoreOptios} style={styles.listItem}>
                  <Text style={styles.supportLabel}>More options</Text>
                  <Octicons name="chevron-right" size={15} color="#000" />
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  past_activity_section: {
    paddingHorizontal: 15,
    //backgroundColor: 'blue'
  },
  checkHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#D6EAD7',
  },
  listContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 6,
    borderColor: '#eeeeee',
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eeeeee',
  },
  supportLabel: {
    fontSize: 12,
  },
});
