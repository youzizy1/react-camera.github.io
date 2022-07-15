// 配置请求对象    
import axios from 'axios'   
export const baseUrl = "https://www.fastmock.site/mock/61dc0b0b924d225e00742e9519eb4e55/beers"   
// product 阶段  
// https://www.fastmock.site/mock/61dc0b0b924d225e00742e9519eb4e55/beers
// 使用设计模式  
const axiosInstance = axios.create({
    baseURL:baseUrl
})

// interceptors 拦截器   

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误')
    }
)

export { axiosInstance }