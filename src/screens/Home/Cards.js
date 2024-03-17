import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const DeliveryCards = () => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 5 }}></View>
      <View style={styles.row}>
        <RectangleCard title="Packages/Deliveries" imageSource={require('../../../assets/home/deliveries.png')} targetScreen="Package" />
        <RectangleCard title="Food" imageSource={require('../../../assets/home/food.png')} targetScreen="Food"/>
        <RectangleCard title="Grocery" imageSource={require('../../../assets/home/groceries.png')}/>
      </View>
      <View style={styles.row}>
        <RectangleCard title="Beverages"  imageSource={require('../../../assets/home/bev.png')}/>
        <RectangleCard title="Alcohols"  imageSource={require('../../../assets/home/alcohol.png')} targetScreen="Alcohol"/>
        <RectangleCard title="Specialist Foods" imageSource={require('../../../assets/home/specialist.png')} targetScreen="Food"/>
      </View>
      <View style={styles.trow}>
        <RectangleCard title="Pharmacy" imageSource={require('../../../assets/home/pharmacy.png')}  targetScreen="Pharmacy" />
        <View style={styles.spacer} />
        <RectangleCard title="Baby" imageSource={require('../../../assets/home/baby.png')} targetScreen="Food"/>
      
      </View>
    </View>
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

const IMAGE_WIDTH_PERCENTAGE = 80; // Adjust the percentage as needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth - 25,
    marginLeft: 10,
    marginRight: 20,
  },
  trow: {
    flexDirection: 'row',
  //  marginRight: 10,
    width: windowWidth - 25,
  },
  spacer: {
    
  //  marginRight: 10,
  marginRight: 17,
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
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: 'rgba(68, 96, 239, 0.3)',
  },
});

export default DeliveryCards;
