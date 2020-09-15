<template>
    <div class="layout">
        <Layout>
            <Sider :style="{minWidth: '253px'}">
                <div class="haed">
                    <div class="log">
                        <img src="../assets/img/feng.png" alt="">
                    </div>
                    <div class="btn-box">
                        <a href="#" title="修改密码">NikeAdmin</a>
                        <a href="#" title="注销">Logout</a>
                    </div>
                </div>
                <Menu :active-name="activeName" theme="dark" width="250px" :accordion="true">
                     <!-- <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            运作管理
                        </template>
                        <Submenu name="a3">
                            <template slot="title">运单管理</template>
                            <MenuItem name="a3-1" to="/WaybillManagement/queryWaybill">查询运单</MenuItem>
                            <MenuItem name="a3-2" to="/WaybillManagement/addWaybill">新增运单</MenuItem>
                            <MenuItem name="a3-3" to="/WaybillManagement/waybillImport">运单导入</MenuItem>
                            <MenuItem name="a3-4" to="/WaybillManagement/detailedImport">运单明细导入</MenuItem>
                            <MenuItem name="a3-5" to="/WaybillManagement/operationAudit">运单审核</MenuItem>
                        </Submenu>
                        <Submenu name="a4">
                            <template slot="title">运输管理</template>
                            <MenuItem name="a4-1" to="/TransportationManagement/WaybillAssignmentCarrier">运单分配承运商</MenuItem>
                            <MenuItem name="a4-2" to="/TransportationManagement/DispatchConfirmation">运单调度确认</MenuItem>
                            <MenuItem name="a4-3" to="/TransportationManagement/AssignVehicles">运单分配车辆</MenuItem>
                            <MenuItem name="a4-4" to="/TransportationManagement/ArrivalConfirmation">运单到达确认</MenuItem>
                        </Submenu>
                    </Submenu> -->
                     <Submenu v-for="parent in routes" :key="parent.id" :name="parent.id">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            {{parent.title}}
                        </template>
                        <Submenu v-for="child in parent.cont" :key="child.path" :name="child.path">
                            <template slot="title">{{child.title}}</template>
                            <MenuItem v-for="list in child.children" :key="list.path" :name="list.path" :to="child.path + '/' + list.path">
                                {{list.meta.title}}
                            </MenuItem>
                        </Submenu>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px' , }">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import {routes} from '../router/index'
export default {
    data() {
        return{
            routes: [],
            activeName: this.$router.path,
        }
    },
    created() {
        this.routes = routes[0].meta
        // console.log(routes)
        // console.log(this.routes)
    },
    methods: {
        menuList(){  // 这个方法里定义好，高亮和路由
            let path = this.$route.matched[1].path  
            // console.log(path)
			this.activeName=path.substr(1)
        }
    },
    mounted() {
		this.menuList()
	}
    
}
</script>

<style scoped>
.ivu-layout {
    height: 100vh;
}
.haed {
    margin: 10px;
    /* border-bottom: 1px solid rgb(168, 168, 168); */
}
.log {
    text-align: center;
}
.btn-box {
    display: flex; 
    justify-content: space-around;
    padding-bottom: 5px;
    
}
.ivu-layout-content {
    overflow-y: scroll;
    margin: 20px; 
    background: #fff; 
    min-height: 260px;
}
::-webkit-scrollbar {
    width: 0px;
}
</style>