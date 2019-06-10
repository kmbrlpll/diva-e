from flask import Flask
from flask import request
from flask import send_file
import requests
import json

app = Flask(__name__)

# api calls to get states of a single channel (url_state) and a list with all the thing configs (url_things)
url_state = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/states/things/'
url_things = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/configuration/'
headers = {
    'content-type': 'application/json',
    'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}

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


@app.route('/floorplanurl', methods=['GET'])
def get_floorplan_url():
    try:
        with open('../test_office_config.json') as json_file:
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
    return floorplan_info

@app.route('/')
def index():
        return 'Hi! You are at the root directory of the API.\n The API paths begin from /api/'


# returns a json of all channels that represent an open window
@app.route('/openwindows', methods=['GET'])
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

@app.route('/runningheaters', methods=['GET'])
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
