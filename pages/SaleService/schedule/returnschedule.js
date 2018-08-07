// pages/SaleService/schedule/returnschedule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    process: [
      { check: true, text: '客服受理' },
      { check: true, text: '寄回退货' },
      { check: true, text: '客服收货' }
      ],
    processover: true,
    text: '请选择取消原因',
    count: '',
    imageList: [],
    imgarr: [],
    itemList: ['材质问题', '尺寸问题', '无法正常使用', '商品破损、有污渍', '商品质量问题', '不好用或者穿着不舒服']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  handleselect(e) {//几星
    var index = e.currentTarget.dataset.index;
    var imglist = this.data.imglist.map(function (val, Index) {
      if (Index <= index) {
        return val = true
      } else {
        return false
      }
    })
    this.setData({
      imglist: imglist
    })
    // for (var i = 0; i < imglist.length;i++){
    //   if (index==i){
    //     this.data.imglist[index]=true
    //   }
    // }
  },
  handq(e) {//选择问题
    var itemIndex = e.currentTarget.dataset.index;
    var elelist = this.data.qlist.map((ele, index) => {
      if (index == itemIndex) {
        ele.check = !ele.check
      }
      return ele
    })
    this.setData({
      qlist: elelist
    })
  },
  inputvalue(e) {//获取评价字数
    var value = e.detail.value

    if (value && value.length > 290) {
      return false;
    }
    this.setData({
      count: value
    })
  },
  chooseImage() {//上传图片
    var that = this
    wx.chooseImage({
      count: 4, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.data.imgarr.push(res.tempFilePaths)
        that.setData({
          imageList: that.data.imgarr
        })
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src
    var index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: current,
      urls: this.data.imageList[index]
    })
  },
  handledel(e) {//删除图片
    var index = e.currentTarget.dataset.index;
    this.data.imgarr.splice(index, 1)
    this.setData({
      imageList: this.data.imgarr
    })
  },
  handleshow() {
    var that = this
    wx.showActionSheet({
      itemList: ['材质问题', '尺寸问题', '无法正常使用', '商品破损、有污渍', '商品质量问题', '不好用或者穿着不舒服'],
      itemColor: "#888888",
      success: function (res) {
        console.log(res)
        that.setData({
          text: that.data.itemList[res.tapIndex]
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
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