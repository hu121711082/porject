import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'

// // 运作管理
// import WaybillManagement from './OperationManagement/WaybillManagement'
// import TransportationManagement from './OperationManagement/TransportationManagement'
// import CustomerManagement from './OperationManagement/CustomerManagement'

// //财务管理
// import Receivable from './financialManagement/Receivable'

//邮件管理系统
import NikeMail from './MailManagement/NikeMail'
import FinancialMail from './MailManagement/FinancialMail'


// Nike集成应用功能
import Twochildren from './NikeIntegratedApplication/Twochildren'



Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    hidden: true,
    redirect:'/index',

    children: [
      {
        path: 'index',
        component: () => import('../views/Index/index.vue')
      },{
        path: 'introduce/:type',
        name: 'introduce',
        component: () => import('../views/Index/introduce')
      }
    ],
    meta: {

      // 侧边栏渲染的路由及 title
      // OperationManagement: {
      //   id: 1,
      //   title: "运作管理",
      //   cont:[ WaybillManagement,TransportationManagement,CustomerManagement]
      // },
      // financialMangement: {
      //   id: 2,
      //   title: "财务管理",
      //   cont: [Receivable]
      // },
      MailManagement: {
        id: 3,
        title: "邮件管理系统",
        cont: [NikeMail,FinancialMail]
      },
      Twochildren
    }
    
  },
  {
    path: '/login',
    name: "login",
    component: () => import('../views/login.vue'),
    meta:{
      title: "登录",
      noAuth: true
    }
  },
  
  // //运作管理
  // WaybillManagement,   //运单管理
  // TransportationManagement,   //运输管理
  // CustomerManagement, //客服管理


  // //财务管理
  // Receivable,



  // 邮件管理
  NikeMail,   //Nike邮件智能管理系统
  FinancialMail,    //财务邮件管理系统

  // Nike集成应用功能
  Twochildren  //Nike集成应用功能里所有的二级路由
] 



const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // 判断要去的路由是否需要验证
//   // console.log(to.matched.some(route => route.meta.noAuth))
//   if (to.matched.some(route => route.meta.noAuth)) {
//     // 不需要登录
//     next()
//   } else {
//     // 添加jwt检测功能
//     // 先调用auth接口获取到是否已经登录，如果已经登录，则跳转到首页，如果未登录则跳转到登录
//     /* auth().then(res => {
//       console.log(res)
//       next('/')
//     }).catch(err => {
//       console.log(err.response.status) 
//       next('/login')
//     }) */

//     // 需要登录
//     // next('/login')

//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

export default router
