import React, {Component} from 'react';
import {StatusBar,YellowBox} from 'react-native';
import Navigator from '@/navigator/index';
import {Provider} from 'react-redux';
import store from '@/config/dva';
import '@/config/http';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  'FlatList: Calling `getNode()` on the ref of an Animated component is no longer necessary.',
  `Can't perform a React state update on an unmounted component`
])
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator></Navigator>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
          translucent
          >
          </StatusBar>
      </Provider>
    );
  }
}
