import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Touchable from '@/components/Touchable';

interface IProps extends MaterialTopTabBarProps {}

class TopTapBarWrapper extends React.Component<IProps> {
  render() {
    const {props} = this;
    return (
      <View style={styles.container}>
        <View style={styles.tabBarView}>
          <MaterialTopTabBar {...props} style={styles.tabBar} />
          <Touchable style={styles.categoryBtn}>
            <Text>分类</Text>
          </Touchable>
        </View>
        <View style={styles.bottomWrapper}>
          <Touchable style={styles.searchBtn}>
            <Text>搜索按钮</Text>
          </Touchable>
          <Touchable style={styles.historyBtn}>
            <Text>历史记录</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: getStatusBarHeight(),
  },
  tabBar: {
    elevation: 0,
    flex: 1,
    backgroundColor:'transparent',
  },
  tabBarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBtn: {
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
  },
  bottomWrapper:{
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:7,
      paddingHorizontal:15,
  },
  searchBtn:{
   flex:1,
   paddingLeft:12,
   height:30,
   justifyContent:'center',
   borderRadius:15,
   backgroundColor:'rgba(0,0,0,.1)',
  },
  historyBtn:{
    justifyContent:'center',
    marginLeft:24,
  }
});

export default TopTapBarWrapper;
