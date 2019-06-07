import os
import unittest

from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from MQTTServer.app.main import create_app

app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')

@app.route('/')
def index():
        return 'Hi! You are at the root directory of the API.\n The API paths begin from /api/'



app.app_context().push()

manager = Manager(app)


@manager.command
def run():
    app.run()


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