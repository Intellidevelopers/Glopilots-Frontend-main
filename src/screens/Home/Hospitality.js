import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

const DeliveryCards = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 5 }}></View>
      <View style={styles.row}>
        <RectangleCard title="Book Hotel" imageSource={require('../../../assets/home/hotel.png')} screen="InterState" />
        <RectangleCard title="Book Flight" imageSource={require('../../../assets/home/flight.png')}  />
        <RectangleCard title="Book Short Stay" imageSource={require('../../../assets/home/short-stay.png')} targetScreen="TravelSearch"/>
      </View>
      <View style={styles.row}>
        <RectangleCard title="Visit Places" imageSource={require('../../../assets/home/visit-places.png')} targetScreen="TravelSearch" />
        <RectangleCard title="Book Boat Cruise" imageSource={require('../../../assets/home/ship.png')} targetScreen="Boat" />
        <RectangleCard title="Book Bus Cruise" imageSource={require('../../../assets/home/bus.png')}  />
      </View>
    </SafeAreaView>
  );
};


const RectangleCard = ({ title, imageSource, targetScreen }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (title === 'Book Hotel') {
      // Navigate to the Hotel booking component and pass data as needed
      navigation.navigate('TravelExplore', { data: 'Book Hotels' });
    } else if (title === 'Book Flight') {
      // Navigate to the Flight booking component and pass data as needed
      navigation.navigate('TravelExplore', { data: 'Book Flight' });
    } 
    else if (title === 'Visit Places') {
      // Navigate to the Flight booking component and pass data as needed
      navigation.navigate('TravelExplore', { data: 'Visit Places' });
    } 

    else if (title === 'Shorts Stay') {
      // Navigate to the Flight booking component and pass data as needed
      navigation.navigate('TravelSearch');
    } 
    else {
      navigation.navigate(targetScreen);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.rectangle}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.shape}>
          <Image
            source={imageSource}
            style={styles.tabIcon}
            resizeMode='contain'
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const IMAGE_WIDTH_PERCENTAGE = 70; // Adjust the percentage as needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  //  marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth - 25,
    marginLeft: 10,
    marginRight: 20,
  },
  tabIcon: {
    width: (IMAGE_WIDTH_PERCENTAGE / 100) * ((windowWidth - 40) / 3 - 20),
    height: '50%',
    resizeMode: 'contain',
  },
  titleContainer: {
    height: 40, // Adjust this height as needed
    justifyContent: 'flex-start',
    paddingLeft: 10, // Adjust the padding as needed
    paddingRight: 10, // Adjust the padding as needed
  },
  
  title: {
    fontSize: 16,
    textAlign: 'left',
    bottom: 5
   
    // Remove marginTop and marginBottom from here
  },
  
  rectangle: {
    width: (windowWidth - 40) / 3 - 8,
    height: (windowWidth - 40) / 2 - 40,
    backgroundColor: '#fff',
  //  alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 20,
    borderRadius: 10,
  },
  shape: {
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'rgba(68, 96, 239, 0.3)',
  },
});

export default DeliveryCards;
