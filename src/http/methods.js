
import {post} from './request'
import api from './api'
let getShopManagerIdByToken = (params)=>{
    
    return post(api.getShopManagerIdByToken,params) 
}
let getCloudShopHomePageInfo = (params)=>{
    console.log("post",post)
    return post(api.getCloudShopHomePageInfo,params) 
}

export default{
    getShopManagerIdByToken,
    getCloudShopHomePageInfo
}