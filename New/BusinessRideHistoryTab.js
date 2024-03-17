import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const BusinessRideHistoryTab = () => {

  const handleCreateProfile = () => {
    alert("Creating business profile")
  }
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('./assets/driverHands.png')}
            resizeMode={'contain'}
            style={{ width: 200, height: 220 }}
          />
        </View>

        <View style={{ padding: 10, alignItems: 'center' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginVertical: 12,
              color: '#0D1317',
            }}>
            Rides that work for you
          </Text>

          <Text style={{ textAlign: 'center', fontSize: 16, color: '#0D1317' }}>
            Create a business today. Send receipt to your work email or connect
            your GloPilots to your expensing system
          </Text>
        </View>
      </ScrollView>

      <View style={{ padding: 20 }}>
        <Pressable 
        onPress={handleCreateProfile}
        style={styles.profileButton}>
          <Text style={{ color: '#ffffff', fontSize: 16 }}>Create Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BusinessRideHistoryTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8f8',
  },
  profileButton: {
    backgroundColor: '#4460EF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    alignSelf: 'center',
  },
});
