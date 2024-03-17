import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  FlatList,
  TextInput,
  Modal,
  Platform,
  TouchableOpacity
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Feather } from '@expo/vector-icons';
import Notice from './components/Notice';
import Head from '../Head';
import { GENDERS, TRAVELLER_INFO } from './resources/task2Data';
import TravelInfoItem from './components/TravelInfoItem';
import { Divider, CheckBox } from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import GenderItem from "./components/GenderItem"
import {CountryPicker} from "react-native-country-codes-picker";


//import * as Animatable from 'react-native-animatable';

const TravellerInfo = ({ navigation, route }) => {
  const{tripData} = route.params
 const [flightData] = useState(tripData.flight);
  const [genders, setGenders] = useState(GENDERS);
  const [wakapointsId, setWakapointsId] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [middleName, setMiddleName] = React.useState('');
  const [selectedCountry, setSelectedCountry] = useState({});
  const [nationality, setNationality] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [genderModal, setGenderModal] = React.useState(false);

  const [yearOfBirth, setYearOfBirth] = React.useState('Year');
  const [monthOfBirth, setMonthOfBirth] = React.useState('Month');
  const [dayOfBirth, setDayOfBirth] = React.useState('Day');

  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [term_condition, setTerm_condition] = React.useState(false);
  

  const [toggleSeat, setToggleSeat] = React.useState(false);
  const [toggleBaggage, setToggleBaggage] = React.useState(false);
  const [toggleDiscount, setToggleDiscount] = React.useState(false);
  const [toggleCorperate, setToggleCorperate] = React.useState(false);
  const [showCountryModal, setShowCountryModal] = React.useState(false);//////
  const toggleCheckbox1 = () => setChecked1(!checked1);
  const toggleCheckbox2 = () => setChecked2(!checked2);
  const toggleTermCnodition = () => setTerm_condition(!term_condition);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [watchDate, setWatchDate] = useState('');

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (text) => {
      setSearchQuery(text);
    };


  const handleContinueButton = () => {

    const formData = {
      wakapointsId,
      surname,
      firstName,
      middleName,
      nationality,
      gender:gender.gender,
      yearOfBirth,
      monthOfBirth,
      dayOfBirth,
      email,
      phoneNumber:nationality.countryDial + phoneNumber
    }

    alert(JSON.stringify(formData, null, 2))
    
  }

  const handleToggleSeat = (val, setVal) => {
    setVal(!val);
    setToggleBaggage(false);
    setToggleDiscount(false);
    setToggleCorperate(false);
  };

  const handleToggleBaggage = (val, setVal) => {
    setVal(!val);
    setToggleDiscount(false);
    setToggleCorperate(false);
    setToggleSeat(false);
  };

  const handleToggleDiscount = (val, setVal) => {
    setVal(!val);
    setToggleBaggage(false);
    setToggleCorperate(false);
    setToggleSeat(false);
  };

  const handleToggleCorperate = (val, setVal) => {
    setVal(!val);
    setToggleBaggage(false);
    setToggleDiscount(false);
    setToggleSeat(false);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setWatchDate(currentDate);
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  React.useEffect(() => {
    if (watchDate) {
      const parsedDate = moment(watchDate);
      const year = parsedDate.format('YYYY');
      const month = parsedDate.format('MM');
      const day = parsedDate.format('DD');

      setYearOfBirth(year);
      setMonthOfBirth(month);
      setDayOfBirth(day);
    }
  }, [watchDate]);

  React.useEffect(() => {
    setNationality(selectedCountry?.name?.en)
  }, [selectedCountry]);

  React.useEffect(() => {
    setGenderModal(false)
    
  }, [gender]);

   const GenderModal = () => {
    return (
      <Modal
        transparent
        visible={genderModal}
        statusBarTranslucent={true}
        onRequestClose={() => setGenderModal(!genderModal)}>
        <Pressable 
          onPress={() => setGenderModal(false)}
          style={{ backgroundColor: '#00000099', height: '100%', alignItems:'center', justifyContent:'center' }}>
          
          <View
            style={{
              width: '60%',
              padding: 15,
              backgroundColor: '#ffffff',
              borderRadius:10,
              
            }}>
            <FlatList
              data={genders}
              renderItem={({item}) => (
                <GenderItem 
                item={item} 
                setGender={setGender} 
                />
              )}
            />
          </View>
        </Pressable>
      </Modal>
    );
  };

  const isRequired = () => {
    return <Text style={{ color: 'red' }}>*</Text>;
  };
 
  const CountryMod = () => {
    return(
      <CountryPicker
         style={{
        // Styles for whole modal [View]
        modal: {
            height: '70%',
            //backgroundColor: 'red'
        },
        // Styles for modal backdrop [View]
        backdrop: {
        
        },
        // Styles for bottom input line [View]
        line: {
        
        },
        // Styles for list of countries [FlatList]
        itemsList: {
        
        },
        // Styles for input [TextInput]
        textInput: {
              height: 40,
              borderRadius: 0,
        },
        // Styles for country button [TouchableOpacity]
        countryButtonStyles: {
             // height: 80
        },
        // Styles for search message [Text]
        searchMessageText: {

        },
        // Styles for search message container [View]
        countryMessageContainer: {
        
        },
        // Flag styles [Text]
        flag: {

        },
        // Dial code styles [Text]
        dialCode: {

        },
        // Country name styles [Text]
        countryName: {

        }
    }}
        show={showCountryModal}
        pickerButtonOnPress={(item) => {
          setSelectedCountry(item);
          setShowCountryModal(false); 
        }}
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
      <Head title="Travel Info" navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Notice
              noticeType={'success'}
              message={'Nice job!, you picked one of our best value flights.'}
              subMessage={"Book now so you don't miss out this price."}
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Notice
              noticeType={'warning'}
              message={
                "If you're transiting through a Schegen aritport for onward travel to a country ouside Schegen, you will require an airport trasit visa."
              }
            />
          </View>

          <View style={styles.section}>
            <View style={styles.klmHolder}>
              <Image
                source={require('./assets/secured.png')}
                resizeMode={'contain'}
                style={{ width: 25, height: 30 }}
              />
              <Text style={{ color: '#4460EF', fontSize:16 }}>KLM Royal Dutch Airlines</Text>
            </View>

            <FlatList
              data={flightData}
              renderItem={({ item }) => (
                <TravelInfoItem item={item} allTravel={flightData} />
              )}
            />
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.boldHeader}>Traveller Details</Text>
            </View>
            <Divider />

            <View style={{ marginTop: 5 }}>
              <View style={styles.sectionHeader}>
                <Text style={styles.boldHeader}>
                  Passenger {tripData.passengers} (Adult - Primary Contact)
                </Text>
              </View>

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>
                  Wakaponts ID {isRequired()}
                </Text>
                <View style={styles.inputBoxWrapper}>
                  <TextInput
                    placeholderTextColor={'#454545'}
                    style={styles.inputBox}
                    placeholder={
                      'Enter wakapoints ID to earn and redeem rewards' }
                    value={wakapointsId}
                    onChangeText={(text) => setWakapointsId(text)}
                  />
                </View>
              </View>

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>Surname {isRequired()}</Text>
                <View style={styles.inputBoxWrapper}>
                  <TextInput
                    placeholderTextColor={'#454545'}
                    style={styles.inputBox}
                    placeholder={'Enter surname as on passport'}
                    value={surname}
                    onChangeText={(text) => setSurname(text)}
                  />
                </View>
              </View>

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>First name {isRequired()}</Text>
                <View style={styles.inputBoxWrapper}>
                  <TextInput
                    placeholderTextColor={'#454545'}
                    style={styles.inputBox}
                    placeholder={'Enter First Name as on passport'}
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                  />
                </View>
              </View>

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>Middle name</Text>
                <View style={styles.inputBoxWrapper}>
                  <TextInput
                    placeholderTextColor={'#454545'}
                    style={styles.inputBox}
                    placeholder={'Enter middle name as on passport'}
                    value={middleName}
                    onChangeText={(text) => setMiddleName(text)}
                  />
                </View>
              </View>

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>
                  Nationality {isRequired()}
                </Text>
                <Pressable
                  onPress={() => setShowCountryModal(true)}
                  style={[styles.inputBoxWrapper, styles.isSelector]}>
                  <Text style={styles.placeHolder}>
                    {nationality ? nationality : "- select nationality -"}
                  </Text>
                  <Feather name="chevron-down" size={19} color="#0D1317" />
                </Pressable>
              </View>

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>Gender {isRequired()}</Text>
                <Pressable onPress={() => setGenderModal(true)} style={[styles.inputBoxWrapper, styles.isSelector]}>
                  <Text style={styles.placeHolder}>
                    {gender ? gender : '- Select Gender -'}
                  </Text>
                  <Feather name="chevron-down" size={19} color="#0D1317" />
                </Pressable>
              </View>

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>
                  Date of Birth {isRequired()}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Pressable
                    onPress={() => showMode('date')}
                    style={[
                      styles.inputBoxWrapper,
                      { width: '25%', padding: 12 },
                    ]}>
                    <Text style={styles.placeHolder}> {yearOfBirth}</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => showMode('date')}
                    style={[
                      styles.inputBoxWrapper,
                      { width: '48%', padding: 12 },
                    ]}>
                    <Text style={styles.placeHolder}> {monthOfBirth}</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => showMode('date')}
                    style={[
                      styles.inputBoxWrapper,
                      { width: '25%', padding: 12 },
                    ]}>
                    <Text style={styles.placeHolder}> {dayOfBirth}</Text>
                  </Pressable>
                </View>
              </View>

              <View style={[styles.inputSectionWrapper, { marginTop: 8 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox
                    checked={checked1}
                    onPress={toggleCheckbox1}
                    iconType="material-community"
                    checkedIcon="checkbox-outline"
                    uncheckedIcon={'checkbox-blank-outline'}
                    containerStyle={{ margin: 0, padding: 0, marginLeft: -1 }}
                  />
                  <Text style={{ color: '#454545', fontSize: 15 }}>
                    Click here to{' '}
                    <Text style={{ fontWeight: 'bold', color: '#0D1317' }}>
                      register for watapoints
                    </Text>{' '}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 6,
                  }}>
                  <CheckBox
                    checked={checked2}
                    onPress={toggleCheckbox2}
                    iconType="material-community"
                    checkedIcon="checkbox-outline"
                    uncheckedIcon={'checkbox-blank-outline'}
                    containerStyle={{ margin: 0, padding: 0, marginLeft: -1 }}
                  />
                  <View style={{ width: '82%' }}>
                    <Text style={{ color: '#454545', fontSize: 15 }}>
                      Click Save the traveller info and contact details for a{' '}
                      <Text style={{ fontWeight: 'bold', color: '#0D1317' }}>
                        fast checkout
                      </Text>{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={{ marginTop: 5 }}>
              <View style={styles.sectionHeader}>
                <Text style={styles.boldHeader}>
                  Where should we send your confirmation?
                </Text>
              </View>
              <Divider />

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>Email</Text>
                <View style={styles.inputBoxWrapper}>
                  <TextInput
                    placeholder={'Enter Email'}
                    keyboardType={'email-address'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
              </View>

              <View style={styles.inputSectionWrapper}>
                <Text style={styles.inputLabel}>Phone number</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
                  <View
                    style={[
                      styles.inputBoxWrapper,
                      {
                        width: '30%',
                        //borderRightWidth: 1,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        borderRightColor: '#454545',
                        
                      },
                    ]}>
                    <View
                      style={[{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical:3,
                        gap:3
                      }, Platform.OS === 'ios' && styles.iosPhoneFlagHolder]}>
                      <Text>{selectedCountry?.flag}</Text>
                      <Text numberOfLines={1} style={styles.placeHolder}>
                        {selectedCountry?.dial_code}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.inputBoxWrapper,
                      {
                        width: '69%',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,

                      },
                      Platform.OS === 'ios' && styles.iosPhoneHolder
                    ]}>
                    <TextInput
                    placeholderTextColor={'#454545'}
                    color={'#0D1317'}
                      placeholder={'7033055236'}
                      keyboardType={'phone-pad'}
                      value={phoneNumber}
                      onChangeText={(text) => setPhoneNumber(text)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Pressable
            onPress={() => handleToggleSeat(toggleSeat, setToggleSeat)}
            style={styles.section}>
            <View style={styles.toggleView}>
              <Text style={styles.boldHeader}>Choose a Seat</Text>
              <Feather
                name={toggleSeat ? 'chevron-up' : 'chevron-down'}
                size={19}
                color="#0D1317"
              />
            </View>
            {toggleSeat && (
              <View style={styles.toggleContent}>
                <Text style={styles.dropdowntext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vestibulum, nisl non lacinia consequat, erat est
                  fringilla dolor, nec varius orci lectus quis velit. Nulla
                  facilisi. Morbi ultrices
                </Text>
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={() => handleToggleBaggage(toggleBaggage, setToggleBaggage)}
            style={styles.section}>
            <View style={styles.toggleView}>
              <Text style={styles.boldHeader}>Add Extra Baggage</Text>
              <Feather
                name={toggleBaggage ? 'chevron-up' : 'chevron-down'}
                size={19}
                color="#0D1317"
              />
            </View>
            {toggleBaggage && (
              <View style={styles.toggleContent}>
                <Text style={styles.dropdowntext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vestibulum, nisl non lacinia consequat, erat est
                  fringilla dolor, nec varius orci lectus quis velit. Nulla
                  facilisi. Morbi ultrices
                </Text>
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={() =>
              handleToggleDiscount(toggleDiscount, setToggleDiscount)
            }
            style={styles.section}>
            <View style={styles.toggleView}>
              <Text style={styles.boldHeader}>
                Do you have a dicount code/voucher
              </Text>
              <Feather
                name={toggleDiscount ? 'chevron-up' : 'chevron-down'}
                size={19}
                color="#0D1317"
              />
            </View>
            {toggleDiscount && (
              <View style={styles.toggleContent}>
                <Text style={styles.dropdowntext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vestibulum, nisl non lacinia consequat, erat est
                  fringilla dolor, nec varius orci lectus quis velit. Nulla
                  facilisi. Morbi ultrices
                </Text>
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={() =>
              handleToggleCorperate(toggleCorperate, setToggleCorperate)
            }
            style={styles.section}>
            <View style={styles.toggleView}>
              <Text style={styles.boldHeader}>
                Do you have a Corperate code
              </Text>
              <Feather
                name={toggleCorperate ? 'chevron-up' : 'chevron-down'}
                size={19}
                color="#0D1317"
              />
            </View>
            {toggleCorperate && (
              <View style={styles.toggleContent}>
                <Text style={styles.dropdowntext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vestibulum, nisl non lacinia consequat, erat est
                  fringilla dolor, nec varius orci lectus quis velit. Nulla
                  facilisi. Morbi ultrices
                </Text>
              </View>
            )}
          </Pressable>

          <View style={[styles.inputSectionWrapper, { margin: 8 }]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 6,
              }}>
              <CheckBox
                checked={term_condition}
                onPress={toggleTermCnodition}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{ margin: 0, padding: 0, marginLeft: -1 }}
              />
              <View style={{ width: '82%' }}>
                <Text
                  onPress={() => setTerm_condition(!term_condition)}
                  style={{ color: '#454545', fontSize: 15 }}>
                  By proceeding, I agree that I have read and acknowledge to
                  GloPilots Flight booking
                </Text>
                <Text
                  onPress={() => alert('Terms and conditions')}
                  style={{ color: '#4460EF' }}>
                  {' '}
                  Terms & Condition
                </Text>
              </View>
            </View>
          </View>

          <Pressable onPress={handleContinueButton} style={styles.bottomButton}>
            <Text
              style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 16 }}>
              Continue
            </Text>
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
              display={'spinner'}
            />
          )}
        </ScrollView>
      </View>
      {GenderModal()}
      {CountryMod()}
    </SafeAreaView>
  );
};

export default TravellerInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginTop: 10,
  },
  sectionHeader: {
    marginVertical: 10,
  },
  toggleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleContent: {
    marginVertical: 15,
  },
  klmHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: '#ced4da',
  },
  boldHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0D1317',
  },
  inputSectionWrapper: {
    marginVertical: 5,
  },
  inputLabel: {
    fontSize: 16,
    color: '#0D1317',
    marginVertical: 4,
  },
  inputBoxWrapper: {
    backgroundColor: '#eeeeee',
    padding: 12,
    borderRadius: 7,
  },
  placeHolder: {
    color: '#0D1317',
    fontSize:15
  },
  isSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  iosPhoneHolder:{
    padding:13
  },
  iosPhoneFlagHolder:{
    paddingVertical:0
  },
  bottomButton: {
    backgroundColor: '#4460EF',
    padding: 15,
    alignItems: 'center',
    margin: 15,
    borderRadius: 8,
  },
  dropdowntext:{
    fontSize: 15, color: '#454545'
  },
  searchBox:{
    backgroundColor:'#eeeeee', 
    padding:15, 
    color:'#0D1317', 
    fontSize:16, 
    borderRadius:7
  }
  // inputBox:{
  //   color:'#0D1317',
  //   fontSize:16
  // }
});
