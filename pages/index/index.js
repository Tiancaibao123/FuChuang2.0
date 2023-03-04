// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    cishu:"1000",
    active: 'home',
    show:false,
    show1: false,
    show2: false,
    date:'',
    showtime:false,
    activeNames: [],
    payment:"200.00"

  },
  onChange1(event) {
    this.setData({ active: event.detail });
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
  showPopup1() {
    this.setData({ show1: true });
  },

  onClose() {
    this.setData({ show1: false });
  },
  click1(){
      var category="快递"
      console.log(category)
      wx.navigateTo({
        url: '../handrecorddetail/handrecorddetail',
      })
  },
  onClose1() {
    this.setData({ show2: false });
  },
  click2(){
    var category="消费种类：办公"
    console.log(category)
   wx.navigateTo({
     url: '../handrecord/handrecord',
   })
  
},
click3(){
    var category="消费种类：餐饮"
    console.log(category)
   wx.navigateTo({
     url: '../handrecord/handrecord',
   })
  
},
click4(){
    var category="消费种类：日用"
    console.log(category)
   wx.navigateTo({
     url: '../handrecord/handrecord',
   })
  
},
click5(){
    var category="消费种类：交通"
    console.log(category)
   wx.navigateTo({
     url: '../handrecord/handrecord',
   })
  
},
click6(){
    var category="消费种类：通讯"
    console.log(category)
   wx.navigateTo({
     url: '../handrecord/handrecord',
   })
  
},
click7(){
    var category="消费种类：服务"
    console.log(category)
   wx.navigateTo({
     url: '../handrecord/handrecord',
   })
  
},
click8(){
    var category="消费种类：数码电器"
    console.log(category)
   wx.navigateTo({
     url: '../handrecord/handrecord',
   })

   
  
},
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  
  
    
  
})
