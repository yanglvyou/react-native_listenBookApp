import React, {Component} from 'react';
import Navigator from '@/navigator/index';
import {Provider} from 'react-redux';
import store from '@/config/dva';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator></Navigator>
      </Provider>
    );
  }
}
