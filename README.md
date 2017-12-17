# 目前只能连接hivemq，无法连接mosquitto、emqtt，我在chrome下是都可以连接的，有知道的人麻烦告诉我为什么，我证书用的是腾讯云免费证书。

# 使用方法

git clone https://github.com/tennessine/paho.mqtt.wxapp.git

执行mvn后会在target下生成paho-mqtt.js、paho-mqtt.min.js，然后在微信小程序里引入即可

# 通过npm安装

npm install --save paho.mqtt.wxapp

sample目录是我写的一个小程序连接MQTT broker的demo

