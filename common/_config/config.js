
let environment = "dev"// 开发dev 测试qa 生产prod
let devUrl = "https://k2c-1.ikunchi.com"
let qaUrl = "https://k2c-3.ikunchi.com"
let prodUrl = "https://k2c-prod.ikunchi.com"

const baseUrl = () =>{
    if (environment === 'dev'){
        return devUrl
    }
    if(environment === 'qa'){
        return qaUrl
    }
    if(environment === 'prod'){
        return prodUrl
    }
}

export default{
    baseUrl:baseUrl(),
    version:1.0,
    tempToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0ODQiLCJ0YXJnZXRfbWVtYmVyX2lkIjoxOTU3OCwiQ0hBTk5FTCI6NCwib3Blbl9pZCI6Im9xVWw4dnpuR0tYS3lXSjNYNDN5TkdNNkNoRjQiLCJuaWNrX25hbWUiOiLljaHljaFyb3QiLCJ0eXBlIjozLCJpYXQiOjE1NzE5NzExMDV9.qQROEiTUKS980qVVJbnDHK5wCqHXw-00MglvnYXJRkU', //pc端测试用token
}