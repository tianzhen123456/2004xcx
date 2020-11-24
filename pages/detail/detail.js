// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
    isLike: true,
    indicatorDots: false, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000,
  },
  //预览图片
  previewImage: function (e) {
    console.log(e);
    var current = e.target.dataset.src;
    // console.log(current)
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.detail.goods_imgs // 需要预览的图片http链接列表
    })
  },


  /**
   * 生命周期函数 -- 监听页面加载
   */
  //商品详情数据加载
  onLoad: function (options) {
   //  console.log(11111)
   // console.log(options)
    let _this = (this);
    let goods_id =options.id;

    //发送网络请求
    wx.request({
      url: 'https://2004tz.liyazhou.top/api/goods?id='+goods_id, //仅为示例，并非真实的接口地址
      header: {'content-type': 'application/json'},
      success(res) {
        // console.log(res)
        _this.setData({
          detail:res.data
        })
      }
    })
  },

//跳转购物车页面
  addCar:function(e) {
    console.log(e);
    //获取goodsid 并跳转详情页面
     let goods_id = e.currentTarget.dataset.goodsid
    wx.switchTab({
      url: `/pages/cart/cart?goods_id=${goods_id}`
    })
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