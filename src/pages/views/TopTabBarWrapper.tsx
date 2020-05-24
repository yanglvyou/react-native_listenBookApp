import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import LinearAnimatedGradientTransition from 'react-native-linear-animated-gradient-transition';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {RootState} from '@/models/index';
import Touchable from '@/components/Touchable';

const mapStateToProps = ({home}: RootState) => {
  return {
    linearColors:
      home.carousels.length > 0
        ? home.carousels[home.activeCarouselIndex].colors
        : undefined,
    gradientVisible: home.gradientVisible,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

type IProps = MaterialTopTabBarProps & ModelState;

class TopTapBarWrapper extends React.Component<IProps> {
  get linearAnimatedGradientTransition() {
    const {linearColors = ['#fff', '#fff'], gradientVisible} = this.props;
    if (gradientVisible) {
      return (
        <LinearAnimatedGradientTransition
          colors={linearColors}
          style={styles.gradient}
        />
      );
      return;
    }
    null;
  }

  goToCategory = () => {
    const {navigation} = this.props;
    navigation.navigate('Category');
  };

  render() {
    let {gradientVisible, indicatorStyle, ...restProps} = this.props;
    let textStyle = styles.text;
    let activeTintColor = '#333';
    if (gradientVisible) {
      textStyle = styles.whiteText;
      activeTintColor = '#fff';
      if (indicatorStyle) {
        //合并样式
        indicatorStyle = StyleSheet.compose(
          indicatorStyle,
          styles.whiteBackgroundColor,
        );
      }
    }
    return (
      <View style={styles.container}>
        {this.linearAnimatedGradientTransition}
        <View style={styles.tabBarView}>
          <MaterialTopTabBar
            {...restProps}
            indicatorStyle={indicatorStyle}
            activeTintColor={activeTintColor}
            style={styles.tabBar}
          />
          <Touchable style={styles.categoryBtn} onPress={this.goToCategory}>
            <Text style={textStyle}>分类</Text>
          </Touchable>
        </View>
        <View style={styles.bottomWrapper}>
          <Touchable style={styles.searchBtn}>
            <Text style={textStyle}>搜索按钮</Text>
          </Touchable>
          <Touchable style={styles.historyBtn}>
            <Text style={textStyle}>历史记录</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(),
  },
  tabBar: {
    elevation: 0,
    flex: 1,
    backgroundColor: 'transparent',
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
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  searchBtn: {
    flex: 1,
    paddingLeft: 12,
    height: 30,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  historyBtn: {
    justifyContent: 'center',
    marginLeft: 24,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 260,
  },
  text: {
    color: '#333',
  },
  whiteText: {
    color: '#fff',
  },
  whiteBackgroundColor: {
    backgroundColor: '#fff',
  },
});

export default connector(TopTapBarWrapper);
