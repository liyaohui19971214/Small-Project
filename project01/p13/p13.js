// pages/p13/p13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicdatas:[],
    name: "",
    author: "",
    img: "",
    url: ""
  },
  

  clickitem(e)
  {
    console.log(e);
    let url=e.currentTarget.dataset.url;
    console.log("获取的url为："+url);

    let name = e.currentTarget.dataset.name;
    console.log("获取的name为：" + name);

    let author = e.currentTarget.dataset.author;
    console.log("获取的author为：" + author);

    let img = e.currentTarget.dataset.img;
    console.log("获取的img为：" + img);

    this.setData({ url: url, img: img, author: author, name: name });

    let audioPlay = wx.createAudioContext("ad", this);
    audioPlay.play();
    
  //  wx.navigateTo({
  //    url: '../p13/p13?name='+name+"&author="+author+"&img="+img+"&url="+url,
  //  })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
 

  wx.request({
    url: 'http://liyaohui.natapp1.cc/text/music.json',

    success: (r)=>{
      console.log(r.data);
      this.setData({musicdatas:r.data})

    },
  })

    let url = options.url;
    let img = options.img;
    let author = options.author;
    let name = options.name;

    console.log(url + "," + img + "," + author + "," + name);
    // this.setData({ url: url, img: img, author: author, name: name });

   
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