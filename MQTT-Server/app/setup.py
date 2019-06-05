import requests
import json


url = "http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/configuration/things/"

headers = {
    'content-type': 'application/json',
    'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}

#error handling here!
try:
    with open('../test_office_config.json') as json_file:
        data = json.load(json_file)
        all_things = data["things"]

        for thing in all_things:
            #error handling here!
            thing_id = thing.get("id")
            thing_data = thing.get("put")

            print("putting thing " + thing_id)
            try:
                put_request = requests.put(url + thing_id, data=json.dumps(thing_data), headers=headers)

                #print(put_request.status_code)
            except:
                print("Thing " + thing_id + " could not be uploaded to the server.")

except:
    print("Loading config file failed!")
