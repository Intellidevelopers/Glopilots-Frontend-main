import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import leftArrow from '../../assets/leftarrow.png'
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import girl from "../../assets/girl.jpg"
import google from '../../assets/google.png'
import microsoft from '../../assets/microsoft.png'

const AccountScreen = ({ navigation }) => {

  const bottomSheetModalRef = useRef(null);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(true);
  const snapPoints = ['50%'];

  useEffect(() => {
    if (bottomSheetOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [bottomSheetOpen]);

  const handleGetStarted = () => {
    setBottomSheetOpen(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={{}}>
          <Image source={leftArrow} resizeMode='contain' style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.pilotText}>GloPilots Travel</Text>
      </View>
      <View>
        <Image source={girl} resizeMode='cover' style={styles.girlContainer} />
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.text}>Stay organized for your</Text>
        <Text style={styles.text}>next trip</Text>
        <Text style={styles.loremText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</Text>
        {/* Your other text content here */}
      </View>
      <TouchableOpacity title="Get Started" style={styles.googleContainer} onPress={handleGetStarted}>
        <Text>Getting Started</Text>
        </TouchableOpacity>
      <BottomSheetModalProvider>
        <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} backgroundStyle={{ borderRadius: 40, elevation: 5 }}>
          <View style={styles.rideContainer}>
            <Text style={styles.textRide}>Getting Started</Text>
          </View> 
          <View style={styles.textContainer}>
            <Text style={styles.loremText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</Text>
            {/* More content for the bottom sheet */}
          </View>
          <View style={{ padding: 16 }}>
            <TouchableOpacity style={styles.googleContainer}>
              <Image source={google} resizeMode='contain' style={styles.image} />
              <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.googleContainer, { backgroundColor: "#D3D3D3" }]}>
              <Image source={microsoft} resizeMode='contain' style={styles.image} />
              <Text style={[styles.googleText, { color: "#171717" }]}>Sign in with Microsoft</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelContainer}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container:{
      flex:1,
      width:"100%",
      marginTop:20,
  },
  image:{
      width:24,
      height:24
  },
  mainContainer:{
      flexDirection:"row",
      paddingHorizontal:16,
      marginBottom:16,
      marginTop:30
  },

  text:{
      fontSize:18,
      alignItems:"center",
      fontWeight:"700",
      color:"#171717",
      marginBottom:4

  },

  
  text1:{
      fontSize:12,
      fontWeight:"400",
      color:"#171717"
  },

  textRide:{
      textAlign:"center",
      fontSize:16,
      fontWeight:'700',
      color:"#171717",
      marginBottom:14
  },
  rideContainer:{
      borderBottomWidth:1,
      borderColor:'#dedede',
      marginHorizontal:14,
  },

  

  tricycleImage:{
      width:40,
      height:40,
      marginRight:16
  },

  pilotText:{
      fontSize:16,
      fontWeight:"500",
      color:"#171717",
      marginLeft:12
  },

  awayText:{
      fontSize:14,
      color:"gray"
  },

  activeItem: {
     borderWidth:1,
     borderColor:"#007FFF",
     borderRadius:8
    },

    jobContainer:{
      backgroundColor:"#E5E4E2",
      borderRadius:50,
      flexDirection:"row",
      marginRight:10,
      paddingHorizontal:3
  
    },

    imagePerson:{
      width:20,
      height:20,
    },

    
    jobContainer1: {
      alignItems:"center",
      padding:10,
      alignSelf:'center'        
    },
    activeTab: {
      backgroundColor: '#007FFF',
      borderRadius:50,
      padding:14,
      alignItems:"center",
      justifyContent:"center",
      width:40,
      height:40,
    },

    loremText:{
      fontSize:14,
      color:'gray',
      fontWeight:"400",
    },

    girlContainer:{
      width:"100%",
      height:200,
      marginBottom:14
    },

    textContainer:{
      padding:16
    },

    googleContainer:{
      flexDirection:"row",
      backgroundColor:'#007FFF',
      padding:14,
      alignItems:"center",
      justifyContent:'center',
      width:'95%',
      borderRadius:8,
      marginBottom:12
    },

    googleText:{
      fontSize:16,
      fontWeight:"500",
      color:"#fff",
      marginLeft:8
    },

    cancelContainer:{
      alignItems:"center"
    },

    cancelText:{
      fontSize:18,
      color:"#171717",
      fontWeight:'500'
    },
  
})
