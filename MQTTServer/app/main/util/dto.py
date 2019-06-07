from flask_restplus import Namespace, fields


class OfficeDto:
    api = Namespace('office', description='office related operations')
    office = api.model('office', {
        'office_id' : fields.Integer(required=True, description='office id'),
        'office_name' : fields.String(required=True, description='office name'),
        'office_address' : fields.String(required=True, description='office address'),
        'path_to_floorplan' : fields.String(required=True, description='office plan')
    })