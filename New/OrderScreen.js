import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ORDERS_DATA } from './data/data';
import OrdersItem from './components/OrdersItem';

const OrderScreen = ({ navigation }) => {
  const [orders, setOrders] = React.useState(ORDERS_DATA);

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 15 }}>
        <FlatList
          scrollEnabled={false}
          data={orders}
          renderItem={({ item }) => (
            <OrdersItem item={item} navigation={navigation} goNext={true} />
          )}
        />
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
