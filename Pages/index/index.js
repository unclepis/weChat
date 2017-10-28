// Pages/index/index.js
var isInit = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: 'world',
    color: 'window'
  },
  /**
   * 点击欢迎文字的回调事件
   */
  click: function () {
    if (isInit) {
      this.data = {
        userName: 'uncle_pis',
        color: 'window-red'
      };
      isInit = false;
    } else {
      this.data = {
        userName: 'World',
        color: 'window'
      };
      isInit = true;
    }
    this.setData({
      userName: this.data.userName,
      color: this.data.color
    });
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