import React, {FunctionComponent, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {RootStackNavigation, ModalStackParamList} from '@/navigator/index';
import {RouteProp, useRoute} from '@react-navigation/native';
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
  const {id, soundUrl, playState} = useSelector(
    ({player}: RootState) => player,
  );
  useEffect(() => {
    dispatch({type: 'player/fetchShow', payload: {id: route.params.id}});
  }, []);

  const toggle = () => {
    dispatch({type: playState === 'playing' ? 'player/pause' : 'player/play'});
  };

  return (
    <View style={styles.container}>
      <Touchable onPress={toggle}>
        <PlaySlider />
        <IconFont
          name={playState === 'playing' ? 'iconzantingtingzhi' : 'iconbofang'}
          size={35}
          color="#fff"
        />
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    // alignItems: 'center',
  },
});

export default Detail;
