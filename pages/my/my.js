// pages/my/my.js
import {
    UserService
} from "../../utils/api/user/user";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: false,
        wxlogin: true, //是否隐藏登录弹窗,
        userCard: false,
        last_time: '',
        reg_time: '',
        money: 0,
        points: 0,
        order: [],
        moneyList:{},
        money_name:''
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
                    reg_time: reg_time,
                    loadModal: false
                })
            }
        })
        UserService.get_credit({
            limit: 3
        }).then(res => {
            that.setData({
                money_name1:res.data[0].name,
                money_money1:res.data[0].money,
                money_name2:res.data[1].name,
                money_money2:res.data[1].money,
                money_name3:res.data[2].name,
                money_money3:res.data[2].money
            })

        })
        UserService.get_consume({
            limit: 3
        }).then(res=>{
            console.log(res)
            that.setData({
                onlineTime_name1:res.data[0].name,
                onlineTime_onlineTime1:res.data[0].onlineTime,
                onlineTime_name2:res.data[1].name,
                onlineTime_onlineTime2:res.data[1].onlineTime,
                onlineTime_name3:res.data[2].name,
                onlineTime_onlineTime3:res.data[2].onlineTime
            })
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
    goRank() {
        wx.navigateTo({
            url: '/pages/user_rank/user_rank',
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
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