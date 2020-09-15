import Index from "@/views/index.vue";


// Nike邮件智能管理系统部分的路由配置
export default {

    path: "/NikeMail",
    component: Index,
    title:"Nike邮件智能管理系统",
    children: [
        {
          path: 'ReturnGoods',  
          component: () => import('../../views/MailManagement/NikeMail/ReturnGoods.vue'),
          meta: {
            title:"退货邮件处理功能"
        },
        },{
            path: 'Transshipment',  
            component: () => import('../../views/MailManagement/NikeMail/Transshipment.vue'),
            meta: {
                title:"转货邮件处理功能"
            },
        }
    ]
}