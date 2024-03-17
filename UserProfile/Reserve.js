import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const YourComponent = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Link your bank account</Text>

      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Glopilots uses trustly to instantly verify your account
      </Text>

      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Your password, pin, and authentication info won't be stored.
      </Text>

      <TouchableOpacity
        style={{
          width: 388,
          height: 56,
          borderRadius: 10,
          backgroundColor: '#4460ef',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}
        onPress={() => {
          // Handle "Continue" button press
        }}
      >
        <Text style={{ color: '#fff', fontSize: 20 }}>Continue</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 14, color: '#0d1317' }}>
        By selecting 'continue', You agree to the <Text style={{ textDecorationLine: 'underline', color: '#4460ef' }}>Program Terms</Text>
      </Text>

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
        onPress={() => {
          // Handle close button press
        }}
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
  );
};

export default YourComponent;
