import React from 'react';
import {View} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import TopTapBarWrapper from '@/pages/views/TopTabBarWrapper';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  const renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTapBarWrapper {...props}></TopTapBarWrapper>;
  };
  return (
    <Tab.Navigator
      lazy
      tabBar={renderTabBar}
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: {
          width: 80,
        },
        indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        activeTintColor: '#f86442',
        inactiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: '推荐'}}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeTabs;
