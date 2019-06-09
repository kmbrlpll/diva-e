import { take, call, takeLatest, put, select, cancel } from 'redux-saga/effects';
import AsyncStorage from "react-native";
import { REHYDRATE } from 'redux-persist/lib/constants';
import {
  SAVE_SETTINGS,
  LOAD_ROOM_TEMPERATURES,
  LOAD_TURNED_ON_HEATERS,
  LOAD_OPEN_WINDOWS,
  LOAD_ROOM_MAP,
} from './constants';

import {
  saveSettingsDone,
  setErrorMessageSettings,
  loadTurnedOnHeatersDone,
  setErrorMessageHeaters,
  loadRoomTemperaturesDone,
  setErrorMessageRoomTemperatures,
  loadOpenWindowsDone,
  setErrorMessageWindows,
  loadRoomPlanDone,
  setErrorMessageRoomPlan,

} from './actions';

import {store} from './store.js';
import api from './api.js';

const getOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
        'Content-Type': 'application/json',
    },
  };



 function getBaseURL(){
    const state = store.getState();
    return `${state.settings.saved_server_address}${state.settings.saved_port_number}`;
 }

export function* saveSettings(action){
  try {
    const requestURL = `${action.server_address}${action.port_number}${api.getTurnedOnHeaters}`;
    const response = yield call (fetch, requestURL, getOptions);
    const res = yield response.json();
    if(!response){
      const err_message = {
        error_code: null,
        message: "Can't connect to server."
      };
      throw err_message;
    }
    if (response.status >= 200 && response.status < 300){
          yield put(saveSettingsDone(action.server_address, action.port_number));
        }else {
          throw res;
        }
  } catch (err) {
    yield setErrorMessageSettings(err);
  }
}

export function* loadTurnedOnHeaters() {
  try {
    const baseURL = getBaseURL();
    const backendRoute = api.getTurnedOnHeaters;
    const requestURL = `${baseURL}${backendRoute}`;
    yield console.log(requestURL);
    const response = yield call (fetch, requestURL, getOptions);
    const res = yield response.json();
    if (response.status >= 200 && response.status < 300){
          yield console.log(res.data);
          yield put(loadTurnedOnHeatersDone(res.data));
        }else {
          throw res;
        }
  } catch (err) {
    yield handleErrorHeaters(err);
  }
}

export function* loadRoomTemperatures() {
  try {
    const baseURL = getBaseURL();
    const backendRoute = '/users/2';
    const requestURL = `${baseURL}${backendRoute}`;
    const response = yield call (fetch, requestURL, getOptions);
    const res = yield response.json();
    if (response.status >= 200 && response.status < 300){
          yield put(loadRoomTemperaturesDone(res.data));
        }else {
          throw res;
        }
  } catch (err) {
    yield handleErrorRoomTemperatures(err);
  }
}

export function* loadOpenWindows() {
  try {
    const baseURL = getBaseURL();
    const backendRoute = api.getOpenWindows ;
    const requestURL = `${baseURL}${backendRoute}`;
    const response = yield call (fetch, requestURL, getOptions);
    const res = yield response.json();
    if (response.status >= 200 && response.status < 300){
          yield put(loadOpenWindowsDone(res.data));
        }else {
          throw res;
        }
  } catch (err) {
    yield handleErrorWindows(err);
  }
}

export function* loadRoomPlan() {
  try {
    const baseURL = getBaseURL();
    const backendRoute = api.getRoomPlan;
    const requestURL = `${baseURL}${backendRoute}`;
    const response = yield call (fetch, requestURL, getOptions);
    const res = yield response.json();
    if (response.status >= 200 && response.status < 300){
          yield put(loadRoomPlanDone(res.data));
        }else {
          throw res;
        }
  } catch (err) {
    yield handleErrorRoomPlan(err);
  }
}

/users/2'
//error handling

function* handleErrorHeaters(err) {
  yield put(setErrorMessageHeaters(err));
}

function* handleErrorRoomTemperatures(err) {
  yield put(setErrorMessageRoomTemperatures(err));
}

function* handleErrorWindows(err) {
  yield put(setErrorMessageWindows(err));
}

function* handleErrorRoomPlan(err){
  yield put(setErrorMessageRoomPlan(err));
}

export default function* watcherSaga(){
  yield take(REHYDRATE);
  yield takeLatest(SAVE_SETTINGS, saveSettings);
  yield takeLatest(LOAD_ROOM_TEMPERATURES, loadRoomTemperatures);
  yield takeLatest(LOAD_TURNED_ON_HEATERS, loadTurnedOnHeaters);
  yield takeLatest(LOAD_OPEN_WINDOWS, loadOpenWindows);
  yield takeLatest(LOAD_ROOM_MAP, loadRoomPlan);
};
