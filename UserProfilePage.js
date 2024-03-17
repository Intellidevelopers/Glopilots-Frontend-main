import {React, useState, useEffect} from 'react';
import { View, Text, Button, Modal, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Header from './Header';
import { AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Svg, { Image as SvgImage } from 'react-native-svg';
import userProfileImage from './assets/icons/pp.png';
import badge from './assets/icons/baddge.png';
import Edit from './assets/icons/edit.png';
import drate from './assets/icons/rate.png';
import Info from './assets/icons/info.png';
import address from './assets/icons/address.png';
import family from './assets/icons/family.png';
import cancel from './assets/icons/cancel.png';
import donate from './assets/icons/donate.png';
import trips from './assets/icons/trips.png';
import fam from './assets/icons/fam.png';
import gift from './assets/icons/gift.png';
import history from './assets/icons/history.png';
import notify from './assets/icons/notify.png';
import phone from './assets/icons/phone.png';
import reward from './assets/icons/reward.png';

import ridechek from './assets/icons/ridecheck.png';
import secure from './assets/icons/security.png';
import settings from './assets/icons/settings.png';
//import SecurityAccountGlopilots from './SecurityAccountGlopilots';
import help from './assets/icons/help.png';

import user from './assets/unuser.png';
import verify from './assets/icons/verify.png';



import wallet from './wallet.png';
import walet from './walet.png';
import * as ImagePicker from 'expo-image-picker';

const UserProfilePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const [profilePicture, setProfilePicture] = useState(null);
  const username = useSelector(state => state.username);
  const email = useSelector(state => state.email);


  useEffect(() => {
    const getProfilePicture = async () => {
      try {
        const storedImageUri = await AsyncStorage.getItem('profileImage');
        if (storedImageUri) {
          setProfilePicture(storedImageUri);
        }
      } catch (error) {
        console.error('Error retrieving profile picture from AsyncStorage:', error);
      }
    };

    getProfilePicture();
  }, []);
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      const imageUri = result.uri;
  
      // Save the image URI in AsyncStorage
      try {
        await AsyncStorage.setItem('profileImage', imageUri);
        console.log('Image URI saved in AsyncStorage:', imageUri);
  
        // Update the profile picture state with the new image URI
        setProfilePicture(imageUri);
      } catch (error) {
        console.error('Error saving image URI in AsyncStorage:', error);
      }
    }
  };
  


  // Sample user data
  const userProfile = {
    name: username,
    email: email,
    profilePicture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ12seFJhxPY1fuHI07hnqEUF9ITm9YN5_3MlHU00&s',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
                                case 'cog':
                                iconImage = settings;
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
    <View  style={{ flex: 1}}>
    <Header />
   
    <ScrollView>
      <View>
        <View style={styles.container}>

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 40, }}>
  <TouchableOpacity onPress={pickImage}>
    {profilePicture ? (
      <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            
    ) : (
      <Image source={user} style={styles.profilePicture} resizeMode='contain' />
    )}
  </TouchableOpacity>
  <Image source={Edit} style={styles.editIcon} />
</View>

          <Text style={styles.name}>{userProfile.name}</Text>

          <Text style={styles.driver}>View as driver</Text>
          <View style={styles.statusContainer}>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
    <Text style={styles.statusNumber}>140</Text>
    <Text style={styles.statusText}>Rides</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
    <Text style={styles.statusNumber}>  <Image source={drate} style={styles.starIcon} />4.9</Text>
    <Text style={styles.statusText}>Rating</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
    <Text style={styles.statusNumber}>3.4</Text>
    <Text style={styles.statusText}>Years</Text>
  </TouchableOpacity>
