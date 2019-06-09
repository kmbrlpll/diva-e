
import { fromJS } from 'immutable';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { REHYDRATE } from 'redux-persist';

import {
  SAVE_SETTINGS,
  SAVE_SETTINGS_DONE,
  ERROR_SAVE_SETTINGS,

  LOAD_TURNED_ON_HEATERS,
  LOAD_TURNED_ON_HEATERS_DONE,
  ERROR_LOAD_TURNED_ON_HEATERS,

  LOAD_ROOM_TEMPERATURES,
  LOAD_ROOM_TEMPERATURES_DONE,
  ERROR_LOAD_ROOM_TEMPERATURES,

  LOAD_OPEN_WINDOWS,
  LOAD_OPEN_WINDOWS_DONE,
  ERROR_LOAD_OPEN_WINDOWS,

  LOAD_ROOM_MAP,
  LOAD_ROOM_PLAN_DONE,
  ERROR_LOAD_ROOM_PLAN,

} from './constants';



const initialStateNotToBePersisted = fromJS({
  fetching_turned_on_heaters: false,
  turned_on_heaters: {},
  error_message_heaters: null,

  fetching_room_temperatures: false,
  room_temperatures: {},
  error_message_room_temperatures: null,

  fetching_open_windows: false,
  open_windows: {},
  error_message_windows: "fkfknlflkn",

  fetching_room_plan: false,
  room_plan: {},
  error_message_room_plan: null,
});

export function globalReducer(state = initialStateNotToBePersisted, action) {
  switch (action.type) {
    //heaters
    case LOAD_TURNED_ON_HEATERS: {
      return {...state, fetching_turned_on_heaters: true }
    }
    case LOAD_TURNED_ON_HEATERS_DONE: {
      return { ...state, turned_on_heaters: action.turned_on_heaters, fetching_turned_on_heaters: false };
    }
    case ERROR_LOAD_TURNED_ON_HEATERS: {
      return { ...state, error_message_heaters: action.error_message_heaters, fetching_turned_on_heaters: false };
    }

    //room temperatures
    case LOAD_ROOM_TEMPERATURES: {
      return {...state, fetching_room_temperatures: true }
    }
    case LOAD_ROOM_TEMPERATURES_DONE: {
      return  { ...state, room_temperatures: action.room_temperatures, fetching_room_temperatures: false };
    }
    case ERROR_LOAD_ROOM_TEMPERATURES: {
      return { ...state, error_message_room_temperatures: action.error_message_room_temperatures, fetching_room_temperatures: false };
    }

    //windows
    case LOAD_OPEN_WINDOWS: {
      return {...state, fetching_open_windows: true }
    }
    case LOAD_OPEN_WINDOWS_DONE: {
      return { ...state, open_windows: action.open_windows, fetching_open_windows: false};
    }
    case ERROR_LOAD_OPEN_WINDOWS: {
      return { ...state, error_message_windows: action.error_message_windows, fetching_open_windows: false};
    }

    //room plan
    case LOAD_ROOM_MAP: {
      return {...state, fetching_room_plan: true }
    }
    case LOAD_ROOM_PLAN_DONE: {
      return { ...state, room_plan: action.room_plan, fetching_room_plan: false};
    }
    case ERROR_LOAD_ROOM_PLAN: {
      return { ...state, error_message_room_plan: action.error_message_room_plan, fetching_room_plan: false};
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
