import { fromJS } from 'immutable';
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


//heaters
export function loadTurnedOnHeaters() {
  return {
    type: LOAD_TURNED_ON_HEATERS,
  };
};

export function loadTurnedOnHeatersDone(turned_on_heaters) {
  return {
    type: LOAD_TURNED_ON_HEATERS_DONE,
    turned_on_heaters: turned_on_heaters,
  };
};

export function setErrorMessageHeaters(error) {
  return {
    type: ERROR_LOAD_TURNED_ON_HEATERS,
    error_message_heaters: error,
  };
};

//room temperatures

export function loadRoomTemperatures() {
  return {
    type: LOAD_ROOM_TEMPERATURES,
  };
};

export function loadRoomTemperaturesDone(room_temperatures) {
  return {
    type: LOAD_ROOM_TEMPERATURES_DONE,
    room_temperatures: room_temperatures,
  };
};

export function setErrorMessageRoomTemperatures(error) {
  return {
    type: ERROR_LOAD_ROOM_TEMPERATURES,
    error_message_room_temperatures: error,
  };
}
//windows

export function loadOpenWindows() {
  return {
    type: LOAD_OPEN_WINDOWS,
  };
};

export function loadOpenWindowsDone(open_windows) {
  return {
    type: LOAD_OPEN_WINDOWS_DONE,
    open_windows: open_windows,
  };
};

export function setErrorMessageWindows(error) {
  return {
    type: ERROR_LOAD_OPEN_WINDOWS,
    error_message_windows: error,
  };
};

//room plan

export function loadRoomMap() {
  return {
    type: LOAD_ROOM_MAP,
  };
}
export function loadRoomPlanDone(room_plan) {
  return {
    type: LOAD_ROOM_PLAN_DONE,
    room_plan: room_plan,
  };
};


export function setErrorMessageRoomPlan(error) {
  return {
    type: ERROR_LOAD_ROOM_PLAN,
    error_message_room_plan: error,
  };
};
