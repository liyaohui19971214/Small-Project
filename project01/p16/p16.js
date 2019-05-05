// pages/p16/p16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabValue: 0,
    videodatas:[],
    url:"",
    title:"",
    author:""
  },
  
  selecttab(e) 
  {
    console.log(e.currentTarget.dataset.value);
    this.setData({ currentTabValue: e.currentTarget.dataset.value });
  },

    clickitem(e)
    {
     
      console.log(e);
      let url = e.currentTarget.dataset.url;
      console.log("获取的url为：" + url);

      console.log(e);
      let title = e.currentTarget.dataset.title;
      console.log("获取的title为：" + title);

      console.log(e);
      let author = e.currentTarget.dataset.author;
      console.log("获取的author为：" + author);

      this.setData({ url: url, title, title, author: author});

      let videoPlay = wx.createVideoContext("ad", this);
      videoPlay.play();

 

    },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.request({
      url: 'http://liyaohui.natapp1.cc/text/video.json',

      success: (r) => {
        console.log(r.data);
        this.setData({ videodatas: r.data})

      },
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