import requests
import json
from datetime import datetime
from businesslogic.app.main.calls.get_channels import get_all_things, get_channels


url = "http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/configuration/things/"
headers = {
'content-type': 'application/json',
'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}

# def save_tokens_to_file(tokens):
#     now = datetime.now().strftime('%Y_%m_%d')
#     try:
#         with open('../../test/src/setup_things_' + now + '.json', 'w') as outfile:
#             json.dump(tokens, outfile)
#         print("saved JSON!")
#     except:
#         print("could not save tokens to file!")


def main():
    tokens = []
    #error handling here!
    try:
        with open('../../test/src/test_office_config.json') as json_file:
            data = json.load(json_file)
            all_things_from_config = data["things"]


            print()
            print("config things:")
            print(all_things_from_config)
            print()
            print("installed things:")
            print(all_things_installed)

        for configured_thing in all_things_from_config:
            #error handling here!
            configured_thing_id = configured_thing.get("id")
            installed_thing = get_thing(configured_thing_id).json()


            for installed_channel in installed_thing["channels"]:
                installed_channel_id = installed_channel_id.get("id")
                configured_properties = configured_thing["cahnnels"][installed_channel_id]
                installed_channel["properties"] = configured_properties

            print("putting thing " + thing_id + "...")
            try:
                put_request = requests.put(url + thing_id, data=json.dumps(installed_thing), headers=headers)
                print(put_request.status_code)


                if put_request.status_code == 200:
                    print("Sucessfully put " + thing_id + "!")

            except:
                print("Thing " + thing_id + " could not be uploaded to the server.")

    except:
        print("Loading config file failed!")



if __name__ == '__main__':
    main()
