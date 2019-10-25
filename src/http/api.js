export default {
    wxLogin: '/kshop-member-server/member/cloud/login/app/', // 微信认证登录
    getShopManagerIdByToken: '/kshop-member-server/member/cloud/getShopManagerIdByToken/', //根据token获取店长ID
    shopManagerInfo: '/kshop-member-server/get/shopManagerInfo/id/', //用户信息
    getSmsCode: '/kshop-member-server/member/cloud/send/code/', // 获取验证码
    bindPhone: '/kshop-member-server/member/cloud/bind/phone/', // 绑定手机号
  
    getProdNamesByKeyword: '/kshop-channel-server/ka/getProdNamesByKeyword/', //搜索框自动提醒
    getProdListByKeyword: '/kshop-channel-server/ka/getProdListByKeyword/', //根据关键字查询商品列表
  
    getCloudProductDetail: '/kshop-channel-server/product/getCloudProductDetail/', //商品详情
    shareToFriend: '/kshop-channel-server/channel/cloud/share/friend/', //分享给朋友
    faceShare: '/kshop-channel-server/channel/cloud/faceShare/', //面对面分享
    shareCircle: '/kshop-channel-server/channel/cloud/share/circle/', //分享朋友圈
  
    getCloudShopHomePageInfo: '/kshop-channel-server/ka/getCloudShopHomePageInfo/', //首页
  
    ShopManagerInfo: '/kshop-member-server/findShopManagerInfoById/', //掌柜中心
    orderCommissionList: '/kshop-checkout-server/cloudShop/orderCommissionList/', //销售订单列表
    findShopManagerCommissionRecordList: '/kshop-member-server/findShopManagerCommissionRecordList/', //佣金列表
  }