from flask import jsonify, request
from app.api import bp


@bp.route('/configuration', methods=['GET'])
def get_configuration():
    pass


@bp.route('/configuration/things/<thing_id>', methods=['GET'])
def get_thing_configuration(thing_id):
    pass


@bp.route('/configuration/things/<thing_id>', methods=['PUT'])
def put_thing(thing_id):
    pass


@bp.route('/configuration/things/<thing_id>', methods=['DELETE'])
def delete_thing(thing_id):
    pass

