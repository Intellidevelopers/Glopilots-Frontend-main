import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { Calendar } from 'react-native-calendars';
import { ScrollView, GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import DropdownChild from "../components/DropdownChild";
const data = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
];
const Countries = [
  { label: 'Pakistan', value: '1' },
  { label: 'Nigeria', value: '2' },
  { label: 'USA', value: '3' },
  { label: 'Oman', value: '4' },
  { label: 'Canada', value: '5' },
  { label: 'Australia', value: '6' },
  { label: 'India', value: '7' },
  { label: 'England', value: '10' },
];
const Baby = () => {
  const [isModalVisible, setModalVisible,] = useState(false);
  const [isModalVisibleWhen, setModalVisibleWhen] = useState(false);
  const [isModalVisibleWho, setModalVisibleWho] = useState(false);
  const [isModalVisibleLocation, setModalVisibleLocation] = useState(false);
  const [value, setValue] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalLocation = () => {
    setModalVisibleLocation(!isModalVisibleLocation);
  };
  const toggleModalWhen = () => {
    setModalVisibleWhen(!isModalVisibleWhen);
  };
  const toggleModalWho = () => {
    setModalVisibleWho(!isModalVisibleWho);
  };
  return (
    <GestureHandlerRootView style={{ width: '100%', backgroundColor: '#f8f8f8' }}>
      <ScrollView>
        <SafeAreaView style={{ marginBottom: 30 }}>
          <TouchableOpacity onPress={toggleModal} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 15, height: 75, flexDirection: 'row', width: '90%', backgroundColor: '#eeeeee', alignSelf: 'center', marginTop: 20 }}>
            <View style={{ width: '15%', paddingLeft: 10 }}>
              <Ionicons name="search-outline" size={25} color={'#0d1317'} />
            </View>
            <View style={{ width: '65%' }}>
              <Text style={{ color: '#000', fontSize: 18 }}>Where to?</Text>
              <Text style={{ color: '#545454' }}>Anywhere - Anyweek - Add guest</Text>
            </View>
            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', borderLeftColor: '#dbdbdb', borderLeftWidth: 1, height: "100%" }}>
              <Ionicons name="options-outline" size={30} color={'#4d4d4d'} />
            </View>
          </TouchableOpacity>
          <View style={{ width: '90%', height: '2%', alignSelf: "center", marginTop: 40 }}>
            <ScrollView style={{ flexDirection: 'row' }} horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: '10%', justifyContent: 'center' }}>Islands</Text>
                <Text style={{ width: '10%' }}>Caves</Text>
                <Text style={{ width: '18%' }}>Creative Places</Text>
                <Text style={{ width: '10%' }}>Tropical</Text>
                <Text style={{ width: '10%' }}>Beach</Text>
                <Text style={{ width: '10%' }}>Beach</Text>
                <Text style={{ width: '10%' }}>Beach</Text>
                <Text style={{ width: '10%' }}>Beach</Text>
                <Text style={{ width: '10%' }}>Beach</Text>
                <Text style={{ width: '10%' }}>Beach</Text>
                <Text style={{ width: '10%' }}>Beach</Text>
                <Text style={{ width: '10%' }}>Beach</Text>
              </View>
            </ScrollView>
          </View>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View style={{ marginTop: 30 }}>
              <Image style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={require("../images/pexels-asad-photo-maldives-1.png")} />
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 20, width: '80%', color: '#000', fontWeight: 'bold' }}>Marathon, Florida</Text>
                <Text style={{ textAlign: 'right', width: '20%' }}>
                  <Ionicons name="star" size={30} color={'#575757'} />
                  <Text style={{ fontSize: 18, color: '#575757' }}>4.4</Text>
                </Text>
              </View>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>1.3 acres</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>Feb 25 - Mar 04</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#000', fontWeight: 'bold' }}>$2500 / night</Text>
            </View>
          </View>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View style={{ marginTop: 30 }}>
              <Image style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={require("../images/pexels-chris-duan-2.png")} />
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 20, width: '80%', color: '#000', fontWeight: 'bold' }}>Somars, Montana</Text>
                <Text style={{ textAlign: 'right', width: '20%' }}>
                  <Ionicons name="star" size={30} color={'#575757'} />
                  <Text style={{ fontSize: 18, color: '#575757' }}>4.4</Text>
                </Text>
              </View>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>1.5 acres</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>Jun 05 - Jun 14</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#000', fontWeight: 'bold' }}>$1875 / night</Text>
            </View>
          </View>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View style={{ marginTop: 30 }}>
              <Image style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={require("../images/pexels-matt-hardy-2602543.png")} />
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 20, width: '80%', color: '#000', fontWeight: 'bold' }}>St. James City, Florida</Text>
                <Text style={{ textAlign: 'right', width: '20%' }}>
                  <Ionicons name="star" size={30} color={'#575757'} />
                  <Text style={{ fontSize: 18, color: '#575757' }}>4.4</Text>
                </Text>
              </View>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>1.8 acres</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>Jan 27 - Feb 03</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#000', fontWeight: 'bold' }}>$1875 / night</Text>
            </View>
          </View>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View style={{ marginTop: 30 }}>
              <Image style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={require("../images/nick-perez-b-1.png")} />
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 20, width: '80%', color: '#000', fontWeight: 'bold' }}>Presque Isle, Wisconsin</Text>
                <Text style={{ textAlign: 'right', width: '20%' }}>
                  <Ionicons name="star" size={30} color={'#575757'} />
                  <Text style={{ fontSize: 18, color: '#575757' }}>4.4</Text>
                </Text>
              </View>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>1.8 acres</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>Jan 27 - Feb 03</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#000', fontWeight: 'bold' }}>$1285 / night</Text>
            </View>
          </View>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View style={{ marginTop: 30, marginBottom: 30 }}>
              <Image style={{ width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={require("../images/hannah-tu-1.png")} />
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 20, width: '80%', color: '#000', fontWeight: 'bold' }}>Richland Michigan</Text>
                <Text style={{ textAlign: 'right', width: '20%' }}>
                  <Ionicons name="star" size={30} color={'#575757'} />
                  <Text style={{ fontSize: 18, color: '#575757' }}>4.4</Text>
                </Text>
              </View>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>1.8 acres</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#575757' }}>Jan 27 - Feb 03</Text>
              <Text style={{ fontSize: 18, marginTop: 9, color: '#000', fontWeight: 'bold' }}>$1285 / night</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      {/* Modal Code */}
      <Modal isVisible={isModalVisible} style={{ width: '100%', marginLeft: 0, marginBottom: 0 }} onBackButtonPress={toggleModal}>
        <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
          <View style={{ padding: 15, backgroundColor: '#fff', width: '100%', height: '90%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
            {/* Inner code of Modal */}
            <View style={{ flexDirection: 'row', paddingBottom: 10, borderBottomColor: '#c8c8c8', borderBottomWidth: 2, width: '100%' }}>
              <Text onPress={toggleModal} style={{ width: '33.33%', textAlign: 'left' }}>
                <Ionicons name="close" size={30} color={'red'} />
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '33.33%', textAlign: 'center' }}>Stays</Text>
              <Text style={{ width: '33.33%', textAlign: 'right' }}></Text>
            </View>
            <Text style={{ marginBottom: 10, marginTop: 20, fontSize: 17, fontWeight: '600' }}>Where to?</Text>
            <TouchableOpacity onPress={toggleModalLocation} style={{ backgroundColor: '#eeeeee', justifyContent: 'center', paddingLeft: 20, height: 55, borderRadius: 10, width: '100%' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: '10%' }}><Ionicons name="search-outline" size={25} color={'#0d1317'} /></Text>
                <Text style={{ paddingTop: 3 }}>Search Destination</Text>
              </View>
            </TouchableOpacity>
            <Text style={{ marginBottom: 10, marginTop: 20, fontSize: 17, fontWeight: '600' }}>Where's your trip?</Text>
            <TouchableOpacity onPress={toggleModalWhen} style={{ backgroundColor: '#eeeeee', justifyContent: 'center', paddingLeft: 20, height: 55, borderRadius: 10, width: '100%' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: '75%' }}>When</Text>
                <Text style={{ fontWeight: 'bold' }}>Any Week</Text>
              </View>
            </TouchableOpacity>
            <Text style={{ marginBottom: 10, marginTop: 20, fontSize: 17, fontWeight: '600' }}>Who's Coming?</Text>
            <TouchableOpacity onPress={toggleModalWho} style={{ backgroundColor: '#eeeeee', justifyContent: 'center', paddingLeft: 20, height: 55, borderRadius: 10, width: '100%' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: '75%' }}>Who</Text>
                <Text style={{ fontWeight: 'bold' }}>Add Guest</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ width: '100%', backgroundColor: '#4460ef', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 17 }}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      {/* Destination Tab Modal code Start */}
      <Modal isVisible={isModalVisibleLocation} style={{ width: '100%', marginLeft: 0, marginBottom: 0 }} onBackButtonPress={toggleModalWhen}>
        <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
          <View style={{ padding: 15, backgroundColor: '#fff', width: '100%', height: '90%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
            {/* Inner code of Modal */}
            <View style={{ flexDirection: 'row', paddingBottom: 10, borderBottomColor: '#c8c8c8', borderBottomWidth: 2, width: '100%' }}>
              <Text onPress={toggleModalLocation} style={{ width: '33.33%', textAlign: 'left' }}>
                <Ionicons name="close" size={30} color={'red'} />
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '33.33%', textAlign: 'center' }}>Destination</Text>
              <Text style={{ width: '33.33%', textAlign: 'right' }}></Text>
            </View>
            <View>
              <DropdownChild data={Countries} label={'Select Location'} DDSearch={true} DDWidth={'100%'} />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ width: '100%', backgroundColor: '#4460ef', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 17 }}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Destination Tab Modal code End */}


      {/* When Tab Modal code Start */}
      <Modal isVisible={isModalVisibleWhen} style={{ width: '100%', marginLeft: 0, marginBottom: 0 }} onBackButtonPress={toggleModalWhen}>
        <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
          <View style={{ padding: 15, backgroundColor: '#fff', width: '100%', height: '90%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
            {/* Inner code of Modal */}
            <View style={{ flexDirection: 'row', paddingBottom: 10, borderBottomColor: '#c8c8c8', borderBottomWidth: 2, width: '100%' }}>
              <Text onPress={toggleModalWhen} style={{ width: '33.33%', textAlign: 'left' }}>
                <Ionicons name="close" size={30} color={'red'} />
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '33.33%', textAlign: 'center' }}>Date</Text>
              <Text style={{ width: '33.33%', textAlign: 'right' }}></Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#c8c8c8' }}>
              <Text style={{ width: '33.333%', textAlign: 'left', fontSize: 17, fontWeight: 'bold' }}>Start Date</Text>
              <Text style={{ width: '33.333%', textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}><Ionicons name="arrow-forward-outline" size={30} color={'#000'} /></Text>
              <Text style={{ width: '33.333%', textAlign: 'right', fontSize: 17, fontWeight: 'bold' }}>End Date</Text>
            </View>
            <View>
              <Calendar
                markingType={'period'}
                markedDates={{
                  '2023-08-21': { startingDay: true, color: 'lightblue' },
                  '2023-08-22': { selected: true, color: 'lightblue' },
                  '2023-08-23': { selected: true, color: 'lightblue' },
                  '2023-08-24': { selected: true, color: 'lightblue' },
                  '2023-08-25': { selected: true, color: 'lightblue' },
                  '2023-08-26': { endingDay: true, color: 'lightblue' },
                }}
              />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ width: '100%', backgroundColor: '#4460ef', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 17 }}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* When Tab Modal code End */}


      {/* Who Tab Modal code Start */}
      <Modal isVisible={isModalVisibleWho} style={{ width: '100%', marginLeft: 0, marginBottom: 0 }} onBackButtonPress={toggleModalWho}>
        <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
          <View style={{ padding: 15, backgroundColor: '#fff', width: '100%', height: '90%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
            {/* Inner code of Modal */}
            <View style={{ flexDirection: 'row', paddingBottom: 10, borderBottomColor: '#c8c8c8', borderBottomWidth: 2, width: '100%' }}>
              <Text onPress={toggleModalWho} style={{ width: '10%', textAlign: 'left' }}>
                <Ionicons name="close" size={30} color={'red'} />
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', width: '80%', textAlign: 'center' }}>Who's Coming</Text>
              <Text style={{ width: '10%', textAlign: 'right' }}></Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Select</Text>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ width: '70%', paddingTop: 10 }}>Adults</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#eeeeee', borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 25 }}>-</Text>
                  </TouchableOpacity>
                  <TextInput value={'1'} style={{ textAlign: 'center', width: '17%' }} />
                  <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#eeeeee', borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 20 }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ width: '70%', justifyContent: 'center' }}>
                  <Text>Childs</Text>
                  <Text style={{ color: 'grey', fontSize: 11 }}>0 - 17 Years old</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#eeeeee', borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 25 }}>-</Text>
                  </TouchableOpacity>
                  <TextInput value={'1'} style={{ textAlign: 'center', width: '17%' }} editable={false} />
                  <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#eeeeee', borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 20 }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <DropdownChild data={data} label={'Child 1 age'} DDWidth={'40%'} DDSearch={false} />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ width: '100%', backgroundColor: '#4460ef', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 17 }}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Who Tab Modal code End */}
    </GestureHandlerRootView>
  );
}

export default Baby;