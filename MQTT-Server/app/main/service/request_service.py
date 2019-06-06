import requests
from . import url_state, url_things, headers

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
