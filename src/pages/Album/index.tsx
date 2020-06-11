import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
  TapGestureHandler,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import {BlurView} from '@react-native-community/blur';
import {useHeaderHeight} from '@react-navigation/stack';
import {RootState} from '@/models/index';
import {RouteProp, useNavigation, useIsFocused} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';
import coverRight from '@/assets/cover-right.png';
import Tab from './Tab';
import {viewportHeight} from '@/utils/index';
import {IProgram} from '@/models/album';

interface IProps {
  headerHeight: number;
  state: RootState;
  route: RouteProp<RootStackParamList, 'Album'>;
}

const Album: React.FC<IProps> = (props) => {
  const {route} = props;
  // const isFocused = useIsFocused();

  const {summary, author, list} = useSelector(({album}: RootState) => album);
  const loading = useSelector(
    (state: RootState) => state.loading.effects['album/fetchAlbum'],
  );
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!isFocused) {
  //     dispatch({type: 'album/resetState'});
  //   }
  // }, [isFocused]);
  const {id} = route.params.item;
  const lastScrollY = useRef(new Animated.Value(0)).current;
  let lastScrollYValue = 0;
  const reverseLastScrollY = Animated.multiply(
    new Animated.Value(-1),
    lastScrollY,
  );
  const translationYValue = useRef(new Animated.Value(0)).current;
  const translationYOffset = useRef(new Animated.Value(0)).current;
  const translateY = Animated.add(
    Animated.add(translationYValue, reverseLastScrollY),
    translationYOffset,
  );
  let translationYStaticValue = 0;
  const panRef = React.createRef<PanGestureHandler>();
  const tapRef = React.createRef<TapGestureHandler>();

  const nativeRef = React.createRef<NativeViewGestureHandler>();
  const HEADER_HEIGHT = 260;
  const USE_NATIVE_DRIVER = true;
  const RANGE = [-(HEADER_HEIGHT - headerHeight), 0];

  useEffect(() => {
    dispatch({
      type: 'album/fetchAlbum',
      payload: {
        id,
      },
    });
  }, [navigation]);

  useEffect(() => {
    navigation.setParams({
      opacity: translateY.interpolate({inputRange: RANGE, outputRange: [1, 0]}),
    });
  }, []);

  const onGestureEvent = Animated.event(
    [{nativeEvent: {translationY: translationYValue}}],
    {
      useNativeDriver: USE_NATIVE_DRIVER,
    },
  );

  const onItemPress = (data: IProgram, index: number) => {
    const previousItem = list[index - 1];
    const nextItem = list[index + 1];
    dispatch({
      type: 'player/setState',
      payload: {
        previousId: previousItem ? previousItem.id : '',
        nextId: nextItem ? nextItem.id : '',
        title: data.title,
        sounds: list.map((item) => ({id: item.id, title: item.title})),
      },
    });
    navigation.navigate('Detail', {id: data.id});
  };

  const onScrollDrag = Animated.event(
    [{nativeEvent: {contentOffset: {y: lastScrollY}}}],
    {
      useNativeDriver: USE_NATIVE_DRIVER,
      listener: ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
        lastScrollYValue = nativeEvent.contentOffset.y;
      },
    },
  );

  const onHandlerStateChange = ({
    nativeEvent,
  }: PanGestureHandlerStateChangeEvent) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let {translationY} = nativeEvent;
      translationY -= lastScrollYValue;
      // offset=value;
      translationYOffset.extractOffset();
      translationYOffset.setValue(translationY);
      //value = value + offset;
      translationYOffset.flattenOffset();
      translationYValue.setValue(0);
      let maxDeltaY = -RANGE[0] - translationYStaticValue;
      translationYStaticValue += translationY;
      if (translationYStaticValue < RANGE[0]) {
        translationYStaticValue = RANGE[0];
        Animated.timing(translationYOffset, {
          toValue: RANGE[0],
          useNativeDriver: USE_NATIVE_DRIVER,
        }).start();
        maxDeltaY = RANGE[1];
      } else if (translationYStaticValue > RANGE[1]) {
        translationYStaticValue = RANGE[1];
        Animated.timing(translationYOffset, {
          toValue: RANGE[1],
          useNativeDriver: USE_NATIVE_DRIVER,
        }).start();
        maxDeltaY = -RANGE[0];
      }
      if (tapRef.current) {
        const tap: any = tapRef.current;
        tap.setNativeProps({maxDeltaY});
      }
    }
  };

  function renderHeader() {
    const {image, title} = route.params.item;
    return (
      <View style={[styles.header, {paddingTop: headerHeight}]}>
        <Image source={{uri: image}} style={styles.backgroundImage}></Image>
        <BlurView
          blurType="light"
          blurAmount={5}
          style={StyleSheet.absoluteFillObject}></BlurView>
        <View style={styles.leftView}>
          <Image source={{uri: image}} style={styles.thumbnail}></Image>
          <Image source={coverRight} style={styles.coverRight}></Image>
        </View>
        {false && (
          <LottieView
            source={require('../../assets/animation/10970.json')}
            autoPlay
            loop
          />
        )}
        <View style={styles.rightView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.summary}>
            <Text numberOfLines={1} style={styles.summaryText}>
              {summary}
            </Text>
          </View>
          <View style={styles.author}>
            <Image source={{uri: author.avatar}} style={styles.avatar}></Image>
            <Text style={styles.name}>{author.name}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <TapGestureHandler maxDeltaY={-RANGE[0]} ref={tapRef}>
      {!loading ? (
        <View style={styles.container} pointerEvents="box-none">
          <PanGestureHandler
            simultaneousHandlers={[tapRef, nativeRef]}
            ref={panRef}
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}>
            <Animated.View
              style={[
                styles.container,

                {
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: RANGE,
                        outputRange: RANGE,
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}>
              {renderHeader()}
              <View style={{height: viewportHeight - headerHeight}}>
                <Tab
                  panRef={panRef}
                  tapRef={tapRef}
                  nativeRef={nativeRef}
                  onScrollDrag={onScrollDrag}
                  onItemPress={onItemPress}
                />
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      ) : (
        <LottieView
          source={require('../../assets/animation/22127-dots-load.json')}
          autoPlay
          loop
        />
      )}
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 260,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
  },
  leftView: {
    marginRight: 26,
  },
  thumbnail: {
    width: 98,
    height: 98,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  coverRight: {
    height: 98,
    position: 'absolute',
    right: -23,
    resizeMode: 'contain',
  },
  rightView: {
    flex: 1,
  },
  summary: {
    backgroundColor: 'rgba(0,0,0,.3)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  summaryText: {
    color: '#fff',
  },
  name: {
    color: '#fff',
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 8,
    backgroundColor: '#eee',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Album;
