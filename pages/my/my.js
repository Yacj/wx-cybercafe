// pages/my/my.js
import {UserService} from "../../utils/api/user/user";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: false,
        wxlogin: true, //是否隐藏登录弹窗,
        userCard: false,
        last_time: '',
        reg_time:'',
        money: 0,
        points: 0,
        order:[]
    },
    afterAuth(e) {
        this.setData({
            wxlogin: true,
            userInfo: true
        })
        this.getUserInfo()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getUserInfo()
    },
    getUserInfo() {
        let that = this
        let openid = wx.getStorageSync("openid")
        let data = {
            openid: openid
        }

        if (openid === '') {
            return
        }
        this.setData({
            userInfo: true,
            loadModal: true
        })
        UserService.getUser(data).then(res => {
            let code = res.code
            let data = res.data
            let endTime = new Date()
            let startTime = new Date(data.reg_time);
            let reg_time = Math.floor((endTime - startTime) / 1000 / 60 / 60 / 24)

            if (code === 200) {
                that.setData({
                    userCard: true,
                    last_time: data.last_time,
                    money: data.money,
                    points: data.points,
                    reg_time:reg_time,
                    loadModal: false
                })
            }
        })
    },
    goLogin() {
        this.setData({
            wxlogin: false
        })
    },
    gobindcard() {
        wx.navigateTo({
            url: '/pages/bindCard/bindCard'
        })
    },
    getTimeInterval(startTime, endTime) {
        let runTime = parseInt((endTime - startTime) / 1000);
        let year = Math.floor(runTime / 86400 / 365);
        runTime = runTime % (86400 * 365);
        let month = Math.floor(runTime / 86400 / 30);
        runTime = runTime % (86400 * 30);
        let day = Math.floor(runTime / 86400);
        runTime = runTime % 86400;
        let hour = Math.floor(runTime / 3600);
        runTime = runTime % 3600;
        let minute = Math.floor(runTime / 60);
        runTime = runTime % 60;
        let second = runTime;
        let str = '';
        if (year > 0) {
            str = year + '年';
        }
        if (year <= 0 && month > 0) {
            str = month + '月';
        }
        if (year <= 0 && month <= 0 && day > 0) {
            str = day + '天';
        }
        if (year <= 0 && month <= 0 && day <= 0 && hour > 0) {
            str = hour + '小时';
        }
        if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute > 0) {
            str = minute + '分钟';
        }
        if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute <= 0 && second > 0) {
            str += second + '秒';
        }
        str += '前';
        return str;
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("2")
        this.onLoad();
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 4
            })
        }
    },

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