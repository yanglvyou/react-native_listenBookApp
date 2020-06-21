import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useState,
} from 'react';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';
import Carousel, {sildeHeight} from './Carousel';
import Guess from './Guess';
// import DefaultCarousel from '@/components/DefaultCarousel';
import ChannelItem from './ChannelItem';
import {IChannel, IGuess} from '@/models/home';
import IconFont from '@/assets/iconfont';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {HomeParamList} from '@/navigator/HomeTabs';

const mapStateToProps = (
  state: RootState,
  {route}: {route: RouteProp<HomeParamList, string>},
) => {
  const {namespace} = route.params;
  const modelState = state[namespace];
  return {
    state,
    namespace: route.params.namespace,
    carousels: modelState.carousels,
    channels: modelState.channels,
    hasMore: modelState.pagination.hasMore,
    gradientVisible: modelState.gradientVisible,
    loading: state.loading.effects[namespace + '/fetchChannels'],
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
interface IState {
  refreshing: boolean;
}

const Home: FunctionComponent<IProps> = (props) => {
  const navigation = useNavigation();
  const {
    carousels,
    channels,
    gradientVisible,
    hasMore,
    loading,
    namespace,
  } = props;
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch({type: namespace + '/fetchCarousels'});
  }, []);
  useEffect(() => {
    dispatch({type: namespace + '/fetchChannels'});
  }, []);

  useEffect(() => {
    dispatch({type: namespace + '/fetchGuess'});
  }, []);

  const goToAlbum = useCallback((data: IChannel) => {
    navigation.navigate('Album', {item: data});
  }, []);

  //加载更多
  function _onEndReached() {
    console.log('--加载更多--');
    if (loading || !hasMore) {
      return;
    }
    dispatch({type: namespace + '/fetchChannels', payload: {loadMore: true}});
  }

  function _renderItem({item}: ListRenderItemInfo<IChannel>) {
    return (
      <View style={{backgroundColor:"#fff"}}>
        <ChannelItem data={item} onPress={goToAlbum}></ChannelItem>
      </View>
    );
  }

  function _keyExtractor(item: IChannel) {
    return item.id;
  }

  function onGuessPress(item: IChannel | IGuess) {
    navigation.navigate('Album', {item: item});
  }

  function header() {
    return (
      <View>
        <Carousel data={carousels}></Carousel>
        <View style={styles.backgroundColorGuess}>
          <Guess
            namespace={namespace}
            onPress={(item) => {
              onGuessPress(item);
            }}></Guess>
        </View>
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
      type: namespace + '/fetchChannels',
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
        type: namespace + '/setState',
        payload: {gradientVisible: newGradientVisible},
      });
    }
  }

  return (
    <View>
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
    </View>
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
  backgroundColorGuess: {
    backgroundColor: '#fff',
  },
});

export default connector(Home);
