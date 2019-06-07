import os
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash
from flask import Flask
from app import db
from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship, backref
from sqlalchemy.ext.declarative import declarative_base

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
db = SQLAlchemy(app)

class Office(db.Model):
    office_id = db.Column(db.Integer, primary_key=True)
    office_name = db.Column(db.String(64))
    office_address = db.Column(db.String(128))
    path_to_floorplan = db.Column(db.String(128))
    rooms = db.relationship('Room', backref='office', lazy=True)

    def add_hospital(self, hospital):
        if not (hospital in self.hospitals):
            self.hospitals.append(hospital)

    def remove_room(self, room):
        if not (room in self.rooms):
            self.rooms.remove(room)
    
    def get_officeid(self):
        return self.office_id;

    def get_officename(self):
        return self.office_name;

    def get_officeaddress(self):
        return self.office_address;

    def get_floorplan(self):
        return self.path_to_floorplan;

    def __repr__(self):
        return '<{},{},{},{}>'.format(self.office_id, self.office_name, self.office_address, self.path_to_floorplan) 


class Room(db.Model):
    room_id = db.Column(db.Integer, primary_key=True)
    temperature = db.Column(db.Float)
    coord_x = db.Column(db.Float)
    coord_y = db.Column(db.Float)
    office_id = db.Column(db.Integer, db.ForeignKey('office.office_id'), nullable=False)
    windows = db.relationship('Window', backref='room', lazy=True)
    heaters = db.relationship('Heater', backref='room', lazy=True)

    def get_roomid(self):
        return self.room_id;

    def get_temperature(self):
        return self.temperature;

    def get_xcoord(self):
        return self.coord_x;

    def get_ycoord(self):
        return self.coord_y;
    
    def get_officeid(self):
        return self.office_id;

    def __repr__(self):
        return '<{},{},{},{},{}>'.format(self.room_id, self.temperature, self.coord_x, self.coord_y, self.office_id)  

class Window(db.Model):
    window_id = db.Column(db.Integer, primary_key=True)
    state = db.Column(db.Boolean)
    coord_x = db.Column(db.Float)
    coord_y = db.Column(db.Float)
    room_id = db.Column(db.Integer, db.ForeignKey('room.room_id'), nullable=False)

    def get_windowid(self):
        return self.window_id;

    def get_state(self):
        return self.state;

    def get_xcoord(self):
        return self.coord_x;

    def get_ycoord(self):
        return self.coord_y;
    
    def get_roomid(self):
        return self.room_id;

    def __repr__(self):
        return '<{},{},{},{},{}>'.format(self.window_id, self.state, self.coord_x, self.coord_y, self.room_id)  

class Heater(db.Model):
    heater_id = db.Column(db.Integer, primary_key=True)
    temperature = db.Column(db.Float)
    coord_x = db.Column(db.Float)
    coord_y = db.Column(db.Float)
    room_id = db.Column(db.Integer, db.ForeignKey('room.room_id'),nullable= False)

    def get_heaterid(self):
            return self.heater_id;

    def get_temperature(self):
        return self.temperature;

    def get_xcoord(self):
        return self.coord_x;

    def get_ycoord(self):
        return self.coord_y;
    
    def get_roomid(self):
        return self.room_id;

    def __repr__(self):
        return '<{},{},{},{},{}>'.format(self.heater_id, self.temperature, self.coord_x, self.coord_y, self._id)  
 
def init_db():
    db.create_all()

      # Create a test user
    new_office = Office(1,'dvvdf', 'a@a.com', 'aaaaaaaa')
    db.session.add(new_office)
    db.session.commit()


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

if __name__ == '__main__':
    init_db()