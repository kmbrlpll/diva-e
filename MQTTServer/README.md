## **Backend Readme**

#### **Description of directories**
| File | description |
| ------ | ------ |
| ../Makefile | Will be used to compile / setup dependencies and the needed environment for our API to run. |
| ../Dockerfile | Basically the Makefile for our Docker Image |
| ../manage.py | This is the file that invokes different services of our API (deletion, running the service..) . It gets a copy of the app from main and runs it. |
| /requirements.txt | This file lists all of the Python packages that your app depends on. You may have separate files for production and development dependencies. |
| /app/ | This is the package that contains the application. | 
| /app/main/ | Here are the main functionalities of our API. |
| /app/main/calls/ | This package contains all the tests for our app and sample requests/ ressources. |
| /app/main/__init__.py| Entry point for our app for different environments (to be implemented). |
| /app/main/config.py| Here should be rightful declarations for the different environments (e.g. Test, Development, Production). |
| /app/main/calls/get_channels.py | Here is where all the preprocessing with a direct Gateway call happens. |
| /app/main/calls/get_requests.py | All the routing, using get_channels.py  |
| /app/main/scripts/ | All scripts that are run once only. |
| /app/main/scripts/delete_all_things.py | Deletes all things from our Gateway. |
| /app/main/scripts/setup.py | Currently loading a dummy JSON; to set up all things initially. |
| /app/test/ | This package contains all the tests for our app and sample requests/ ressources. |
| /app/test/func/test_config.py | To test the different environment setups (to be set up correctly). |
| /app/test/func/test_get_requests.py | To be implemented. |
| /app/test/src | sample JSONs to test functionalities. |

#### **Important Notation**
*  Currently, get_channels.py is running with a local copy from Swagger. `(C:\\Users\\ilona\\Desktop\\SS19\\diva-e-praxisprojekt\\MQTTServer\\app\\test\\src\\CarosStructure.json)`. Please adjust!
*  Same counts for `/floorplanurl` in get_requests.py.
*  in manage.py, adjust `app.run(host='localhost', port=5000)` - localhost - with your own network address (IP4) - so that you can run expo, if needed!

#### **IDEs**
I would recommend **PyCharm** community edition. It is very powerful and free. 
Behaves like Eclipse in Java and has some cool features like automatically activating venv and integrated interaction with git.  
Controversial this IDE needs some time to get used to.  
I would at least give a try.

On other hand **VSCode** with installed python plugins is also a good choice.

#### **How to create flask project**
I would advice to have a look to the first link bellow in "useful links". 
Bellow is written short sequence of steps taken from the manual.

`$ python3 -m venv venv` -- create virtual environment.

`$ venv\Scripts\activate` Activate virtual environment in **Windows**. 
If everything is ok, than should appear (venv) before the cursor, like `(venv) $ _`

For **Linux / Mac** activation of venv is like this: `$ source venv/bin/activate`.

After that it should be additional packages installed. The first package is flask itself: `$ pip install flask`.

#### **How to run flask server**
`$ flask run` in commandline. 

#### **How to run SQLAlchemy ORM  locally** ###
To run the SQLAlchemy ORM DB locally, `$ FLASK_APP=app.py` has to be set.
As the `versions` folder under `migrations`is empty and will be missing in GitLab, `migrations`should be deleted initially.
Afterwards, run `$ flask db init`. This will generate the said `migrations`and `versions`subfolder again, plus corresponding dependencies.
`$ flask db migrate`will generate automatic migrations for the database, as there is no previous one.
To apply changes to the database, run ´$ flask db downgrade` to revert or `$ flask db upgrade`to upgrade.

Examples can be run in the Python shell, enter with `$ python`. 
Run: 
* `$ python`
* `>>> from app import create_app`
* `>>> app = create_app()`
* `>>> app.app_context().push()`
* `>>> from app import db ` 
* `>>> from app.models import Office, Room, Window, Heater`
* `>>> u = Office(office_name_='john', office_address='test', path_to_floorplan='some/path/')`
* `>>> db.session.add(u)`
* `>>> db.session.commit()`
* `>>> exit()`

  