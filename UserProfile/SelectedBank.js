import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from '../Head';

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 10 }}>
      <View style={{ backgroundColor: '#4460ef', height: 56, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'SegoeUI, Segoe UI' }}>Go to Chase  <Image source={require('../asset/warro.png')}  style={{ width: 16, height: 16 }} resizeMode="contain" /></Text>
      </View>
    </TouchableOpacity>
  );
};

const ExternalLinkIcon = () => {
  return (
    <View style={{ backgroundColor: '#4460ef', borderRadius: 20, padding: 3 }}>
    </View>
  );
};

const SelectedBank = ({ navigation }) => {
  const handleButtonPress = () => {
    // Add your functionality here
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingRight: 20 }}>
      <View style={styles.imagecontrol}>
 <Image source={require('../assets/icons/chasetrust.png')}  style={{ width: 209, height: 73, marginBottom: 20, }} resizeMode="contain" />
 </View>
      <View style={{ marginLeft: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#0d1317' }}>
          Connect your preferred Checking
        </Text>
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#0d1317' }}>
          Account
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
                  <Image source={require('../assets/icons/safe.png')}  style={styles.safesecure} resizeMode="contain" />
        </View>
        <View style={{ marginLeft: 10, marginTop: 20, }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#0d1317' }}>
            Secure & Safe
          </Text>
          <Text style={{ fontSize: 18, color: '#545454', paddingRight: 20 }}>
            Your bank login information is encrypted and cannot be seen by Glopilots.
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, marginBottom: 20 }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
                <Image source={require('../assets/icons/securey.png')}  style={styles.safesecure} resizeMode="contain" />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#0d1317', paddingRight: 20 }}>
            What will Glopilots need?
          </Text>
          <Text style={{ fontSize: 18, color: '#545454' }}>
            A checking account to authorize your payment.
          </Text>
        </View>
      </View>


      <CustomButton onPress={handleButtonPress} />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        
      </View>

      <View style={styles.svgContainer}>
        <Text style={styles.normalText}>
          By clicking 'Go to Chase', you agree to the Trustly
        </Text>
        <Text style={styles.boldText}>
          Terms of Use
        </Text>
        <Text style={styles.normalText}>
          and
        </Text>
        <Text style={styles.boldText}>
           Privacy Policy
        </Text>
      </View>

      {/* Random text added at the bottom */}
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
        <Image source={require('../assets/icons/slock.png')}  style={styles.slock} resizeMode="contain" />          
          Secure connection via  <Image source={require('../asset/trustly.png')}  style={styles.trustly} resizeMode="contain" />
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    width: 347,
    height: 42,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  normalText: {
    fontSize: 16,
    fontFamily: 'SegoeUI, Segoe UI',
    color: '#545454',
  },
  imagecontrol: {
    alignItems: 'center',
  },
  boldText: {
    fontSize: 16,
    fontFamily: 'SegoeUI-Bold, Segoe UI',
    color: '#4460ef',
    fontWeight: '700',
  },
  safesecure: {
    width: 40,
    height: 40,
  },
  slock: {
    width: 16,
    height: 22,
    marginRight: 5,
    paddingBottom: 5,
  },
  trustly: {
    width: 90,
    height: 32,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 20,
  },
  bottomText: {
    fontSize: 16,
    color: '#545454',
  },
});

export default SelectedBank;
