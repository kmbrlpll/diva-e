Please pull every time you start working on a new change!



 Requirements: 

Ihr braucht die neusten Versionen von: 
f


>>Node.js

>>npm

>>yarn

wird benötigt, um expo überhaupt zum Laufen zu bringen

>>Expo React Native CLI, nicht SDK!


Sobald ihr cloned oder pulled, müsst ihr in dem Projekt, in dem wir unser Projekt haben, das hier eintippen:

>>yarn install 

Bitte nicht mehr "npm instal". Beides sind Package Manager. Yarn ist bekannt als das Bessere und es sollte nur eins davon benutzt werden, um Interference zu vermeiden. 

vielleicht auch 

>>sudo yarn install

Dieser Befehl schaut in die package.json rein und schaut, welche Packages wir brauchen und installiert sie. 



Bitte ladet euch die EXPO App runter auf eurem Handy ( nicht die Expo Api App). In dieser App solltet ihr einen QR Code scannen können. Expo wird in der Lage sein, die Changes auf eurem Handy anzeigen zu lassen.
Wie cool ist das denn?!




EXPO 


Expo will require you to login in the terminal. Please do that.
Your pc/laptop where you start expo has to be in the same wifi as your mobile device for simulation. 

Of course you have to start expo if you want to see the changes you made in the editor. 
Before starting expo however, I advise you to increase your system's file watchers. On most pc's there is a limit of watchers. 
Those watchers are responsible for monitoring the changes in the file directories in general. 


On Linux type in the terminal: 


>> $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
>> $ sudo sysctl -p

It will increase the watchers to 524288 PERMANENTLY. 

To Start Expo please type: 

>> expo start -tunnel 

Do that instead of expo start. This is because "expo start" will create an URL like this exp://192.168.1.73:19000. 
In this case the device's network address is before the wifi-definition. But it has to be 
the other way around. Otherwise you won't be able to access another device in the same network. 


Your URL should look something like this: 

exp://aa-9zd.mailyle.frontend.exp.direct:80



WHAT NOT TO PUSH

the whole node-modules folder
yarn-lock
package.json.lock 

images should only be pushed once as git cannot merge images 




CONNECTING EXPO WITH YOUR LOCAL FLASK BACKEND

Find manage.py in our diva-e-root folder and edit the run method and put your ip address instead of YOUR_IP_ADDRESS. 

@manager.command
def run():
    app = Flask(__name__)
    app.register_blueprint(routing)
    app.register_blueprint(idrouting)
    if __name__ == "__main__":
        app.run(host='YOUR_IP_ADDRESS', port=5000)


Then go to the Terminal and type "make run". 

Open ANOTHER terminal and go to your frontend folder and do yarn expo start --tunnel to start expo on your phone. 

Go to the SettingsScreen and type in the server address textfield  "http://YOUR_IP_ADDRESS:5000". You actually dont need to put anything in the port textfield.. those are both string
that become concatenated anyway. The settingsscreen is responsible to create the base_url of the backend. 

Even after closing the expo the base_url will stay thanks to redux-persist, so you don't have to type in the url again and again. 



DONT COMMIT manage.py




