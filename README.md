# 使用方法

git clone https://github.com/tennessine/paho.mqtt.wxapp.git

执行mvn后会在target下生成paho-mqtt.js、paho-mqtt.min.js，然后在微信小程序里引入即可

# 直接下载
https://unpkg.com/paho.mqtt.wxapp@1.0.3/dist/paho-mqtt.js

# 通过npm安装

npm install --save paho.mqtt.wxapp

sample目录是我写的一个小程序连接MQTT broker的demo

# 注意事项
mosquitto和emqtt需要使用nginx反向代理，因为小程序不传递"Sec-WebSocket-Protocol mqtt" header, 如果你在emqtt console会看到这个header打印undefined
可以参考这篇文章 https://zhuanlan.zhihu.com/p/24823848 

# QQ群
679985050（我的）
221405150（别人的）
