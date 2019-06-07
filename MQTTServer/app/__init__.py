from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from MQTTServer.app.main.config import Config



def create_app():
    ''' Initializing app '''
    app = Flask(__name__)
    app.debug = True
    app.config.from_object(Config)
    return app
