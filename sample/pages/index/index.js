//index.js
//获取应用实例
var app = getApp()

app.setOnMessageArrived(function(msg) {
  console.log(msg.topic, msg.payloadString)
});

app.setOnConnectionLost(function(responseObject) {
  console.log(responseObject)
});

var cancel = (function() {
  var timer = setInterval(function() {
    if (app.globalData.client && app.globalData.client.isConnected()) {
      // 订阅
      app.subscribe("test/topic", {
        qos: 1
      });

      // 发布
      app.publish('test/topic', 'Hello World');
      cancel();
    }
  }, 100);

  return function() {
    clearTimeout(timer);
  }
})()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  // 事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
