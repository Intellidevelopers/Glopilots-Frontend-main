import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import visa from '../assets/icons/visa.png';

const History = ({ navigation }) => {
  const paymentHistory = [
    { id: 1, month: 'January', year: 2023, amount: 50.98 },
    { id: 2, month: 'February', year: 2023, amount: 75.32 },
    { id: 3, month: 'March', year: 2023, amount: 100.45 },
    { id: 4, month: 'April', year: 2023, amount: 125.30 },
    { id: 5, month: 'May', year: 2023, amount: 150.06 },
    { id: 6, month: 'June', year: 2023, amount: 175.09 },
  ];

  const renderPaymentItem = (payment) => {
    return (
      <View key={payment.id} style={styles.paymentItem}>
      <View style={styles.dateContainer}>
        <Text style={styles.paymentDates}>{payment.month} {payment.year}</Text>
        <View style={styles.dateContainers}>

        <Image source={visa} style={styles.imagecontrols} resizeMode="contain" />
          <View style={styles.rower}>
           
            <Text>Dec 23, 2022</Text>
            <Text> <Ionicons name="person-outline" size={18} color="#000000" /> • 1590</Text>
          </View>
        </View>
      </View>
      <View style={styles.paymentAmountContainer}>
        <Text style={styles.paymentAmount}>${payment.amount}</Text>
        <Ionicons name="chevron-forward-outline" size={18} color="#000000" style={styles.paymentAmount}/>
      </View>
    </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={24} color="#000000" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Payment History</Text>
        </View>
      </View>
      <View style={styles.paymentList}>
        {paymentHistory.map((payment) => renderPaymentItem(payment))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  titleContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
  },
  backButton: {
    padding: 5,
  },
  paymentList: {
    marginTop: 20,
  },
  paymentItem: {
    marginBottom: 10,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   paddingHorizontal: 20,
    paddingVertical: 10,
    
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateContainers: {
    top: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentDate: {
    fontSize: 18,
    color: '#000000',
    marginRight: 5,
  },
  paymentDates: {
    fontSize: 20,
    color: '#000000',
    marginRight: 5,
    fontWeight: 'bold',
    marginBottom: 15
  },
  paymentAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentAmount: {
    fontWeight: 'bold',
    top: 18,
    marginRight: 5,
  },
  imagecontrols: {
   width: 36,
   height: 12,
   marginRight: 10,
  },
  rower: {
    flexDirection: 'column',
    top: -10,
   },
});

export default History;
