import requests
import json
from datetime import datetime
from os.path import join, dirname
from os import environ
from dotenv import load_dotenv


dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

url = environ.get("URL_API")
headers = {
'content-type': environ.get("CONTENT_TYPE"),
'x-api-key': environ.get("X_API_KEY")
}


def get_thing(id):

    thing = requests.get(url + "configuration/things/" + id, {}, headers=headers).json()
    print(thing)
    return thing

def main():
    tokens = []
    #error handling here!

    #'businesslogic\\app\\test\\src\\test_office_config.json' ilona
    with open('../../test/src/test_office_config.json') as json_file:
        data = json.load(json_file)
        all_things_from_config = data["things"]

    print("*****")
    for configured_thing in all_things_from_config:

        configured_thing_id = configured_thing.get("id")
        #retrieve the thing object via api call to make alterations to channel properties
        installed_thing = get_thing(configured_thing_id)


        for installed_channel in installed_thing["channels"]:
            installed_channel_id = installed_channel.get("id")
            configured_properties = configured_thing["channels"][installed_channel_id]

            installed_channel["properties"] = configured_properties


            print("putting properties in channel " + installed_channel_id + "...")
        try:
            updated_thing_id = installed_thing["id"]
            del installed_thing["id"]
            put_request = requests.put(url + "configuration/things/" + updated_thing_id, data=json.dumps(installed_thing), headers=headers)

            if put_request.status_code < 300:
                print("Sucessfully configured thing " + updated_thing_id + "!")
                print("*****")
            else:
                print("Thing " + updated_thing_id + "could not be updated!")
                print("*****")

        except:
            print("Thing " + thing_id + " could not be uploaded to the server.")



if __name__ == '__main__':
    main()
