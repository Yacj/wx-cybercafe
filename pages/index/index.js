//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pagecur:'cybercafe',
    userInfo:false
  },
  NavChange(e) {
    this.setData({
      pagecur: e.currentTarget.dataset.cur
    })
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
    console.log(this.selectComponent('#my'))
  },
  getUserInfo: function(e) {
  }
})