</View>

        </View>
        <View style={styles.badgetextcontainer}>

          <Text style={styles.left}>GloPilot Badges</Text>
          <Text style={styles.righh}>View all</Text>
        </View>
        <View style={styles.badgecontainer}>
          
        <Image source={badge} style={styles.imagecontrol} resizeMode="contain" />


           
         
        </View>

        <View style={styles.linksContainer}>
          <LinkWithIcon iconName="Info" text="My Information" screenName="MyInformation" />
          <LinkWithIcon iconName="font" text="Family" screenName="Count"/>
          <LinkWithIcon iconName="money-bill-alt" text="Payment" screenName="Payment" />
          
          <LinkWithIcon iconName="wallet" text="Wallet" screenName="Wallet" />
          <LinkWithIcon iconName="map-marker-alt" text="Address" screenName="Address" />
          <LinkWithIcon iconName="car" text="Trips" screenName="Trips" />
          <LinkWithIcon iconName="user-friends" text="Manage Trusted Contacts" screenName="Trusted" />
        <LinkWithIcon iconName="verify" text="Verify Your Rides"  screenName="VerifyRides" />
        <LinkWithIcon iconName="facebook" text="Ride Check"  screenName="RideCheck"/>
        
        <LinkWithIcon iconName="lock" text="Security" screenName="Security"/>
        <LinkWithIcon iconName="comments" text="Communication" screenName="Communication"/>
        <LinkWithIcon iconName="gift" text="Gift card" screenName="GCard"/>
        <LinkWithIcon iconName="star" text="Reward" screenName="Rewards"/>
        <LinkWithIcon iconName="donate" text="Donate" screenName="Donate"/>
        <LinkWithIcon iconName="history" text="Ride History" screenName="RideHistory"/>
        <LinkWithIcon iconName="bell" text="Notifications" screenName="Notification"/>
        <LinkWithIcon iconName="question-circle" text="Help" screenName="Help" />
        <LinkWithIcon iconName="cog" text="Settings"  screenName="Settings"/>
        </View>
        <Text style={styles.refContainer}>Refer a friend and get 10% off on your next 10 rides or whatever we choose</Text>
      
      
      </View>


     
           
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        {/* Modal content */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
            <Image source={cancel} style={styles.cancelcontrol} />
            </TouchableOpacity>
          <View style={styles.containersd}>
            <Text style={styles.statusText}>This is the infos drivers and other riders can see during a ride, but not after</Text>
           
    {profilePicture ? (
      <Image source={{ uri: profilePicture }} style={styles.mprofilePicture} />
            
    ) : (
      <Image source={user} style={styles.mprofilePicture}  />
    )}
  
          
          <Text style={styles.name}>{userProfile.name}</Text>

          <Text style={styles.drivers}>He / Him</Text>
          </View>
          <View style={styles.statusContainer}>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
     <Text style={styles.statusNumber}>140</Text>
    <Text style={styles.statusText}>Rides</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
    <Text style={styles.statusNumber}><Image source={drate} style={styles.starIcon} /> 4.9</Text>
    <Text style={styles.statusText}>Rating</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.statusSection} onPress={() => setIsModalVisible(true)}>
    <Text style={styles.statusNumber}>3.4</Text>
    <Text style={styles.statusText}>Years</Text>
  </TouchableOpacity>
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
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',

        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        fontFamily: 'Poppins_400Regular',
      }, 
      containersd: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        fontFamily: 'Poppins_400Regular',
        marginBottom: 15,
      }, 
       modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Center the modal vertically
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        // Add height to the modal content to fit its content properly
        height: 511, // You can adjust the height as needed
        // Other styles...
      },
      closeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 12,
      
      
      },
      cancelcontrol: {
          width: 18,
          height: 18,
      
      },

      closeIcon: {
        fontSize: 20,
        color: '#0D1317',
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

        paddingTop: 20,
        backgroundColor: '#FFFFFF',
      },
      refContainer: {
        backgroundColor: '#FFFFFF',
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
        lineHeight: 30,
     //   marginBottom: 65,
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
        width: 24,
        height:24,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
      },
      imagecontrol: {
        
    width: 388, // Specify the desired width of the image container
    height: 136
      },
      icons: {
        fontSize: 24,
        width: 24,
        height: 24,
        marginRight: 10,
        color: '#0d1317',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
      },
      linkText: {
        fontSize: 20,
        color: '#0d1317',
        
      },
      arrowIcon: {
        marginLeft: 10, 
        textAlign: 'right',
      },
      badgeText: {
        fontSize: 14,
        textAlign: 'center',
      },
   
      profileContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      },
    
      profilePicture: {
        width: 104,
        height: 104,
        borderRadius: 80,
        marginBottom: 20,
      },
    
      editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 5,
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: 'white',
        top: 90,
        padding: 5,
      },
      mprofilePicture: {
        width: 180,
        height: 180,
        borderRadius: 180,
        marginBottom: 20,
      },
      name: {
        fontSize: 20,
        fontWeight: '700',
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
        fontSize: 18,
        marginBottom: 10,
        color: '#4460ef',
        paddingBottom: 10,
        paddingLeft: 60,
        marginLeft: 15,
        paddingRight: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        backgroundColor: '#FFFFFF',
      },

      
      drivers: {
        fontSize: 16,
        color: 'black',

        paddingLeft: 60,
        marginLeft: 15,
        paddingRight: 60,
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
        fontSize: 18,
        color: '#0d1317',

      },
      left: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      starIcon: {
        width: 12,
        height: 12,
      },
      statusText: {
        fontSize: 16,
        color: '#545454',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
      },
      righh: {
       fontSize: 20,
        paddingRight: 5,
        textAlign: 'right',
      },
});

export default UserProfilePage;
