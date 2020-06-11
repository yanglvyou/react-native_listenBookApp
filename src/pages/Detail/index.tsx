import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {RootStackNavigation, ModalStackParamList} from '@/navigator/index';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {RootState} from '@/models/index';
import {useSelector, useDispatch} from 'react-redux';
import Touchable from '@/components/Touchable';
import IconFont from '@/assets/iconfont';
import PlaySlider from './PlaySlider';

interface IProps {
  navigation: RootStackNavigation;
  route: RouteProp<ModalStackParamList, 'Detail'>;
}

const Detail: React.FC<IProps> = (props) => {
  const {route} = props;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {id, soundUrl, playState, title, previousId, nextId} = useSelector(
    ({player}: RootState) => player,
  );
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
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Detail;
