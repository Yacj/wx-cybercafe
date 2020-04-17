Component({
  options: {
    addGlobalClass: true
  },
  data: {
    selected: 2,
    color: "#342C2A ",
    selectedColor: "#E9AA70",
    fontWeight: 'bold',
    "list": [{
      pagePath: "/pages/mall/mall",
      iconPath: "/assets/img/jifenshangcheng.png",
      selectedIconPath: "/assets/img/jifenshangcheng-1.png",
      text: "商城",
      isSpecial: false
    },
    {
      pagePath: "/pages/activity/activity",
      iconPath: "/assets/img/huodong.png",
      selectedIconPath: "/assets/img/huodong-1.png",
      text: "活动",
      isSpecial: false
    },
    {
      pagePath: "/pages/cybercafe/cybercafe",
      iconPath: "/assets/img/shayu.png",
      selectedIconPath: "/assets/img/shayu.png",
      isSpecial: true
    },
    {
      pagePath: "/pages/kf/kf",
      iconPath: "/assets/img/kefu.png",
      selectedIconPath: "/assets/img/kefu-1.png",
      text: "客服",
      isSpecial: false
    },
    {
      pagePath: "/pages/my/my",
      iconPath: "/assets/img/wode.png",
      selectedIconPath: "/assets/img/wode-1.png",
      text: "我的",
      isSpecial: false
    }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
