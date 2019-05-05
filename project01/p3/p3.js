// pages/p3/p3.js
Page({

  /**
   * 页面的初始数据
   */  
  data: {
    swiperdatas: ["http://liyaohui.natapp1.cc/images/heying.jpg"],

    stuinfos: [{ "facepath": "../images/renwu01.png", "name": "李耀辉", "phoneimg": "../images/dianhua.png", "phonenum": "18351868992" }, 
               { "facepath": "../images/renwu02.png", "name": "陈宇涛", "phoneimg": "../images/dianhua.png", "phonenum": "15161505356" }, 
               { "facepath": "../images/renwu03.png", "name": "何鹏程", "phoneimg": "../images/dianhua.png", "phonenum": "15370497106" }, 
               { "facepath": "../images/renwu04.png", "name": "曹正", "phoneimg": "../images/dianhua.png", "phonenum": "18752042072" }, 
               { "facepath": "../images/renwu05.png", "name": "王梓宁", "phoneimg": "../images/dianhua.png", "phonenum": "13515287624" }, 
               { "facepath": "../images/renwu06.png", "name": "居义伟", "phoneimg": "../images/dianhua.png", "phonenum": "13337839803" }, 
               { "facepath": "../images/renwu07.png", "name": "吴训", "phoneimg": "../images/dianhua.png", "phonenum": "13062589466" }, 
               { "facepath": "../images/renwu08.png", "name": "陈添缘", "phoneimg": "../images/dianhua.png", "phonenum": "18860979129" },
               { "facepath": "../images/renwu09.png", "name": "李刘寅", "phoneimg": "../images/dianhua.png", "phonenum": "18951806749" },
               { "facepath": "../images/renwu10.png", "name": "冯凯越", "phoneimg": "../images/dianhua.png", "phonenum": "13218796101" },
               { "facepath": "../images/renwu11.png", "name": "冯吟秋", "phoneimg": "../images/dianhua.png", "phonenum": "18351868626" },
               ]
    
  },

    callphone: function (e) 
    {

    let phone = e.currentTarget.dataset.phone;
    console.log(typeof phone);
    phone = phone + "";
    // console.log(typeof phone);

    wx.makePhoneCall({
      phoneNumber: phone,
    })

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '通讯录',
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