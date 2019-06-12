
@app.route('/')
def index():
    return 'Hi! You are at the root directory of the API.\n The API paths begin from /api/'


@app.route('/getfloorplan', methods=['GET'])
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


@app.route('/getfloorplandimensions', methods=['GET'])
def get_floorplan_dimensions():

    dimensions = {}
    try:
        with open('../../test/src/test_office_config.json') as json_file:
            json_data = json.load(json_file)
            image_dimensions = json_data.get("image_dimensions")
        data["status"] = 200
        data["data"] = image_dimensions
    except:
        data["status"] = 404
        data["data"] = error_data

    return json.dumps(dimensions)


# returns a json of all channels that represent an open window
@app.route('/openwindows', methods=['GET'])
def get_open_windows():

    all_windows = get_channels("window")
    number_of_total_windows = len(all_windows["data"])
    unreachable_windows = []

    for k,v in all_windows["data"].items():
        channel_state = get_channel_state(k,v["thing_id"])
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

    return json.dumps(all_windows)


@app.route('/getallroomtemperatures', methods=['GET'])
def get_room_temperatures():

    all_room_temperatures = {}
    room_temperatures = get_channels("temperature")
    return json.dumps(room_temperatures)


#TODO! Struktur für things festlegen und dann temperature minus heater!
#create lookup dict with [{room : temp}, {room : temp}, {room : temp}]
#loop over each heater and calculate the difference to its room temp to check if on
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
