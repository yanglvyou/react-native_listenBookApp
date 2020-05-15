import React, {useState, FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import SnapCarousel, {
  AdditionalParallaxProps,
  ParallaxImage,
  Pagination,
} from 'react-native-snap-carousel';
import {viewportHeight, viewportWidth, hp, wp} from '@/utils/index';
import {ICarousel} from '@/models/home';

interface IProps {
  data: ICarousel[];
}
// const data = [
//   'http://img02.tooopen.com/images/20150525/tooopen_sy_126130985342.jpg',
//   'http://file06.16sucai.com/2016/0507/3061924b603fe039dfd2508c2d49b897.jpg',
//   'http://file06.16sucai.com/2016/0622/7e6078b0e83c032eae3394da78d9cea8.jpg',
//   'http://file06.16sucai.com/2016/0330/b5f2887285d2fdef4e8cb92f525807e7.jpg',
//   'http://file06.16sucai.com/2016/0624/c9aca6da153b011e4a075b7db2e59730.jpg',
//   'http://file06.16sucai.com/2016/0726/656a4cc534888e6e74b3ce992a2af8f6.jpg',
// ];
const sliderWidth = viewportWidth;
const silderWidth = wp(90);
const sildeHeight = hp(26);
const itemWidth = silderWidth + wp(2) * 2;
const Carousel: FunctionComponent<IProps> = (props) => {
  const {data} = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const onSnapToItem = (index: number) => {
    setActiveSlide(index);
  };
  const pagination = () => {
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          activeDotIndex={activeSlide}
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
