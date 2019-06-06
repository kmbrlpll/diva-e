
from ..service.request_service import get_channels,get_channel_state

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
