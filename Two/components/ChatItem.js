import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import BusinessProfileIcon from "../resources/BusinessProfileIcons";
import {Octicons, Feather, FontAwesome} from '@expo/vector-icons';
import moment from 'moment';


const ChatItem = ({ item, navigation }) => {


const formattedDate = moment(item.dateSent).format('ddd'); 

const date = moment(item.dateSent);

// Get the current date
const currentDate = moment();

// Calculate the difference in days between the input date and the current date
const daysDiff = currentDate.diff(date, 'days');

// Determine if it's yesterday, last week, or a custom relative date
let relativeDate = '';
if (daysDiff === 1) {
  relativeDate = 'Yesterday';
} else if (daysDiff >= 2 && daysDiff <= 7) {
  relativeDate = 'Last week';
} else {
  // You can add custom logic for other relative dates as needed
  // For example, '2 weeks ago', '3 weeks ago', etc.
  relativeDate = `${Math.floor(daysDiff / 7)} weeks ago`;
}

  
  const handleActionCall = () => {

    alert(item)
    
  }

  return (
    
    <>
      {
        item.sender === "passenger"
        && <View style={styles.rowView}>
            <View style={styles.rightChatBubbleHolder}>
              <View style={styles.rightChat}>
                <Text style={{color:'#fff'}}>{item.message}</Text>
              </View>
              <View style={styles.chatDate}>
                <Text style={styles.dayTime}>{formattedDate}</Text>
                <FontAwesome 
                  style={{}} 
                  name="circle" 
                  size={3} 
                  color="#0D1317" 
                /> 
                <Text style={styles.dayTime}>{item.timeStamp}</Text>
              </View>
            </View>
          </View>
      }

      {
        item.sender === "driver"
        && <View style={[styles.rowView, { flexDirection:'row' }]}>
            <Image 
              source={require("../driverImage.png")}
              resizeMode={'contain'}
              style={{width:36, height:36, marginTop:3}}
            />

            <View style={styles.leftChatBubbleHolder}>
              <View style={styles.lefttChat}>
                <Text style={{color:'#0D1317'}}>{item.message}</Text>
              </View>
              <View style={[styles.chatDate, {justifyContent:'flex-end'}]}>
                <Text style={styles.dayTime}>{formattedDate}</Text>
                <FontAwesome 
                  style={{}} 
                  name="circle" 
                  size={3} 
                  color="#0D1317" 
                /> 
                <Text style={styles.dayTime}>{item.timeStamp}</Text>
              </View>
            </View>
            
          </View>
      }
    
    </>
        
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  rowView:{
    padding:15,
  },
  rightChatBubbleHolder:{
    width:'70%',
    alignSelf:'flex-end'
  },
  leftChatBubbleHolder:{
    width:'70%',
    alignSelf:'flex-start',
    left:10
  },
  rightChat:{
    backgroundColor:'#4460EF',
    padding:15,
    width:'100%',
    borderTopStartRadius:15,
    borderBottomStartRadius:15,
    borderBottomEndRadius:15,
    alignSelf:'flex-end'
  },
  chatDate:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    gap:5,
    paddingVertical:5
  },
  dayTime:{
    color:'#454545',
    fontSize:11
  },
  lefttChat:{
    backgroundColor:'#eeeeee',
    padding:15,
    width:'100%',
    borderTopEndRadius:15,
    borderBottomStartRadius:15,
    borderBottomEndRadius:15,
    alignSelf:'flex-start',
    alignItems:'center'
  },
});
