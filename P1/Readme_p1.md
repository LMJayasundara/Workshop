# Windows

## 1. Download and install MQTT broker locally
- ### Download mosquitto broker for windows
    ```
    https://mosquitto.org/download/
    ```
## 2. Set environment path for the broker
## 3. Check broker correctly installed or not
```
mosquitto -h
```
## 4. Start broker in verbose mode
- ### you can see console messages use the -v option
    ```
    mosquitto -v
    ```

## 5. Test MQTT communication

- ## Publisher
    ```
    mosquitto_pub -h localhost -t /topic -m "message"
    ```

- ## Subscriber

    - ### Subscribe for exact topic
        ```
        mosquitto_sub -h localhost -t /topic
        ```

    - ### Subscribe for many topics
        ```
        mosquitto_sub -h localhost -t /topic/#
        ```

## 6. Configuring MQTT Password
- ### Create password.txt file
    ```
    name:password
    ```
- ### Encrypt the password file
    ```
    mosquitto_passwd -U password.txt
    ```
- ### Edit the mosquitto.conf file
    ```
    listener 1883
    allow_anonymous false
    password_file C:\Users\"user_name"\mosquitto\password.txt
    ```