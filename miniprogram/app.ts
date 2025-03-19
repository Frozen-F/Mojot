// app.ts
App<IAppOption>({
  globalData: {
    text: "sds"
  },
  onLaunch() {     // 小程序启动之后出发
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
  // onShow (options) {
  //   console.log('onShow', options)
  //   // Do something when show.
  // },
  // onHide () {
  //   // Do something when hide.
  // },
  // onError (msg) {
  //   console.log(msg)
  // },
})