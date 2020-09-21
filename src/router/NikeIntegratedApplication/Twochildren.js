import Index from "@/views/index.vue";


// Nike邮件智能管理系统部分的路由配置
export default {

    path: "/NikeIntegratedApplication",
    component: Index,
    title:"集成应用功能",
    // Grade: true,
    id: "4",
    children: [
        {
            path: 'WCIXTMSCompares',  
            component: () => import('@/views/NikeIntegratedApplication/WCIXTMSCompares.vue'),
            meta: {
                title:"WCI X TMS Compares"
            }
        },{
            path: 'PODCheckingKPI',  
            component: () => import('@/views/NikeIntegratedApplication/PODCheckingKPI.vue'),
            meta: {
                title:"POD Checking & KPI"
            }
        },{
            path: 'NIKEOBbill',  
            component: () => import('@/views/NikeIntegratedApplication/NIKEOBbill.vue'),
            meta: {
                title:"NIKE OB 账单"
            }
        },{
            path: 'NIKESTbill',  
            component: () => import('@/views/NikeIntegratedApplication/NIKESTbill.vue'),
            meta: {
                title:"NIKE ST 账单"
            }
        },{
            path: 'TEXTCompares',  
            component: () => import('@/views/NikeIntegratedApplication/TEXTCompares.vue'),
            meta: {
                title:"TEXT Compares",
            }
        }
    ]
}