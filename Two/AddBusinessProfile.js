import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
} from 'react-native';

import Head from '../Head';


const AddBusinessProfile = ({ navigation }) => {

const handleMoreOptios = () => {

  navigation.navigate("createBusProfile")
  
}

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 0 }}>
      <View style={styles.container}>
        
        <Head title="Add Busiess Profile" navigation={navigation} />

        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{}}

        >

          <View style={{padding:20, backgroundColor:'#CBD1FF'}}>
            <Image
            source={require("./assets/drv.png")}
            resizeMode={'contain'}
            style={{width:160, height:160, alignSelf:'center'}}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text
              style={{
                fontSize: 25,
                color: '#0D1317',
                fontWeight: 'bold',
               // marginVertical: 15,
              }}>
              Set up a self-managed business profile
            </Text>

            <View style={{marginVertical:8}}>
              <Text style={{fontSize:17, color:"#000000", letterSpacing:0.3, fontWeight:"300"}}>
              You don't need an investigation from your organization 
              to setup a business profile. 
              Create one on your own! 
              Note this profile won't be directly 
              affiliated with your employer.
              Has your organization invited you to create a business profile?
               Find the invitation in your work email and 
               follow the link and create an employer-managed business profile
              </Text>
            </View>
            
          </View>
         
        </ScrollView>
         <Pressable onPress={handleMoreOptios} style={styles.bottomButton}>
          <Text style={{fontWeight:'bold', color:'#ffffff'}}>Create Business Profile</Text>
         </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddBusinessProfile;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
    flex:1
  },
  titleContainer:{
    backgroundColor:'#fff',
    width:'100%',
    padding:15,
    //paddingHorizontal:15
  },
  bottomButton:{
    backgroundColor:'#4460EF',
    padding:15,
    alignItems:'center',
    margin:15,
    borderRadius:5
  }


});
