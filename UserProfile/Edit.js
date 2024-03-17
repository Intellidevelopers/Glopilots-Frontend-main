import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import userProfileImage from '../assets/icons/pp.png';

import EditIcon from '../assets/icons/edit.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Head from '../Head';
import { useSelector, useDispatch } from 'react-redux';
const Edit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const username = useSelector(state => state.username);
  const email = useSelector(state => state.email);
  const pic = useSelector(state => state.pic_url);


  // Sample user data
  const userProfile = {
    name: username,
    email: email,
    profilePicture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ12seFJhxPY1fuHI07hnqEUF9ITm9YN5_3MlHU00&s',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <View  style={styles.container}>
      <Head title="Edit Information" navigation={navigation} />

      <ScrollView>
        <View>
          <Text style={styles.left}>Profile Picture</Text>
            <View style={styles.containers}>
      


            <View style={styles.profileContainer}>
  <Image  source={pic} style={styles.profilePicture} />
  <Image source={EditIcon} style={styles.editIcon} />
</View>
            </View>

           
            <Text style={styles.left}>Personal</Text>
            <View style={styles.content}>

            <TouchableOpacity style={styles.nameContainer}>
              <Text style={styles.sectionTitle}>Name</Text>
              <Text style={styles.sectionDescription}>{userProfile.name}</Text> 
                <FontAwesome5 name="chevron-right" style={styles.chevronIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.nameContainer}>
              <Text style={styles.sectionTitle}>Pronouns</Text>
              <Text style={styles.sectionDescription}>Select your pronouns. We will use them when addressing you</Text>
              <FontAwesome5 name="chevron-right" style={styles.chevronIcon} />
            </TouchableOpacity>

            </View>
          </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
 //   padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    fontFamily: 'Poppins_400Regular',
  },


  content: {
   
    padding: 20,
   
  },
  containers: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    justifyContent: 'space-between',
    padding: 20,
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
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  arrowIcon: {
    marginLeft: 10,
    textAlign: 'right',
  },
  badge: {
    alignItems: 'center',
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
    fontSize: 18,
  },
  arrowIcon: {
    marginLeft: 10,
    textAlign: 'right',
  },
  badgeText: {
    fontSize: 14,
    textAlign: 'center',
  },
  profilePicture: {
    width: 104,
    height: 104,
    alignItems: 'center',
    borderRadius: 75,
    marginBottom: 10,
  },
  mprofilePicture: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  det: {
    fontSize: 18,
    marginBottom: 10,
  },
  deta: {
    fontSize: 18,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    paddingBottom: 10,
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
    fontSize: 24,
    fontWeight: '700',
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
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
  nameContainer: {
    marginBottom: 10,
 
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionValue: {
    fontSize: 18,
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#545454',
    marginRight: 30,
  },
  chevronContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 20,
  },
  chevronIcon: {
    fontSize: 18,
    color: '#888888',
    marginLeft: 10, 
    top: -25,
    textAlign: 'right',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: 'white',
    top: 75,
    padding: 5,
  },

});

export default Edit;
