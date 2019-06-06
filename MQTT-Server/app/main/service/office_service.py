from app.main import db
from app.main.model.office import Office

def save_new_office(data):
    office = Office.query.filter_by(office_id=data['office_id']).first()
    if not office:
        new_office = Office(
            office_id=data['office_id'],
            office_name = data['office_name'],
            office_address = data['office_address'],
            path_to_floorplan = data['path_to_floorplan']
        )
        response_object = {
            'status': 'success',
            'message': 'Successfully created.'
        }
        return response_object, 201
    else:
        response_object = {
            'status': 'fail',
            'message': 'User already exists. Please Log in.',
        }
        return response_object, 409


def get_all_offices():
    return str(Office.query.all())

def get_office(office_id):
    return str(Office.query.filter_by(office_id=office_id).first())

def save_changes(data):
    db.session.add(data)
    db.session.commit()
