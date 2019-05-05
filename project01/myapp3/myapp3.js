// pages/myapp3/myapp3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabValue: 0,

  },

  selecttab(e) {
    console.log(e.currentTarget.dataset.value);
    this.setData({ currentTabValue: e.currentTarget.dataset.value });


  },

  clicks2() {
    console.log();

    wx.navigateTo({
      url: '../myapp4/myapp4',
    });


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=caijing&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ caijing: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

    });

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=yule&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ yule: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

    });

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=junshi&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ junshi: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

    });

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=keji&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ keji: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

    });

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=shehui&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ shehui: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

    });

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=tiyu&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ tiyu: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

    });

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=guoji&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ guoji: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

    });

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=shishang&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ shishang: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

    });

    console.log("页面加载");

    var currentthis = this;

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=guonei&key=163a92d9a856062cacd39d3aa19131f6',

      header: { "content-type": "json" },

      success: function (r) {
        console.log(r.data);
        console.log(r.data.result.data);
        currentthis.setData({ guonei: r.data.result.data });
      },

      fail: function (e) {
        console.log(e);
      }

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