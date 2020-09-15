import axios from '@/utils/server'

// 退货邮件处理功能

//提交
export const Submit = (params) => axios.post('/posts', params)

//查活
export const state = (params) => axios.get('/posts',{params})

//关闭
export const end = (params) => axios.get('/posts',{params})
