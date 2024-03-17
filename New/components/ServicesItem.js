import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const ServicesItem = ({ item }) => {
  const handleSelect = () => {
    Alert.alert('Service', item.serviceName);
  };

  return (
    <Pressable onPress={handleSelect} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imgWrapper}>
          <Image
            source={item.serviceImage}
            resizeMode={'contain'}
            style={{ width: 58, height: 58 }}
          />
        </View>
        <Text
          style={{ marginVertical: 6, color: '#0D1317', textAlign: 'center' }}>
          {item.serviceName}
        </Text>
      </View>
    </Pressable>
  );
};

export default ServicesItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Dimensions.get('screen').width / 4,
  },
  innerContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  imgWrapper: {
    backgroundColor: '#eeeeee',
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
    margin: 1,
    padding: 5,
  },
});
