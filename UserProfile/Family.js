import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Head from '../Head';

const Family = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const LinkWithIcon = ({ iconName, text, screenName, title }) => {
    const onPressLink = () => {
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <View style={styles.titleContainer}>
          <FontAwesome5 name={iconName} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <FontAwesome5 name="chevron-right" style={styles.PdIcon} />
            <Text style={styles.linkText}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View  style={styles.container}>
      <Head title="Payment" navigation={navigation} />
      <ScrollView>
        <View style={styles.badgecontainer}>
          <View style={styles.card}>
            <View style={styles.shieldContainer}>
              <FontAwesome5 name="shield" style={styles.shieldIcon} />
            </View>
          </View>
          <View>
            <Text style={styles.title}>What is Ride Check?</Text>
            <Text style={styles.inputLabel}>
              In a case of an unexpected event, GloPilot will initiate a Ride Check, providing you with access to relevant safety tools so that you can quickly get the help you want
            </Text>
            <View style={styles.additionalSection}>     
            <Text style={styles.titles}>Ride Check Notifications</Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.additionalSectionSwitch}
              />
              </View>
           
              <Text style={styles.inputLabel}>
              When turned on, we will send you a 
ride check notification if a trip doesn't
progress as planned. </Text>
             
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 //   alignItems: 'center',
    backgroundColor: '#FFFFFF',

    justifyContent: 'space-between',
  
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
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
  icon: {
    fontSize: 16,
    width: 24,
    height: 24,
    marginRight: 10,
    color: '#888888',
    backgroundColor: '#FFFFFF',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 10,
    marginLeft: 10,
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    marginLeft: 10,
  },
  inputLabel: {
    color: '#545454',
    fontSize: 18,
    marginBottom: 5,
    marginRight: 50,
    marginLeft: 10,
  },
  additionalSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 1,
   
   
  },

  additionalSectionSwitch: {
    transform: [{ scale: 1 }],
    marginRight: 20,
  },
  card: {
    height: 240,
    width: '100%',
    backgroundColor: '#4460ef',
    justifyContent: 'center',
    position: 'relative',
  },
  shieldContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
  shieldIcon: {
    fontSize: 60,
    color: '#4460ef',
  },
  circleContainer: {
    position: 'absolute',
    top: -25,
    left: -25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: -1,
  },
  linkText: {
    fontSize: 16,
  },
  left: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20,
  },
  leftTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  leftLinks: {
    fontSize: 16,
    marginLeft: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 0,
  },
  gloPilotsCash: {
    fontSize: 16,
    marginLeft: 15,
    color: '#FFFFFF',
    marginBottom: 1,
  },
  gloPilotsAmount: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  gloPilotsAuto: {
    fontSize: 16,
    marginLeft: 15,
    color: '#FFFFFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  refillButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonAddText: {
    color: 'black',
    fontSize: 16,
  },
  PdIcon: {
    position: 'absolute',
    top: 10,
    left: 280,
    fontSize: 16,
    color: 'black',
  },
});

export default Family;
