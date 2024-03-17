import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LimeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          When your driver is arriving, hold up your
        </Text>
        <Text style={styles.text}>
          phone so they can spot this color.
        </Text>
        <Text style={styles.text}>
          Tesla Model 3
        </Text>
        <Text style={styles.largeText}>
          9GAV347
        </Text>
      </View>     
      <View style={styles.badge} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#4caf50',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SegoeUI',
    marginTop: 5, 
    marginBottom: 5
  },
  largeText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'SegoeUI-Bold',
    fontWeight: '700',
    marginBottom: 5,
  },
  line: {
    width: 150,
    height: 6,
    backgroundColor: '#fff',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  badge: {
   width: 48,
    height: 48,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 24,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default LimeScreen;
