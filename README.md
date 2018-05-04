# 使用方法

git clone https://github.com/tennessine/paho.mqtt.wxapp.git

执行mvn后会在target下生成paho-mqtt.js、paho-mqtt.min.js，然后在微信小程序里引入即可

# 直接下载
https://unpkg.com/paho-wxapp@1.0.3/target/paho-mqtt-min.js

https://unpkg.com/paho-wxapp@1.0.3/target/paho-mqtt.js

# 通过npm安装

npm install --save paho-wxapp

sample目录是我写的一个小程序连接MQTT broker的demo

# 在线文档
https://tennessine.github.io/paho.mqtt.wxapp/target/docs/

# 注意事项
mosquitto需要使用nginx反向代理，因为小程序不传递"Sec-WebSocket-Protocol mqtt" header, 可以参考这篇文章 https://zhuanlan.zhihu.com/p/24823848 

# 测试
https://www.mengmeitong.com/mqtt-client/

# 百度云测试服务器
host：miniprogram.mqtt.iot.bj.baidubce.com
port：8884
username：miniprogram/gekongfei
password：sgx+vSWVMhLS5asUlvXZG03vDTGO8McG+9IMwbVpL40=

# QQ群
679985050 (2k)

# 打赏
![合体](https://www.gekongfei.com/wp-content/uploads/2018/03/pay.png)
