#!flask/bin/python

from flask import Flask
from flask import request
from flask import send_file
import requests
import json
import jsonpickle

app = Flask(__name__)

with open('windowDef.json') as json_file:
    windowDefs = json.load(json_file)
print (windowDefs)

windowList = []
url = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/states/things'
headers = {
    'content-type': 'application/json',
    'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}
r = requests.get(url, {}, headers=headers)
print (r.json())

for windowDef in windowDefs:
    w = {
        'id': windowDef['id'],
        # TODO: read from result
        'open': True,
    }
    for window in r.json():
        if (windowDef['id'] ==  window['id']):
            w['map'] = windowDef['map']
            w['xCoord'] = windowDef['xCoord']
            w['yCoord'] = windowDef['yCoord']
            windowList.append(w);
            #  print (windowDef)



@app.route('/things/api/v1.0/windows', methods=['GET'])
def get_windows():
    # print ('get window states = ' + jsonpickle.encode(windowList, unpicklable=False))
    return jsonpickle.encode(windowList, unpicklable=False), 200, {'Content-Type': 'application/json; charset=utf-8'}

@app.route('/things/api/v1.0/map/<map_id>')
def get_map(map_id):
    print (map_id)
    return send_file(map_id + ".jpg", mimetype='image/gif')

if __name__ == '__main__':
    app.run(debug=True)