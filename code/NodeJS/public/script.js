var socket = io();

var red = document.getElementById('red');
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var temp = document.getElementById("temp");


function unblinkAll(){
    red.classList.add("unblink");
    green.classList.add("unblink");
    yellow.classList.add("unblink");
};

function blink_red() {
    unblinkAll();
    red.classList.remove("unblink");
};

function blink_green() {
    unblinkAll();
    green.classList.remove("unblink");
};

function blink_yellow() {
    unblinkAll();
    yellow.classList.remove("unblink");
};

socket.on('light', (data)=>{
    console.log(data);
    blink_red();
    if(data == 'red'){
        console.log();
        blink_red()
    }
    else if(data == "yellow"){
        blink_yellow();
    }
    else if(data == "green"){
        blink_green();
    }
    else{
        console.log('wrong data');
        unblinkAll();
    }
});

socket.on('temp', (data)=>{
    console.log(data);
    temp.innerHTML = `${data} °C`;
});