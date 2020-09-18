import axios from 'axios'
const Upaxios = axios.create({
    // 因为baseURL在不同的环境下不一样
    baseURL: 'http://192.168.10.166:8080',
    timeout: 600000
  })
  // 设置请求拦截器
  Upaxios.interceptors.request.use(config => {
    // 在发送请求之前做些什么   
    // 给每次请求的header中都添加token
  //   config.headers.Authorization = localStorage.getItem('token')
    return config
  }, error=> {
    // 对请求错误做些什么
    return Promise.reject(error);
})

export const upload = (data) => Upaxios.post('/upload', data)