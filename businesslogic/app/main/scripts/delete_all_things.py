import requests
from os.path import join, dirname
from os import environ
from dotenv import load_dotenv


dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

url = environ.get("URL_CONFIG")

headers = {
'content-type': environ.get("CONTENT_TYPE"),
'x-api-key': environ.get("X_API_KEY")
}

r = requests.get(url, headers=headers).json()

all_things  = r["things"]

for thing in all_things:
    id = thing["id"]
    delete = requests.delete(url + "things/" + id, headers=headers)
