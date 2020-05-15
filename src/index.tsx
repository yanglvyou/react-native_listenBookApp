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
          backgroundColor={'rgba(0, 0, 0, 0.3)'}
          barStyle={'light-content'}
          translucent
          >
          </StatusBar>
      </Provider>
    );
  }
}
