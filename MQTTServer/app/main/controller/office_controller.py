from flask import request
from flask_restplus import Resource

from ..util.dto import OfficeDto
from ..service.office_service import save_new_office, get_all_offices, get_office

api = OfficeDto.api
_office = OfficeDto.office


@api.route('/')
class OfficeList(Resource):
    @api.doc('list_of_offices')
    #@api.marshal_list_with(_office, envelope='data')
    def get(self):
        """List all registered offices"""
        return get_all_offices()

    @api.expect(_office, validate=True)
    @api.response(201, 'Office successfully created.')
    @api.doc('create a new office')
    def post(self):
        """Creates a new office """
        data = request.json
        return save_new_office(data=data)


@api.route('/<office_id>')
@api.param('office_id', 'office id')
@api.response(204, 'Office found.')
class Office(Resource):
    @api.doc('get an office')
    #@api.marshal_with(_office)
    def get(self, office_id):
        """get an office given its identifier"""
        office = get_office(office_id)
        if not office:
            api.abort(404)
        else:
            return office