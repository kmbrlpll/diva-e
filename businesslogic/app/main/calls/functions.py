import requests
import json
from os.path import join, dirname
from os import environ
from dotenv import load_dotenv
from flask import Flask, current_app


dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

# api calls to get states of a single channel (url_state) and a list with all the thing configs (url_things)
url = environ.get("URL_API")

headers = {
    'accept': environ.get("CONTENT"),
    'x-api-key': environ.get("X_API_KEY")
}

accepted_channel_types = ["temperature", "heater", "window"]
error_data = {"error_code" : 404, "Message" : "Not found."}


def get_all_things():
    data = {}
    things = requests.get(url + "configuration/", {}, headers=headers)
    data["status"] = things.status_code
    data["data"] = things.json()
    return data


def stringify_list(l):
    s = ""
    for item in l:
        s += ", " + item
    return s[2:]


def get_room_temperatures():
    room_temperatures = get_channels("temperature")
    temperatures_data = {}

    for k,v in room_temperatures["data"].items():
        v["state"] = get_channel_state(k,v["thing_id"])
        temperatures_data[k] = v

    return temperatures_data


def get_thing(id):
    thing = requests.get(url + "configuration/things/" + id, {}, headers=headers).json()
    return thing

# takes channel type (window/heater) as parameter, makes api call and
# returns a dictionary with channel info
def get_channels(c_type):

    if c_type not in accepted_channel_types:
        data = { "status" : 404, "data" : error_data}
    else:
        all_channels = {}
        data = get_all_things()
        all_things = data["data"]

        for i in all_things["things"]:
            for thing in  i["channels"]:
                channel_type = thing["properties"]["type"]
                if channel_type == c_type:
                    channel = {}
                    channel["x"] = int(thing["properties"]["x"])
                    channel["y"] = int(thing["properties"]["y"])
                    channel["room"] = thing["properties"]["room"]
                    channel["type"] = channel_type
                    channel["thing_id"] = i["id"]
                    all_channels[thing["id"]] = channel
                else:
                    continue

        data["data"] = all_channels
    return data


def get_channel_state(channel_id, thing_id):

   req_url = url + "states/things/" + thing_id + "/channels/" + channel_id
    r_state = requests.get(req_url, {}, headers=headers)

    if r_state.status_code == 404:
        state = None
    else:
        state = r_state.json()["state"]["reported"]

    return state
