import React from 'react';
import { View } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const RatingStars = ({ rating }) => {
  const maxRating = 5;
  const blueStars = Math.min(rating, maxRating);
  const redStars = maxRating - blueStars;

  const blueStarsArray = Array.from({ length: blueStars }, (_, i) => (
    <FontAwesome
      key={`blue-${i}`}
      name="star"
      size={16}
      color="#4460EF"
      style={{ marginRight: 2 }}
    />
  ));

  const redStarsArray = Array.from({ length: redStars }, (_, i) => (
    <FontAwesome
      key={`red-${i}`}
      name="star"
      size={16}
      color="#dad7cd"
      style={{ marginRight: 2 }}
    />
  ));

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {blueStarsArray}
      {redStarsArray}
    </View>
  );
};

export default RatingStars;
