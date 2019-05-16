from app.api import bp


@bp.route('/states/things', methods=['GET'])
def get_things():
    pass


@bp.route('/states/things/<thing_id>', methods=['GET'])
def get_thing(thing_id):
    pass


@bp.route('/states/things/<thing_id>/channels', methods=['GET'])
def get_channels(thing_id):
    pass


@bp.route('/states/things/<thing_id>/channels/<ch_id>', methods=['GET'])
def get_channel(thing_id, ch_id):
    pass


@bp.route('/states/things/<thing_id>/channels/<ch_id>/value', methods=['POST'])
def set_channel_value(thing_id, ch_id):
    pass