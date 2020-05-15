import React, {FunctionComponent, useEffect} from 'react';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {View, Text, Button} from 'react-native';
import IconFont from '@/assets/iconfont';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';
import Carousel from './Carousel';
import DefaultCarousel from '@/components/DefaultCarousel';

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
  const {carousels, loading} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'home/fetchCarousels'});
  }, []);
  // function goHome() {
  //   const {navigation, num} = props;
  //   navigation.navigate('Detail', {
  //     id: 100,
  //   });
  // }

  return (
    <View>
      {/*<IconFont name="iconyemian" size={20} color='green'></IconFont>*/}
      <Carousel data={carousels}></Carousel>
      {/*<DefaultCarousel></DefaultCarousel>*/}
    </View>
  );
};

export default connector(Home);
