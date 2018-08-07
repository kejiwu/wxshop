var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var user = require('../../../services/user.js');
var app = getApp();

Page({
    data: {
        userInfo: {},
        hasMobile: '',
      list: [
        {
          url: '/pages/ucenter/order/order',
          imageurl: '../../../images/order.png',
          text: '我的订单'
        },
        {
          url: "/pages/SaleService/index/index",
          imageurl: '../../../images/order.png',
          text: '退换/售后'
        },
        {
          url: '/pages/ucenter/coupon/coupon',
          imageurl: '../../../images/coupon.png',
          text: '优惠券'
        },
        {
          url: "/pages/red_packets/red_packets",
          imageurl: '../../../images/hb.png',
          text: '红包'
        },
        {
          url: '',
          imageurl: '../../../images/integral.png',
          text: '积分中心'
        },
        {
          url: '../address/address',
          imageurl: '../../../images/address.png',
          text: '地址管理'
        },
        {
          url: '',
          imageurl: '../../../images/help.png',
          text: '帮助中心'
        },
        {
          url: '',
          imageurl: '../../../images/service.png',
          text: '在线客服'
        },
        {
          url: "/pages/aboutus/aboutus",
          imageurl: '../../../images/aboutus.png',
          text: '关于我们'
        }
      ]
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        console.log(app.globalData)
    },
    onReady: function () {

    },
    onShow: function () {

        let userInfo = wx.getStorageSync('userInfo');
        let token = wx.getStorageSync('token');

        // 页面显示
        if (userInfo && token) {
            app.globalData.userInfo = userInfo;
            app.globalData.token = token;
        }

        this.setData({
            userInfo: app.globalData.userInfo,
        });

    },
    onHide: function () {
        // 页面隐藏

    },
    onUnload: function () {
        // 页面关闭
    },
    bindGetUserInfo(e) {
      let userInfo = wx.getStorageSync('userInfo');
      let token = wx.getStorageSync('token');
      if (userInfo && token) {
        return;
      }
        if (e.detail.userInfo){
            //用户按了允许授权按钮
            user.loginByWeixin(e.detail).then(res => {
                this.setData({
                    userInfo: res.data.userInfo
                });
                app.globalData.userInfo = res.data.userInfo;
                app.globalData.token = res.data.token;
            }).catch((err) => {
                console.log(err)
            });
        } else {
            //用户按了拒绝按钮
            wx.showModal({
                title: '警告通知',
                content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
                success: function (res) {
                    if (res.confirm) {
                        wx.openSetting({
                            success: (res) => {
                                if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                                    user.loginByWeixin(e.detail).then(res => {
                                        this.setData({
                                            userInfo: res.data.userInfo
                                        });
                                        app.globalData.userInfo = res.data.userInfo;
                                        app.globalData.token = res.data.token;
                                    }).catch((err) => {
                                        console.log(err)
                                    });
                                }
                            }
                        })
                    }
                }
            });
        }
    },
    exitLogin: function () {
        wx.showModal({
            title: '',
            confirmColor: '#b4282d',
            content: '退出登录？',
            success: function (res) {
                if (res.confirm) {
                    wx.removeStorageSync('token');
                    wx.removeStorageSync('userInfo');
                    wx.switchTab({
                        url: '/pages/index/index'
                    });
                }
            }
        })

    }
})