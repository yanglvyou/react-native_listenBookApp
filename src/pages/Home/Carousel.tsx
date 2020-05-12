import React from 'react';
import {Image, StyleSheet} from 'react-native';
import SnapCarousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {viewportHeight, viewportWidth, hp, wp} from '@/utils/index';

const data = [
  'http://img02.tooopen.com/images/20150525/tooopen_sy_126130985342.jpg',
  'http://file06.16sucai.com/2016/0507/3061924b603fe039dfd2508c2d49b897.jpg',
  'http://file06.16sucai.com/2016/0622/7e6078b0e83c032eae3394da78d9cea8.jpg',
  'http://file06.16sucai.com/2016/0330/b5f2887285d2fdef4e8cb92f525807e7.jpg',
  'http://file06.16sucai.com/2016/0624/c9aca6da153b011e4a075b7db2e59730.jpg',
  'http://file06.16sucai.com/2016/0726/656a4cc534888e6e74b3ce992a2af8f6.jpg',
];
const sliderWidth = viewportWidth;
const silderWidth = wp(90);
const sildeHeight = hp(26);
const itemWidth = silderWidth + wp(2) * 2;
const Carousel = () => {
  const renderItem = (
    {item}: {item: string},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor='rgba(0,0,0,.25)'

        {...parallaxProps}></ParallaxImage>
    );
  };
  return (
    <SnapCarousel
      data={data}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      hasParallaxImages
      loop
      autoplay
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: sildeHeight,
    borderRadius:5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default Carousel;
