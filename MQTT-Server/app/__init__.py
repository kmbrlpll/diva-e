from flask_restplus import Api
from flask import Blueprint

from .main.controller.office_controller import api as office_ns

blueprint = Blueprint('api', __name__)

api = Api(blueprint,
          title='THIS IS A TEST',
          version='1.0',
          description='ilonas'
          )

api.add_namespace(office_ns, path='/office')