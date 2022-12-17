import paho.mqtt.client as mqtt
import os
import json
import random
import time

def on_message(client, obj, msg):
    print(msg.topic + " " + str(msg.qos) + " " + str(msg.payload))

def on_publish(client, obj, mid):
    print("mid: " + str(mid))

def generate_sensor_data():
    global temp, hum, pre

    temp = random.randint(20, 30)
    hum = random.randint(60, 90)
    pre = random.randint(1000, 1120)

try:
    mqttc = mqtt.Client()
    mqttc.on_message = on_message
    mqttc.on_publish = on_publish

    mqttc.username_pw_set("shan", "shan1996")
    mqttc.connect('localhost', 1883, 60)

    while True :

        generate_sensor_data()

        sensor = {
            "temp": temp,
            "hum": hum,
            "pre": pre
        }

        mqttc.publish("/topic", (json.dumps(sensor)))
        print('published', temp, ":", hum, ":", pre)
        time.sleep(1)

except:
    exit