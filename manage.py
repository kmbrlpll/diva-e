import os
import unittest

from flask_script import Manager
from businesslogic.app.main import create_app
import subprocess

from flask import Flask
from businesslogic.app.main.calls.api_calls import routing
from businesslogic.app.main.test_api import idrouting


app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')

app.app_context().push()
manager = Manager(app)

@manager.command
def run():
    app = Flask(__name__)
    app.register_blueprint(routing)
    app.register_blueprint(idrouting)
    if __name__ == "__main__":
        app.run(host='localhost', port=5000)

@manager.command
def setup():
    subprocess.call(["python", "setup.py"], cwd="businesslogic/app/main/scripts")

@manager.command
def delete():
    subprocess.call(["python", "delete_all_things.py"], cwd="businesslogic/app/main/scripts")

@manager.command
def test():
    """Runs the unit tests."""
    tests = unittest.TestLoader().discover('businesslogic/app/test/func', pattern='*test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1

if __name__ == '__main__':
    manager.run()