import unittest
from config import Config
from app import create_app, db
from app.models import Office, Room, Window, Heater

class TestConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite://'
 
 
class BaseDBTest(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_office(self):

        ''' #to delete old entries
        try:
            num_rows_deleted = db.session.query(Windows).delete()
            db.session.commit()
        except:
            db.session.rollback()

        #to query all entries
        offices = Office.query.all()
        for office in offices:
            print(office) '''

        #sample creation and assertion
        divae= Office(office_id=5, office_name='divae', office_address='friedrichstr', path_to_floorplan='/test/path/')
        db.session.add(divae)
        db.session.commit()
        self.assertEqual(5, divae.get_officeid())
        self.assertEqual('divae', divae.get_officename())
        self.assertEqual('friedrichstr', divae.get_officeaddress())
        self.assertEqual('/test/path/', divae.get_floorplan())

    def test_rooms(self):
        #sample creation and commit
        room1 = Room(room_id=1, temperature=20.5, coord_x=200.3, coord_y=10.8)
        office1 = Office(office_id=1, office_name='new', office_address='wilhelminenhofstr', path_to_floorplan='/////path')
        db.session.add(room1)
        db.session.add(office1)
        db.session.commit()

        #assertions
        self.assertEqual(1, room1.get_roomid())
        self.assertEqual(20.5, room1.get_temperature())
        self.assertEqual(200.3, room1.get_xcoord())
        self.assertEqual(10.8, room1.get_ycoord())
        self.assertNotEqual(2, room1.get_roomid())
        self.assertEqual(1, room1.get_roomid())
       
        #appending one-to-many relationship for DB
        office1.rooms.append(room1)
        db.session.commit()
        self.assertEqual(1,room1.get_officeid())

    def test_windows(self):
        #same procedure as above
        room2 = Room(room_id=2, temperature=10, coord_x=100.50, coord_y=18)
        office2 = Office(office_id=2, office_name='test', office_address='treskowallee', path_to_floorplan='another/path')
        window2 = Window(window_id=2, state=True, coord_x=200, coord_y=100)
        db.session.add(room2)
        db.session.add(office2)
        db.session.add(window2)
        db.session.commit()
       
        #asserting multiple one-to-many linked relations
        office2.rooms.append(room2)
        room2.windows.append(window2)
        db.session.commit()
        self.assertEqual(2,room2.get_officeid())
        self.assertEqual(2,window2.get_roomid())

    def test_heaters_and_windows(self):
        room3 = Room(room_id=3, temperature=22, coord_x=50, coord_y=50)
        office3 = Office(office_id=3, office_name='another', office_address='test', path_to_floorplan='here')
        window3 = Window(window_id=3, state=True, coord_x=20, coord_y=10)
        heater3 = Heater(heater_id=3, temperature=23, coord_x=20, coord_y=10)
        db.session.add(room3)
        db.session.add(office3)
        db.session.add(window3)
        db.session.add(heater3)
        db.session.commit()
       
        office3.rooms.append(room3)
        room3.windows.append(window3)
        room3.heaters.append(heater3)
        db.session.commit()
        self.assertEqual(3,room3.get_officeid())
        self.assertEqual(3,window3.get_roomid())
        self.assertEqual(3,heater3.get_roomid())


    def test_delete_all_entries(self):
        #deleting all previous entries for future tests and executions
        try:
            num_rows_deleted = db.session.query(Window).delete()
            num_rows_deleted = db.session.query(Heater).delete()
            num_rows_deleted = db.session.query(Room).delete()
            num_rows_deleted = db.session.query(Office).delete()
            db.session.commit()
        except:
            db.session.rollback()

if __name__ == '__main__':
    unittest.main(verbosity=2)