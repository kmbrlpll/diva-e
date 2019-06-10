import requests
import json

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
    with open('C:\\Users\\ilona\\Desktop\\SS19\\diva-e-praxisprojekt\\businesslogic\\app\\test\\src\\CarosStructure.json') as json_file:
            data = json.load(json_file)

    for i in data["things"]:
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
