from flask import Flask
import json
from businesslogic.app.main.calls.api_calls import routing


def test_base_route():
    app = Flask(__name__)
    app.register_blueprint(routing)
    client = app.test_client()
    url = '/'

    response = client.get(url)
    assert response.get_data() == b'{"dummy":"dummy-value"}\n'
    assert response.status_code == 200

def test_open_windows():
    app = Flask(__name__)
    app.register_blueprint(routing)
    client = app.test_client()
    url = '/openwindows'

    response = client.get(url)
    assert response.status_code == 500
