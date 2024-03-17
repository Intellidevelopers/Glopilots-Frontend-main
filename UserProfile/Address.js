import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Head from '../Head';
import home from '../assets/icons/home.png';
import work from '../asset/work.png';
import edit from '../assets/icons/edits.png';
import del from '../assets/icons/delete.png';
const Address = () => {
  const navigation = useNavigation();

  const LinkWithIcon = ({ iconName, text, screenName, title }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    const onPressEdit = () => {
      if (screenName === 'HomeAddress') {
        navigation.navigate('HomeAddress');
      } else if (screenName === 'WorkAddress') {
        navigation.navigate('WorkAddress');
      }
    };

    const onPressDelete = () => {
      // Handle delete icon click
      console.log('Delete icon clicked');
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
         <Image source={home}  style={styles.icon} resizeMode="contain" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.linkText}>{text}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onPressEdit}>
          <Image source={edit}  style={styles.iconedit} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDelete}>
          <Image source={del}  style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };


  const Work = ({ iconName, text, screenName, title }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    const onPressEdit = () => {
      if (screenName === 'HomeAddress') {
        navigation.navigate('HomeAddress');
      } else if (screenName === 'WorkAddress') {
        navigation.navigate('WorkAddress');
      }
    };

    const onPressDelete = () => {
      // Handle delete icon click
      console.log('Delete icon clicked');
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
         <Image source={work}  style={styles.icon} resizeMode="contain" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.linkText}>{text}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onPressEdit}>
          <Image source={edit}  style={styles.iconedit} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDelete}>
          <Image source={del}  style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Head title="Address" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      


        <View style={styles.linksContainer}>
        <Text style={styles.titles}>Addresses</Text>
          <LinkWithIcon
            iconName="home"
            text="2491 Purdue Ave, Los Angeles"
            title="Home"
            screenName="HomeAddress"
          />
          <Work
            iconName="briefcase"
            text="2491 Purdue Ave, Los Angeles"
            title="Work"
            screenName="WorkAddress"
          />
        </View>
        <View style={styles.noLinkContainer}>
          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  icon: {
    height: 24,
    width: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  //  paddingTop: 20,
    paddingBottom: 10,
  },
  linksContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
  
   elevation: 2,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5,
    color: '#0d1317',
  },

  titles: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#0d1317',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 20,
    marginLeft: 10,
    color: '#2A2A2A',
  },
  iconedit: {
    height: 24,
    width: 20,
    marginRight: 10,
  },
  noLinkContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
  },
  noLinkText: {
    fontSize: 16,
    color: '#888888',
  },
});

export default Address;
