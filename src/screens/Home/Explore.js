import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

const Explore = ({navigation}) => {
 // const navigation = useNavigation();
  return (
    <View style={styles.flexx}>
    <View style={styles.container}>
       
        <ScrollView  showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} >
        <View style={styles.containers}>
        <Text style={styles.btitle}>Ride Anywhere</Text>
      <View style={styles.row}>
        <RectangleCard title="Ride/Drops" imageSource={require('../../../assets/home/drive.png')} targetScreen="Rider"/>
        <RectangleCard title="2-Wheels" imageSource={require('../../../assets/home/2-wheel.png')} targetScreen="TwoWheel"/>
        <RectangleCard title="Rent Cars" imageSource={require('../../../assets/home/drive.png')} targetScreen="Cars"/>
      </View>
      <View style={styles.row}>
        <RectangleCard title="Packages/Deliveries" imageSource={require('../../../assets/home/deliveries.png')} targetScreen="PackageDelivery"/>
        <RectangleCard title="Carpool-Shared Ride" imageSource={require('../../../assets/home/people.png')} targetScreen="CarPool"/>
        <RectangleCard title="Travel & Explore" imageSource={require('../../../assets/home/travel.png')} targetScreen="GTravel"/>
      </View>

    
      <View style={styles.row}>
        <RectangleCard title="Reserve" imageSource={require('../../../assets/home/book.png')}/>
        <RectangleCard title="Rent by hours" imageSource={require('../../../assets/home/ride-time.png')} targetScreen="Hourly"/>
        <RectangleCard title="Charter" imageSource={require('../../../assets/home/truck-t.png')} targetScreen="Charter" />
      </View>
      <View style={styles.row}>
        <RectangleCard title="Scooter" imageSource={require('../../../assets/home/scooter.png')} targetScreen="ScooterHome"/>
        <RectangleCard title="Tri-Cycle" imageSource={require('../../../assets/home/tricycle.png')} targetScreen="TriCycle"/>
        <RectangleCard title="Haulage/Truck"  imageSource={require('../../../assets/home/truck.png')} targetScreen="Haulage"/>
      </View>
      <Text style={styles.btitle}>Send and recieve all Package</Text>
      
      <View style={styles.row}>
        <RectangleCard title="Food" imageSource={require('../../../assets/home/food.png')} targetScreen="FoodDetails" />
        <RectangleCard title="Grocery" imageSource={require('../../../assets/home/groceries.png')}/>
        <RectangleCard title="Alcohol" imageSource={require('../../../assets/home/alcohol.png')} targetScreen="Screen_21" />
      </View>

      <View style={styles.row}>
        <RectangleCard title="Pharmacy" imageSource={require('../../../assets/home/pharmacy.png')} targetScreen="PharmacyAround"/>
        <RectangleCard title="Baby" imageSource={require('../../../assets/home/baby.png')} targetScreen="PharmacyAround"/>
        <RectangleCard title="Specialist Foods" imageSource={require('../../../assets/home/specialist.png')}/>
      </View>
      <View style={styles.lefta}>
      <Text style={styles.btitle}>Hospitality & Tours</Text>
      </View>
<View style={styles.row}>
        <RectangleCard title="Book Hotel" imageSource={require('../../../assets/home/hotel.png')} targetScreen="TravelExplore" />
        <RectangleCard title="Book Flight" imageSource={require('../../../assets/home/flight.png')} targetScreen="TravelExplore"/>
        <RectangleCard title="Shorts Stay" imageSource={require('../../../assets/home/short-stay.png')} targetScreen="TravelSearch"/>
        
      </View>



      <View style={styles.trow}>
        <RectangleCard title="Visit Places" imageSource={require('../../../assets/home/visit-places.png')} targetScreen="TravelSearch"/>
        <View style={styles.spacer} />
        <RectangleCard title="Book Boat Cruise" imageSource={require('../../../assets/home/ship.png')} targetScreen="Boat"/>
        
      </View>



      <View style={styles.lefta}>
      <Text style={styles.btitle}>Multi Ride</Text>
      </View>


      <View style={styles.row}>
        <RectangleCard title="Inter State Travel" imageSource={require('../../../assets/home/scooter.png')} targetScreen="ShortStay"/>
        <RectangleCard title="Inter Country Travel" imageSource={require('../../../assets/home/tricycle.png')} targetScreen="PreInterCountry"/>
        <RectangleCard title="Haulage/Truck"  imageSource={require('../../../assets/home/truck.png')} targetScreen="Haulage"/>
      </View>


</View>
      </ScrollView>
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
  


const IMAGE_WIDTH_PERCENTAGE = 70; // Adjust the percentage as needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  //  backgroundColor: '#fff'
  },
  containers: {
    flex: 1,
    justifyContent: 'flex-start',
    
  //  backgroundColor: '#fff'
  },
  flexx: {   flex: 1, },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: windowWidth - 40,
  },
  trow: {
    flexDirection: 'row',
  //  marginRight: 10,
    width: windowWidth - 50,
  },
  spacer: {
    
  //  marginRight: 10,
  marginRight: 10,
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
    fontSize: 14,
    textAlign: 'left',
    bottom: 8
   
    // Remove marginTop and marginBottom from here
  },
  btitle: {
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 20,
    fontWeight: '700',
    marginTop: 10,

   
    // Remove marginTop and marginBottom from here
  },
  lefta: {
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  rectangle: {
    width: (windowWidth - 40) / 3 - 8,
    height: (windowWidth - 40) / 2 - 20,
    backgroundColor: '#fff',
  //  alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderRadius: 10,
    marginBottom: 20,
  },
  shape: {
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 35,
    backgroundColor: 'rgba(68, 96, 239, 0.3)',
  },
});

export default Explore;
