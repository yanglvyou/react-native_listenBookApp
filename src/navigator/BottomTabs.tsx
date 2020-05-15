import React, {FunctionComponent, useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackNavigation, RootStackParamList} from '@/navigator/index';
import IconFont from '@/assets/iconfont';
// import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {RouteProp, TabNavigationState} from '@react-navigation/native';
import HomeTabs from './HomeTabs';

export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};
type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

const BottomTabs: FunctionComponent<IProps> = (props) => {
  function getHeaderTitle(route: Route) {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'HomeTabs';
    switch (routeName) {
      case 'HomeTabs':
        return '首页';
      case 'Listen':
        return '我听';
      case 'Found':
        return '发现';
      case 'Account':
        return '账号';
      default:
        return '首页';
    }
  }
  useEffect(() => {
    const {navigation, route} = props;
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }, [props.route]);
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: '#f86442'}}>
      <Tab.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconyemian" size={size} color={color}></IconFont>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: '我听',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconshoucang" size={size} color={color}></IconFont>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Found"
        component={Found}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconfaxian" size={size} color={color}></IconFont>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '账号',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconzhanghao" size={size} color={color}></IconFont>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabs;
