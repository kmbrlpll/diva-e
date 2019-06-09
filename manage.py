import os
import unittest

from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from MQTTServer.app.main import create_app
import subprocess

from flask import Flask
from MQTTServer.app.main.calls.get_requests import routing


app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')

app.app_context().push()
manager = Manager(app)

@manager.command
def run():
    app = Flask(__name__)
    app.register_blueprint(routing)
    if __name__ == "__main__":
        app.run()

@manager.command
def setup():
    subprocess.call(["python", "setup.py"], cwd="MQTTServer/app/main/scripts")

@manager.command
def delete():
    subprocess.call(["python", "delete_all_things.py"], cwd="MQTTServer/app/main/scripts")

@manager.command
def test():
    """Runs the unit tests."""
    tests = unittest.TestLoader().discover('MQTTServer/app/test/func', pattern='*test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1

if __name__ == '__main__':
    manager.run()