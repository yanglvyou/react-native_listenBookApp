import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '@/navigator/index';
import {RouteProp} from '@react-navigation/native';

interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
}
const Detail: FunctionComponent<IProps> = (props) => {
  const {route} = props;
  return (
    <View>
      <Text>Detail页面</Text>
      <Text>id:{route.params.id}</Text>
    </View>
  );
};

export default Detail;
