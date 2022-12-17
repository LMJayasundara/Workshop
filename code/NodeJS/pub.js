const mqtt = require('mqtt');
const connectUrl = 'mqtt://localhost:1883';

const client = mqtt.connect(connectUrl, {
  username: 'shan',
  password: 'shan1996',
  rejectUnauthorized: true
});

client.on('connect', function () {
  console.log('connect');
  client.publish('/topic', 'Hello SCT')
});

client.on('error', function(err) {
  console.log("MQTT Err:", err.message);
});