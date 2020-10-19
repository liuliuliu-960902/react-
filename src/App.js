import React, { Component } from 'react'
import Router from './router'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css'
import {store,persistor} from './redux'
import { PersistGate } from 'redux-persist/integration/react'

import {Provider} from 'react-redux'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router></Router>
        </PersistGate>
      </Provider>
    )
  }
}
