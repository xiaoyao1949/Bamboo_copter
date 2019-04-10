//index.js
//获取应用实例
const app = getApp()

Page({
    /**
   * 页面的初始数据
   */
  data: {
    my_travels: [{
      from_addr: "成都市武侯区",
      to_addr: "峨眉山市区解放广场",
      create_time: "2019-3-29",
      go_time: "09:30",
      go_date: "2019-4-7",
      is_driver: true,
      require: 0,
      is_grouped: true,
      tid: "xyz"
    }, {
      from_addr: "五台县县城",
      to_addr: "忻州市时代广场",
      create_time: "2019-3-11",
      go_date: "2019-4-25",
      go_time: "09:30",
      is_driver: false,
      require: 0,
      is_grouped: true,
      tid:"abc"
    }, {
      from_addr: "北京市东城区",
      to_addr: "赤峰市不知道县县城",
      create_time: "2019-4-29",
      go_date: "2019-5-9",
      go_time: "09:30",
      is_driver: true,
      require: 4,
      is_grouped: false,
      tid:"def"
    }, {
      from_addr: "西安市",
      to_addr: "延安红色革命基地",
      create_time: "2019-3-11",
      go_time: "09:30",
      go_date: "2019-4-25",
      is_driver: false,
      require: 2,
      is_grouped:false,
        tid: "ghi"
    }]
  },

  /* 
   *事件处理函数
   */

  //添加行程
  create_travel: function() {
    wx.showActionSheet({
      itemList: ["车找人","人找车",],
      success: function (res) {
        console.log(res.tapIndex)
        //导航到newtravel页面
        wx.navigateTo({
          url: '../newtravel/newtravel?type=' + res.tapIndex,
          success: function (res) {
            console.log('跳转到添加行程页面', res.tapIndex)
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  //查看我的一条具体的出行计划
  detail_my_travel: function(e){
    /*
    获取当前组件的index
    带着参数，导航到mytraveldetail页面
    */
    wx:wx.navigateTo({
      url: '../mytraveldetail/mytraveldetail?tid='+ e.currentTarget.dataset.tid,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //向服务器请求当前用户的所有未出行条目
  fu:function(){
    //onShow每次渲染时候调用，每次下拉刷新时候调用

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    请求访问用户信息
    请求访问用户电话号码
    lonin
    获取code
    获取openid sessionID
    把userInfo 放到全局变量中，包括openID,SessionID,头像URL，tel,昵称
    与服务器建立连接

    请求接口1{
        验证后，获取当前openid下的所有未出行travel（openid=openid,gotime>now(),status!=取消行程）
         把请求数据更新到this.data中。每个item包含的字段：
          from_addr: "成都市武侯区",
          to_addr: "峨眉山市区解放广场",
          create_time: "2019-3-29",
           go_time: "09:30",
          go_date: "2019-4-7",
          is_driver: true,
          require: 0,
          is_grouped: true
          travelID：xxx(不在视图层渲染，只用作向后台提交查询请求)
    }
     */
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
    //退出登录状态
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    /*访问接口1*/
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
      //分享给好友，群
  }
})