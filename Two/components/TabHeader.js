import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';

const TabHeader = () => {

  const [activeTab, setActiveTab] = React.useState(0)

  const handleTabSelect = (activeTab) => {
    setActiveTab(activeTab)
  }
  
  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    //backgroundColor:'red',
    padding:10,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    gap:1
  },
  tab:{
    padding:13,
    alignItems:'center',
    width:'47%'
    //borderWidth:1
  },
  rightTab:{
    borderTopRightRadius:6,
    borderBottomRightRadius:6,
  },
  leftTab:{
    borderTopLeftRadius:6,
    borderBottomLeftRadius:6,
  },
  label:{
    color:'#ffffff',
    fontSize:16
  }
});
