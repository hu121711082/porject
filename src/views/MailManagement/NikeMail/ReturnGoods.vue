<template>
  <div class="box">
    <div class="title">
      <h2>退货邮件处理功能</h2>
      <div class="state-box">
        <Button @click="state">查活</Button>
        <div class="state"></div>
      </div>
    </div>
    <!-- 主题部分 -->
   <Subject :res="res"></Subject>
    <!-- /主题部分 -->
    <!-- from部分 -->
    <From :res="res"></From>
    <!-- /from部分 -->
    <!-- to部分 -->
    <To :res="res"></To>
    <!-- /to部分 -->
    <!-- 目标邮件时间区间部分 -->
    <TimeInterval :res="res"></TimeInterval>
    <!-- /目标邮件时间区间部分 -->
    <!-- 接收结果邮箱部分 -->
    <ResEmail :res="res"></ResEmail>
    <!-- /接收结果邮箱部分 -->
    <footer>
      <div class="footer-btn">
        <!-- <a @click="Submit" :loading="loading">提交</a> -->
        <Button type="primary" @click="Submit" :loading="loading">提交</Button>
        <Button @click="modal = true">关闭</Button>
        <Modal
          v-model="modal"
          @on-ok="asyncOK"
          title="关闭">
          <p>关闭之后将不能提交邮件了！</p>
        </Modal>

        <Button  @click="modal2 = true">邮箱查询</Button>
        <Modal
          v-model="modal2"
          title="邮箱查询"
          @on-ok="select"
          @on-visible-change="aaa">
          <input ref="emailInput" type="email" v-model="email" placeholder="请输入邮箱号！" >
        </Modal>
      </div>
    </footer>
  </div>
  
</template>

<script>
// 请求函数
import {Submit, end ,state} from '@/api/MailManagement/ReturnGoods.js'


// 组件
import Subject from "@/components/MailManagement/ReturnGoods/Subject.vue";
import From from "@/components/MailManagement/ReturnGoods/From.vue";
import To from "@/components/MailManagement/ReturnGoods/To.vue";
import TimeInterval from "@/components/MailManagement/ReturnGoods/TimeInterval.vue";
import ResEmail from "@/components/MailManagement/ReturnGoods/ResEmail.vue";

export default {
  data() {
    return{
    // 结果
      res: {
        //功能名称
        emailfunctionname: 'tuihuo',
        // 主题
        subjectFormRes: [],
        // from
        fromFormRes: [],
        // to
        toFormRes: [],
        // 时间区间
        timeFormRes:[],
        // 接收结果邮箱
        resFormRes: [],
       
      },
        
      // 提交的loding
      loading: false,
      // 关闭按钮里面取消隐藏弹出来的窗口
      modal: false,
      // 邮箱查询按钮里面取消隐藏弹出来的窗口
      modal2: false,
      email: ''


    }
  },
  methods: {
    //提交
    Submit() {
      this.loading = true
      Submit({res:this.res}).then(res => {
        console.log(res)
        if(res.data.msg == "success") {
          this.loading = false
          this.$Message.success('提交成功');
        }else {
          this.$Message.error('提交失败');
          this.loading = false
        }
      })
    },

    // 关闭确定之后回调
    asyncOK() {
      console.log("关闭成功")
      end({end:{end: 'end'}}).then(res =>{
        console.log(res)
      })
    },

    // 查活
    state() {
      console.log("当前状态为：！！！！")
      state({select:{state: 'state'}}).then(res => {
        console.log(res)
      })
    },

    //查询
    select() {
      console.log(this.email)
    },
    aaa(a){
      if(!a) {
        this.email = ''
      }
    }
  },
  components: {
    Subject,
    From,
    To,
    TimeInterval,
    ResEmail
  },
} 

</script>

<style scoped>
  .box .title {
     padding: 10px 0;
  }
  .box .title h2 {
    /* text-align: center; */
    margin-left: 50px;
   
  }
  .box .title .state-box {
    display: flex;
    margin-right: 70px;
    align-items: center;
  }
  .box .title .state-box button {
    width: 60px;
    height: 25px;
    /* border: none; */
    /* background: #eeeeee; */
    margin-right: 30px;
    border-radius: 3px;
    
  }
  .box .title .state-box .state {
    background: rgb(139, 214, 63);
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  footer .footer-btn {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  /* footer .footer-btn a {
    padding: 8px 30px;
    margin: 0 10px;
    background: yellowgreen;
    color: #fff;
    border-radius: 6px;
  } */
  .ivu-btn  {
    margin: 0 10px;
  }
</style>