import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Navigator from '@/navigator/index';
import {Provider} from 'react-redux';
import store from '@/config/dva';
import '@/config/http';

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
