import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import HeaderAdvanced from './components/HeaderAdvanced';
import { Switch } from '@rneui/themed';
import {Octicons, Feather} from '@expo/vector-icons';
import {USERDATA} from './resources/task2Data'

const SafetySetting = ({ navigation }) => {
const [checked, setChecked] = useState(false);
const [userData, setUserData] = useState(USERDATA);

const firstLetter = userData.userName[0];

const handleChangeButton = () => {

  Alert.alert("handleChangeButton")
  
}

const handleLearnMore = () => {

  Alert.alert("handleLearnMore")
  
}

const handleDelete = () => {

  Alert.alert("handleDelete")
  
}

const gotochat = () => {
  navigation.navigate("TripSummary")
}


  return (
    <SafeAreaView style={{ flex: 1, marginTop: 0 }}>
      <View style={styles.container}>
        <HeaderAdvanced 
          navigation={navigation} 
          hasColor={false}
          title={''}
          iconName={'trash-2'}
          handleAction={handleDelete}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoHolder}>
            <Pressable onPress={gotochat} style={styles.userIcon}>
              <Text style={{fontWeight:'bold', fontSize:40, color:'#fff'}}>{firstLetter}</Text>
            </Pressable>
            
            <Text style={styles.username}>{userData.userName}</Text>

            <View style={styles.numberHolder}>
              <Image 
                source={userData.userFlag}
                resizeMode={'contain'}
                style={{width:25, height:25}}
              />
              <Text style={styles.userNumber}>{userData.userNumber}</Text>
            </View>

          </View>

          <View style={{padding:15}}>
            <Text style={styles.title}>Safety Settings</Text>

            <View style={styles.reminderHolder}>

              <View>
                <Text style={styles.subTitle}>Share trip reminder</Text>
                <Text style={styles.description}>Remind me before every trip</Text>
              </View>

              <Pressable 
              onPress={handleChangeButton}
              style={styles.changeButton}>
                <Text>Change</Text>
              </Pressable>
            </View>

            <Text style={styles.description}>You can set when you'd like to be remided to share your trip with me</Text>

            <View style={[styles.reminderHolder, {borderBottomWidth:0,}]}>

              <View style={{width:'75%'}}>
                <Text style={styles.subTitle}>Call incase of emergency</Text>
                <Text style={styles.description}>Glopilot can call {userData.userEmergency} if we can't reach you in an emergency. <Text 
                style={styles.learnMore}
                onPress={handleLearnMore}
                >Learn more</Text></Text>
                
              </View>

              <Pressable style={styles.checkBox}>
                <Switch
      value={checked}
      onValueChange={(value) => setChecked(value)}
    />
              </Pressable>
            </View>
            
          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SafetySetting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  infoHolder:{
    alignItems:'center',
    padding:15,
    marginVertical:10
  },
  userIcon:{
    backgroundColor:'#4460EF', 
    width:120, 
    height:120, 
    padding:15, 
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:60
  },
  username:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  numberHolder:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center', 
    gap:5
  },
  userNumber:{
    color:'#454545',
    fontSize:16
  },
  title:{
    fontWeight:'bold',
    fontSize:25
  },
  subTitle:{
    fontWeight:'bold',
    fontSize:17,
    color:'#0D1317',
    marginVertical:5
  },
  reminderHolder:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#EEEEEE',
    paddingBottom:20

  },
  description:{
    color:'#454545',
    fontSize:15
  },
  changeButton:{
    backgroundColor:'#eeeeee',
    padding:10,
    alignItems:'flex-end',
    paddingHorizontal:25,
    borderRadius:6
  },
  checkBox:{
    //padding:10,
    alignItems:'flex-end',
    borderRadius:6
  },
  learnMore:{
    fontWeight:'bold', 
    textDecorationLine:'underline'
  }
});
