import {React, useState} from 'react';
import { View, Text, Button, Modal, StyleSheet, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Head from '../Head';


import info from '../assets/icons/info.png';
import badge from '../assets/icons/baddge.png';
import Edit from '../assets/icons/edit.png';
import Info from '../assets/icons/info.png';
import address from '../assets/icons/address.png';
import family from '../assets/icons/shortcut.png';

import donate from '../assets/icons/privacy.png';
import trips from '../asset/work.png';
import fam from '../assets/icons/shortcut.png';
import gift from '../assets/icons/tip.png';
import history from '../assets/icons/legal.png';
import notify from '../assets/icons/help.png';
import phone from '../assets/icons/lock.png';
import phones from '../assets/icons/phone.png';

import reward from '../assets/icons/drive.png';
import ridechek from '../assets/icons/music.png';
import secure from '../assets/icons/safety.png';
import settings from '../assets/icons/logout.png';

import help from '../assets/icons/help.png';

import verify from '../assets/icons/verify.png';
import wallet from '../assets/icons/contact.png';
import walet from '../asset/walet.png';

import wheel from '../asset/wheel.png';

import logout from '../assets/icons/logout.png';
import dark from '../assets/icons/dark.png';
import Blanks from '../src/screens/Landing/Blanks';
import Auth from '../src/screens/Auth/Auth';

const Settings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const onPressLink = () => {
    navigation.navigate(Auth);
  };
  // Sample user data
  const userProfile = {
    name: 'Imobighe Uanzekin',
    email: 'johndoe@example.com',
    profilePicture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ12seFJhxPY1fuHI07hnqEUF9ITm9YN5_3MlHU00&s',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const LinkWithSwitch = ({ iconName, text }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <View style={styles.link} >
        <Image source={wheel} style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        <Switch style={styles.switch} />
      </View>
    );
  };
  const Dark = ({ iconName, text }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    return (
      <View style={styles.link} >
        <Image source={dark} style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        <Switch style={styles.switch} />
      </View>
    );
  };


  const LinkWithIcon = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };
  
    // Import images based on the iconName
    let iconImage;
    switch (iconName) {
      case 'Info':
        iconImage = Info;
        break;
      case 'money-bill-alt':
        iconImage = address;
        break;
        case 'wallet':
          iconImage = wallet;
          break;
          case 'map-marker-alt':
            iconImage = walet;
            break;
            case 'facebook':
              iconImage = ridechek;
              break;
            case 'car':
              iconImage = trips;
              break;
              case 'user-friends':
                iconImage = family;
                break;
                case 'verify':
                  iconImage = verify;
                  break;
                  case 'font':
                    iconImage = fam;
                    break;
                    case 'lock':
                      iconImage = secure;
                      break;
                      case 'comments':
                        iconImage = phone;
                        break;
                        case 'gift':
                          iconImage = gift;
                          break;
                          case 'star':
                            iconImage = reward;
                            break;
                            case 'donate':
                              iconImage = donate;
                              break;
                              case 'history':
                                iconImage = history;
                                break;
                                case 'bell':
                                  iconImage = notify;
                                  break;
                                  case 'question-circle':
                                  iconImage = help;
                                  break;
                                  case 'visa':
                                    iconImage = info;
                                    break;
                                  case 'cog':
                                  iconImage = settings;
                                  break;
                                  case 'phone':
                                    iconImage = phones;
                                    break;
  
                    
      // Add other cases for different icons
      // ...
      default:
        // Set a default icon image in case the iconName is not recognized
        iconImage = null;
    }
  
    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        {iconImage && <Image source={iconImage} style={styles.icon} resizeMode="contain" />}
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };
  
  

  

  return (
    <View>
   <Head title="Settings" navigation={navigation} />
   
    <ScrollView>
      <View>
               <View style={styles.linksContainer}>
          <LinkWithIcon iconName="visa" text="Olorunfemi" screenName="MyInformation" />
          <LinkWithIcon iconName="phone" text="+9291-73819381" screenName="Payment" />
          <LinkWithIcon iconName="wallet" text="38491-392849-39" screenName="Wallet" />
          <LinkWithIcon iconName="map-marker-alt" text="Add home address" screenName="HomeAddress" />
          <LinkWithIcon iconName="car" text="Add work address" screenName="WorkAddress" />
          <LinkWithSwitch iconName="user-friends" text="Wheel Chair"  />
          <Dark iconName="clipboard-check" text="Dark mode"  />
          <LinkWithIcon iconName="facebook" text="In-car Music"  screenName="RideCheck"/>
          <LinkWithIcon iconName="font" text="Manage all shortcuts" />
          <LinkWithIcon iconName="lock" text="Safety tools" screenName="Safety"/>
          <LinkWithIcon iconName="comments" text="Security Center" screenName="Security"/>
          <LinkWithIcon iconName="gift" text="Set default tip" screenName="SetDefaultTip"/>
          <LinkWithIcon iconName="star" text="Drive with Glopilots" screenName="DriveWithGlopilot3"/>
          <LinkWithIcon iconName="donate" text="Privacy Settings" />
          <LinkWithIcon iconName="history" text="Legal" screenName="Legal"/>
          <LinkWithIcon iconName="bell" text="Help" screenName="Help" />
          <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={logout} style={styles.icon} resizeMode="contain" />
        <Text style={[styles.linkTextr, { flex: 1 }]}>Log out</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIconr} />
      </TouchableOpacity>
        </View>
        
      </View>


     
           
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <FontAwesome5 name="times" style={styles.closeIcon} />
            </TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.statusText}>This is the info drivers and other riders can see during a ride, but not after</Text>
          <Image source={{ uri: userProfile.profilePicture }} style={styles.mprofilePicture} />
          <Text style={styles.name}>{userProfile.name}</Text>

          <Text style={styles.drivers}>He / Him</Text>
          <View style={styles.statusContainer}>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
    <Text style={styles.statusNumber}>140</Text>
    <Text style={styles.statusText}>Rides</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
    <Text style={styles.statusNumber}>4.9</Text>
    <Text style={styles.statusText}>Rating</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
    <Text style={styles.statusNumber}>3.4</Text>
    <Text style={styles.statusText}>Years</Text>
  </TouchableOpacity>
