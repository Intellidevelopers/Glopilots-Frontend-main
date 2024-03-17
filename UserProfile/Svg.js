import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SVGComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.intersection1} />
      <View style={styles.intersection2} />
      <View style={styles.intersection3} />

      <Text style={styles.amount}>$0.00</Text>
      <Text style={styles.title}>GloPilots Cash</Text>

      <View style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Cash</Text>
        {/* You can add the "+" icon here using other React Native components */}
      </View>

      <View style={styles.autoRefillButton}>
        <Text style={styles.autoRefillButtonText}>Auto Refill</Text>
        {/* You can add the "LINE_EXPAND" icon here using other React Native components */}
      </View>

      <Text style={styles.infoText}>Auto-refill is off.</Text>
      {/* You can add the "info" icon here using other React Native components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: 388,
    height: 205,
    borderRadius: 10,
    backgroundColor: '#4460ef',
    position: 'absolute',
  },
  intersection1: {
    width: 256,
    height: 156,
    borderRadius: 60,
    backgroundColor: '#fff',
    opacity: 0.3,
    position: 'absolute',
    top: 50,
  },
  intersection2: {
    width: 124,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#fff',
    opacity: 0.3,
    position: 'absolute',
    top: 124,
    left: 56,
  },
  intersection3: {
    width: 118,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#fff',
    opacity: 0.3,
    position: 'absolute',
    top: 93,
    right: 94,
  },
  amount: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'SegoeUI-Bold, Segoe UI',
    position: 'absolute',
    top: 188,
    left: 56,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SegoeUI, Segoe UI',
    position: 'absolute',
    top: 155,
    left: 56,
  },
  addButton: {
    width: 168,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4460ef',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 430,
    left: 154,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'SegoeUI, Segoe UI',
  },
  autoRefillButton: {
    width: 168,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 430,
    left: 322,
  },
  autoRefillButtonText: {
    color: '#0d1317',
    fontSize: 18,
    fontFamily: 'SegoeUI, Segoe UI',
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SegoeUI, Segoe UI',
    position: 'absolute',
    top: 241,
    left: 76,
  },
});

export default SVGComponent;
