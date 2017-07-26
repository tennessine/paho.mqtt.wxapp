// app.js

var Paho = require('./utils/paho-mqtt.js')
console.log(Paho)

App({
  subscribe: function(filter, subscribeOptions) {
    // 订阅
    var client = this.globalData.client;
    if (client && client.isConnected()) {
      return client.subscribe("test/topic", {
        qos: 1
      });
    }
    wx.showToast({
      title: '订阅失败',
      icon: 'success',
      duration: 2000
    })
  },
  publish: function(topic, message, qos = 0, retained = false) {
    // 发布
    var client = this.globalData.client;
    if (client && client.isConnected()) {
      var message = new Paho.Message(message);
      message.destinationName = topic;
      message.qos = qos;
      message.retained = retained;
      return client.send(message);
    }
    wx.showToast({
      title: '发送失败',
      icon: 'success',
      duration: 2000
    })
  },
  setOnMessageArrived: function(onMessageArrived) {
    if (typeof onMessageArrived === 'function') {
      this.globalData.onMessageArrived = onMessageArrived
    }
  },
  setOnConnectionLost: function(onConnectionLost) {
    if (typeof onConnectionLost === 'function') {
      this.globalData.onConnectionLost = onConnectionLost
    }
  },
  onLaunch: function() {
    var that = this
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var client = new Paho.Client('www.mengmeitong.com', 8883, "clientId");

    client.connect({
      useSSL: true,
      cleanSession: true,
      keepAliveInterval: 60,
      onSuccess: function() {
        console.log('connected');

        that.globalData.client = client

        client.onMessageArrived = function(msg) {
          if (typeof that.globalData.onMessageArrived === 'function') {
            return that.globalData.onMessageArrived(msg)
          }

          wx.showModal({
            title: msg.destinationName,
            content: msg.payloadString
          })
        }

        client.onConnectionLost = function(responseObject) {
          if (typeof that.globalData.onConnectionLost === 'function') {
            return that.globalData.onConnectionLost(responseObject)
          }
          if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
          }
        }
      }
    });
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      // 调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    client: null,
    onMessageArrived: null
  }
})