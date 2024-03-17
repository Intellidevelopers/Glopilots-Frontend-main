import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('https://api.test.glopilots.com/get-user', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkVsQGdtYWlsLmNvbSIsImlhdCI6MTcwMTY5NjEwNCwiZXhwIjoxNzMzMjUzNzA0fQ.sX9RqJM6hPdyRrYolPOzDa1lddPMhP0HVdwPg5pbKIQ',
          },
        });

        const data = await response.json();
        setUserDetails(data.user);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text>User Details:</Text>
          <Text>Email: {userDetails.email}</Text>
          <Text>Name: {userDetails.name}</Text>
          <Text>Date of Birth: {userDetails.dob}</Text>
          <Text>User Type: {userDetails.userType}</Text>
        
        </View>
      )}
    </View>
  );
};

export default UserDetails;
