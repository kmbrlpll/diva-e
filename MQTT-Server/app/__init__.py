from flask import Flask


def create_app():
    ''' Initializing app '''
    app = Flask(__name__)
    SECRET_KEY = 'Secret'

    #  Import api blueprints with root prefix /api
    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    return app