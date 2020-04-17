import {isIDCard} from "../../utils/util";

Page({
  data: {
    cardCur: 0,
    iShidden:true,
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
    iconList:[
      {
        id:1,
        img:'/assets/img/home-icon1.png',
        name:'扫码上机'
      },
      {
        id:2,
        img:'/assets/img/home-icon2.png',
        name:'机位预定'
      },
      {
        id:3,
        img:'/assets/img/home-icon3.png',
        name:'在线充值'
      },
      {
        id:4,
        img:'/assets/img/home-icon4.png',
        name:'远程下机'
      }
    ]
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  itemckcred(e){
    let index = e.currentTarget.dataset.index
    if(index === 1){
      wx.scanCode({
        success: (result)=>{
          console.log(result)
        },
        fail: ()=>{},
        complete: ()=>{}
      });
      return
    }
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })

  },
})