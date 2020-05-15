import React from 'react';
import {View, Text} from 'react-native';
import Carousel, {
  Pagination,
  AdditionalParallaxProps,
} from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles, {colors} from '../styles/index.style';
import {ENTRIES1, ENTRIES2} from '../static/entries';
import {scrollInterpolators, animatedStyles} from '../utils/animations';

const SLIDER_1_FIRST_ITEM = 1;

const DefaultCarousel = () => {
  const _renderItemWithParallax = (
   {item,index},
    parallaxProps,
  ) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  };
  return (
    <View>
      <Carousel
        // ref={(c) => (this._slider1Ref = c)}
        data={ENTRIES1}
        renderItem={_renderItemWithParallax}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={SLIDER_1_FIRST_ITEM}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        // inactiveSlideShift={20}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={2000}
        // onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
      />
    </View>
  );
};

export default DefaultCarousel;
