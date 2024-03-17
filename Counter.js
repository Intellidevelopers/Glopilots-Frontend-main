import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const MainComponent = () => {
  const count = useSelector(state => state.count);
  const message = useSelector(state => state.message);
  const username = useSelector(state => state.username);
  const email = useSelector(state => state.email);
  const phonenumber = useSelector(state => state.phonenumber);
  const auth_token = useSelector(state => state.auth_token);
  const usertype= useSelector(state => state.usertype);
  const logged = useSelector(state => state.logged);


  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState('');

  const handleUpdateMessage = () => {
    dispatch({ type: 'UPDATE_EMAIL', payload: newMessage });
    setNewMessage(''); // Clear the input after updating message
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Counter: {count}</Text>
      <Text>Message: {message}</Text>
      <Text>Username: {username}</Text>
      <Text>email: {email}</Text>
      <Text>phonenumber: {phonenumber}</Text>
      <Text>auth_token: {auth_token}</Text>
      <Text>usertype: {usertype}</Text>
      <Text>logged: {logged}</Text>

      {/* TextInput for updating the message */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Enter a new message"
        value={newMessage}
        onChangeText={text => setNewMessage(text)}
      />

      {/* Button to dispatch 'UPDATE_MESSAGE' action */}
      <Button
        title="Update Message"
        onPress={handleUpdateMessage}
      />

      {/* Buttons for incrementing and decrementing count */}
      <Button
        title="Increment"
        onPress={() => dispatch({ type: 'INCREMENT' })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: 'DECREMENT' })}
      />
    </View>
  );
};

export default MainComponent;
