import axios from '@/utils/server'

//登录
export const login = (params) => axios.post('/posts', params)