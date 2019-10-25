
import {post} from './request'
import api from './api'
let getShopManagerIdByToken = (params)=>{
    
    return post(api.getShopManagerIdByToken,params) 
}
let getCloudShopHomePageInfo = (params)=>{
    return post(api.getCloudShopHomePageInfo,params) 
}

export default{
    getShopManagerIdByToken,
    getCloudShopHomePageInfo
}