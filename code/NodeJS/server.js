var express = require('express');
var app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.set('port', (process.env.PORT || 8080));

var rand = require("random-nodejs");

// MQTT
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

client.on('error', function(err) {
    console.log("MQTT Err:", err.message);
});

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a new client connected');

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(`${topic}: ${message.toString()}`);
    socket.emit('light', message.toString());
  });

  setInterval(() => {
    socket.emit('temp', rand.random(100, 2));
  }, 1000);
});


server.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on port: ' + app.get('port')); }
});