</View>

        </View>
           
          </View>
        </View>
      </Modal>

    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        fontFamily: 'Poppins_400Regular',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
        position: 'relative',
      },
      closeButton: {
        position: 'absolute',
        top: -9,
        right: 5,
        padding: 12,
      },
      closeIcon: {
        fontSize: 16,
        color: '#888888',
      },
      badgecontainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        backgroundColor: '#FFFFFF',
      },
      badgetextcontainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
      },
      linksContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 20,
        marginBottom: 50,
        backgroundColor: '#FFFFFF',
      },
      refContainer: {
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
      },
      link: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        backgroundColor: '#FFFFFF',
      },
      badge:
      {
        alignItems: 'center'
      },
      icon: {
        fontSize: 18,
        width: 24,
        height: 24,
        marginRight: 10,
        color: '#888888',
        backgroundColor: '#FFFFFF',
      },
      icons: {
        fontSize: 24,
        width: 24,
        height: 24,
        marginRight: 10,
        color: '#888888',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
      },
      linkText: {
        fontSize: 20,
        
      },
      arrowIcon: {
        marginLeft: 10, 
        textAlign: 'right',
      },
      arrowIconr: {
        marginLeft: 10, 
        textAlign: 'right',
        color: '#d00000',
      },
      badgeText: {
        fontSize: 14,
        textAlign: 'center',
      },
      profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 75,
        marginBottom: 20,
      },
      mprofilePicture: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 20,
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      contain: {
        flex: 1,
        paddingTop: 39,
        backgroundColor: '#FFFFFF',
      },
      blackStar: {
        color: 'black',
        marginRight: 20,
        fontSize: 16,
      },
      driver: {
        fontSize: 16,
        marginBottom: 10,
        color: 'blue',
        paddingBottom: 10,
        paddingLeft: 60,
        marginLeft: 15,
        paddingRight: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        backgroundColor: '#FFFFFF',
      },
      linkTextr: {
        color: '#d00000',
        fontSize: 20,
      },
      
      drivers: {
        fontSize: 16,
        marginBottom: 10,
        color: 'black',
        paddingBottom: 10,
        paddingLeft: 60,
        marginLeft: 15,
        paddingRight: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        backgroundColor: '#FFFFFF',
      },
      statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
      },
      statusSection: {
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
      },
      statusNumber: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      left: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      statusText: {
        fontSize: 14,
        color: '#888888',
        textAlign: 'center',
        marginBottom: 10,
      },
      righh: {
       fontSize: 16,
        paddingRight: 5,
        textAlign: 'right',
      },
});

export default Settings;
