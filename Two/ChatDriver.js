import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  TextInput,
  Alert,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  Keyboard 
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import HeaderAdvanced from './components/HeaderAdvanced';
import {Octicons, Feather, FontAwesome} from '@expo/vector-icons';
import moment from 'moment';
import {CHATS} from './resources/task2Data'
import ChatItem from './components/ChatItem'

const ChatDriver = ({ navigation }) => {

  const [chats, setChats] = useState(CHATS);
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const currentDate = moment().format('YYYY-MM-DD');
  const currentTime = moment().format('hh:mm A');


  const handleSendChat = () => {

    const newMessage = {
      messageId:'ddddd',
      sender:'passenger',
      message:message,
      dateSent:currentDate,
      timeStamp:currentTime
    };
      setChats([...chats, newMessage]);
      setMessage('')
    
  }

  const scrollToBottom = () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    };


  const handleCall = () => {

    Alert.alert("handleCall")
    
  }

  useEffect(() => {

    scrollToBottom()

  }, [chats, isKeyboardOpen])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    // Clean up listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [isKeyboardOpen]);


  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.container}>
        <HeaderAdvanced 
          navigation={navigation} 
          hasColor={true}
          title={'Chris'}
          iconName={'phone-call'}
          handleAction={handleCall}
        />

        <ScrollView 
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}>

          <View style={{alignItems:'center', padding:10}}>
            <Text style={{color:'#454545', fontSize:13}}>Yesterday</Text>
          </View>

          <FlatList 
            data={chats}
            renderItem={({item}) => (
              <ChatItem 
                navigation={navigation} 
                item={item} 
              />
            )}
            scrollEnabled={false}
          />
            
        </ScrollView>

        <View style={styles.chatBoxWrapper}>
          <View style={{width:'75%'}}>
            <TextInput 
              placeholder={'Write a message...'}
              style={[styles.chatInput, Platform.OS === 'ios' && styles.iosChatBox]}
              onChangeText={(text) => setMessage(text)}
              multiline={true}
              value={message}
            />
          </View>
          <Pressable onPress={handleSendChat} style={styles.chatSendButton}>
            <FontAwesome
            name="send" 
            size={22} 
            color="#ffffff" 
          /> 
          </Pressable>
        </View>
        
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
    
  );
};

export default ChatDriver;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  
  chatBoxWrapper:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center', 
    gap:20,  
    backgroundColor:'#F8F8F8', 
    paddingVertical:15, 
    paddingHorizontal:5,
    borderTopWidth:2,
    borderTopColor:'#eeeeee',
    elevation:2
  },
  chatInput:{
    backgroundColor:'#eeeeee', 
    paddingHorizontal:15, 
    paddingVertical:10, 
    borderRadius:25
  },
  iosChatBox:{
    paddingVertical:30,
  },
  chatSendButton:{
    width:50, 
    height:50, 
    backgroundColor:'#4460EF', 
    alignItems:'center', 
    justifyContent:'center', 
    borderRadius:50
  }

});
