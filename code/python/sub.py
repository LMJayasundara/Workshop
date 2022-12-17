import paho.mqtt.client as mqtt
import json
import time

temp = 0
hum = 0
pre = 0

def on_connect(client, userdata, flags, rc):  # The callback for when the client connects to the broker
    print("Connected with result code {0}".format(str(rc)))  # Print result of connection attempt
    client.subscribe("/topic")  # Subscribe to the topic


def on_message(client, userdata, msg):  # The callback for when a PUBLISH message is received from the server.
    global temp, hum, pre

    sensor = msg.payload.decode()
    sensor_data = json.loads(sensor)

    temp = sensor_data["temp"]
    hum = sensor_data["hum"]
    pre = sensor_data["pre"]

    print('get data', temp, ":", hum, ":", pre)

try:

    client = mqtt.Client()
    client.on_connect = on_connect  # Define callback function for successful connection
    client.on_message = on_message  # Define callback function for receipt of a message
    client.username_pw_set("shan", "shan1996")
    client.connect("localhost", 1883, 60)  # Connect to (broker, port, keepalive-time)
    client.loop_forever()  # Start networking daemon
    
except:
    exit