/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { ForgotPassword } from "./containers/ForgotPassword";
import { store } from './store';
console.log('store', store);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <ForgotPassword/>
      </Provider>
    );
  }
}

