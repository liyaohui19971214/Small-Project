// pages/myapp2/myapp2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperdatas: [{ "image": "http://sxcr3v.natappfree.cc/images/6.jpg" }, 
      { "image": "http://sxcr3v.natappfree.cc/images/7.jpg" }, 
      { "image": "http://sxcr3v.natappfree.cc/images/4.jpg" }, 
      { "image": "http://sxcr3v.natappfree.cc/images/5.jpg" }],

    currentTabValue:0,

    scrolldatas: [{ "imgpath": "http://sxcr3v.natappfree.cc/images/14.png", "path": "头条","page":"../myapp3/myapp3"},
      { "imgpath": "http://sxcr3v.natappfree.cc/images/15.png", "path": "天气" },
      { "imgpath": "http://sxcr3v.natappfree.cc/images/16.png", "path": "音乐" }, 
      { "imgpath": "http://sxcr3v.natappfree.cc/images/17.png", "path": "购物" }, 
      { "imgpath": "http://sxcr3v.natappfree.cc/images/18.png", "path": "邮箱" }, 
      { "imgpath": "http://sxcr3v.natappfree.cc/images/19.png", "path": "微博" }, 
      { "imgpath": "http://sxcr3v.natappfree.cc/images/20.png", "path": "论坛" }, 
      { "imgpath": "http://sxcr3v.natappfree.cc/images/21.png", "path": "导航" }, 
      { "imgpath": "http://sxcr3v.natappfree.cc/images/22.png", "path": "更多" }],

    bottomviewdatas: [{ "imgpath": "http://sxcr3v.natappfree.cc/images/10.png", "path": "首页" },
      { "imgpath": "http://sxcr3v.natappfree.cc/images/11.png", "path": "热门" },
      { "imgpath": "http://sxcr3v.natappfree.cc/images/12.png", "path": "通知" },
      { "imgpath": "http://sxcr3v.natappfree.cc/images/13.png", "path": "我的" }, ]

  },
 
  selecttab(e)
  
  {
    console.log(e.currentTarget.dataset.value);
    this.setData({ currentTabValue: e.currentTarget.dataset.value });


  },

  clickone()
  {
    console.log();

    wx.navigateTo({
      url: '../myapp3/myapp3',
    });


  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({ "title": "欢迎进入", "icon": "none", "duration": 1000 })
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