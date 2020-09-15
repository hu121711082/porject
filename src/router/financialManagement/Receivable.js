import Index from "@/views/index.vue";


// 运输应收应付 部分的路由配置
export default {

    path: "/Receivable",
    // redirect: '/WaybillManagement/queryWaybill',
    component: Index,
    title:"运输应收应付",
    children: [
        {
          path: 'ProjectSettlement',  //跟踪信息导入
          component: () => import('../../views/financialManagement/Receivable/ProjectSettlement.vue'),
          meta: {
            title:"项目结算汇总"
        },
        },{
            path: 'WaybillSettlementMonth',   //回单信息导入
            component: () => import('../../views/financialManagement/Receivable/WaybillSettlementMonth.vue'),
            meta: {
                title:"运单结算月份"
            },
        }
    ]
}