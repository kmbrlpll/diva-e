import React, {Component } from "react";
import DrawerStackNavigationApp from "./components/DrawerStackNav.js";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';

import watcherSaga from './redux-saga/sagas.js';
import persistedReducer from './redux-saga/reducerConfig.js';
import { sagaMiddleware, store, persistor } from './redux-saga/store.js';

/*

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

*/
sagaMiddleware.run(watcherSaga);


export default class App extends Component{

  render(){
    return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerStackNavigationApp />
      </PersistGate>
    </Provider>
  );
  }
}
