import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Divider from '../components/Divider';
import { homestyle, hourlystyle } from '../../styles/style';
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import Button from '../components/Button';


const Hourly = ({navigation}) => {
const handNavigate = (name) => navigation.navigate(name);

const navigateToSendPackage = () => {
  navigation.navigate('SelectTime');
};

return (
  <SafeAreaView style={homestyle.container}>
    <View style={hourlystyle.hero}>
      <View style={homestyle.recommendation}>
        <Entypo name="chevron-small-left" size={30} color="black" />

        <TouchableOpacity style={homestyle.recommendationButton}>
          <MaterialCommunityIcons
            name="calendar-outline"
            size={24}
            color="black"
          />
          <Text style={homestyle.recommendationButtonText}>Recommendation</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../../assets/redcar-removebg-preview.png")}
        resizeMode="contain"
        style={{ width: "100%", height: "100%", top: -40  }}
        resizeMethod="scale"
      />
    </View>

    <View style={hourlystyle.section}>
      <Text style={hourlystyle.sectionTitleText}>Hourly Forecast</Text>

      <View style={hourlystyle.listContainer}>
        <View style={hourlystyle.listItem}>
          <Ionicons name="car-outline" size={27} color="black" />
          <Text style={hourlystyle.listItemText}>
            As many stops as you need in one car
          </Text>
        </View>
        <View style={hourlystyle.listItem}>
          <Image
            source={require("../../assets/icons8-change-80.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={hourlystyle.listItemText}>
            As many stops as you need in one car
          </Text>
        </View>

        <View style={hourlystyle.listItem}>
          <AntDesign name="trademark" size={24} color="black" />
          <Text style={hourlystyle.listItemText}>
            As many stops as you need in one car
          </Text>
        </View>
      </View>

      <View style={styles.center}>
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingVertical: 20, paddingHorizontal: 10}}>
          <Text style={styles.Text}>Starting at</Text>
          <Text style={styles.boldText}>$55.38/hour</Text>
        </View>
  

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToSendPackage}>
          <Text style={styles.buttonText}>Select Time</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({

  Text: {
    fontSize: 18,
   
    color: '#0d1317',
  },
  boldText: {
    fontSize: 18,
   fontWeight: "700",
    color: '#0d1317',
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
  
  center: {
    flex: 1,
    justifyContent: 'flex-end',
  //  alignItems: 'center',
    marginBottom: 20,
  },
  
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  }
});

export default Hourly;