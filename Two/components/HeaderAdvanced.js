import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Octicons, Feather} from '@expo/vector-icons';
import RightIcon from './RightIcon'

const HeaderAdvanced = ({ navigation, title, iconName, hasColor, handleAction }) => {

  const canGoBack = navigation.canGoBack()

  const MixedComponent = () => {

    return(
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
        <Image 
          source={require("../driverImage.png")} 
          resizeMode={'contain'}
          style={{width:30, height:30}}
        />
        <Text style={{left:6, fontWeight:'bold', fontSize:16}}>Driver</Text>
      </View>
    )
  }

    return (
      <View style={styles.container}>
        
          {
          canGoBack &&  
            <Octicons 
              onPress={() => navigation.goBack()} 
              style={{ marginRight: 15 }} 
              name="chevron-left" 
              size={20} 
              color="#0D1317"
            /> 
          }

          

          <View style={{width:'50%', alignItems:'center'}}>
            
            {
              title
              ? <MixedComponent/>
              :  null //<Text style={styles.title}>{title}</Text>
            }
            
          </View>
        
        <RightIcon iconName={iconName} hasColor={hasColor} handleAction={handleAction} />
        
      </View>
    )
}

export default HeaderAdvanced

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderBottomWidth: 0.3,
        borderBottomColor: '#adb5bd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
})