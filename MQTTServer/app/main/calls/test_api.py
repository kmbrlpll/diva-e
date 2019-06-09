from flask import Flask
import requests
import json
from flask import Blueprint

# api calls to get states of a single channel (url_state) and a list with all the thing configs (url_things)
url_things = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/configuration/'
headers = {
    'content-type': 'application/json',
    'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}
idrouting = Blueprint('idrouting', __name__)

# returns a json of all channels that represent an open window
@idrouting.route('/getids', methods=['GET'])
def get_ids():
    things = requests.get(url_things, {}, headers=headers)
    things_dict = things.json()
    all_channels = {}
    all_channels["status"] = things.status_code
    if things.status_code == 200:
        id_list = []
        for thing in things_dict["things"]:
            for channel in  thing["channels"]:
                id_list.append(thing["id"])
        all_channels["data"] = id_list
    else:
        all_channels["data"] = {"error_code" : things.status_code, "message" :"Sorry, nothing was found." }
    return json.dumps(all_channels)

