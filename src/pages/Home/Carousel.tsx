import React, {useState, FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SnapCarousel, {
  AdditionalParallaxProps,
  ParallaxImage,
  Pagination,
} from 'react-native-snap-carousel';
import {RootState} from '@/models/index';
import {viewportHeight, viewportWidth, hp, wp} from '@/utils/index';
import {ICarousel} from '@/models/home';

interface IProps {
  data: ICarousel[];
}

const sliderWidth = viewportWidth;
const silderWidth = wp(90);
export const sildeHeight = hp(26);
const itemWidth = silderWidth + wp(2) * 2;
const Carousel: FunctionComponent<IProps> = (props) => {
  const dispatch = useDispatch();
  const activeCarouselIndex = useSelector(
    ({home}: RootState) => home.activeCarouselIndex,
  );
  const {data} = props;
  const onSnapToItem = (index: number) => {
    dispatch({type: 'home/setState', payload: {activeCarouselIndex: index}});
  };
  const pagination = () => {
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          activeDotIndex={activeCarouselIndex}
          dotContainerStyle={styles.dotContainer}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.dot}
          inactiveDotScale={0.8}
          inactiveDotOpacity={0.4}
          dotsLength={data.length}></Pagination>
      </View>
    );
  };
  const renderItem = (
    {item}: {item: ICarousel},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor="rgba(0,0,0,.25)"
        {...parallaxProps}></ParallaxImage>
    );
  };

  return (
    <View>
      <SnapCarousel
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages
        onSnapToItem={(index) => {
          onSnapToItem(index);
        }}
        loop
        // autoplay
      />
      {pagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 10,
    width: itemWidth,
    height: sildeHeight,
    borderRadius: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    backgroundColor: 'rgba(0,0,0,.35)',
    position: 'absolute',
    top: -20,
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,.92)',
  },
});

export default Carousel;
