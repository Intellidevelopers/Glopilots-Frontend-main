import React,{ useState } from "react";
import { View ,Image,Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
const TravelStartup = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'#f8f8f8'}}>
          <Image
            style={{width:'100%',height:'30%'}}
            source={require("../images/sofa1.png")}
          />
            <View style={{width:'90%',flex:1,alignSelf:'center'}}>
              <Text style={{fontSize:23,fontWeight:'bold',marginTop:20}}>Stay Organized for your {'\n'}next trip</Text>
              <Text style={{fontSize:17.5,color:'#545454',marginTop:5}}>GloPilots has Partnered with AwardWallet to automatically import and organize all of your hotel, flight, and restraunt reservations into one view</Text>
              <View style={{flexDirection:'row',borderBottomWidth: 1.5,borderBottomColor: '#e4e4e4',marginTop:10,paddingBottom:10}}>
                <View style={{width:'15%',alignItems:'center',justifyContent:'center'}}>
                  <Ionicons name="lock-closed-outline" size={30} color={'#0d1317'}/>
                </View>
                <View style={{width:'85%'}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>We respect your privacy</Text>
                    <Text style={{color:'#545454'}}>We'll only import travel-related emails to create trip itineraries.</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',borderBottomWidth: 1.5,borderBottomColor: '#e4e4e4',marginTop:10,paddingBottom:10}}>
                <View style={{width:'15%',alignItems:'center',justifyContent:'center'}}>
                  <Ionicons name="location-outline" size={30} color={'#0d1317'}/>
                </View>
                <View style={{width:'85%'}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Let us do the work for you</Text>
                    <Text style={{color:'#545454'}}>We'll update your itineraries when you get an email about travel changes.</Text>
                </View>
              </View>
              <View style={{flex:1,justifyContent:'flex-end',marginBottom:30}}>
                  <TouchableOpacity onPress={toggleModal} style={{backgroundColor:'#4460ef',height:50,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:17}}>Get Started</Text>
                  </TouchableOpacity>
              </View>
            </View>
            {/* Modal Code */}
            <Modal isVisible={isModalVisible} style={{width:'100%',marginLeft:0,marginBottom:0}} onBackButtonPress={toggleModal}>
              <View style={{ flex: 1 ,justifyContent:'flex-end',width:'100%'}}>
                <View style={{padding:15,backgroundColor:'#fff',width:'100%',height:'50%',borderTopLeftRadius:15,borderTopRightRadius:15}}>
                <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',paddingBottom:15,borderBottomColor:'#c8c8c8',borderBottomWidth:2,width:'100%'}}>Getting Started</Text>
                <Text style={{fontSize:18,marginTop:20,color:'#545454'}}>By linking your email account, you will agree let GloPilots and AwardWallet import your travel-related emails in accordance with <Text style={{borderBottomWidth:1}}>GloPilots Privacy Notice</Text> and <Text style={{borderBottomWidth:1}}>AwardWallet's Privacy and Policy</Text></Text>
                <TouchableOpacity style={{flexDirection:'row',marginTop:15,backgroundColor:'#4460ef',height:40,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Image style={{width:30,height:30}} source={require('../images/google-logo.png')} />
                    <Text style={{color:'#fff',fontSize:17}}>&nbsp;&nbsp;Sign in With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginTop:15,backgroundColor:'#eeeeee',height:40,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Image style={{width:20,height:20}} source={require('../images/microsoft-logo.png')} />
                    <Text  style={{color:'#202629',fontSize:17}}>&nbsp;&nbsp;Sign in With Microsoft</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:15,alignSelf:'center'}} onPress={toggleModal}>
                    <Text style={{fontSize:18,color:"#202629"}}>Cancel</Text>
                </TouchableOpacity>
                </View>
              </View>
            </Modal>
      </SafeAreaView>
  );
}

export default TravelStartup;