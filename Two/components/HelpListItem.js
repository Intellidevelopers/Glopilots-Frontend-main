import React from 'react';
import { StyleSheet, Pressable, Image, View, Text } from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

const FoodyListItem = ({navigation, item }) => {

  const gotoHelp = () => {

    navigation.navigate("HelpScreen")
    
  }
  
  return (
    <Pressable
    onPress={gotoHelp}
      style={{
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{ padding: 5 }}>
        <Image
          source={item.helpIcon}
          resizeMode={'contain'}
          style={{ width: 45, height: 45 }}
        />
      </View>
      <View style={{ left: 10 }}>
        <Text
          style={{
            fontSize: 13,
            color: '#0D1317',
            fontWeight: 'bold',
          }}>
          {item.helpTitle}
        </Text>
        <Text style={{ 
          color: !item.helpTitle ? "#4460EF" : '#545454', 
          fontSize: 12 
          }}>
          {item.helpDescription}
        </Text>
      </View>
    </Pressable>
  );
};

export default FoodyListItem;

const styles = StyleSheet.create({});
