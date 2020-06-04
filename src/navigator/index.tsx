import React from 'react';
import {Animated} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import Category from '@/pages/Category';
import Album from '@/pages/Album';
import {Platform, StyleSheet, StatusBar} from 'react-native';

export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Category: undefined;
  Album: {
    item: {
      id: string;
      title: string;
      image: string;
    };
    opacity?: Animated.Value;
  };
};
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
let Stack = createStackNavigator<RootStackParamList>();

function getOptions({route}: {route: RouteProp<RootStackParamList, 'Album'>}) {
  return {
    headerTitle: route.params.item.title,
    headerTransparent: true,
    headerTitleStyle: {
      opacity: route.params.opacity,
    },
    headerBackground: () => {
      return (
        <Animated.View
          style={[style.headerBackground, {opacity: route.params.opacity}]}
        />
      );
    },
  };
}

const style = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 0,
  },
});

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="float"
        screenOptions={{
          headerTitleAlign: 'center',
          ...Platform.select({
            android: {
              headerStatusBarHeight: StatusBar.currentHeight, //设置状态栏高度
            },
          }),
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          headerBackTitleVisible: false,
          headerTintColor: '#333',
          gestureDirection: 'horizontal',
          headerStyle: {
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }),
          },
        }}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerTitle: '首页'}}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{headerTitle: '分类'}}
        />
        <Stack.Screen name="Album" component={Album} options={getOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
