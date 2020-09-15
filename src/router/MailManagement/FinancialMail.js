import Index from "@/views/index.vue";


// Nike邮件智能管理系统部分的路由配置
export default {

    path: "/FinancialMail",
    component: Index,
    title:"财务邮件管理系统",
    children: [
        {
          path: 'FinancialYi',  
          component: () => import('../../views/MailManagement/FinancialMail/FinancialYi.vue'),
          meta: {
            title:"财务邮件处理一"
            }
        }
    ]
}