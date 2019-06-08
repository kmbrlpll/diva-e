from flask import Flask
from flask import request
from flask import send_file
from flask import Blueprint
import json
from MQTTServer.app.main.calls.get_channels import get_channel_state, get_channels

routing = Blueprint('routing', __name__)

@routing.route('/floorplanurl', methods=['GET'])
def get_floorplan_url():
    try:
        with open('C:\\Users\\ilona\\Desktop\\SS19\\diva-e-praxisprojekt\\MQTTServer\\app\\test\\src\\test_office_config.json') as json_file:
            data = json.load(json_file)
            floorplan_info = {
                "image_url" : data["path"],
                "office_name" : data["name"]
            }
    except:
        floorplan_info = {
            "error_code" : 404,
            "message" : "Floorplan data could not be loaded from configuration."

        }
    return str(floorplan_info)


@routing.route('/')
def index():
        return 'Hi! You are at the root directory of the API.\n The API paths begin from /api/'


# returns a json of all channels that represent an open window
@routing.route('/openwindows', methods=['GET'])
def get_open_windows():
    response = {}

    open_windows = get_channels("window")

    for k,v in open_windows.items():
        channel_state = get_channel_state(k,v["thing_id"])
        v["state"] = channel_state
        # throwing thing id and type out of the json because not relevant for us
        del open_windows[k]["thing_id"]
        del open_windows[k]["type"]
        # currently the thing channels i setup in swagger have no states yet so this returns empty
        # comment out if you wanna see some results ;)
        if channel_state != "open":
           del open_windows[k]
           # TODO: error handling in case state=null

    return json.dumps(open_windows)

@routing.route('/runningheaters', methods=['GET'])
def get_running_heaters():
    open_windows = get_channels("heater")

    for k,v in open_windows.items():
        channel_state = get_channel_state(k,v["thing_id"])
        v["state"] = channel_state
        del open_windows[k]["thing_id"]
        del open_windows[k]["type"]
        #if float(channel_state) <= threshold:
           #del open_windows[k]
           # TODO: error handling in case state=null
    return json.dumps(open_windows)

