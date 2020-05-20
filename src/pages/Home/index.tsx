import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useState,
} from 'react';
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
  Alert,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';
import Carousel, {sildeHeight} from './Carousel';
import Guess from './Guess';
import DefaultCarousel from '@/components/DefaultCarousel';
import ChannelItem from './ChannelItem';
import {IChannel} from '@/models/home';
import IconFont from '@/assets/iconfont';

const mapStateToProps = ({home, loading}: RootState) => ({
  carousels: home.carousels,
  loading: loading.effects['home/fetchChannels'],
});
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
interface IState {
  refreshing: boolean;
}

const Home: FunctionComponent<IProps> = (props) => {
  // const {carousels, loading} = props;
  const carousels = useSelector(({home}: RootState) => home.carousels);
  const {channels, gradientVisible} = useSelector(({home}: RootState) => home);
  const hasMore = useSelector(({home}: RootState) => home.pagination.hasMore);
  const loading = useSelector(
    ({loading}: RootState) => loading.effects['home/fetchChannels'],
  );
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch({type: 'home/fetchCarousels'});
  }, []);
  useEffect(() => {
    dispatch({type: 'home/fetchChannels'});
  }, []);

  useEffect(() => {
    dispatch({type: 'home/fetchGuess'});
  }, []);

  const onPress = useCallback((data: IChannel) => {
    Alert.alert(`点击了${data.title}`);
  }, []);

  // function goHome() {
  //   const {navigation, num} = props;
  //   navigation.navigate('Detail', {
  //     id: 100,
  //   });
  // }

  //加载更多
  function _onEndReached() {
    console.log('--加载更多--');
    if (loading || !hasMore) {
      return;
    }
    dispatch({type: 'home/fetchChannels', payload: {loadMore: true}});
  }

  function _renderItem({item}: ListRenderItemInfo<IChannel>) {
    return <ChannelItem data={item} onPress={onPress}></ChannelItem>;
  }

  function _keyExtractor(item: IChannel) {
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

  const footer = () => {
    if (!hasMore) {
      return (
        <View style={styles.end}>
          <Text style={styles.endTxt}>---我是有底线的--</Text>
        </View>
      );
    }
    if (loading && hasMore && channels.length) {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingTxt}>正在加载中...</Text>
        </View>
      );
    }
  };

  function empty() {
    if (loading) return;
    return (
      <View style={styles.empty}>
        <IconFont name="iconmeiyoushuju" color="#999" size={40} />
        <Text>暂时没有数据</Text>
      </View>
    );
  }

  function onRefresh() {
    setRefreshing(true);
    dispatch({
      type: 'home/fetchChannels',
      callback: () => {
        setRefreshing(false);
      },
    });
  }

  function _onScroll({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) {
    const offsetY = nativeEvent.contentOffset.y;
    let newGradientVisible = offsetY < sildeHeight;
    if (newGradientVisible !== gradientVisible) {
      dispatch({
        type: 'home/setState',
        payload: {gradientVisible: newGradientVisible},
      });
    }
  }

  return (
    <FlatList
      ListHeaderComponent={header}
      ListFooterComponent={footer()}
      ListEmptyComponent={empty()}
      data={channels}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      onEndReached={_onEndReached}
      onEndReachedThreshold={0.5}
      onScroll={_onScroll}
    />
  );
};

const styles = StyleSheet.create({
  end: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  endTxt: {
    fontSize: 14,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  loadingTxt: {
    fontSize: 14,
  },
  empty: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },
});

export default connector(Home);
