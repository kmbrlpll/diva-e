from flask import Flask
from flask import request
from flask import send_file
from flask import Blueprint
import json
from businesslogic.app.main.errors.handlers import InvalidUsage
from businesslogic.app.main.calls.functions import get_channel_state, get_channels, stringify_list, get_room_temperatures

routing = Blueprint('routing', __name__)

acceptable_failure_rate = 0.1
accepted_channel_types = ["temperature", "heater", "window"]
error_data = {"error_code" : 404, "Message" : "Not found."}
threshold = 0.01

@routing.route('/')
def index():
    return json.dumps({"dummy":"dummy-value"})

@routing.route('/networktest')
def networktest():
    return json.dumps({"status" : 200, data : {"dummy":"dummy-value"}})


@routing.route('/getfloorplan', methods=['GET'])
def get_floorplan():

    data = {}
    try:
        with open('../../test/src/test_office_config.json') as json_file:
            json_data = json.load(json_file)
            path_to_floorplan = json_data.get("path", error_data)
        data["status"] = 200
        data["data"] = path_to_floorplan
    except:
        data["status"] = 404
        data["data"] = error_data

    return json.dumps(data)


@routing.route('/getfloorplandimensions', methods=['GET'])
def get_floorplan_dimensions():

    data = {}
    try:
        with open('../../test/src/test_office_config.json') as json_file:
            json_data = json.load(json_file)
            image_dimensions = json_data.get("image_dimensions")
        data["status"] = 200
        data["data"] = image_dimensions
    except:
        data["status"] = 404
        data["data"] = error_data

    return json.dumps(data)


# returns a json of all channels that represent an open window
@routing.route('/openwindows', methods=['GET'])
def get_open_windows():

    all_windows = get_channels("window")
    print(all_windows)
    number_of_total_windows = len(all_windows["data"])
    unreachable_windows = []

    for k,v in all_windows["data"].items():
        print("***")
        print(k)
        print(v["thing_id"])
        channel_state = get_channel_state(k, v["thing_id"])
        print(channel_state)
        v["state"] = channel_state
        # throwing thing id and type out of the json because not relevant for us
        del all_windows["data"][k]["thing_id"]
        del all_windows["data"][k]["type"]

        if channel_state == "closed":
           del all_windows["data"][k]
        else:
            if channel_state == None:
                unreachable_windows.append(k)
                all_windows["data"][k] = {}

            if len(unreachable_windows)/number_of_total_windows > acceptable_failure_rate:
                all_windows["status"] = 404
                all_windows["data"] = error_data
            elif len(unreachable_windows) > 0 :
                s = stringify_list(unreachable_windows)
                all_windows["warning"] = "The states of the following windows could not be found: " + s

    return all_windows


@routing.route('/runningheaters', methods=['GET'])
def get_running_heaters():
    all_heaters = get_channels("heater")
    temps = get_room_temperatures()

    room_temp_dict = {}
    for temp_id,temp_info in temps.items():
        room_temp_dict[temp_info["room"]] = temp_info["state"]

    delete_those = []

   #loop over all heater channels
    for k,v in all_heaters["data"].items():
        #print(k + ": " + str(v))
        #look up room temperature in the room the heater is in
        heater_room = v["room"]

        room_temperature = room_temp_dict[heater_room]
        heater_temp = get_channel_state(k,v["thing_id"])
        print(heater_temp)
        #if the difference between heater temperature and room temperature exceeds a certain
        #threshold,leave in dict, else delete heater from dict
        if heater_temp:
            if abs(float(room_temperature) - float(heater_temp)) > threshold:
                print(heater_temp)
                v["state"] = int(round(float(heater_temp)))
            else:
                #del all_heaters["data"][k]
                delete_those.append(k)
        else:
            #del all_heaters["data"][k]
            delete_those.append(k)

    for i in delete_those:
            del all_heaters["data"][k]

    return all_heaters


@routing.route('/getall', methods=['GET'])
def get_all():

    data = {
        "status": 200,
        "openwindows" : {},
        "runningheaters" : {},
        "temperatures" : {}
    }

    data["temperatures"] = get_room_temperatures()
    runningheaters = get_running_heaters()
    data["runningheaters"] = runningheaters["data"]
    openwindows =get_open_windows()
    data["openwindows"] = openwindows["data"]

    return json.dumps(data)
