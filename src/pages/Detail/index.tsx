import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Button, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RootStackNavigation, ModalStackParamList} from '@/navigator/index';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {RootState} from '@/models/index';
import {useSelector, useDispatch} from 'react-redux';
import Touchable from '@/components/Touchable';
import IconFont from '@/assets/iconfont';
import PlaySlider from './PlaySlider';
import {viewportWidth} from '@/utils/index';

interface IProps {
  navigation: RootStackNavigation;
  route: RouteProp<ModalStackParamList, 'Detail'>;
}

const IMAGE_WIDTH = 180;
const SCALE = viewportWidth / IMAGE_WIDTH;

interface IState {
  barrage: boolean;
}

const Detail: React.FC<IProps> = (props) => {
  const {route} = props;
  const [barrage, setBarrage] = useState(false);
  const anim = useRef(new Animated.Value(1)).current;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    id,
    soundUrl,
    playState,
    title,
    previousId,
    nextId,
    thumbnailUrl,
  } = useSelector(({player}: RootState) => player);
  useEffect(() => {
    dispatch({type: 'player/fetchShow', payload: {id: route.params.id}});
  }, []);

  useEffect(() => {
    navigation.setOptions({headerTitle: title});
  }, [title]);

  const toggle = () => {
    dispatch({type: playState === 'playing' ? 'player/pause' : 'player/play'});
  };

  const previous = () => {
    dispatch({type: 'player/previous'});
  };

  const next = () => {
    dispatch({type: 'player/next'});
  };

  const barrageClick = () => {
    setBarrage(!barrage);
    Animated.timing(anim, {
      toValue: barrage ? 1 : SCALE,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Animated.Image
          source={{uri: thumbnailUrl}}
          style={[styles.image, {transform: [{scale: anim}]}]}
        />
      </View>
      {barrage && <LinearGradient colors={['rgba(128,104,102,.5)','#807c66']} style={styles.linear} />}
      <Touchable style={styles.barrageBtn} onPress={barrageClick}>
        <Text style={styles.barrageText}>弹幕</Text>
      </Touchable>
      <PlaySlider />
      <View style={styles.btnWrapper}>
        <Touchable disabled={!previousId} onPress={previous}>
          <IconFont name="iconshangyishou" size={35} color="#fff" />
        </Touchable>
        <Touchable onPress={toggle}>
          <IconFont
            name={playState === 'playing' ? 'iconzantingtingzhi' : 'iconbofang'}
            size={35}
            color="#fff"
          />
        </Touchable>
        <Touchable disabled={!nextId} onPress={next}>
          <IconFont name="iconxiayishou" size={35} color="#fff" />
        </Touchable>
      </View>
    </View>
  );
};

const PADDING_Top = (viewportWidth - IMAGE_WIDTH) / 2;

const styles = StyleSheet.create({
  container: {
    paddingTop: PADDING_Top,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: IMAGE_WIDTH,
  },
  barrageBtn: {
    height: 26,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
  },
  barrageText: {
    color: '#fff',
    fontSize: 16,
  },
  linear:{
    position:'absolute',
    top:0,
    height:viewportWidth,
    width:viewportWidth,
  }
});

export default Detail;
