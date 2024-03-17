import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import HeaderFile from '../headers/HeaderFile';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { ADD_ONS } from '../data/data';
import AddOnsItem from '../components/AddOnsItem';

const Screen_215 = ({ navigation }) => {
  const [addOnes, setAddOnes] = useState(ADD_ONS);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <View style={styles.container}>
        <HeaderFile navigation={navigation} title={'Adds-ons'} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/wine.png')}
              resizeMode="contain"
              style={{ width: 365, height: 365 }}
            />
          </View>

          <View>
            <View style={styles.paddedView}>
              <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
              <Text style={{ color: '#00000099', marginVertical: 3 }}>
                $14.21
              </Text>

              <Text style={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </View>

            <View style={styles.notice}>
              <Text
                style={{ fontSize: 15, color: '#000000', fontWeight: '400' }}>
                Add-ons
              </Text>
              <Text style={[styles.desc, { fontSize: 13 }]}>Choose upto 7</Text>
            </View>

            <View style={styles.paddedView}>
              <FlatList
                scrollEnabled={false}
                data={addOnes}
                renderItem={({ item }) => <AddOnsItem item={item} />}
              />
            </View>

            <View
              style={[
                styles.paddedView,
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 150,
                  alignSelf: 'center',
                },
              ]}>
              <Pressable
                //onPress={itemMinus}
                style={styles.addPlusWrapper}>
                <AntDesign name="minus" size={20} color={'#000000'} />
              </Pressable>

              <Text style={{ color: '#000000' }}>{9}</Text>

              <Pressable
                //onPress={itemPlus}
                style={styles.addPlusWrapper}>
                <AntDesign name="plus" size={20} color={'#000000'} />
              </Pressable>
            </View>

            <Pressable
              //onPress={handleAddToCart}
              style={styles.button}>
              <Text style={{ color: '#ffffff' }}>Add 1 item to cart</Text>

              <FontAwesome name="circle" size={3} color={'#ffffff'} />

              <Text style={{ color: '#ffffff' }}>$14.21</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Screen_215;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  paddedView: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    color: '#00000099',
    fontSize: 14,
  },
  notice: {
    padding: 10,
    backgroundColor: '#eeeeee',
    marginTop: 10,
  },
  addPlusWrapper: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#eeeeee',
  },
  // detailsWrapper: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: 10,
  // },
  button: {
    backgroundColor: '#4460EF',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 15,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
});
