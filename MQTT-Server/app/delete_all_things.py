import requests
import json


url = "http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/configuration/"

headers = {
'content-type': 'application/json',
'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}

r = requests.get(url, headers=headers).json()

all_things  = r["things"]

for thing in all_things:
    id = thing["id"]
    delete = requests.delete(url + "things/" + id, headers=headers)
