import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Head from '../../Head';

const LocationCard = ({ title, address, name }) => (
    
  <View style={styles.locationCard}>
    
    <View style={styles.textContainer}>

    <View style={styles.iconContainer} />
    <View style={styles.columns}>
    <Text style={styles.homec}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
      </View>
    </View>
   
  </View>
);

const PackageDelivery = ({navigation}) => {
  
  
  const navigateToSendPackage = () => {
  navigation.navigate('SendPackage');
};

const navigateToRecievePackage = () => {
  navigation.navigate('RecievePackage');
};
  return (
    <View style={styles.container}>
      <Head title="Package Delivery" navigation={navigation}/>
      <Text style={styles.ptext}>

Send a package to

      </Text>



<LocationCard title="5415 Newcastle Aves" address="Encino, California" name="Home" />
    <LocationCard title="The Grove" address="189 the Grove Dr, Los Angeles, California" name="Work" />
 
    <View style={styles.centerContainer}>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/icons/dpak.png')} // Replace with your image source
          style={styles.image}
        />
      </View>


      <Text style={styles.question}>Leave something behind?</Text>


      <Text style={styles.description}>
        Get your keys or glasses back without a second trip
      </Text>

      <Text style={styles.description}>
        Get started {'>'}
      </Text>


    
</View>


      <View style={styles.center}>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToSendPackage}>
          <Text style={styles.buttonText}>Send a Package</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.header} onPress={navigateToRecievePackage}>
        <Text style={styles.headerText}>Recieve a package</Text>
      </TouchableOpacity>

    
      </View>

  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  backgroundColor: "#f8f8f8",
  flex: 1,
  },
  header: {
    width: "95%",
    height: 56,
    borderRadius: 10,
    backgroundColor: '#eee',
    margin: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
   
    color: '#0d1317',
  },

  ptext: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0d1317',
    marginLeft: 20,
    marginTop: 10
  },
  buttonContainer: {
    width: "95%",
    height: 56,
    borderRadius: 10,
    backgroundColor: '#4460ef',
//    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  imageContainer: {
    width: "100%",
    height: 125,
    borderRadius: 10,
    overflow: 'hidden',
    resizeMode: "cover"
 //   marginTop: 333,
  },

  centerContainer: {
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 10,
    backgroundColor: "#ffffff",
    paddingBottom: 15,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  description: {
    fontSize: 14,
    color: '#0d1317',
    marginTop: 11,
    marginLeft: 16,
  },
  question: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0d1317',
    marginTop: 24,
    marginLeft: 16,
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
 
    marginHorizontal: 20,
  },
  iconContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#0d1317',
    marginRight: 10,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    borderBottomWidth: 1.5,
    borderBottomColor: '#e4e4e4',
    flexDirection: 'row',
    marginTop: 10,
   
    
  },
  column: {
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0d1317',
    lineHeight: 25,
  },
   homec: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0d1317',
    lineHeight: 25,
  },
  address: {
    fontSize: 16,
    color: '#545454',
    lineHeight: 20,
    marginBottom: 10,
  },

});

export default PackageDelivery;
