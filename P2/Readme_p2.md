# Linux - WSL
## 1. Download and install MQTT broker locally
```
sudo apt update -y && sudo apt install mosquitto mosquitto-clients -y
```
## 2. Check broker status
```
mosquitto -h
```

## 3.Configuring MQTT Password
- ### Set Username and Password
    ```
    sudo mosquitto_passwd -c /etc/mosquitto/passwd name
    ```

## 4. Test MQTT communication
- ## Subscriber
    ```
    mosquitto_sub -h localhost -t /topic -u "name" -P "passwd"
    ```

- ## Publisher
    ```
    mosquitto_pub -h localhost -t /topic -m "message" -u "name" -P "passwd"
    ```

<code>&nbsp;</code>

# Linux - Raspberry PI
## 1. Download and install MQTT broker locally
```
sudo apt update -y && sudo apt install mosquitto mosquitto-clients -y
```
## 2. Check broker status
```
sudo systemctl status mosquitto
mosquitto -h

# If Mosquitto isn’t already active

sudo systemctl start mosquitto
```

## 3.Configuring MQTT Password
- ### Set Username and Password
    ```
    sudo mosquitto_passwd -c /etc/mosquitto/passwd name
    ```
- ### Config file
    ```
    sudo nano /etc/mosquitto/conf.d/default.conf

    port 1883
    allow_anonymous false
    password_file /etc/mosquitto/passwd
    ```
- ### Restart mosquitto
    ```
    sudo systemctl restart mosquitto
    ```

## 4. Test MQTT communication

- ## Publisher
    ```
    mosquitto_pub -h localhost -t /topic -m "message"
    ```

- ## Subscriber
    ```
    mosquitto_sub -h localhost -t /topic
    ```

<code>&nbsp;</code>

# Linux-WSL 2 Windows MQTT communication

- ## Publisher
    ```
    mosquitto_pub -h localhost -t /topic -m "message"
    ```

- ## Subscriber
    ```
    mosquitto_sub -h localhost -t /topic
    ```