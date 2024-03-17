import {
  KeyboardAvoidingView,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { DEFAULT_COUNTRY, RIDERS_CONTACTS } from './data/data';
import ContactsItem from './components/ContactsItem';
import { CountryPicker } from 'react-native-country-codes-picker';

const RideForSomeOne = ({ navigation }) => {
  const [showContacts, setShowContacts] = useState(false);
  const [selectedRider, setSelectedRider] = React.useState({});

  const [searchQuery, setSearchQuery] = useState('');
  const [allContacts, setAllContacts] = useState(RIDERS_CONTACTS);
  const [showAddContacts, setShowAddContacts] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [showCountryModal, setShowCountryModal] = React.useState(false);

  const categorizeContacts = () => {
    const categorizedContacts = {};
    for (const contact of allContacts) {
      const initial = contact.firstName.charAt(0).toUpperCase();
      if (!categorizedContacts[initial]) {
        categorizedContacts[initial] = [];
      }
      categorizedContacts[initial].push(contact);
    }
    return categorizedContacts;
  };

  const handleNext = () => {
    if (selectedRider.userNumber) {
      setShowContacts(false);
      navigation.navigate('ConfirmPickup', { rider: selectedRider });
    } else {
      alert('Select a rider to continue');
    }
  };

  const handleAddRider = () => {

    if(firstName && phoneNumber){
      const newRider = {
        firstName,
        lastName,
        userNumber: selectedCountry?.dial_code + phoneNumber,
      };
      setAllContacts([...allContacts, newRider]);
      setLoader(!loader);
      setShowAddContacts(false);
      setShowContacts(true);
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
    }else{
      return alert("Enter first name and mobile number")
    }
    
  };

  const handleShowCountry = () => {
    setShowAddContacts(false);
    setShowCountryModal(true);
  };

  const handleShowAddUser = () => {
    setShowContacts(false);
    setShowAddContacts(true);
  };

  const handleTextChange = (newText, setState) => {
    if (newText.includes(' ')) {
      //Alert.alert('Alert', 'Spaces are not allowed in the input');
      setState(newText.replace(/\s+/g, ''));
    } else {
      // No spaces, update the text normally
      setState(newText);
    }
  };

  useEffect(() => {
    const sortedContacts = [...allContacts].sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    setAllContacts(sortedContacts);
  }, [loader]);

  const updateAllContacts = (query) => {
  // If the search query is empty, display all items
  if (query.trim() === '') {
    setAllContacts(RIDERS_CONTACTS);
  } else {
    // Filter and update the list based on the search query
    const filteredItems = RIDERS_CONTACTS.filter((contact) =>
      contact.firstName.toLowerCase().startsWith(query.toLowerCase()) ||
      contact.userNumber.startsWith(query)
    );
    setAllContacts(filteredItems);
  }
  setSearchQuery(query); // Update the search query state
};

  const AllContactsModal = () => {
    return (
      <Modal
        visible={showContacts}
        transparent
        statusBarTranslucent
        onRequestClose={() => setShowContacts(!showContacts)}>
        <View style={styles.modalBackground}>
          <Pressable
            onPress={() => setShowContacts(false)}
            style={{ height: '12%' }}></Pressable>

          <View style={styles.modalContent}>
            <View style={styles.contentHeader}>
              <AntDesign
                name={'close'}
                size={25}
                color="#000000"
                onPress={() => setShowContacts(false)}
              />

              <Text
                style={{ color: '#0D1317', fontSize: 17, fontWeight: 'bold' }}>
                Choose a rider
              </Text>

              <AntDesign
                name={'adduser'}
                size={25}
                color="#000000"
                onPress={handleShowAddUser}
              />
            </View>

            <View style={styles.searchBoxWrapper}>
              <AntDesign
                name={'search1'}
                size={23}
                color="#6c757d"
                onPress={() => setShowContacts(false)}
              />
              <TextInput
                placeholder={'Search name or number'}
                placeholderTextColor={'#6c757d'}
                style={styles.inputBox}
                onChangeText={(text) => updateAllContacts(text)}
                value={searchQuery}
              />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ padding: 15 }}>
              {Object.entries(categorizeContacts()).map(
                ([initial, contactList]) => (
                  <View key={initial} style={{ marginBottom: 15 }}>
                    <Text style={{ fontSize: 18, color: '#0D1317' }}>
                      {initial}
                    </Text>
                    <FlatList
                      scrollEnabled={false}
                      data={contactList}
                      renderItem={({ item }) => (
                        <ContactsItem
                          item={item}
                          selectedRider={selectedRider}
                          setSelectedRider={setSelectedRider}
                          navigation={navigation}
                        />
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                )
              )}
            </ScrollView>

            <Pressable onPress={handleNext} style={styles.nextButton}>
              <Text style={{ color: '#ffffff' }}>NEXT</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  const CountryModal = () => {
    return (
      <Modal
        transparent
        visible={showCountryModal}
        onRequestClose={() => setShowCountryModal(false)}>
        <CountryPicker
          style={{
            // Styles for whole modal [View]
            modal: {
              height: '70%',
            },
            textInput: {
              height: 40,
              borderRadius: 0,
            },
          }}
          show={true}
          pickerButtonOnPress={(item) => {
            setSelectedCountry(item);
            //setShowAddContacts(true);
            setShowCountryModal(false);
            setShowAddContacts(true);
          }}
        />
      </Modal>
    );
  };

  const AddContactsModal = () => {
    return (
      <Modal
        visible={showAddContacts}
        animationType={'slide'}
        transparent
        statusBarTranslucent
        onRequestClose={() => setShowAddContacts(false)}>
        <View style={styles.modalBackground}>
          <Pressable
            onPress={() => setShowAddContacts(false)}
            style={{ height: '12%' }}></Pressable>

          <View style={styles.modalContent}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{ height: '100%' }}>
              <View style={styles.contentHeader}>
                <AntDesign
                  name={'close'}
                  size={25}
                  color="#000000"
                  onPress={() => setShowAddContacts(false)}
                />

                <Text
                  style={{
                    color: '#0D1317',
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  New Rider
                </Text>

                <View style={{ width: '10%' }}></View>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ padding: 15 }}>
                <View style={styles.notice}>
                  <Text style={{ color: '#343a40' }}>
                    Drivers will see this name. Do you want to make any
                    changes?. Changing the number here won't affect how it
                    appears in your device's contact
                  </Text>
                </View>

                <View style={styles.inputSectionWrapper}>
                  <Text style={styles.inputLabel}>First Name</Text>
                  <View style={styles.inputBoxWrapper}>
                    <TextInput
                      placeholderTextColor={'#454545'}
                      style={styles.inputBox}
                      placeholder={'Enter First Name'}
                      value={firstName}
                      onChangeText={(text) =>
                        handleTextChange(text, setFirstName)
                      }
                    />
                  </View>
                </View>

                <View style={styles.inputSectionWrapper}>
                  <Text style={styles.inputLabel}>Last Name</Text>
                  <View style={styles.inputBoxWrapper}>
                    <TextInput
                      placeholderTextColor={'#454545'}
                      style={styles.inputBox}
                      placeholder={'Enter Last Name'}
                      value={lastName}
                      onChangeText={(text) =>
                        handleTextChange(text, setLastName)
                      }
                    />
                  </View>
                </View>

                <View style={styles.inputSectionWrapper}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <View
                    style={[
                      styles.inputBoxWrapper,
                      styles.division,
                      { paddingVertical: 3 },
                    ]}>
                    <Pressable
                      onPress={handleShowCountry}
                      style={styles.division}>
                      <Text>{selectedCountry?.flag}</Text>
                      <Feather
                        name={'chevron-down'}
                        size={16}
                        color="#000000"
                      />
                      <Text style={{ color: 'blue' }}>
                        ({selectedCountry?.dial_code})
                      </Text>
                    </Pressable>
                    <TextInput
                      placeholderTextColor={'#454545'}
                      style={[styles.inputBox, { width: '70%', padding: 10 }]}
                      keyboardType={'phone-pad'}
                      placeholder={'7012345678'}
                      value={phoneNumber}
                      onChangeText={(text) => setPhoneNumber(text)}
                    />
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#495057',
                      marginVertical: 8,
                    }}>
                    GloPilots won't share this phone number with the drivers
                  </Text>

                  <Text
                    style={{ fontSize: 13, color: '#495057', marginTop: 10 }}>
                    By tapping "Add rider", you confirm that your friend agreed
                    to share their contact information with GloPilots and to
                    receive SMS about this trip
                  </Text>
                </View>
              </ScrollView>

              <Pressable onPress={handleAddRider} style={styles.nextButton}>
                <Text style={{ color: '#ffffff' }}>Add rider</Text>
              </Pressable>
            </KeyboardAvoidingView>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.halfScreen}>
            <View style={{ paddingTop: 15, paddingHorizontal: 15 }}>
              {!showContacts && (
                <AntDesign
                  name={'close'}
                  size={25}
                  color="#ffffff"
                  onPress={() => navigation.goBack()}
                />
              )}
            </View>

            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/icons/export/Group9970.png')}
                resizeMode={'contain'}
                style={{ width: 200, height: 200, alignSelf: 'center' }}
              />
            </View>
          </View>

          <View style={styles.contents}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              Request a ride for someone else
            </Text>

            <View style={styles.itemWrapper}>
              <FontAwesome name={'circle'} size={8} color="#0D1317" />
              <Text style={styles.listText}>
                Help them get where they need to go
              </Text>
            </View>

            <View style={styles.itemWrapper}>
              <FontAwesome name={'circle'} size={8} color="#0D1317" />
              <Text style={styles.listText}>
                They will see trip info in the Glopilot app or in a text
              </Text>
            </View>

            <View style={styles.itemWrapper}>
              <FontAwesome name={'circle'} size={8} color="#0D1317" />
              <Text style={styles.listText}>
                You will be responsible for payment and rating
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonHolder}>
          <Pressable
            onPress={() => setShowContacts(true)}
            style={styles.button}>
            <Text style={{ color: '#ffffff', fontSize: 16 }}>Start Now</Text>
            <AntDesign name={'arrowright'} size={20} color="#ffffff" />
          </Pressable>
        </View>

        {AllContactsModal()}
        {AddContactsModal()}
        {CountryModal()}
      </View>
    </SafeAreaView>
  );
};

export default RideForSomeOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfScreen: {
    backgroundColor: '#4460EF',
    height: 270,
    paddingTop: 20,
  },
  imgContainer: {
    //backgroundColor: 'red',
    position: 'absolute',
    width: '100%',
    top: 190,
  },
  contents: {
    // backgroundColor: 'red',
    marginTop: 120,
    padding: 15,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  listText: {
    fontSize: 15,
    color: '#0D1317',
    width: '95%',
  },
  buttonHolder: {
    padding: 15,
  },
  button: {
    backgroundColor: '#4460EF',
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderRadius: 8,
    width: 130,
    justifyContent: 'center',
  },
  modalBackground: {
    backgroundColor: '#00000099',
    flex: 1,
  },
  modalContent: {
    height: '88%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  inputBox: {
    color: '#0D1317',
    fontSize: 16,
  },
  searchBoxWrapper: {
    paddingHorizontal: 20,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    margin: 15,
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: '#4460EF',
    padding: 13,
    marginVertical: 35,
    alignItems: 'center',
    borderRadius: 8,
    margin: 15,
  },

  notice: {
    padding: 10,
    backgroundColor: '#DADFFC',
    borderRadius: 6,
    marginBottom: 20,
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
    fontSize: 15,
  },
  division: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
