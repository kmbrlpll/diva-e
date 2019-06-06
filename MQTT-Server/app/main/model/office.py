from .. import db
from ..config import key

class Office(db.Model):
    office_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    office_name = db.Column(db.String(64))
    office_address = db.Column(db.String(128))
    path_to_floorplan = db.Column(db.String(128))
    #rooms = db.relationship('Room', backref='office', lazy=True)

    ''' def remove_room(self, room):
        if not (room in self.rooms):
            self.rooms.remove(room) '''
    
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



''' def init_db():
    db.create_all()

      # Create a test user
    new_office = Office(1,'dvvdf', 'a@a.com', 'aaaaaaaa')
    db.session.add(new_office)
    db.session.commit() '''


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