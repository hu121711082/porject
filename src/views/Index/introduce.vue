<template>
    <div class="app">
        <Introduce :typeCont="typeCont"></Introduce>
    </div>
</template>

<script>
import Introduce from '../../components/index/Introduce'
export default {
    data() {
        return{
            typeCont: {}
            
        }
    },
    created() {
        // console.log("111111111111")
        // console.log(this.$route)
        this.typeCont = this.typefun(this.$route.params.type)
        // console.log(this.typeCont)
    },
    methods: {
        typefun(type) {
            let obj = {}
            if(type == "物流") {
                obj  = {
                    title: '物流',
                    imgsrc: 'wuliu',
                    content: '虹迪在全国的仓储中心面达270,000㎡，运输能力辐射全国95%以上的县级城市，虹迪的质量管理团队提供退货质检、分类、再包装及贴标服务，有效减少退货损失。虹迪设有最后一公里配送团队、宅配团队，提供定制化的终端服务。物流环节与GPS、KPI监控体系接口，为虹迪、客户以及终端用户打造一个多赢的局面。虹迪立志打造一个包括入厂物流、生产物流、出厂物流、售后物流的完整物流服务链。'
                }
                return obj 
            }else if(type == "商贸流") {
                obj  = {
                    title: '商贸流',
                    imgsrc: 'shangmaoliu',
                    content: '虹迪，把供应商、制造商、分销商、零售商连成一个整体，他不仅是一条连接供应商到用户的物流链、信息链、资金链，更是一条增值链，供应链服务的三大业务结构包括：大数据金融业务、细分行业B2B平台、分销执行。旨在通过资金流和信息流的金融闭环实现在线融智风险可控。'
                }
                return obj 
            }else if (type == "资金流") {
                obj  = {
                    title: '资金流',
                    imgsrc: 'zijinliu',
                    content: '在信息流方面，虹迪开发的供应链管理平台、线上交易平台、物流全程可视化平台、电子商务平台、移动互联网平台五大平台，实现对资源的有效控制，为客户提供全程可监控信息系统服务。此外，虹迪强大的信息管理系统通过云技术、大数据分析、移动互联网技术、O2O线上线下联动等手段，让客户更好的达成精准营销以及维护并拓展客户的目的，并提供其他增值服务。'
                }
                return obj 
            }else {
                obj  = {
                    title: '信息流',
                    imgsrc: 'xinxiliu',
                    content: '虹迪在全国的仓储中心面达270,000㎡，运输能力辐射全国95%以上的县级城市，虹迪的质量管理团队提供退货质检、分类、再包装及贴标服务，有效减少退货损失。虹迪设有最后一公里配送团队、宅配团队，提供定制化的终端服务。物流环节与GPS、KPI监控体系接口，为虹迪、客户以及终端用户打造一个多赢的局面。虹迪立志打造一个包括入厂物流、生产物流、出厂物流、售后物流的完整物流服务链。'
                }
                return obj 
            }
        }
    },

    components: {
        Introduce  
    }
}
</script>

<style scoped>
.app {
    background: rgb(60, 63, 70);
    height: 100%;
}
</style>