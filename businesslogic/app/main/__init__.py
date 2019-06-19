from flask import Flask
from .config import config_by_name

url_state = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/states/things/'
url_things = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/configuration/'
headers = {
    'content-type': 'application/json',
    'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])

    return app