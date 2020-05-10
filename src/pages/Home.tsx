import React, {FunctionComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';

const mapStateToProps = ({home}: RootState) => ({
  num: home.num,
});
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

const Home: FunctionComponent<IProps> = (props) => {
  const {num} = props;
  function goHome() {
    const {navigation, num} = props;
    navigation.navigate('Detail', {
      id: 100,
    });
  }
  function AddOne(){
    props.dispatch({type:"home/add",payload:{num:10}})
  }
  return (
    <View>
      <Text>Home页面1</Text>
      <Text>{num}</Text>
      <Button
        title="加10"
        onPress={() => {
          AddOne();
        }}></Button>
    </View>
  );
};

export default connector(Home);
