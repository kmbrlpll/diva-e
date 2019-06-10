import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './sagas.js';
import persistedReducer from './reducerConfig.js';


export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
