// pages/bindCard/bindCard.js
import {UserService} from "../../utils/api/user/user";
import {isIDCard, isPhone} from "../../utils/util";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        errorText: '',
        show: 0,
        popErrorMsg: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    formSubmit(e) {
        let value = e.detail.value
        if (!isIDCard(value.userId) || value.userId === '') {
            this.setData({
                errorText: '身份证号为空，或者格式错误',
                popErrorMsg: true
            })
            this.ohShitFadeOut()
            return
        }
        if (!isPhone(value.phone) || value.phone === '') {
            this.setData({
                errorText: '手机号码为空，或者格式错误',
                popErrorMsg: true
            })
            this.ohShitFadeOut()
            return;
        }
        if (value.password === '') {
            this.setData({
                errorText: '密码不能为空',
                popErrorMsg: true
            })
            this.ohShitFadeOut()
            return;
        }
        let openid = wx.getStorageSync("openid")
        let data = {
            uid: value.userId,
            password: value.password,
            phone: value.phone,
            openid: openid
        }
        UserService.Save_User(data).then(res => {
            let code = res.code;
            if (code !== 200) {
                wx.showModal({
                    title: res.data.error
                })
                return
            }
            wx.showToast({
                icon: 'success',
                title: '绑定成功'
            })
            wx.setStorageSync("uid",res.data.user_id);
            wx.setStorageSync("phone",res.data.phone)
            wx.navigateBack({
                delta: 1
            })
        })
    },
    ohShitFadeOut() {
        let that = this
        setTimeout(function () {
            that.setData({
                popErrorMsg: false
            })
        }, 2000)
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