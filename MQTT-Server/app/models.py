from flask import  url_for


class Thing():
    ''' This is example of how the models should be till we find how they should be created '''

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
    ''' This is example of how the models should be till we find out how they should be created '''

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