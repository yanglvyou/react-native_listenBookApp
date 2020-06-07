import React, {useRef, useEffect} from 'react';
import {Text, StyleSheet, View, Animated, Easing} from 'react-native';
// import LottieView from 'lottie-react-native';
import {IProgram} from '@/models/album';
import Touchable from '@/components/Touchable';
import IconFont from '@/assets/iconfont';

interface IProps {
  data: IProgram;
  index: number;
  onPress: (data: IProgram) => void;
}

const Item: React.FC<IProps> = (props) => {
  const {data, index} = props;
  const onPress = () => {
    console.log(11111111);
    const {onPress} = props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  };


  return (
    <Touchable style={styles.item} onPress={onPress}>
      <Text style={styles.serial}>{index + 1}</Text>
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.info}>
          <View style={styles.listen}>
            <IconFont name="iconicon-test" color="#939393" size={16} />
            <Text style={styles.playVolume}>{data.playVolume}</Text>
          </View>

          <View style={styles.time}>
            <IconFont name="iconshijian" color="#939393" size={16} />
            <Text style={styles.duration}>{data.duration}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.date}>{data.date}</Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  serial: {
    fontSize: 20,
    color: '#838383',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 15,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  playVolume: {
    marginHorizontal: 5,
  },
  duration: {
    marginHorizontal: 5,
  },
  date: {
    color: '#939393',
  },
});

export default Item;
