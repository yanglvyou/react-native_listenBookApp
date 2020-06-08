import React, {FunctionComponent, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation, ModalStackParamList} from '@/navigator/index';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootState} from '@/models/index';
import {useSelector, useDispatch} from 'react-redux';

interface IProps {
  navigation: RootStackNavigation;
  route: RouteProp<ModalStackParamList, 'Detail'>;
}

const Detail: React.FC<IProps> = (props) => {
  const {route} = props;
  const dispatch = useDispatch();
  const {id, soundUrl, playState} = useSelector(
    ({player}: RootState) => player,
  );
  useEffect(() => {
    dispatch({type: 'player/fetchShow', payload: {id: route.params.id}});
  }, []);
  return (
    <View>
      <Text>1111111</Text>
    </View>
  );
};

export default Detail;
