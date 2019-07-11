//for htw showtime
import { fromJS } from 'immutable';
import {
  SAVE_SETTINGS,
  SAVE_SETTINGS_DONE,
  ERROR_SAVE_SETTINGS,

  LOAD_ALL_THINGS,
  LOAD_ALL_THINGS_SUCCESS,
  ERROR_LOAD_ALL_THINGS,

  START_POLLING,
  CANCEL_POLLING,

} from './constants';

//polling

export function startPolling() {
      return {
        type: START_POLLING
      };
    }

export function cancelPolling() {
      return {
        type: CANCEL_POLLING
      };
    }


//save Settings


export function saveSettings(server_address, port_number) {
  return {
    type: SAVE_SETTINGS,
    server_address: server_address,
    port_number: port_number,
  };
};

export function saveSettingsDone(server_address, port_number) {
  return {
    type: SAVE_SETTINGS_DONE,
    server_address: server_address,
    port_number: port_number,
  };
};

export function setErrorMessageSettings(error) {
  return {
    type: ERROR_SAVE_SETTINGS,
    error_message_settings: error,
  };
};


//load all things
export function loadAllThings() {
  return {
    type: LOAD_ALL_THINGS,
  };
};

export function loadAllThingsSuccess(all_things) {
  return {
    type: LOAD_ALL_THINGS_SUCCESS,
    all_things: all_things,
  };
};

export function setErrorMessageLoading(error) {
  return {
    type: ERROR_LOAD_ALL_THINGS,
    error_message_loading: error,
  };
};
