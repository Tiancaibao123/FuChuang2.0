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
      let category="快递"
      let category1 = JSON.stringify(category)
      console.log(category)
      wx.navigateTo({
        url: '../handrecorddetail/handrecorddetail?category='+category1,
      })
  },
  onClose1() {
    this.setData({ show2: false });
  },
  click2(){
    let category="办公"
    let category1 = JSON.stringify(category)
    console.log(category)
   wx.navigateTo({
     url: '../handrecorddetail/handrecorddetail?category='+category1,
   })
  
},
click3(){
    let category="餐饮"
    let category1 = JSON.stringify(category)
    console.log(category)
   wx.navigateTo({
     url: '../handrecorddetail/handrecorddetail?category='+category1,
   })
  
},
click4(){
  let category="日用"
  let category1 = JSON.stringify(category)
  console.log(category)
 wx.navigateTo({
   url: '../handrecorddetail/handrecorddetail?category='+category1,
   })
  
},
click5(){
  let category="交通"
  let category1 = JSON.stringify(category)
  console.log(category)
 wx.navigateTo({
   url: '../handrecorddetail/handrecorddetail?category='+category1,
   })
  
},
click6(){
  let category="通讯"
  let category1 = JSON.stringify(category)
  console.log(category)
 wx.navigateTo({
   url: '../handrecorddetail/handrecorddetail?category='+category1,
   })
  
},
click7(){
  let category="服务"
  let category1 = JSON.stringify(category)
  console.log(category)
 wx.navigateTo({
   url: '../handrecorddetail/handrecorddetail?category='+category1,
   })
  
},
click8(){
  let category="数码电器"
  let category1 = JSON.stringify(category)
  console.log(category)
 wx.navigateTo({
   url: '../handrecorddetail/handrecorddetail?category='+category1,
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
