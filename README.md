# 使用方法

git clone https://github.com/tennessine/paho.mqtt.wxapp.git

执行mvn后会在target下生成paho-mqtt.js、paho-mqtt.min.js，然后在微信小程序里引入即可

# 直接下载
https://unpkg.com/paho-wxapp@1.0.4/target/paho-mqtt-min.js

https://unpkg.com/paho-wxapp@1.0.4/target/paho-mqtt.js

# 通过npm安装

npm install --save paho-wxapp

sample目录是我写的一个小程序连接MQTT broker的demo

# 在线文档
https://tennessine.github.io/paho.mqtt.wxapp/target/docs/

# 注意事项

小程序只能用备案后的域名，并且不能带端口号，所以如果你服务器不是用的443端口或者用的是第三方的服务器，那就需要用nginx反向代理一下。

# 测试
https://www.mengmeitong.com/mqtt-client/

# 百度云测试服务器
host：miniprogram.mqtt.iot.bj.baidubce.com

port：8884

username：miniprogram/gekongfei

password：sgx+vSWVMhLS5asUlvXZG03vDTGO8McG+9IMwbVpL40=

# nginx反向代理
```
server {
  listen 443;
  server_name www.mengmeitong.com;
  ssl on;
  root /opt/nginx/wwwroot/laravel/public;
  index index.php index.html index.htm;
  ssl_certificate   cert/www.mengmeitong.com.crt;
  ssl_certificate_key  cert/www.mengmeitong.com.key;
  ssl_session_timeout 5m;
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;

  location = /mqtt {
    proxy_pass https://miniprogram.mqtt.iot.bj.baidubce.com:8884;
    proxy_redirect off;
    proxy_set_header Host https://miniprogram.mqtt.iot.bj.baidubce.com:8884;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
}
```

# QQ群
679985050 (2k)

# 扫码领红包
![扫码](https://www.gekongfei.com/wp-content/uploads/2018/09/WechatIMG11.png)
