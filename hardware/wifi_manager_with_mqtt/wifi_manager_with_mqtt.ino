#include <FS.h>                   //this needs to be first, or it all crashes and burns...

#include <ESP8266WiFi.h>          //https://github.com/esp8266/Arduino

//needed for library
#include <DNSServer.h>
#include <ESP8266WebServer.h>
#include <WiFiManager.h>          //https://github.com/tzapu/WiFiManager

#include <ArduinoJson.h>          //https://github.com/bblanchon/ArduinoJson
#include <PubSubClient.h>

#include "DHTesp.h"

DHTesp dht;

#define DHT11_PIN 4

// GPIO Pin for intern LED
#define LED_BUILTIN 2 
// GPIO Pin for DoorReed
int switchReed = 16; 
char* gateway_topic = "things/data/";

//define your default values here, if there are different values in config.json, they are overwritten.
char mqtt_server[40];
char mqtt_port[6] = "1883";
char thing_id[20] = "thing";
char token[34] = "YOUR_TOKEN";

//flag for saving data
bool shouldSaveConfig = false;
WiFiClient espClient;
PubSubClient client(espClient);

//callback notifying us of the need to save config
void saveConfigCallback () {
  Serial.println("Should save config");
  shouldSaveConfig = true;
}

// This functions is executed when some device publishes a message to a topic that your ESP8266 is subscribed to
// Change the function below to add logic to your program, so when a device publishes a message to a topic that 
// your ESP8266 is subscribed you can actually do something
void callback(String topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();
}

