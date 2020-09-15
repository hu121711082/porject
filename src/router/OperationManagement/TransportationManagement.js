import Index from "@/views/index.vue";


// 运输管理部分的路由配置
export default {

    path: "/TransportationManagement",
    // redirect: '/WaybillManagement/queryWaybill',
    component: Index,
    title:"运输管理",
    children: [
        {
          path: 'WaybillAssignmentCarrier',  //运单分配承运商
          component: () => import('../../views/OperationManagement/TransportationManagement/WaybillAssignmentCarrier.vue'),
          meta: {
            title:"运单分配承运商"
        },
        },{
            path: 'DispatchConfirmation',   //运单调度确认
            component: () => import('../../views/OperationManagement/TransportationManagement/DispatchConfirmation.vue'),
            meta: {
                title:"运单调度确认"
            },
        },{
            path: 'AssignVehicles',      //运单分配车辆
            component: () => import('../../views/OperationManagement/TransportationManagement/AssignVehicles.vue'),
            meta: {
                title:"运单分配车辆"
            },
        },{
            path: 'ArrivalConfirmation',      //运单到达确认
            component: () => import('../../views/OperationManagement/TransportationManagement/ArrivalConfirmation.vue'),
            meta: {
                title:"运单到达确认"
            },
        }
    ]
}