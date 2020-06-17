import React, {useRef, useEffect, useState} from 'react';
import {Text, Animated, Easing} from 'react-native';
import {viewportWidth} from '@/utils/index';
import { Message } from '.';

interface IProps{
  data:Message
}

const BarrageItem:React.FC<IProps> = (props) => {
  const {data} =props;
  let translateX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 10,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: translateX.interpolate({
              inputRange: [0, 10],
              outputRange: [viewportWidth, 0],
            }),
          },
        ],
      }}>
      <Text>{data.title}</Text>
    </Animated.View>
  );
};

export default BarrageItem;
