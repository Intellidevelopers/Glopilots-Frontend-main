import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image, TextInput } from 'react-native';
import UserProfileCard from './UserProfileCard'; // Make sure to provide the correct path
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../Header';
import HeadNav from '../../../HeadNav';
import badge from '../../../assets/icons/search.png';

const App = () => {
  const profileData = [
    {
      name: 'Bryant',
      timestamp: '04:15 PM',
      description: 'Lorem ipsum dolor sit amet...',
      
    },
    {
      name: 'Alice',
      timestamp: '12:30 PM',
      description: 'Consectetur adipiscing elit...',
     
    },
    {
        name: 'Alice',
        timestamp: '12:30 PM',
        description: 'Consectetur adipiscing elit...',
       
      },
      {
        name: 'Alice',
        timestamp: '12:30 PM',
        description: 'Consectetur adipiscing elit...',
       
      },
      {
        name: 'Alice',
        timestamp: '12:30 PM',
        description: 'Consectetur adipiscing elit...',
       
      },
      {
        name: 'Alice',
        timestamp: '12:30 PM',
        description: 'Consectetur adipiscing elit...',
       
      },
      {
        name: 'Alice',
        timestamp: '12:30 PM',
        description: 'Consectetur adipiscing elit...',
       
      },
      {
        name: 'Alice',
        timestamp: '12:30 PM',
        description: 'Consectetur adipiscing elit...',
       
      },

    
  ];

  return (
    <View>
      
    <View style={styles.container}>
    <HeadNav title="Messages" />
     <ScrollView>

     <View style={styles.inputContainer}>
        
          <View style={[styles.input, '' && styles.filledInput]}>
          <Image source={badge} color="#0D1317" style={styles.inputIcon}  resizeMode="contain"/>
            <TextInput
              style={styles.inputText}
              placeholder="Search..."
              keyboardType="email-address"
              editable={true}
              value=''
              onChangeText=''
            />
          </View>
        </View>


      {profileData.map((profile, index) => (
         <TouchableOpacity>
        <UserProfileCard
          key={index}
          name={profile.name}
          timestamp={profile.timestamp}
          description={profile.description}
          imageSource={profile.imageSource}
        /></TouchableOpacity>
      ))}
      </ScrollView>
    </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 0,
   
  },
 
  inputContainer: {
    marginBottom: 10,
    backgroundColor: '#fff',
    marginTop: 10,
 
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 18,
    marginHorizontal: 20,
  },
  input: {
    maxWidth: 388,
    height: 40,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 58,
    paddingLeft: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filledInput: {
    borderColor: '#4460EF', // Change the border color when text is present
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    color: '#545454',
    width: 24,
    height: 24,
    
  },
  inputText: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1, // Add flex: 1 to allow the input to occupy remaining space
  },
  eyeIconContainer: {
    paddingRight: 10,
  },
  eyeIcon: {
    marginRight: 5,
    width: 24,
    height: 24,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', // Add justifyContent to center vertically
    borderRadius: 10,
    marginBottom: 20,
    height: 56,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default App;
