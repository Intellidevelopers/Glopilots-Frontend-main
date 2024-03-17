import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';

const MealBannerItem_21 = ({ item, navigation }) => {
  const handleClick = () => {
    //const selected = JSON.stringify(item, 0, 2)
    //alert(selected)
    navigation.navigate('Screen_203', { item });
  };

  const handleLike = () => {
    alert(`You liked ${item.name}`);
  };

  return (
    <Pressable onPress={handleClick} style={styles.container}>
      <View>
        <Pressable onPress={handleLike} style={styles.liker}>
          <Feather name="heart" size={17} color={'#00000099'} />
        </Pressable>

        {item.promoDeal && (
          <View style={styles.promoDeal}>
            <Text style={{ color: '#ffffff', fontSize: 11 }}>
              {item.promoDeal}
            </Text>
          </View>
        )}

        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: 330,
            height: 120,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignSelf:'center'
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <View>
          <Text style={{ color: '#000000', fontWeight: 'bold' }}>
            {item.name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}>
          <FontAwesome name="star" size={13} color={'#00000099'} />

          <Text style={{ color: '#00000099' }}>{item.rating}</Text>
        </View>
      </View>

      <View
        style={{
          color: '#00000099',
          marginTop: -6,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
        }}>
        <Text style={{ color: '#00000099', fontSize: 13 }}>
          {item.duration}
        </Text>

        <FontAwesome name="circle" color={'#00000099'} size={4} />

        <Text style={{ color: '#00000099', fontSize: 13 }}>{item.mile}</Text>
      </View>
    </Pressable>
  );
};

export default MealBannerItem_21;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 20,
    marginTop: 15,
  },
  promoDeal: {
    backgroundColor: '#4CAF50',
    padding: 3,
    position: 'absolute',
    top: 0,
    paddingHorizontal: 5,
    width: '40%',
    zIndex: 1,
    left: 0,
    borderTopLeftRadius: 10,
    alignItems: 'center',
  },
  liker: {
    position: 'absolute',
    width: 30,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    zIndex: 1,
    right: 10,
    top: 10,
    justifyContent: 'center',
  },
});
