// components/auth/auth.js
import {UserService} from "../../utils/api/user/user";
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    options: {
        addGlobalClass: true
    },
    properties: {
        isHidden: {
            type: Boolean,
            value: true,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        logo: app.globalData.logo
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindGetUserInfo(e) {
            let userInfo = e.detail.userInfo
            if (!userInfo) {
                return
            }
            this.login()
        },
        close() {
            this.setData({
                isHidden: true,
            })
            this.triggerEvent('closeAuth')
        },
        login(option) {
            const that = this
            wx.login({
                success(res) {
                    let code = res.code
                    UserService.Get_OpenId({
                        code: code
                    }).then(res => {
                        let data = res.data
                        if (res.code !== 200) {
                            wx.showToast({
                                title: '授权失败，请重试'
                            })
                        }
                        wx.showToast({
                            title: '授权成功',
                            icon: 'success'
                        })
                        wx.setStorageSync("openid", data.openid)
                        that.triggerEvent('afterAuth', data.openid)
                    })
                }
            })
        }
    }
})
