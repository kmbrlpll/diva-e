import os
import unittest

from flask_script import Manager
from businesslogic.app.main import create_app
import subprocess
from flask import jsonify

from flask import Flask
from businesslogic.app.main.calls.api_calls import routing
from businesslogic.app.main.errors.handlers import InvalidUsage

app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')

app.app_context().push()
manager = Manager(app)

@manager.command
def run():
    app.register_blueprint(routing)
    #print(app.config.get("URL"))
    #print(app.config.get("CONTENT"))
    app.app_context().push()
    
    @app.errorhandler(InvalidUsage)
    def handle_invalid_usage(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response


    if __name__ == "__main__":
        app.run(host='172.29.14.2', port=5000)

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