import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
const   PaymentCard = () => {
  return (
    <View style={styles.container}>
      <Svg width="388" height="205" viewBox="0 0 388 205">
        <Defs>
          <LinearGradient id="linear-gradient" x1="-0.732" y1="-0.728" x2="1.836" y2="1.813" gradientUnits="objectBoundingBox">
            <Stop offset="0" stopColor="#4460ef" />
            <Stop offset="1" stopColor="#fff" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="388" height="205" rx="10" fill="url(#linear-gradient)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({

});


export default PaymentCard;
