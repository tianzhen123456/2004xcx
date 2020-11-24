//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    datas:[]
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'

    }

  },

  data: {
    background: ['/images/discount-banner.jpg', '/images/draw-banner.jpg', '/images/nursing-banner.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    list :[],
    page:1,           //列表 页号
    pagesize:10,  //列表大小
  },

  /**
   * 页面上拉触底事件的处理函数
   */

  onReachBottom: function(){
    // console.log(123123);
    this.data.page++;
    this.getgoodsList();
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },






  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  onLoad: function () {
  //   // console.log(this)
  //   let _this = (this);
  //
  //   //发送网络请求
  //   wx.request({
  //     url: 'http://www.weixin.2004.com/api/goodsList', //仅为示例，并非真实的接口地址
  //     data: {
  //       x: 'xxx',
  //       y: 'yyy'
  //     },
  //     success: function (res) {
  //       console.log(res)
  //       _this.setData({
  //         datas: res.data.list
  //       })
  //     }
  //   })


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  //商品列表数据
  getgoodsList: function () {
    let _this = (this);

    //发送网络请求
    wx.request({
      url: 'https://2004tz.liyazhou.top/api/goodsList', //仅为示例，并非真实的接口地址
      data: {
        page: _this.data.page,
        size: _this.data.pagesize
      },
      header: {'content-type': 'application/json'},
      success(res) {
        console.log(res)

        let new_list = _this.data.list.concat(res.data.list)
        _this.setData({
          datas: new_list

        })
      }
    })
  },


  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


//跳转商品详情页面
   goodsDetail:function(e) {
    console.log(e);
    //获取goodsid 并跳转详情页面
    let goods_id = e.currentTarget.dataset.goodsid
    wx.navigateTo({
      url: "/pages/detail/detail?id="+goods_id
    })
      },

    //商品列表上拉触动函数
      onLoad: function(){
        this.getgoodsList();
      }
})









