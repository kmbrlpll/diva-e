from flask import  url_for
from app import db

class Office(db.Model):
    office_id = db.Column(db.Integer, primary_key=True)
    office_name = db.Column(db.String(64), index=True, unique=True)
    office_address = db.Column(db.String(128), index=True, unique=True)
    path_to_floorplan = db.Column(db.String(128), index=True, unique=True)

    def __repr__(self):
        return '<{},{},{},{}>'.format(self.office_id, self.office_name, self.office_address, self.path_to_floorplan) 


class Room(db.Model):
    room_id = db.Column(db.Integer, primary_key=True)
    temperature = db.Column(db.Float)
    coord_x = db.Column(db.Float)
    coord_y = db.Column(db.Float)
    office_id = db.Column(db.Integer, db.ForeignKey('office.office_id'))

    def __repr__(self):
        return '<{},{},{},{},{}>'.format(self.room_id, self.temperature, self.coord_x, self.coord_y, self.office_id)  

class Window(db.Model):
    window_id = db.Column(db.Integer, primary_key=True)
    state = db.Column(db.Boolean)
    coord_x = db.Column(db.Float)
    coord_y = db.Column(db.Float)
    room_id = db.Column(db.Integer, db.ForeignKey('room.room_id'))

    def __repr__(self):
        return '<{},{},{},{},{}>'.format(self.window_id, self.state, self.coord_x, self.coord_y, self.room_id)  

class Heater(db.Model):
    heater_id = db.Column(db.Integer, primary_key=True)
    temperature = db.Column(db.Float)
    coord_x = db.Column(db.Float)
    coord_y = db.Column(db.Float)
    room_id = db.Column(db.Integer, db.ForeignKey('room.room_id'))

    def __repr__(self):
        return '<{},{},{},{},{}>'.format(self.heater_id, self.temperature, self.coord_x, self.coord_y, self._id)  
 



'''
class Thing():
    ''' '''This is example of how the models should be till we find how they should be created''' '''

    def __init__(self):
        self.id = "test-thing3"
        self.enabled = True
        self.channelStates = []  # List of channels

    def to_dict(self):
        data = {
            'thing_id': self.id,
            'enabled': self.enabled,
            'channelStates': {

            }
        }
        pass

    def from_dict(self, data):
        pass

class Channel():
    ''' '''This is example of how the models should be till we find out how they should be created''' '''

    def __init__(self):
        self.id = "channel-3"
        self.type = "number"
        self.enabled = True
        self.state = {
            'lastUpdated': 1557754837716,  # Unix time
            'desired': 'OPEN',
            'reported': 'CLOSED'
        }

    def to_dict(self):
        data = {
            'ch_id': self.id,
            'type': self.type,
            'enabled': self.enabled,
            'state': {
                'lastUpdated': 1557754837716,  # Unix time
                'desired': 'OPEN',
                'reported': 'CLOSED'
            }
        }
        pass

    def from_dict(self, data):
        pass
'''