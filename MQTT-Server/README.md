## **Backend Readme**

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

#### **Packages to install**
Installation of packages: `$ pip install package-name` in commandline.

Ofc "package-name" is just a placeholder which we should replace with given bellow package names. For example: `$ pip install flask`.
* flask
* paho-mqtt
* flask-socketio -- this is temporal package, will be removed so there is no need to install it.

#### **Description of directories**
* app.py -- entry point of the entire app
* app/routes.py -- there are API links and how should they behaved
* app/models.py -- Just models.

#### **IDEs**
I would recommend **PyCharm** community edition. It is very powerful and free. 
Behaves like Eclipse in Java and has some cool features like automatically activating venv and integrated interaction with git.  
Controversial this IDE needs some time to get used to.  
I would at least give a try.

On other hand **VSCode** with installed python plugins is also a good choice.

#### **Useful links**

* https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world
The first part of big flask tutorial. There is described the first setup of flask project.
The important part is to create and manage own virtual environment, so project libraries will be isolated from the global
python environment. venv order should be gitignored and doesn't appear in git.
Also there is described how to install additional packages, through the pip.

* https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xxiii-application-programming-interfaces-apis
The last part of the given tutorial that describes how to write an API in flask.

* https://randomnerdtutorials.com/esp8266-publishing-dht22-readings-with-mqtt-to-raspberry-pi/
This link describes how flask interacts with MQTT.
  