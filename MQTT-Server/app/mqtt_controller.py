import paho.mqtt.client as mqtt


# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    # print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("/esp8266/windowStatus")


# The callback for when a PUBLISH message is received from the ESP8266.
def on_message(client, userdata, message):
    # socketio.emit('my variable')
    # print("Received message '" + str(message.payload) + "' on topic '"
    #    + message.topic + "' with QoS " + str(message.qos))
    socketio.emit('window', {'data': str(message.payload)[2:-1]})


mqttc = mqtt.Client()
mqttc.on_connect = on_connect
mqttc.on_message = on_message
mqttc.connect("localhost", 1883, 60)
mqttc.loop_start()