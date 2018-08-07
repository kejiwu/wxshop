// pages/red_packets/red_ackets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    currentTabsIndex: 0,
    index: 0,
    unusedList: [
      { tit: "1单红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "2单红包", price: "￥9.9", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "普通红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "1单红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用"}
    ],
    usedList: [
      { tit: "节日红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "2单红包", price: "￥9.9", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "普通红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "1单红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" }
    ],
    failureList: [
      { tit: "普通红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "2单红包", price: "￥9.9", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "普通红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" },
      { tit: "1单红包", price: "￥8.8", time: "2018.08.08-2018.09.09", content: "礼品卡以及秒杀商品不可使用" }
    ]
  },

  // 点击选项卡事件
  onTabsItemTap: function (e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      currentTabsIndex: index
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