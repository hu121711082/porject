import Index from "@/views/index.vue";


// 运输管理部分的路由配置
export default {

    path: "/CustomerManagement",
    // redirect: '/WaybillManagement/queryWaybill',
    component: Index,
    title:"客服管理",
    children: [
        {
          path: 'TrackingInformationImport',  //跟踪信息导入
          component: () => import('../../views/OperationManagement/CustomerManagement/TrackingInformationImport.vue'),
          meta: {
            title:"运单分配承运商"
        },
        },{
            path: 'ReceiptInformationImport',   //回单信息导入
            component: () => import('../../views/OperationManagement/CustomerManagement/ReceiptInformationImport.vue'),
            meta: {
                title:"回单信息导入"
            },
        }
    ]
}