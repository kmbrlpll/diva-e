import {persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { globalReducer, settingsReducer } from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootPersistConfig = {
  key: 'primary',
  storage: storage,
  whitelist: ['settings'],
  blacklist: ['globalUnpersisted'],
  stateReconciler: autoMergeLevel2
};

const settingsPersistConfig = {
  key: 'settings',
  storage: storage,
};

const rootReducer = combineReducers({
  settings: persistReducer(settingsPersistConfig, settingsReducer),
  globalUnpersisted: globalReducer
});

export default persistedReducer = persistReducer(rootPersistConfig, rootReducer);
