import fetch from '@system.fetch'
import config from '../Common/config/config'

 let post = (api,params) => {
  return request(config.baseUrl+api,'post',params)
}

let request = (url,method,params={}) => {
  return new Promise((resolve,reject)=>{
    fetch.fetch({
        url:url,
        responseType:'json',
        data:params,
        header:{accessToken:config.tempToken,"Content-Type":"application/json;charset=utf-8"},
        method:method,
        success:res=>{
          resolve(res)
        },
        fail:err=>{
          reject(err)
        }
     })
   }) 
}

export {post}

