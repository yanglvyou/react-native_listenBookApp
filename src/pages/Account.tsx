import React, {FunctionComponent, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

interface IProps {
  navigation: RootStackNavigation;
  route:{name:string}
}

const Account: FunctionComponent<IProps> = (props) => {
  const isFocused = useIsFocused();
  function goHome() {
    const {navigation} = props;
    navigation.navigate('Detail',{
       id:100
    });
  }



  useFocusEffect(
    React.useCallback(() => {
      console.log(props,666666666666);
    }, [])
  );



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

export default Account;
