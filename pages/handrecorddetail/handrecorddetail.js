// pages/handrecorddetail/handrecorddetail.js
var dateTimePicker = require('../../utils/dateTimer.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date:'',
        show1:false,
        showtime:false,
        activeNames:[],
        end_time: '',
        start_time: '',
        dateTimeArray: '', //时间数组
        startYear: 2000, //最小年份
        endYear: 2050, // 最大年份
        start_time_p: '', //显示的开始时间
        start_time_p: '', //显示的结束时间,
        userId:'1',
        money:'', // 消费金额
        shop:'', // 消费商家
        kind:'',   // 消费类型
        otherMsg:''  // 备注信息
    },
    onChange1(event) {
      this.setData({
        activeNames: event.detail,
      });
    },
    onDisplaytime() {
        this.setData({ showtime: true });
      },
      onClosetime() {
        this.setData({ showtime: false });
      },
      formatDatetime(date) {
        date = new Date(date);
        return `${date.getMonth()+1}/${date.getDate()}`;
      },
      onConfirmtime(event) {
        this.setData({
          showtime: false,
          date: this.formatDatetime(event.detail),
        });
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // 获取完整的年月日 时分秒，以及默认显示的数组
      var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
      this.setData({
        start_time: obj.dateTime,
        end_time: obj.dateTime,
        dateTimeArray: obj.dateTimeArray,
      });
    },
    /**
     * 选择时间
     * @param {*} e 
     */
    changeDateTime(e) {
      let dateTimeArray = this.data.dateTimeArray,
        {
          type,
          param
        } = e.currentTarget.dataset;
      this.setData({
        [type]: e.detail.value,
        [param]: dateTimeArray[0][e.detail.value[0]] + '-' + dateTimeArray[1][e.detail.value[1]] + '-' + dateTimeArray[2][e.detail.value[2]] + ' ' + dateTimeArray[3][e.detail.value[3]] + ':' + dateTimeArray[4][e.detail.value[4]] + ':' + dateTimeArray[5][e.detail.value[5]]
      });
    },
    changeDateTimeColumn(e) {
      var dateArr = this.data.dateTimeArray,
        {
          type
        } = e.currentTarget.dataset,
        arr = this.data[type];
      arr[e.detail.column] = e.detail.value;
      dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
      this.setData({
        dateTimeArray: dateArr,
        [type]: arr
      });
    },

    confirmEntry(){
      console.log(this.data.money)
      console.log(this.data.shop)
      console.log(this.data.otherMsg)
      wx.request({
        url: 'https://holer64006.wdom.net/wx/api/consumeInfo/edit',
        method:'POST',
        data:{
          id:0,
          userId:'this.data.userId',
          date:'this.data.date',
          money:'this.data.money',
          kind:'',
          shop:'this.data.shop'
        },
        header:{
          "Content-Type": 'application/x-www-form-urlencoded'
        },
        success:(res)=>{
          console.log(res)
        },

      })
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