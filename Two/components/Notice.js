import {StyleSheet,Text,View} from 'react-native';
import React, {useState} from 'react';
import {Octicons, Feather, MaterialIcons} from '@expo/vector-icons';

const Notice = ({ noticeType, message, subMessage}) => {
  

  return (
    
    <View style={[styles.container, {
      backgroundColor:noticeType === "success"? '#d6ead7' : '#FAD8CD',
      borderLeftColor: noticeType === "success"? '#4CAF50' : '#FF5722'
    }]}>
      <View>
        <MaterialIcons
          style={{ }}
          name={noticeType === "success" ? "check-circle" : "info"}
          size={28}
          color={noticeType === "success" ? '#4CAF50' : '#FF5722'}
        />
      </View>
      <View style={{width:'85%'}}>
        <Text style={[styles.message, {color: noticeType === "success" ? "#4CAF50" : '#FF5722', fontWeight:300}]}>{message}</Text>
        {
          subMessage && <Text style={[styles.message ,{color:'#4CAF50', fontWeight:'bold'}]}>{subMessage}</Text>
        }
      </View>
    </View>
  );
};

export default Notice;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    padding:12,
    gap:10,
    alignItems:'center',
    borderLeftWidth:4,
  },
  message:{
    fontSize:15,
  }
});
