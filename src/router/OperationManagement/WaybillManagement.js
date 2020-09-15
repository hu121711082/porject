import Index from "@/views/index.vue";

// 运单管理部分的路由配置
export default {

    path: "/WaybillManagement",
    // redirect: '/WaybillManagement/queryWaybill',
    component: Index,
    title:"运单管理",
    children: [
        {
          path: 'queryWaybill',    //查询运单
          component: () => import('../../views/OperationManagement/WaybillManagement/QueryWaybill.vue'),
          meta: {
            title:"查询运单"
        },
        },{
            path: 'addWaybill',    //新增运单
            component: () => import('../../views/OperationManagement/WaybillManagement/AddWaybill.vue'),
            meta: {
                title:"新增运单"
            },
        },{
            path: 'waybillImport',    //运单导入
            component: () => import('../../views/OperationManagement/WaybillManagement/WaybillImport.vue'),
            meta: {
                title:"运单导入"
            },
        },{
            path: 'detailedImport',   //运单明细导入
            component: () => import('../../views/OperationManagement/WaybillManagement/DetailedImport.vue'),
            meta: {
                title:"运单明细导入"
            },
        },{
            path: 'operationAudit',    //运审核
            component: () => import('../../views/OperationManagement/WaybillManagement/OperationAudit.vue'),
            meta: {
                title:"运审核"
            },
        }
    ]
}