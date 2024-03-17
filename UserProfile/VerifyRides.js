import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Head from '../Head';

const VerifyRides = () => {
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
      
      <ScrollView>
        <View style={styles.badgecontainer}>
        <View style={styles.card}>
        <Image
          source={require("../assets/icons/export/verify.png")}
          resizeMode="contain"
         // resizeMethod=""
          style={{width: "100%", height: 360}}
        />
        </View>

          <View style={styles.badgeco}>
            <Text style={styles.title}>Verify your rides</Text>
            <Text style={styles.inputLabel}>
             Help make sure you get in the right car by verifying your ride with a pin. You Will recieve a unique pin for each tripthat you will need to share with your driver when they pick you up, in order for the trip to start  </Text>
            <View style={styles.additionalSection}>     
            <Text style={styles.titles}>Use PIN to verify your ride</Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.additionalSectionSwitch}
              />
              </View> 
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
    lineHeight: 23,
    marginLeft: 10,
  },
  additionalSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 1,
    marginTop: 20,
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
    marginBottom: 20
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

  badgeco: {
    marginLeft: 10,
    
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

export default VerifyRides;
