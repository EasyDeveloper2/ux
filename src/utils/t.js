const shareWeiXin = (title,summary)=>{
    this.$app.$def.share.share({
        shareType: object.shareType,
        title: object.title,
        summary: object.summary,
        imagePath: object.imagePath,
        targetUrl: object.targetUrl,
        platforms: ["WEIXIN"],
        success: object.success,
        fail: object.fail
      })
}

const shareWeiXinCircle= (object)=>{
    this.$app.$def.share.share({
        shareType: object.shareType,
        title: object.title,
        summary: object.summary,
        imagePath: object.imagePath,
        targetUrl: object.targetUrl,
        platforms: ["WEIXIN_CIRCLE"],
        success: object.success,
        fail: object.fail
      })
}

export {
    shareWeiXin,
    shareWeiXinCircle
}