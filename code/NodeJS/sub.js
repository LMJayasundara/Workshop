const mqtt = require('mqtt');
const connectUrl = 'mqtt://localhost:1883';
const clientId = "ID001";

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'shan',
  password: 'shan1996',
  reconnectPeriod: 1000,
  rejectUnauthorized: true
});

client.on('connect', function () {
  console.log('connect');
  client.subscribe('/topic', function (err) {
    console.log("Subscribe Err:", err);
  });
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(`${topic}: ${message.toString()}`)
})

client.on('error', function(err) {
  console.log("MQTT Err:", err.message);
});
