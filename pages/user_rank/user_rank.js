import {
  UserService
} from "../../utils/api/user/user"

// pages/user_rank/user_rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabNav: ['月网费充值', '月上网时长排名'],
    rankList: [{
        nickname: '測試5',
        count: '5'
      },
      {
        nickname: '測試6',
        count: '6'
      }
    ],
    Two: {},
    One: {},
    Three: {},
    rankList: [],
    TabCur: 0,
    scrollLeft: 0
  },
  onShow: function () {
    this.getcreditData()
  },
  getcreditData() {
    let that = this;
    this.setData({
      loadModal: true
  })
    UserService.get_credit({
      limit: 10
    }).then(res => {
      let data = res.data
      that.data.rankList.push.apply(that.data.rankList, data);
      that.data.One = that.data.rankList.shift();
      that.data.Two = that.data.rankList.shift() || {};
      that.data.Three = that.data.rankList.shift() || {};
      that.setData({
        One: that.data.One,
        Two: that.data.Two,
        Three: that.data.Three,
        rankList: that.data.rankList,
        loadModal:false
      })
    })
  },
  tabSelect(e) {
    let id = e.currentTarget.dataset.id
    if (id === 0) {
      this.getcreditData()
    } else {
      this.getconsumeData()
    }
    this.setData({
      TabCur: id,
      rankList: [],
      Two: {},
      One: {},
      Three: {}
    })
  },
  getconsumeData() {
    let that = this;
    this.setData({
      loadModal: true
  })
    UserService.get_consume({
      limit: 10
    }).then(res => {
      let data = res.data
      that.data.rankList.push.apply(that.data.rankList, data);
      that.data.One = that.data.rankList.shift();
      that.data.Two = that.data.rankList.shift() || {};
      that.data.Three = that.data.rankList.shift() || {};
      that.setData({
        One: that.data.One,
        Two: that.data.Two,
        Three: that.data.Three,
        rankList: that.data.rankList,
        loadModal: false
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})