import React, {FunctionComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {View, Text, Button} from 'react-native';
import IconFont from '@/assets/iconfont';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';
import Carousel from './Carousel';
import DefaultCarousel from '@/components/DefaultCarousel';

const mapStateToProps = ({home, loading}: RootState) => ({
  num: home.num,
  loading: loading.effects['home/asyncAdd'],
});
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

const Home: FunctionComponent<IProps> = (props) => {
  const {num, loading} = props;
  function goHome() {
    const {navigation, num} = props;
    navigation.navigate('Detail', {
      id: 100,
    });
  }
  function AddOne() {
    props.dispatch({type: 'home/add', payload: {num: 10}});
  }

  function asyncAddOne() {
    props.dispatch({type: 'home/asyncAdd', payload: {num: 2}});
  }
  return (
    <View>
      {/*<IconFont name="iconyemian" size={20} color='green'></IconFont>*/}
        <Carousel></Carousel>
        {/*<DefaultCarousel></DefaultCarousel>*/}
    </View>
  );
};

export default connector(Home);