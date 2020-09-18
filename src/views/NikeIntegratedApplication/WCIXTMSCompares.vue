<template>
  <div class="app">
    <h2>WCI X TMS Compares</h2>
    <fieldset>
      <legend>描述</legend>
      <p>对比WCI和TMS系统数据，返回差异报告。</p>
      <p>OB输入文件[Tracking Report*-*.xlsx; 大仓出货*-*.xlsx]</p>
      <p>RT输入文件[RTShipOrder*-*.xlsx; 退货运单*-*.xlsx]</p>
    </fieldset>
    <ul>
      <li>
        <UploadCom :msg="2" :file="file" @sendLoading="sendLoading" @abnormal="abnormal"></UploadCom>
      </li>
    </ul>
     <Spin fix v-if="loadingStatus">
        <Icon type="ios-loading" size=100 class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
    </Spin>
     <Modal
        v-model="abnormalModal"
        title="校验"
        :loading="abnormalLoading"
        @on-ok="abnormalOk"
        @on-cancel="cancel">
        <p>{{abnormalContent}}</p>
    </Modal>
  </div>

</template>

<script>
import UploadCom from '@/components/NikeIntegratedApplication/UploadCom.vue'
export default {
  data() {
    return{
      // 上传文件数据
      file: [],
      // Loading的显示与隐藏的数据
      loadingStatus: false,
      // 异常数据
      abnormalModal: false,
      abnormalContent: '',
      abnormalLoading: true
    }
  },
  methods: {
    // Loading的显示与隐藏的function
    sendLoading(flag) {
      // console.log(flag)
      this.loadingStatus = flag
    },
     // 异常模态框的显示与隐藏的function
    abnormal(flag) {
      // console.log(flag)
      this.abnormalModal = flag
    },
    // 异常模态框点击确认的function
    abnormalOk() {
      // console.log('确认处理')
      // this.abnormalLoading = true
       setTimeout(() => {
          this.abnormalModal = false;
          this.loadingStatus = false
          this.file = []
        }, 2000);
    },
    cancel() {
      this.loadingStatus = false
    }
  },
  components:{
    UploadCom,
  }
}
</script>

<style scoped>
.app{
  position: relative;
  height: 100%;
}
.app h2 {
  /* text-align: center; */
  line-height: 50px;
  height: 50px;
}
ul {
  display: flex;
}
ul li {
  flex: 1;
  margin: 0 10px;
}
/* ul li:first-child{
  border-right: 1px solid #333;
} */
fieldset {
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
}
legend {
  font-size: 18px;
  font-weight: bold;
}
fieldset p{
  font-size: 14px;
  font-family: "微软雅黑", Verdana, Helvetica, Sans-Serif;
  color: #696969;
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}
</style>