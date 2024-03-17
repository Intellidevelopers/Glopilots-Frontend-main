import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ShortStay = ({ navigation }) => {

  const InterStateNav = () => {
    navigation.navigate('InterState');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book 24 Hours Ahead</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
      </Text>
      <View style={styles.bbutton}>
        <TouchableOpacity style={styles.button} onPress={InterStateNav}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  bbutton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontFamily: 'SegoeUI-Bold',
    fontWeight: '700',
    color: '#0d1317',
  },
  description: {
    fontSize: 18,
    fontFamily: 'SegoeUI',
    color: '#545454',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4460ef',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    height: 52,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'SegoeUI',
    color: '#fff',
  },
});

export default ShortStay;
