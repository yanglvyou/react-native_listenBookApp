import React, {FunctionComponent} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Detail: FunctionComponent<IProps> = (props) => {
  function goHome() {
    const {navigation} = props;
  }
  return (
    <View>
    </View>
  );
};

export default Detail;
