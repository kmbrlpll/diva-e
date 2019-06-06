import os
import unittest

from app.main.model import office

from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

from app import blueprint
from app.main import create_app, db

app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')
app.register_blueprint(blueprint)

app.app_context().push()

manager = Manager(app)

migrate = Migrate(app, db)

manager.add_command('db', MigrateCommand)

# api calls to get states of a single channel (url_state) and a list with all the thing configs (url_things)
url_state = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/states/things/'
url_things = 'http://diva-e-iot-lab.northeurope.cloudapp.azure.com:8080/api/configuration/'
headers = {
    'content-type': 'application/json',
    'x-api-key': '44W8wJoAgaMMyeVxwo7GDanwtsMZbXXB'
}

@manager.command
def run():
    app.run()


@manager.command
def test():
    """Runs the unit tests."""
    tests = unittest.TestLoader().discover('app/test', pattern='*test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1

if __name__ == '__main__':
    manager.run()