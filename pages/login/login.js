// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

    //点击登录   调用接口
    login: function(e){
      // console.log(12313122)
      // console.log(e)
      let userinfo = e.detail.userInfo
      wx.login({
        success(res) {
          // console.log(res)
          if(res.code){
  
    //将token存入本地  storage
            wx.setStorage({
              key:"token",
              data:res.code
            })
  
            wx.request({
              url: 'https://2004tz.liyazhou.top/Token/xcxLogin?code='+ res.code,
              method:'post',
              header: {'content-type': 'application/json'},
              data: {
                u: userinfo
                
              },

              success: function(res){
                // wx.switchTab({
                //   url: '/pages/index/index'
                // })
                console.log("获取token" + res.code)
                // console.log(res)
              }
            })
          }else{
            console.log('登录失败！' + res.errMsg)
          }
       }
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