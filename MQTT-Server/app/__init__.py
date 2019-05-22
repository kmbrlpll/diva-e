from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

# Setting app DB
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    ''' Initializing app '''
    app = Flask(__name__)
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    app.debug = True
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    #  Import api blueprints with root prefix /api
    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    @app.route('/')
    def index():
        return 'Hi! You are at the root directory of the API.\n The API paths begin from /api/'

    return app