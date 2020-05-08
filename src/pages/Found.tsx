import React, {FunctionComponent} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Found: FunctionComponent<IProps> = (props) => {
  function goHome() {
    const {navigation} = props;
    navigation.navigate('Detail',{
       id:100
    });
  }
  return (
    <View>
      <Text>Home页面1</Text>
      <Button
        title="跳转到详情页"
        onPress={() => {
          goHome();
        }}></Button>
    </View>
  );
};

export default Found;
