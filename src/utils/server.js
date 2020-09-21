import axios from 'axios'

// 创建一个新的axios实例
const _axios = axios.create({
  // 因为baseURL在不同的环境下不一样
  baseURL: "http://192.168.10.179:1888",
  timeout: 5000
})

// 设置请求拦截器
_axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么   
  // 给每次请求的header中都添加token
//   config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})


// 将axios导出
export default _axios