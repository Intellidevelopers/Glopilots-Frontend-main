import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  FlatList,
  Alert
} from 'react-native';
import React from 'react';
import Head from '../Head';
import {BUSINESS_PROFILE_DATA} from "./resources/task2Data"
import BusinessProfileItem from './components/BusinessProfileItem';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const CreateBusinessProfile = ({ navigation }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [profileItems, setProfileItems] = React.useState(BUSINESS_PROFILE_DATA);

const handleNextButton = () => {

 tabIndex === 0 ? setTabIndex(1) : setTabIndex(0)

}

const handleDone = () => {
  //alert("Done functions called")
  //setTabIndex(0)
  navigation.navigate("SafetySetting")
}

const tabView1 = () => {

  return(
    <View style={styles.contents}>
     
     <View style={{flexDirection:'row', alignItems:'center'}}>
      <View style={{width:'70%'}}>
        <Text style={styles.title}>Set up your business profile</Text>
        <Text style={styles.subTitle}>Set Create a business profile for your work ride</Text>
      </View>

      <View  style={{width:'30%', alignItems:'flex-end'}}>
        <Image source={require("./assets/guard.png")} 
          resizeMode="contain"
          style={{width:50, height:50}} 
        />
      </View>
     </View>

     <View style={styles.listItems}> 

      <View>
        <Ionicons
          style={{marginTop:10 }}
          name="mail-outline" 
          size={27}
          color="#454545"
        />
      </View>

      <View style={{left:10}}>
        <Text style={styles.itemLabel}>Work email</Text>
        <Text style={styles.itemValue}>None</Text>
        <Text 
        onPress={() => alert("Add email")} 
        style={styles.linkText}>Add email</Text>
      </View>

    </View>

     <View style={styles.listItems}>

      <View>
        <Ionicons
          style={{marginTop:10 }}
          name="card-outline" 
          size={27}
          color="#454545"
        />
      </View>

      <View style={{left:10}}>
        <Text style={styles.itemLabel}>Payment method</Text>
        <Text style={styles.itemValue}>None</Text>
        <Text 
          onPress={() => alert("Add payment method")} 
          style={styles.linkText}>Add payment method</Text>
      </View>

    </View>

     <View style={styles.listItems}>

      <View>
        <Ionicons
          style={{marginTop:10 }}
          name="receipt-outline" 
          size={27}
          color="#454545"
        />
      </View>

      <View style={{left:10}}>
        <Text style={styles.itemLabel}>Receipt forwarding (optional)</Text>
        <Text style={styles.itemValue}>None</Text>
        <Text 
          onPress={() => alert("Add expense system")}
          style={styles.linkText}
        >Add expense system</Text>
      </View>

    </View>
     
    </View>
  )
}

const tabView2 = () => {
  return(
    <View style={styles.contents}>
      <Text>This is the second Tab of the slide</Text>
      <Text>Click the button below to go back to the first tab</Text>
    </View>
  )
}

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 0 }}>
      <View style={styles.container}>
        <Head navigation={navigation} title={'Create Business Profiles'} />

        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ marginBottom:10}}
        >

         {
           tabIndex === 0
           ? tabView1()
           : tabIndex === 1 ? tabView2() : tabView1()
         }
         
        </ScrollView>

         <View style={styles.indicatorHolder}>
           <FontAwesome
              name="circle"
              size={13}
              color={tabIndex === 0 ? "#4460EF" : "#eeeeee"}
            />
            <FontAwesome
              name="circle"
              size={13}
              color={tabIndex === 0 ? "#eeeeee" : "#4460EF"}
            />
         </View>
        
         <Pressable 
          onPress={() => tabIndex === 0 ? handleNextButton() : handleDone()} 
          style={styles.bottomButton}>
          <Text style={{fontWeight:'bold', color:'#ffffff'}}>{tabIndex === 0 ? "Next" : "Done"}</Text>
         </Pressable>

      </View>
    </SafeAreaView>
  );
};

export default CreateBusinessProfile;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F8F8F8',
    flex:1
  },
  contents:{
    padding:15
  },
  listItems:{
    flexDirection:'row',
     borderBottomWidth:1,
     paddingVertical:15,
     borderBottomColor:'#eeeeee'
    //padding:15
  },
  indicatorHolder:{
    flexDirection:'row',
    justifyContent:'center',
    padding:5,
    gap:10
  },
  title:{
    fontWeight:'bold',
    fontSize:24
  },
  subTitle:{
    color:'#454545',
    marginVertical:5,
    fontSize:17
  },
  itemLabel:{
    color:'#454545',
    fontSize:18
  },
  itemValue:{
    fontSize:16,
    color:'#0D1317',
    marginVertical:3
  },
  linkText:{
    color:'#4560EF',
    fontSize:18
  },
  bottomButton:{
    backgroundColor:'#4460EF',
    padding:15,
    alignItems:'center',
    margin:15,
    borderRadius:5
  }


});
