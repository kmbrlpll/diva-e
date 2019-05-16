
class Thing():
    ''' This is example of how the models should be till we find how they should be created '''
    id = "test-thing3"
    enabled = True
    channelStates = []  # List of channels


class Channel():
    ''' This is example of how the models should be till we find out how they should be created '''
    id = "channel-3"
    type = "number"
    enabled = True
    state = {
        'lastUpdated': 1557754837716,  # Unix time
        'desired': 'OPEN',
        'reported': 'CLOSED'
    }
