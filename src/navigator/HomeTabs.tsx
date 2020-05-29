import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import TopTapBarWrapper from '@/pages/views/TopTabBarWrapper';
import {useSelector} from 'react-redux';
import {RootState} from '../models';
import {ICategory} from '@/models/category';
import {createHomeModel} from '@/config/dva';

export type HomeParamList = {
  [key: string]: {
    namespace: string;
  };
};

interface IProps {
  myCategorys: ICategory[];
}

const Tab = createMaterialTopTabNavigator<HomeParamList>();

const HomeTabs: React.FC<IProps> = () => {
  const {myCategorys} = useSelector(({category}: RootState) => category);
  function _renderScreen(item: ICategory) {
    createHomeModel(item.id);
    return (
      <Tab.Screen
        key={item.id}
        name={item.id}
        component={Home}
        options={{tabBarLabel: item.name}}
        initialParams={{namespace: item.id}}></Tab.Screen>
    );
  }

  const renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTapBarWrapper {...props}></TopTapBarWrapper>;
  };
  return (
    <Tab.Navigator
      lazy
      tabBar={renderTabBar}
      sceneContainerStyle={styles.sceneContainer}
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
      {myCategorys.map(_renderScreen)}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default HomeTabs;
