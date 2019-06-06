from flask import Flask
from flask import request
from flask import send_file
import requests
import json

from manage import url_state, url_things, headers

app = Flask(__name__)


# define a temperature threshold to tell whether a radiator is on or off
threshold = 30

# requests api and returns the state of a single channel
def get_channel_state(channel_id, thing_id):
    r_state = requests.get(url_state + thing_id + "/channels/" + channel_id, {}, headers=headers)
    state = r_state.json()["state"]["reported"]
    return state


# takes channel type (window/heater) as parameter, makes api call and
# returns a dictionary with channel info
def get_channels(c_type):
    all_channels = {}
    r_things = requests.get(url_things, {}, headers=headers)

    for i in r_things.json()["things"]:
        for thing in  i["channels"]:
            channel_type = thing["properties"]["type"]
            if channel_type == c_type:
                channel = {}
                channel["x"] = int(thing["properties"]["x"])
                channel["y"] = int(thing["properties"]["y"])
                channel["type"] = channel_type
                channel["thing_id"] = i["id"]
                all_channels[thing["id"]] = channel
            else:
                continue
    return all_channels


# returns a json of all channels that represent an open window
@app.route('/openwindows')
def get_open_windows():
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

@app.route('/runningheaters')
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


if __name__ == '__main__':
    app.run(debug=True)

