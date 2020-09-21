import axios from '@/utils/server'

// 退货邮件处理功能

//提交
export const Submit = (params) => axios.post('/email_zhuanhuo', params)

// //查活
// export const state = (params) => axios.post('/email_zhuanhuo',params)

// //关闭
// export const end = (params) => axios.post('/email_zhuanhuo',params)


// 查询
export const select = (params) => axios.post('/email_zhuanhuo',params)

