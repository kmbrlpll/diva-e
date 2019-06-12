from flask import Flask
from flask import request
from flask import send_file
from flask import Blueprint
import json
from flask import jsonify
from businesslogic.app.main.errors.handlers import InvalidUsage
from businesslogic.app.main.calls.functions import get_channel_state, get_channels

routing = Blueprint('routing', __name__)


@routing.route('/')
def index():
        return jsonify({"dummy":"dummy-value"})


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

