
def stringify_list(l):
    s = ""
    for item in l:
        s += ", " + item
    return s[2:]


def get_all_things():
    data = {}
    things = requests.get(url + "configuration/", {}, headers=headers)
    data["status"] = things.status_code
    data["data"] = things.json()
    return data


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
                    channel["type"] = channel_type
                    channel["thing_id"] = i["id"]
                    all_channels[thing["id"]] = channel
                else:
                    continue

        data["data"] = all_channels
    return data


def get_channel_state(channel_id, thing_id):
    r_state = requests.get(url + "state-resource/" + thing_id + "/channels/" + channel_id, {}, headers=headers)

    if r_state.status_code == 404:
        return None
    else:
        state = r_state.json()["state"]["reported"]
        return state