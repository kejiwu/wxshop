// pages/SaleService/salereturn/salereturn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderlist:[1],
    check: '../../../images/check_01.png',
    checked: '../../../images/check_02.png',
    select: false,
    all: 0,//总价
    selectArr: [
      { open: false, id: 0, price: 128.00, num: 1 },
      { open: false, id: 1, price: 128.0, num: 1 },
      { open: false, id: 2, price: 128.00, num: 1 }
    ],
    arr: [],//选则操作
    allchecked: false,
    arrall: [],
    arrlength: 0,
    count:Number
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  handleblur(e){
    var value = e.detail.value
    var index = e.currentTarget.dataset.index;//位置
    if(!value){
      value=1
    }
    this.data.selectArr[index].open=true
    this.data.selectArr[index].num = parseInt(value)
    
    this.setData({
      selectArr:this.data.selectArr
    })
    this.enter(e)
  },
  enter(e){
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;//位置
    var price = e.currentTarget.dataset.price;//价格
    var selectArr = this.data.selectArr
    var allchecked = this.data.allchecked
    this.data.all = Number(this.data.all)
    if (this.data.arr.indexOf(index) != -1) {
      this.data.all += price * this.data.selectArr[index].num //总价
    } else {
      this.data.arr.push(index)
      if (this.data.selectArr.length == this.data.arr.length) {//判断是否全部选中
        allchecked = true
      }
      selectArr[index].open = true
      this.data.all += price * this.data.selectArr[index].num //总价
    }
    var arrlength = this.data.arr.length
    var all = this.data.all
    console.log()
    this.setData({
      selectArr: selectArr,
      all: all,
      arrlength: arrlength,
      allchecked: allchecked
    });
  },
  //选中
  handle(e) {
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;//位置
    var price = e.currentTarget.dataset.price;//价格
    var selectArr = this.data.selectArr
    var allchecked = this.data.allchecked
    this.data.all = Number(this.data.all)
    if (this.data.arr.indexOf(index) != -1) {
      if (allchecked) {//判断是否取消全选
        allchecked = false
      }
      this.data.arr.splice(this.data.arr.indexOf(index), 1)
      selectArr[index].open = false
      this.data.all -= price * selectArr[index].num
    } else {
      this.data.arr.push(index)
      if (this.data.selectArr.length == this.data.arr.length) {//判断是否全部选中
        allchecked = true
      }
      selectArr[index].open = true
      this.data.all += price * selectArr[index].num//总价
    }
    var arrlength = this.data.arr.length
    var all = this.data.all
    console.log()
    this.setData({
      selectArr: selectArr,
      all: all,
      arrlength: arrlength,
      allchecked: allchecked
    });
  },
  //减
  cut(e) {
    var index = e.currentTarget.dataset.index;
    var selectArr = this.data.selectArr
    if (selectArr[index].num <= 1) {
      return false
    }
    selectArr[index].num -= 1

    var price = this.data.all + selectArr[index].price * (selectArr[index].num - 1) - selectArr[index].num * selectArr[index].price

    var all = price
    this.setData({
      selectArr: selectArr,
      all: all
    });

  },
  //加
  add(e) {
    var index = e.currentTarget.dataset.index;
    var selectArr = this.data.selectArr
    selectArr[index].num += 1
    selectArr[index].open=true
    this.data.arr.push(index)
    if (this.data.all == 0) {
      var price = selectArr[index].num * selectArr[index].price
    } else {
      var price = this.data.all - selectArr[index].price * (selectArr[index].num - 1) + selectArr[index].num * selectArr[index].price
    }
    var all = price
    this.setData({
      selectArr: selectArr,
      all: all
    });
  },
  //全选
  allselect(e) {
    var selectArr = this.data.selectArr
    var allchecked = this.data.allchecked
    var price
    allchecked = !allchecked

    var arrlength = allchecked ? selectArr.length : 0;
    for (var i = 0; i < selectArr.length; i++) {
      if (allchecked) {
        selectArr[i].open = true
        this.data.arr.push(i)
      } else {
        selectArr[i].open = false
        this.data.arr = []
      }

      if (selectArr[i].open === true) {
        this.data.arrall.push(selectArr[i].num * selectArr[i].price)
      } else {
        this.data.arrall = []
      }

    }
    if (this.data.arrall == '') {
      var all = '0.00'
    } else {
      var all = this.data.arrall.reduce(function (a, b) {
        return a + b
      })
    }

    this.setData({
      selectArr: selectArr,
      allchecked: allchecked,
      all: all,
      arrlength: arrlength
    });

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