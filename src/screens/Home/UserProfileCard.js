import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const UserProfileCard = ({ name, timestamp, description, imageSource }) => {
  return (
    <View style={{ alignItems: 'flex-start' }}>
      <View
        style={{
          flexDirection: 'row',
        //  alignItems: 'flex-start',
          paddingStart: 8,
          paddingTop: 8,
          width: 388,
          height: 72,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}>
        <ImageBackground
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
          }}
          source={imageSource}>
          <View
            style={{
              alignItems: 'flex-start',
              paddingStart: 41,
              paddingTop: 42,
              flex: 1,
            }}>
            {/* Colored circle */}
            <View
              style={{
                alignItems: 'flex-start',
                width: 12,
                height: 12,
                borderRadius: 6,
                borderWidth: 1.5,
                borderColor: 'rgba(255, 255, 255, 255)',
                backgroundColor: 'rgba(76, 175, 80, 255)',
              }}
            />
          </View>
        </ImageBackground>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text
              style={{
              
                fontWeight: 'bold',
                fontSize: 20,
                color: 'rgba(13, 19, 23, 255)',
              }}>
              {name}
            </Text>
            <Text
              style={{
          
                fontWeight: '400',
                fontSize: 14,
                textAlign: 'right',
                color: 'rgba(84, 84, 84, 255)',
                marginStart: 164,
                marginTop: 5,
              }}>
              {timestamp}
            </Text>
          </View>
          <Text
            style={{
            
              fontWeight: '400',
              fontSize: 16,
              color: 'rgba(84, 84, 84, 255)',
              marginTop: 2,
            }}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfileCard;
