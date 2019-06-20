from flask import Flask
from .config import config_by_name
from os.path import join, dirname
from os import environ
from dotenv import load_dotenv
from flask import Flask, current_app


dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = Flask(__name__)
def create_app(config_name): 
    with app.app_context(): 
        app.config.update(
            URL = environ.get("URL_API"), 
            PASSWORD = environ.get("X_API_KEY"),
            CONTENT= environ.get("CONTENT_TYPE"))
        app.config.from_object(config_by_name[config_name])
    return app