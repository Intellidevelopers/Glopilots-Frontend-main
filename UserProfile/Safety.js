import {React, useState} from 'react';
import { View, Text, Button, Modal, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Head from '../Head';

const Safety = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  // Sample user data
  

  const LinkWithIcon = ({ iconName, text, screenName }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
        <TouchableOpacity style={styles.link} onPress={onPressLink}>
     
      <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
      <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
    </TouchableOpacity>
    );
  };

  

  return (
    <View  style={styles.container}>
    <Head title="Legal" navigation={navigation} />
   
    <ScrollView>
      <View>
       
      
  

        <View style={styles.linksContainer}>
          <LinkWithIcon  text="Share your location" screenName="Share" />
          <LinkWithIcon text="Set a check-in" screenName="CheckIn" />
         
         
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

export default Safety;
