// pages/myIndex/myIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    examList: [],
    index: 0
  },
  // 绑定选择器
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 进入测试
  goExam() {
    wx.navigateTo({
      url: `/pages/exam/exam?exam=${this.data.index}`,
    })
  },
  // 请求题库列表
  reqLab(){
    wx.request({
      url: 'http://localhost:2000/lab',
      method:'GET',
      success: res => {
        this.setData({
          examList: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.reqLab()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})