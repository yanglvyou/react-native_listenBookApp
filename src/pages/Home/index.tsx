import React, {FunctionComponent, useEffect, useCallback} from 'react';
import {
  connect,
  ConnectedProps,
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux';
import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import IconFont from '@/assets/iconfont';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';
import Carousel from './Carousel';
import Guess from './Guess';
import DefaultCarousel from '@/components/DefaultCarousel';
import ChannelItem from './ChannelItem';
import {IChannel} from '@/models/home';

const mapStateToProps = ({home, loading}: RootState) => ({
  carousels: home.carousels,
  loading: loading.effects['home/asyncAdd'],
});
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

const Home: FunctionComponent<IProps> = (props) => {
  // const {carousels, loading} = props;
  const carousels = useSelector(({home}: RootState) => home.carousels);
  const channels = useSelector(({home}: RootState) => home.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'home/fetchCarousels'});
  }, []);
  useEffect(() => {
    dispatch({type: 'home/fetchChannels'});
  }, []);

  // function onPress(data:IChannel){
  //   console.log('data: ', data,99999999999);

  // }
  const onPress = useCallback((data: IChannel) => {
    console.log('data: ', data, 8888888888);
  }, []);

  // function goHome() {
  //   const {navigation, num} = props;
  //   navigation.navigate('Detail', {
  //     id: 100,
  //   });
  // }
  function _renderItem({item}: ListRenderItemInfo<IChannel>) {
    return <ChannelItem data={item} onPress={onPress}></ChannelItem>;
  }

  function _keyExtractor(item:IChannel){
      return item.id;
  }
  function header() {
    return (
      <View>
        <Carousel data={carousels}></Carousel>
        <Guess></Guess>
      </View>
    );
  }
  return (
    <FlatList
      ListHeaderComponent={header}
      data={channels}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
    />
  );
};

export default connector(Home);
