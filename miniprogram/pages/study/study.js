// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList: [
      {
        id: 1,
        name: 'c++习题'
      },
      {
        id: 2,
        name: 'javaScript习题'
      }
    ]
  },

  log() {
    wx: wx.navigateTo({
      url: '',
    })
  },

  getProductList() {
    wx.showLoading({
      title: 'Still Loading...',
    })

    db.collection('Exercises').get().then(result => {
      console.log(result)
      wx.hideLoading()

      const data = result.data

    }).catch(err => {
      console.error(err)
      wx.hideLoading()
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