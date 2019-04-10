// pages/blackboard/blackboard.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    all_travels: [{
      from_addr: "成都市武侯区",
      to_addr: "峨眉山市区解放广场",
      create_time: "2019-3-29",
      go_time: "09:30",
      go_date: "2019-4-7",
      is_driver: true,
      require: 0,
      is_grouped: true,
      tid:"abc"
    }, {
      from_addr: "五台县县城",
      to_addr: "忻州市时代广场",
      create_time: "2019-3-11",
      go_date: "2019-4-25",
      go_time: "09:30",
      is_driver: false,
      require: 0,
      is_grouped: true,
        tid: "def"
    }, {
      from_addr: "北京市东城区",
      to_addr: "赤峰市不知道县县城",
      create_time: "2019-4-29",
      go_date: "2019-5-9",
      go_time: "09:30",
      is_driver: true,
      require: 4,
      is_grouped: false,
        tid: "hij"
    }, {
      from_addr: "西安市",
      to_addr: "延安红色革命基地",
      create_time: "2019-3-11",
      go_time: "09:30",
      go_date: "2019-4-25",
      is_driver: false,
      require: 2,
      is_grouped: false,
        tid: "hnw"
    }],
    show_what: 'all',
    switcher_style:['active','','']
  },
  ///////////////////////////////////////////////////////////
  /**
   * 自定义方法————点击全部标签时，把data中all_all_travels列表渲染出来
   */
  all(e) {
    this.setData({
      show_what: 'all',
    })
    var index
    for (index = 0; index < this.data.all_travels.length; index++) {
      var tomodify = "all_travels[" + index + "].show"
      this.setData({
        [tomodify]: "block"
      })
    }
    this.setData({
      switcher_style :['active','','']
    })
  },
  /**
   * 自定义方法————点击车找人标签时，把data中all_all_travels列表部分渲染出来
   */
  czr() {
    this.setData({
      show_what: 'czr'
    })
    var index
    for (index = 0; index < this.data.all_travels.length; index++) {
      var tomodify = "all_travels[" + index + "].show"
      if (this.data.all_travels[index].is_driver) {
        this.setData({
          [tomodify]: "block"
        })
      } else {
        this.setData({
          [tomodify]: "none"
        })
      }
    }
    this.setData({
      switcher_style:['','active','']
    })
  },
  /**
   * 点击人找车标签时，将不希望展示的item隐藏
   */
  rzc() {
    this.setData({
      show_what: 'rzc'
    })
    var index
    for (index = 0; index < this.data.all_travels.length; index++) {
      var tomodify = "all_travels[" + index + "].show"
      if (this.data.all_travels[index].is_driver) {
        this.setData({
          [tomodify]: "none"
        })
      } else {
        this.setData({
          [tomodify]: "block"
        })
      }
    }
    this.setData({
      switcher_style:['','','active']
    })
  },
  //查看别人的某条出行计划详情
  detail_the_travel:function(e){
    console.log(e.currentTarget.dataset.tid)
    wx: wx.navigateTo({
      url: '../othertraveldetail/othertraveldetail?tid=' + e.currentTarget.dataset.tid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
///////////////////////////////////////////////////////////
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    验证身份
    用openID，sessionID，当前城市，获取所有未出行记录。出发地点是当前城市的前排
    all_travels列表中item所需要的属性:
      from_addr: "西安市",
      to_addr: "延安红色革命基地",
      create_time: "2019-3-11",
      go_time: "09:30",
      go_date: "2019-4-25",
      is_driver: false,
      require: 2,
      is_grouped: false,
      tid: "hnw"
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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    /**
     * 重新请求all_travels列表，重新渲染
     */
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