// This functions reconnects your ESP8266 to your MQTT broker
// Change the function below if you want to subscribe to more topics with your ESP8266 
void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
     /*
     YOU  NEED TO CHANGE THIS NEXT LINE, IF YOU'RE HAVING PROBLEMS WITH MQTT MULTIPLE CONNECTIONS
     To change the ESP device ID, you will have to give a unique name to the ESP8266.
     Here's how it looks like now:
       if (client.connect("ESP8266Client")) {
     If you want more devices connected to the MQTT broker, you can do it like this:
       if (client.connect("ESPOffice")) {
     Then, for the other ESP:
       if (client.connect("ESPGarage")) {
      That should solve your MQTT multiple connections problem

     THE SECTION IN loop() function should match your device name
    */
    if (client.connect("ESP8266Client")) {
      Serial.println("connected");  
      // Subscribe or resubscribe to a topic
      // You can subscribe to more topics (to control more LEDs in this example)
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

// This Function converts value to Json
char* generateJson(char* value){
  StaticJsonBuffer<75> jsonBuffer;
  JsonObject& root = jsonBuffer.createObject();
  root["value"] = value;
  String sJson;
  root.printTo(sJson);
  char* serializedJson = &sJson[0u];
  return serializedJson;
}

void setup() {
  pinMode(switchReed, INPUT);
  // initialize LED digital pin as an output.
  pinMode(LED_BUILTIN, OUTPUT);
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println();

  //clean FS, for testing
  //SPIFFS.format();

  //read configuration from FS json
  Serial.println("mounting FS...");

  if (SPIFFS.begin()) {
    Serial.println("mounted file system");
    if (SPIFFS.exists("/config.json")) {
      //file exists, reading and loading
      Serial.println("reading config file");
      File configFile = SPIFFS.open("/config.json", "r");
      if (configFile) {
        Serial.println("opened config file");
        size_t size = configFile.size();
        // Allocate a buffer to store contents of the file.
        std::unique_ptr<char[]> buf(new char[size]);

        configFile.readBytes(buf.get(), size);
        DynamicJsonBuffer jsonBuffer;
        JsonObject& json = jsonBuffer.parseObject(buf.get());
        json.printTo(Serial);
        if (json.success()) {
          Serial.println("\nparsed json");

          strcpy(mqtt_server, json["mqtt_server"]);
          strcpy(mqtt_port, json["mqtt_port"]);
          strcpy(thing_id, json["thing_id"]);
          strcpy(token, json["token"]);

        } else {
          Serial.println("failed to load json config");
        }
        configFile.close();
      }
    }
  } else {
    Serial.println("failed to mount FS");
  }
  //end read



  // The extra parameters to be configured (can be either global or just in the setup)
  // After connecting, parameter.getValue() will get you the configured value
  // id/name placeholder/prompt default length
  WiFiManagerParameter custom_mqtt_server("server", "mqtt server", mqtt_server, 40);
  WiFiManagerParameter custom_mqtt_port("port", "mqtt port (default: 1883)", mqtt_port, 6);
  WiFiManagerParameter custom_thing_id("thing_id", "name of thing", thing_id, 20);
  WiFiManagerParameter custom_token("blynk", "token", token, 32);

  //WiFiManager
  //Local intialization. Once its business is done, there is no need to keep it around
  WiFiManager wifiManager;

  //set config save notify callback
  wifiManager.setSaveConfigCallback(saveConfigCallback);

  //set static ip
  //wifiManager.setSTAStaticIPConfig(IPAddress(10,0,1,99), IPAddress(10,0,1,1), IPAddress(255,255,255,0));
  
  //add all your parameters here
  wifiManager.addParameter(&custom_mqtt_server);
  wifiManager.addParameter(&custom_mqtt_port);
  wifiManager.addParameter(&custom_thing_id);
  wifiManager.addParameter(&custom_token);

  //reset settings - for testing
  //wifiManager.resetSettings();

  //set minimu quality of signal so it ignores AP's under that quality
  //defaults to 8%
  //wifiManager.setMinimumSignalQuality();
  
  //sets timeout until configuration portal gets turned off
  //useful to make it all retry or go to sleep
  //in seconds
  //wifiManager.setTimeout(120);

  //fetches ssid and pass and tries to connect
  //if it does not connect it starts an access point with the specified name
  //here  "AutoConnectAP"
  //and goes into a blocking loop awaiting configuration
  if (!wifiManager.autoConnect("AutoConnectAP", "password")) {
    Serial.println("failed to connect and hit timeout");
    delay(3000);
    //reset and try again, or maybe put it to deep sleep
    ESP.reset();
    delay(5000);
  }

  //if you get here you have connected to the WiFi
  Serial.println("connected...yeey :)");

  //read updated parameters
  strcpy(mqtt_server, custom_mqtt_server.getValue());
  strcpy(mqtt_port, custom_mqtt_port.getValue());
  strcpy(thing_id, custom_thing_id.getValue());
  strcpy(token, custom_token.getValue());

  //save the custom parameters to FS
  if (shouldSaveConfig) {
    Serial.println("saving config");
    DynamicJsonBuffer jsonBuffer;
    JsonObject& json = jsonBuffer.createObject();
    json["mqtt_server"] = mqtt_server;
    json["mqtt_port"] = mqtt_port;
    json["thing_id"] = thing_id;
    json["token"] = token;

    File configFile = SPIFFS.open("/config.json", "w");
    if (!configFile) {
      Serial.println("failed to open config file for writing");
    }

    json.printTo(Serial);
    json.printTo(configFile);
    configFile.close();
    //end save
  }

  Serial.println("local ip");
  Serial.println(WiFi.localIP());

  dht.setup(DHT11_PIN, DHTesp::DHT11); // Connect DHT sensor to GPIO 2

  strcat(gateway_topic, thing_id);

  client.setServer(mqtt_server, atoi(mqtt_port));
  Serial.print("mqtt_server:  ");
  Serial.println(mqtt_server);
  Serial.print("mqtt_port  ");
  Serial.println(atoi(mqtt_port));
  Serial.print("token:  ");
  Serial.println(token);
  client.setCallback(callback);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (!client.connected()) {
    reconnect();
  }
  if(!client.loop()){
    //client.connect("ESP8266Client");
    // If there authentification should be used, uncomment bellow
    client.connect(thing_id, thing_id, token);
  }

  char* windowStatus;
  
  if(digitalRead(switchReed)==HIGH){
    digitalWrite(LED_BUILTIN, LOW);
    windowStatus = "Closed";
  } else {
    digitalWrite(LED_BUILTIN, HIGH);
    windowStatus = "Open";
  }
  delay(2000);

  // Publishes Window Status
  client.publish(strcat(gateway_topic, "/window"), generateJson(windowStatus));
  
  Serial.print("Window is: ");
  Serial.println(windowStatus);

  float humidity = dht.getHumidity();
  float temperature = dht.getTemperature();

  char ctemp[8], chumidity[8];
  dtostrf(temperature, 6, 2, ctemp);
  dtostrf(humidity, 6, 2, chumidity);
  client.publish(strcat(gateway_topic, "/temperature"), generateJson(ctemp));
  client.publish(strcat(gateway_topic, "/humidity"), generateJson(chumidity));
  Serial.println("Temperature is: ");
  Serial.print(temperature);
}
