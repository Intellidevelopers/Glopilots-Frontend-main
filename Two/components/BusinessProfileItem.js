import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BusinessProfileIcon from "../resources/BusinessProfileIcons";


const BusinessProfileItem = ({ item, navigation }) => {
  
  const handleActionCall = () => {

    alert(item)
    
  }

  return (
    
    <View style={styles.listItems}>

      <View>
        <BusinessProfileIcon name={"mail-outline"}
        />
      </View>

      <View style={{left:10}}>
        <Text>{item.fieldName}</Text>
        <Text>None</Text>
        <Text onPress={handleActionCall} style={{color:'#4560EF'}} >{!item.fieldValue ? `Add ${item.fieldName}` : "Edit"}</Text>
      </View>

    </View>
        
  );
};

export default BusinessProfileItem;

const styles = StyleSheet.create({
  listItems:{
    flexDirection:'row',
     borderBottomWidth:1,
     paddingVertical:15,
     borderBottomColor:'#eeeeee'
    //padding:15
  },
});
