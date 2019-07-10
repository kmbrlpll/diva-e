import { take, call, takeLatest, put, select, cancel } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/lib/constants';
import {
  SAVE_SETTINGS,
  LOAD_ALL_THINGS,
} from './constants';

import {
  saveSettingsDone,
  loadAllThingsSuccess,
  setErrorMessageLoading

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
    const requestURL = `${action.server_address}${action.port_number}${api.networktest}`;

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

function delay(duration) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), duration)
  })
  return promise
}

function* fetchData(action) {
  while (true) {
    try {
      //const baseURL = getBaseURL();

      const baseURL = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080';
      const backendRoute = api.getAllThings;
      const requestURL = `${baseURL}${backendRoute}`;
      const response = yield call (fetch, requestURL, getOptions);

      const res = yield response.json();
      if (response.status >= 200 && response.status < 300){
            yield console.log(res.data);
            yield put(loadAllThingsSuccess(res.data));
          }else {
            throw res;
      }
      yield call(delay, 5000)

    } catch (err) {
      yield put(setErrorMessageLoading(err));
    }
    }
}


function* watchPollSaga() {
  while (true) {
    const data = yield take(START_POLLING)
    yield race([call(fetchData), take(CANCEL_POLLING)])
  }
}

export default function* watcherSaga(){
  yield take(REHYDRATE);
  yield [watchPollSaga()]
};
