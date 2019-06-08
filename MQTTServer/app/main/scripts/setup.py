import requests
import json
from datetime import datetime

url = "http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/configuration/things/"
headers = {
'content-type': 'application/json',
'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}

def save_tokens_to_file(tokens):
    now = datetime.now().strftime('%Y_%m_%d')
    try:
        with open('../../test/src/setup_things_' + now + '.json', 'w') as outfile:
            json.dump(tokens, outfile)
        print("saved JSON!")
    except:
        print("could not save tokens to file!")


def main():
    tokens = []
    #error handling here!
    try:
        with open('../../test/src/test_office_config.json') as json_file:
            data = json.load(json_file)
            all_things = data["things"]

        for thing in all_things:
            #error handling here!
            thing_id = thing.get("id")
            thing_data = thing.get("put")
            token = {"id" :thing_id }

            print("putting thing " + thing_id + "...")
            try:
                put_request = requests.put(url + thing_id, data=json.dumps(thing_data), headers=headers)
                print(put_request.status_code)

                #WHAT THE FUCK ARE WE DOING WITH THESE TOKENS?????
                #Im currently just storing them in a file but Sven advised us to specifically NOT do that
                token["token"] = put_request.json()["token"]
                tokens.append(token)

                if put_request.status_code == 200:
                    print("Sucessfully put " + thing_id + "!")

                save_tokens_to_file(tokens)
            except:
                print("Thing " + thing_id + " could not be uploaded to the server.")

    except:
        print("Loading config file failed!")



if __name__ == '__main__':
    main()
