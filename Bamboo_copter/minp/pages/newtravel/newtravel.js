// pages/newtravel/newtravel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    hidemore: false,
    ack: false,
    from_addr: ['您从哪儿出发', '', ''],
    from_desc: "",
    to_addr: ['您要到哪儿去', '', ''],
    to_desc: "",
    go_time: ['何时启程', ''],
    multiArray: [],//picker的内容
    multiIndex: [0, 0], //picker的内容索引
    r_index:1,
    require: ['捎东西', '1人', '2人', '3人', '4人', '5人', '6人'],
    phone:"13228189253",//这里应该从用户信息读取,onLunch中获取
    placeholder_phone:'',
    comment:''
  },

  ///////////////////////////////////////////////////////////////////
  //  自定义方法
  //
  //点击更多选项
  seemore: function () {
    this.setData({
      hidemore: true
    })
  },
  //勾选同意用户协议
  checkboxChange: function () {
    var tmp = this.data.ack
    this.setData({
      ack: !tmp
    })
    // console.log("当前ACK",this.data.ack)
  },
  //点击“发布行程”，提交表单
  formSubmit(e) {
    var that = this
    //1.检查必填项，选填项，更多项
    //2.向服务器提交请求
    wx.showModal({
      title: '提示',
      content: '添加成功',
      showCancel:false,
      success(res) { 
        that.go_back_to_index()
      }
    })
  },
  //点击“返回首页”，导航至首页
  go_back_to_index(e) {
    console.log('返回了')
    wx.reLaunch({
      url: '../index/index',
    })
  },
  //弹出免责声明
  show_me_declare(e) {
    console.log("弹出免责声明")
  },
  //点击出发地点，弹出picker
  bindRegionChange_from(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      from_addr: e.detail.value
    })
  },
  //点击目的地点，弹出picker
  bindRegionChange_to(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      to_addr: e.detail.value
    })
  },
  //修改出发地描述
  from_desc_change(e) {
    this.data.from_desc = e.detail.value
  },
  //修改目的地描述
  to_desc_change(e) {
    this.data.to_desc = e.detail.value
  },
  //修改出发时间，弹出pickder
  pickerTap: function () {
    console.log('pickerTap is RUNNING');
    var date = new Date();

    var monthDay = ['今天', '明天'];
    var hours = [];

    // 月-日
    for (var i = 2; i <= 28; i++) {
      var date1 = new Date(date);
      date1.setDate(date.getDate() + i);
      var md = (date1.getMonth() + 1) + "月" + date1.getDate() + "日";
      monthDay.push(md);
    }
    // 时
    var currentHours = date.getHours();
    for (var i = currentHours; i < 24; i++) {
      hours.push(i + "时");
    }

    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiArray[0] = monthDay;
    data.multiArray[1] = hours;

    this.setData(data);
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('bindMultiPickerColumnChange is RUNNING');
    var date = new Date();
    var currentHours = date.getHours();

    var hours = [];

    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };

    // 把选择的对应值赋值给 multiIndex
    data.multiIndex[e.detail.column] = e.detail.value;

    // 然后再判断当前改变的是哪一列
    //如果是 “月-日” 这一列改变了
    if (e.detail.column === 0) {
      // 选中了今天
      if (e.detail.value === 0) {
        //生成部分小时列表
        for (var i = currentHours; i < 24; i++)
          hours.push(i + '时');

      } else {
        //生成全部24小时
        for (var i = 0; i < 24; i++)
          hours.push(i + '时');
      }
      //把 “小时” 列设置为当前小时
      data.multiArray[1] = hours;
      data.multiIndex[1] = 0;
    }
    this.setData(data);
  },
  //改变人数/座位数
  change_require(e) {
    this.setData({
      r_index: e.detail.value
    });
  },
  //改变联系手机号
  change_phone(e){
    if (!(/^1[34578]\d{9}$/.test(e.detail.value))){
      this.setData({
        phone:"",
        placeholder_phone:"请输入正确的手机号"
      })
    }else if(e.detail.value!=this.data.phone){
      //设置了新的手机号码
      this.setData({
        phone: e.detail.value,
        placeholder_phone: ""
      })
      //在本地存储中记录这个电话
    }
  },
  //改变说明
  change_comment(e){
    this.setData({
      comment:e.detail.value
    })
    console.log(this.data.comment)
  },
  ///////////////////////////////////////////////////////////////////
  //    生命周期函数
  //
  //监听页面加载，获取上一页传递过来的参数：data中的type初始化为车找人/人找车
  onLoad: function (options) {
    if (options.type == 0) {
      this.setData({
        type: "车找人"
      })
    } else {
      this.setData({
        type: "人找车"
      })
    }
  },
  //--监听页面初次渲染完成
  onReady: function () {
    this.pickerTap()
  },

  //--监听页面显示
  onShow: function () {
  },

  //--监听页面隐藏
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  //--监听用户下拉动作
  onPullDownRefresh: function () {

  },

  //--页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  //--用户点击右上角分享
  onShareAppMessage: function () {

  }
})