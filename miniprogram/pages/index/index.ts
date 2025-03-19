// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  methods: {
    onLoad: function(options) {
      // 页面创建时执行
      console.log('onLoad', app.globalData)
    },
    onShow: function() {
      // 页面出现在前台时执行
      console.log('onShow')
    },
    onReady: function() {
      // 页面首次渲染完毕时执行
      console.log('onReady')
    },
    onHide: function() {
      // 页面从前台变为后台时执行
      console.log('onHide')
    },
    onUnload: function() {
      // 页面销毁时执行
      console.log('onUnload')
    },
    onPullDownRefresh: function() {
      // 触发下拉刷新时执行
      console.log('onPullDownRefresh')
    },
    onReachBottom: function() {
      // 页面触底时执行
      console.log('onReachBottom')
    },
    onShareAppMessage: function () {
      // 页面被用户分享时执行
      console.log('onShareAppMessage')
    },
    onPageScroll: function() {
      // 页面滚动时执行
      console.log('onPageScroll')
    },
    onResize: function() {
      // 页面尺寸变化时执行
      console.log('onResize')
    },
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs',
      })
    },
    onChooseAvatar(e: any) {
      const { avatarUrl } = e.detail
      const { nickName } = this.data.userInfo
      this.setData({
        "userInfo.avatarUrl": avatarUrl,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    onInputChange(e: any) {
      const nickName = e.detail.value
      const { avatarUrl } = this.data.userInfo
      this.setData({
        "userInfo.nickName": nickName,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    getUserProfile() {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
  },
})
