import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import RatingStars from '../resources/RatingStars';

const OrdersItem = ({ item, navigation, goNext }) => {
  const { width, height } = Dimensions.get('screen');
  const handleOderSelect = () => {
    const orderDetails = JSON.stringify(item, 0, 2);
    Alert.alert('Order Data', orderDetails);
    navigation.navigate('HelpScreen', { orderItem: item });
  };

  return (
    <Pressable
      onPress={() => goNext && handleOderSelect()}
      style={[
        styles.container,
        {
          width: width - 30,
        },
      ]}>
      <View>
        <Image
          source={item.orderImage}
          resizeMode={'contain'}
          style={{ width: 340, height: 180, alignSelf: 'center' }}
        />
      </View>
      <View style={{ padding: 5 }}>
        <Text style={styles.dimColor}>
          {item.orderCategory} | {item.orderQty}{' '}
          {item.orderQty > 1 ? 'items' : 'item'}
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
          {item.orderItem}
        </Text>

        <Text style={styles.dimColor}>
          {item.orderDate} |{' '}
          {item.orderStatus === 0 ? 'Processing' : 'Completed'}
        </Text>

        <RatingStars rating={item.orderRating} />

        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 8 }}>
          ${item.orderPrice}
        </Text>
      </View>
    </Pressable>
  );
};

export default OrdersItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  dimColor: {
    color: '#343a40',
    marginVertical: 6,
  },
});
