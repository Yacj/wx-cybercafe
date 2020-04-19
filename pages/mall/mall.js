// pages/mall/mall.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList: [{
            id: 0,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
        }, {
            id: 1,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
        }, {
            id: 2,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
        }, {
            id: 3,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        }, {
            id: 4,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
        }, {
            id: 5,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
        }, {
            id: 6,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
        }],
        TabCur: 0,
        mall_list:[
            {
                img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                name:'荣耀1',
                number:'23'
            },
            {
                img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                name:'荣耀2',
                number:'23'
            },
            {
                img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                name:'荣耀3',
                number:'23'
            }
        ],
        TabList:['虚拟物品','实物物品']
    },
    tabSelect(e) {
        this.setData({
            TabCur: e.currentTarget.dataset.id,
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
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
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