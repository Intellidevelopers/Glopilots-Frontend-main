import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Head from '../Head';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Method = ({ navigation }) => {
  const [isBankAccountModalVisible, setIsBankAccountModalVisible] = useState(false);

  const BankLink = () => {
    navigation.navigate(Bank);
  };
  const CloseModal = () => {
    setIsBankAccountModalVisible(false);
  };


  const onPressLink = () => {
    navigation.navigate('Paypal'); 
  };
  const onPressLinks = () => {
    navigation.navigate('Bank'); 
  };


  const LinkWithIcon = ({ iconSource, text, screenName }) => {
    const onPressLink = () => {
      if (screenName === 'BankModal') {
        setIsBankAccountModalVisible(true);
      } else {
        navigation.navigate(screenName);
      }
    };

    return (
      <TouchableOpacity style={styles.link} onPress={onPressLink}>
        <Image source={iconSource} style={styles.icon}  resizeMode="contain" />
        <Text style={[styles.linkText, { flex: 1 }]}>{text}</Text>
        <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Head title="" navigation={navigation} />

      <ScrollView style={styles.titler}>
        <View style={styles.containers}>
          <Text style={styles.title}>How would you like to pay?</Text>
          <Text style={styles.text}>You'll only be charged after the ride</Text>
        </View>

        <View style={styles.linksContainer}>
          <LinkWithIcon iconSource={require('../assets/icons/bank.png')} text="Bank Account" screenName="BankModal" />
          <LinkWithIcon iconSource={require('../assets/icons/card.png')} text="Credit or Debit Card" screenName="CreditCardPayment" />
          <TouchableOpacity style={styles.link} onPress={onPressLink}>
            <Image source={require('../assets/icons/ppal.png')} style={styles.icon} resizeMode="contain" />
            <Text style={[styles.linkTexter, { flex: 1 }]}>
              Paypal{'\n'}
              <Text style={styles.emailText}>Femivanzekin@gmail.com</Text>
            </Text>
            
            <FontAwesome5 name="chevron-right" style={styles.arrowIcon} />
          </TouchableOpacity>

          <LinkWithIcon iconSource={require('../asset/venmo.png')} text="Venmo" />
          <LinkWithIcon iconSource={require('../assets/icons/cash.png')} text="Cash" screenName="AddCash" />

          {/* Paypal link with email */}
          
        </View>
      </ScrollView>

      <Modal visible={isBankAccountModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
            Link your bank account
            </Text>
            <View style={styles.iconView}>
            <Image source={require('../assets/icons/flash.png')} style={styles.fIcon} resizeMode="contain" />
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Glopilots uses trustly to instantly verify your account
            </Text>
            </View>

            <View style={styles.iconView}>
            <Image source={require('../assets/icons/lock.png')} style={styles.fIcon} resizeMode="contain"/>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
            Your password, pin, and authentication info won't be stored.
            </Text>

            
            </View>

            <Text style={{ fontSize: 14, color: '#0d1317' }}>
              By selecting 'continue', You agree to the <Text style={{ textDecorationLine: 'underline', fontWeight: '500',color: '#4460ef' }}>Program Terms</Text>
            </Text>

            <TouchableOpacity
              style={{
                width: '100%',
                height: 56,
                borderRadius: 10,
                backgroundColor: '#4460ef',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              }}
              onPress={onPressLinks}
            >
              <Text style={{ color: '#fff', fontSize: 20 }}>Continue</Text>
            </TouchableOpacity>

           

            {/* Close button */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 32,
                height: 32,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={CloseModal}
            >
              <View
                style={{
                  width: 18,
                  height: 2,
                  backgroundColor: '#0d1317',
                  transform: [{ rotate: '45deg' }],
                }}
              />
              <View
                style={{
                  width: 18,
                  height: 2,
                  backgroundColor: '#0d1317',
                  position: 'absolute',
                  transform: [{ rotate: '-45deg' }],
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containers: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#EEEEEE',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  titler: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    padding: 10,
    height: '40%',
 //   opacity: 0.9,
 //   position: 'relative',
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
    width: 24,
    height: 24,
    marginRight: 10,
  },
  linkText: {
    fontSize: 20,
    marginBottom: 10,
  },
  linkTexter: {
    fontSize: 20,
    marginBottom: 10,
    flexDirection: 'column',
  },
  arrowIcon: {
    marginLeft: 10,
    width: 24,
    height: 24,
    textAlign: 'right',
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  titles: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginLeft: 20,
    color: '#545454',
    marginBottom: 20,
  },
  linksContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  modalIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },

  fIcon: {
    width: 24,
    height: 30,
    marginRight: 10,
  },
  modalText: {
    marginTop: 10,
    marginBottom: 10,
  },
  emailText: {
    marginTop: 10,
    paddingTop: 20,
    fontSize: 14,
  },
  iconView: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingRight: 10,

  }
  ,
  modalTextsmall: {
    marginTop: 10,
    fontSize: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Method;
