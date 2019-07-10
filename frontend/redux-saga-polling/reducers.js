//for htw showtime
//we will only be using one screen for all use cases combined

import { fromJS } from 'immutable';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { REHYDRATE } from 'redux-persist';

import {
  SAVE_SETTINGS,
  SAVE_SETTINGS_DONE,
  ERROR_SAVE_SETTINGS,

  LOAD_ALL_THINGS,
  LOAD_ALL_THINGS_SUCCESS,
  ERROR_LOAD_ALL_THINGS,

  START_POLLING,
  CANCEL_POLLING,

  ERROR_LOADING,
} from './constants';



const initialStateNotToBePersisted = fromJS({
  is_polling: false,

  fetching_data: false,

  data: {},

  error_message_load_all: null,
});

export function globalReducer(state = initialStateNotToBePersisted, action) {
  switch (action.type) {

    //polling and loading
    case START_POLLING: {
      return {...state, is_polling: true }
    }

    case CANCEL_POLLING: {
      return { ...state, fetching_data: false, is_polling: false}
    }

    //load all things
    case LOAD_ALL_THINGS: {
      return {...state, fetching_data: true }
    }
    case LOAD_ALL_THINGS_SUCCESS: {
      return { ...state, data: action.all_things };
    }
    case ERROR_LOAD_ALL_THINGS: {
      return { ...state, error_message_loading: action.error_message_loading, fetching_data: false};
    }
    default:
      return state;
  }
}


const initialStatePersist = fromJS({
  saving_and_validating_settings: false,
  saved_server_address: null,
  saved_port_number: null,
  error_message_settings: null,
});


export const settingsReducer = (state = initialStatePersist, action ) =>{
  //Settings
  switch (action.type) {
  case SAVE_SETTINGS: {
    return {...state, saving_and_validating_settings: true }
  }
  case SAVE_SETTINGS_DONE: {
    return { ...state, saved_server_address: action.server_address, saved_port_number: action.port_number, saving_and_validating_settings: false};
  }
  case ERROR_SAVE_SETTINGS: {
    return { ...state, error_message_settings: action.error_message_settings, saving_and_validating_settings: false};
  }
  default:
    return state;
  }
 }
