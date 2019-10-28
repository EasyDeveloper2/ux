
import {post} from './request'
import api from './api'
let getShopManagerIdByToken = (params)=>{
    
    return post(api.getShopManagerIdByToken,params) 
}
let getCloudShopHomePageInfo = (params)=>{
    return post(api.getCloudShopHomePageInfo,params) 
}
let getCloudProductDetail = (params)=>{
    return post(api.getCloudProductDetail,params) 
}

let shopManagerInfo = (params) => {
    return post(api.shopManagerInfo,params)
}

export default{
    getShopManagerIdByToken,
    getCloudShopHomePageInfo,
    shopManagerInfo,
    getCloudProductDetail
}