import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Head from '../Head';

const GiftCardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Head title="Gift Card" navigation={navigation} />

      <View style={styles.card}></View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Give the gifts of ridess</Text>
          <Text style={styles.descriptionText}>
            Send gift cards to your loved ones for GloPilots rides and bike or
            scooter rides.
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy a Gift Card</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.redeemText}>Redeem your gift card</Text>
        
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder='Gift card number'
            />
          </View>
        </View>

        <Text style={styles.termsText}>Subject to GloPilots Cash Terms</Text>

        <View style={styles.redeemButtonContainer}>
          <TouchableOpacity style={styles.redeemButton}>
            <Text style={styles.redeemButtonText}>Redeem</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 240,
    width: '100%',
    backgroundColor: '#4460ef',
    justifyContent: 'center',
    position: 'relative',
  },
  contentContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    marginLeft: 20,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 20,
  },
  buyButton: {
    alignItems: 'center',
    paddingTop: 13,
    maxWidth: 388,
    marginRight: 20,
    marginLeft: 20,
    height: 56,
    borderRadius: 10,
    backgroundColor: 'rgba(68, 96, 239, 255)',
  },
  buyButtonText: {
    fontFamily: 'Uber Move',
    fontWeight: '400',
    fontSize: 20,
    color: 'rgba(255, 255, 255, 255)',
  },
  redeemText: {
    fontFamily: 'Uber Move',
    fontWeight: '400',
    fontSize: 20,
    color: 'rgba(13, 19, 23, 255)',
    marginTop: 29,
    marginLeft: 20,
  },
  inputContainer: {
    marginTop: 16,
  },
  inputWrapper: {
    paddingStart: 16,
    paddingTop: 17,
    maxWidth: 388,
    marginRight: 20,
    marginLeft: 20,
    height: 56,
    borderRadius: 10,
    backgroundColor: 'rgba(238, 238, 238, 255)',
  },
  input: {
    fontFamily: 'Uber Move',
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(84, 84, 84, 255)',
    padding: 10,
  },
  termsText: {
    fontFamily: 'Uber Move',
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(68, 96, 239, 255)',
    marginTop: 14,
  },
  redeemButtonContainer: {
    marginTop: 23,
  },
  redeemButton: {
    paddingTop: 13,
    maxWidth: 388,
    height: 56,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(238, 238, 238, 255)',
  },
  redeemButtonText: {
    fontFamily: 'Uber Move',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(13, 19, 23, 255)',
  },
});

export default GiftCardScreen;
