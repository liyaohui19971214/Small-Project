/*  */// pages/p10/p10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义城市
    cityName:"",

    //当天的天气
    currentWeather:{},

    //未来天气
    afterWeather:[],

     messagedatas: [],

    skweather:[],
  
    weather01:"",
    weather02: "",
    weather03: "",
    weather04: "",
    weather05: "",
    weather06: "",
    weather07: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  inputval(e){
    console.log(e);

    let cityName =e.detail.value;

    console.log("获取城市的名称为:"+cityName);

    this.setData({cityName:cityName});

  },

  searchWeatherInfo(e){
    console.log("点击");

    
    let weather01 = this.data.weather01;
    let weather02 = this.data.weather02;
    let weather03 = this.data.weather03;
    let weather04 = this.data.weather04;
    let weather05 = this.data.weather05;
    let weather06 = this.data.weather06;
    let weather07 = this.data.weather07;
    let name=this.data.cityName;
    console.log("点击icon获取的城市名称为:"+name);

    let url = "http://v.juhe.cn/weather/index?format=2&cityname="+encodeURI(name)+"&key=cd61bdd9253c73e1cf08cc5b13474ce8";

    console.log(url);

    wx.request({
     url:url,
      
     success: (r)=> {
       console.log(r.data);

       console.log(r.data.result.future[0].weather);

       
       this.setData({ currentWeather: r.data.result.future[0], skweather: r.data.result, todayweather: r.data.result,
         weather01: r.data.result.future[0].weather,
         weather02: r.data.result.future[1].weather,
         weather03: r.data.result.future[2].weather,
         weather04: r.data.result.future[3].weather,
         weather05: r.data.result.future[4].weather,
         weather06: r.data.result.future[5].weather,
         weather07: r.data.result.future[6].weather
       });

       //设置未来天气
       this.setData({afterWeather:r.data.result.future});


       },
   });
    
    if (weather01 == "晴") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/qing.png" })
    }
    if (weather01 == "多云转晴") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather01 == "晴转多云") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather01 == "阴") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/yin.png" })
    }
    if (weather01 == "阴转多云") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather01 == "多云转阴") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather01 == "多云") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/duoyun.png" })
    }
    if (weather01 == "多云转小雨") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather01 == "小雨") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather01 == "中雨") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather01 == "大雨") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather01 == "暴雨") {
      this.setData({ img1: "http://liyaohui.natapp1.cc/images/yu.png" })
    }


    if (weather02 == "晴") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/qing.png" })
    }
    if (weather02 == "多云转晴") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather02 == "晴转多云") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather02 == "阴") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/yin.png" })
    }
    if (weather02 == "阴转多云") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather02 == "多云转阴") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather02 == "多云") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/duoyun.png" })
    }
    if (weather02 == "多云转小雨") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather02 == "小雨") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather02 == "中雨") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather02 == "大雨") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather02 == "暴雨") {
      this.setData({ img2: "http://liyaohui.natapp1.cc/images/yu.png" })
    }


    if (weather03 == "晴") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/qing.png" })
    }
    if (weather03 == "多云转晴") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather03 == "晴转多云") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather03 == "阴") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/yin.png" })
    }
    if (weather03 == "阴转多云") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather03 == "多云转阴") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather03 == "多云") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/duoyun.png" })
    }
    if (weather03 == "多云转小雨") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather03 == "小雨") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather03 == "中雨") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather03 == "大雨") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather03 == "暴雨") {
      this.setData({ img3: "http://liyaohui.natapp1.cc/images/yu.png" })
    }


    if (weather04 == "晴") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/qing.png" })
    }
    if (weather04 == "多云转晴") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather04 == "晴转多云") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather04 == "阴") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/yin.png" })
    }
    if (weather04 == "阴转多云") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather04 == "多云转阴") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather04 == "多云") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/duoyun.png" })
    }
    if (weather04 == "多云转小雨") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather04 == "小雨") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather04 == "中雨") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather04 == "大雨") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather04 == "暴雨") {
      this.setData({ img4: "http://liyaohui.natapp1.cc/images/yu.png" })
    }


    if (weather05 == "晴") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/qing.png" })
    }
    if (weather05 == "多云转晴") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather05 == "晴转多云") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather05 == "阴") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/yin.png" })
    }
    if (weather05 == "阴转多云") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather05 == "多云转阴") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather05 == "多云") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/duoyun.png" })
    }
    if (weather05 == "多云转小雨") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather05 == "小雨") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather05 == "中雨") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather05 == "大雨") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather05 == "暴雨") {
      this.setData({ img5: "http://liyaohui.natapp1.cc/images/yu.png" })
    }



    if (weather06 == "晴") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/qing.png" })
    }
    if (weather06 == "多云转晴") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather06 == "晴转多云") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather06 == "阴") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/yin.png" })
    }
    if (weather06 == "阴转多云") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather06 == "多云转阴") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather06 == "多云") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/duoyun.png" })
    }
    if (weather06 == "多云转小雨") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather06 == "小雨") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather06 == "中雨") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather06 == "大雨") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather06 == "暴雨") {
      this.setData({ img6: "http://liyaohui.natapp1.cc/images/yu.png" })
    }



    if (weather07 == "晴") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/qing.png" })
    }
    if (weather07 == "多云转晴") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather07 == "晴转多云") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/duoyunzhuanqing.png" })
    }
    if (weather07 == "阴") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/yin.png" })
    }
    if (weather07 == "阴转多云") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather07 == "多云转阴") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/duoyunzhuanyin.png" })
    }
    if (weather07 == "多云") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/duoyun.png" })
    }
    if (weather07 == "多云转小雨") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather07 == "小雨") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather07 == "中雨") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather07 == "大雨") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
    if (weather07 == "暴雨") {
      this.setData({ img7: "http://liyaohui.natapp1.cc/images/yu.png" })
    }
      
      
      
    
    
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