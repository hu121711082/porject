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
    <div class="warp-subject">
      <ul class="subject">
        <li class="title">
          <h3>主题</h3>
          <a class="add" @click="add({title:'主题',flag:true})">添加</a>
        </li>
        <!-- <li class="Tips" v-if="!res.subjectFormRes.length && !subjectFormFlag">暂无条件！请添加条件</li> -->
        <li v-if="!subjectFormFlag">
          <!-- <div class="condition" v-for="(item,index) in res.subjectFormRes" :key="index" >
            <div class="condition-text" v-for="(vla,key ,index) in item" :key="index">
              <h4>条件{{index + 1}}</h4><span>{{vla}}</span>
            </div>
            <div class="btn">
              <a @click="subjectRmove(index)">删除</a>
              <a @click="subjectEdit(index)">编辑</a>
            </div>
          </div> -->
          <Table border :columns="subjectTitle" :data="res.subjectFormRes">
            <template v-slot:action="{ index}">
              <div class="table-btn">
                <a @click="subjectRmove(index)">删除</a>
                <a @click="subjectEdit(index)">编辑</a>
              </div>
            </template>
          </Table>
        </li>
      </ul>
      <div class="form" v-if="subjectFormFlag">
        <div class="form-box">
          <div class="cont">
            <input type="text" class="One" v-model="subjectForm.vlaOne">
            <span>or</span>
            <input type="text" class="Two" v-model="subjectForm.vlaTwo">
            <span>or</span>
            <input type="text" class="Three" v-model="subjectForm.vlaThree">
            <span>and</span>
            <input type="text" class="Four" v-model="subjectForm.vlaFour">
            <span>and</span>
            <input type="text" class="Five" v-model="subjectForm.vlaFive">
            <span>and</span>
            <input type="text" class="Six" v-model="subjectForm.vlaSix">
          </div>
          <div class="btn">
            <a class="preservation" @click="preservation({title:'主题'})">保存</a>
            <a class="cancel" @click="cancel({title:'主题',flag:false})">取消</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /主题部分 -->
    <!-- from部分 -->
    <div class="warp-from">
      <ul class="from">
        <li class="title">
          <h3>from</h3>
           <a class="add" @click="add({title:'from',flag:true})">添加</a>
        </li>
        <!-- <li class="Tips" v-if="!res.fromFormRes.length && !fromFormFlag">暂无条件！请添加条件</li> -->
        <li v-if="!fromFormFlag">
          <!-- <div class="condition" v-for="(item,index) in res.fromFormRes" :key="index" >
            <div class="condition-text" v-for="(vla,key ,index) in item" :key="index">
              <h4>条件{{index + 1}}</h4><span>{{vla}}</span>
            </div>
            <div class="btn">
              <a @click="fromRmove(index)">删除</a>
              <a @click="fromEdit(index)">编辑</a>
            </div>
          </div> -->
          <Table border :columns="fromTitle" :data="res.fromFormRes">
            <template v-slot:action="{ index}">
              <div class="table-btn">
                <a @click="fromRmove(index)">删除</a>
                <a @click="fromEdit(index)">编辑</a>
              </div>
            </template>
          </Table>
        </li>
      </ul>
      <div class="form" v-if="fromFormFlag">
        <div class="form-box">
          <div class="cont">
            <input type="text" class="One" v-model="fromForm.vlaOne">
            <span>or</span>
            <input type="text" class="Two" v-model="fromForm.vlaTwo">
            <span>or</span>
            <input type="text" class="Three" v-model="fromForm.vlaThree">
            <span>or</span>
            <input type="text" class="Four" v-model="fromForm.vlaFour">
          </div>
          <div class="btn">
            <a class="preservation" @click="preservation({title:'from'})">保存</a>
            <a class="cancel" @click="cancel({title:'from',flag:false})">取消</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /from部分 -->
    <!-- to部分 -->
    <div class="warp-to">
      <ul class="to">
        <li class="title">
          <h3>to</h3>
          <a class="add" @click="add({title:'to',flag:true})">添加</a>
        </li>
        <!-- <li class="Tips">暂无条件！请添加条件</li> -->
        <li v-if="!toFormFlag">
          <Table border :columns="toTitle" :data="res.toFormRes">
            <template v-slot:action="{ index}">
              <div class="table-btn">
                <a @click="toRmove(index)">删除</a>
                <a @click="toEdit(index)">编辑</a>
              </div>
            </template>
          </Table>
        </li>
      </ul>
      <div class="form" v-if="toFormFlag">
        <div class="form-box">
          <div class="cont">
            <div class="email">
              <span>邮箱：</span>
              <input ref="emailInput" type="email" @blur="email('to')" v-model="toForm.email">
              <!-- <Input type="email" v-model="toForm.mailbox" /> -->
            </div>
            <div class="Authorization">
              <span>授权码：</span>
              <input type="text" v-model="toForm.Authorization">
            </div>
          </div>
          <div class="btn">
            <a class="preservation" @click="preservation({title:'to'})">保存</a>
            <a class="cancel" @click="cancel({title:'to',flag:false})">取消</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /to部分 -->
    <!-- 目标邮件时间区间部分 -->
    <div class="warp-tiem">
      <ul class="tiem">
        <li class="title">
          <h3>目标邮件时间区间</h3>
        </li>
        <li class="cycle">
          <span>周期</span>： <input type="number" placeholder="0" min="0" v-model="res.timeRes.day" > <span>天</span>
        </li>
        <li class="start-time">
          <span>时间</span>：<TimePicker confirm type="timerange" :value="res.timeRes.Time" format="HH点mm分ss秒" @on-change="handleDatesChange" placeholder="请选择开始时间和结束时间" style="width: 250px"></TimePicker>
        </li>
      </ul>
    </div>
    <!-- /目标邮件时间区间部分 -->
    <!-- 接收结果邮箱部分 -->
    <div class="warp-res">
      <ul class="res">
        <li class="title">
          <h3>接收结果邮箱</h3>
          <a class="add" @click="add({title:'接收结果邮箱',flag:true})">添加</a>
        </li>
        <!-- <li class="Tips">暂无条件！请添加条件</li> -->
        <li v-if="!resFormFlag">
          <Table border :columns="resTitle" :data="res.resFormRes">
            <template v-slot:action="{ index}">
              <div class="table-btn">
                <a @click="resRmove(index)">删除</a>
                <a @click="resEdit(index)">编辑</a>
              </div>
            </template>
          </Table>
        </li>
      </ul>
      <div class="form" v-if="resFormFlag">
        <div class="form-box">
          <div class="cont">
            <div class="email">
              <span>接收邮箱：</span>
              <input ref="emailInput" type="email" @blur="email('接收结果邮箱')" v-model="resForm.email">
            </div>
          </div>
          <div class="btn">
            <a class="preservation" @click="preservation({title:'接收结果邮箱'})">保存</a>
            <a class="cancel" @click="cancel({title:'接收结果邮箱',flag:false})">取消</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /接收结果邮箱部分 -->
    <footer>
      <div class="footer-btn">
        <!-- <a @click="Submit" :loading="loading">提交</a> -->
        <Button type="primary" @click="Submit" :loading="loading">提交</Button>
        <Button @click="modal1 = true">关闭</Button>
        <Modal
        v-model="modal1"
        @on-ok="asyncOK"
        title="关闭">
        <p>关闭之后将不能提交邮件了！</p>
        </Modal>
      </div>
    </footer>
  </div>
  
</template>

<script>
import {Submit} from '@/api/MailManagement/ReturnGoods.js'
export default {
  data() {
    return{
        // 主题数据部分
        // 主题 表单显示与不显示
        subjectFormFlag: false,
        //主题编辑数据
        subjectEditFlag: false,
        subjectEditIndex: 0,
        // 主题添加条件数据
        subjectTitle: [
          {
            title: '条件一',
            key: 'vlaOne'
          },{
            title: '条件二',
            key: 'vlaTwo'
          },{
            title: '条件三',
            key: 'vlaThree'
          },{
            title: '条件四',
            key: 'vlaFour'
          },{
            title: '条件五',
            key: 'vlaFive'
          },{
            title: '条件六',
            key: 'vlaSix'
          }, {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        subjectForm:{
          vlaOne: '',
          vlaTwo: '',
          vlaThree: '',
          vlaFour: '',
          vlaFive: '',
          vlaSix: ''
        },

        // from数据部分
        // from 表单显示与不显示
        fromFormFlag: false,
        // from 编辑数据
        fromEditFlag: false,
        fromEditIndex: 0,
        // from添加条件数据
        fromTitle: [
          {
            title: '条件一',
            key: 'vlaOne'
          },{
            title: '条件二',
            key: 'vlaTwo'
          }, {
            title: '条件三',
            key: 'vlaThree'
          },{
            title: '条件四',
            key: 'vlaFour'
          },{
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        fromForm: {
          vlaOne: '',
          vlaTwo: '',
          vlaThree: '',
          vlaFour: '',
        },

        // to数据部分
        // to 表单显示与不显示
        toFormFlag: false,
        // to里面的邮箱是否正确
        toFormFlag: false,
        // to 编辑数据
        toEmailFlag: false,
        toEditIndex: 0,
        // to添加条件数据
        toTitle: [
          {
            title: '邮箱',
            key: 'email'
          },{
            title: '授权码',
            key: 'Authorization'
          },{
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        toForm: {
          email: '',
          Authorization: '',
        },

        // res数据部分
        resFormFlag: false,
        resEmailFlag: false,
        resEditIndex: 0,
        // res添加条件数据
        resTitle: [
           {
            type: 'index',
            width: 60,
            align: 'center'
          },{
            title: '邮箱',
            key: 'email'
          },{
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        resForm: {
          email: '',
        },

        // 结果 
        res:{
          // 主题
          subjectFormRes:[],
          // from
          fromFormRes:[],
          // to
          toFormRes: [],
          // 时间区间
          timeRes: {
            day: '',
            Time: []
          },
          // 接收结果邮箱
          resFormRes: []
        },
         
         
         loading: false,
         modal1: false
      }
  },
  methods: {
    
    // 添加
    add(obj) {
      if(obj.title == '主题'){
        this.subjectFormFlag = obj.flag
        for(var val in this.subjectForm){
          this.subjectForm[val] = ''
        }
      }else if(obj.title == "from") {
        this.fromFormFlag = obj.flag
        for(var val in this.fromForm){
          this.fromForm[val] = ''
        }
      }else if(obj.title == 'to') {
        this.toFormFlag = obj.flag
        for(var val in this.toForm){
          this.toForm[val] = ''
        }
      }else {
        this.resFormFlag = obj.flag
        for(var val in this.resForm){
          this.resForm[val] = ''
        }
      }
      
    },
    //取消
    cancel(obj) {
      if(obj.title == '主题'){
        this.subjectFormFlag = obj.flag
      }else if(obj.title == 'from') {
        this.fromFormFlag = obj.flag
      }else if(obj.title == 'to') {
        this.toFormFlag = obj.flag
      }else {
        this.resFormFlag = obj.flag
      }
      
    },
    // 保存
    preservation(data) {
      if(data.title == '主题'){

        let obj = JSON.parse(JSON.stringify(this.subjectForm)) 
        if(this.subjectEditFlag) {
          this.res.subjectFormRes[this.subjectEditIndex] = obj
          this.subjectFormFlag = false
          this.subjectEditFlag = false
        }else{
          this.res.subjectFormRes.push(obj)
          this.subjectFormFlag = false
          this.subjectEditFlag = false
        }


      }else if(data.title == 'from') {

        let obj = JSON.parse(JSON.stringify(this.fromForm))
        if(this.fromEditFlag){
          this.res.fromFormRes[this.fromEditIndex] = obj
          this.fromFormFlag = false
          this.fromEditFlag = false
        } else {
          this.res.fromFormRes.push(obj)
          this.fromFormFlag = false
          this.fromEditFlag = false
        }

      }else if (data.title == 'to') {
        
        if(!this.toEmailFlag) {
          this.$refs.emailInput.style.border = "1px solid red"
          alert("邮箱格式不正确");
          return
        }
        let obj = JSON.parse(JSON.stringify(this.toForm))
        if(this.toEditFlag){
          this.res.toFormRes[this.toEditIndex] = obj
          this.toFormFlag = false
          this.toEditFlag = false
        } else {
          this.res.toFormRes.push(obj)
          this.toFormFlag = false
          this.toEditFlag = false
        }
      }else {
        if(!this.resEmailFlag) {
          this.$refs.emailInput.style.border = "1px solid red"
          alert("邮箱格式不正确");
          return
        }
        let obj = JSON.parse(JSON.stringify(this.resForm))
        if(this.resEditFlag){
          this.res.resFormRes[this.resEditIndex] = obj
          this.resFormFlag = false
          this.resEditFlag = false
        } else {
          this.res.resFormRes.push(obj)
          this.resFormFlag = false
          this.resEditFlag = false
        }
      }
      
     
    },
    // 主题部分相关函数
    // 删除
    subjectRmove(index) {
      this.res.subjectFormRes.splice(index,1)
    },
    //编辑
    subjectEdit(index){
      this.subjectFormFlag = true
      this.subjectForm = this.res.subjectFormRes[index]
      this.subjectEditIndex = index
      this.subjectEditFlag = true
    },
    //  from部分相关的函数
    // 删除
    fromRmove(index) {
      this.res.fromFormRes.splice(index,1)
    },
    //编辑
    fromEdit(index){
      this.fromFormFlag = true
      this.fromForm = this.res.fromFormRes[index]
      this.fromEditIndex = index
      this.fromEditFlag = true
    },
    //  to部分相关的函数to
    // 删除
    toRmove(index) {
      this.res.toFormRes.splice(index,1)
    },
    //编辑
    toEdit(index){
      this.toFormFlag = true
      this.toForm = this.res.toFormRes[index]
      this.toEditIndex = index
      this.toEditFlag = true
    },

     //  接收结果邮箱部分相关的函数to
    // 删除
    resRmove(index) {
      this.res.resFormRes.splice(index,1)
    },
    //编辑
    resEdit(index){
      this.resFormFlag = true
      this.resForm = this.res.resFormRes[index]
      this.resEditIndex = index
      this.resEditFlag = true
    },
    // 邮箱失去焦点市检测
    email(data) {
      var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
      if(data == 'to') {
        if(!reg.test(this.toForm.email)){
        alert("邮箱格式不正确");
        this.toEmailFlag = false
        }else {
          this.toEmailFlag = true
        }
      }else {
        if(!reg.test(this.resForm.email)){
        alert("邮箱格式不正确");
        this.resEmailFlag = false
        }else {
          this.resEmailFlag = true
        }
      }
    },

    // 处理时间函数
    handleDatesChange(arr){
      // console.log(arr)
      this.res.timeRes.Time = arr
    },

    //提交
    Submit() {
      // console.log(this.res)
    this.loading = true
    // console.log(this.res)

      Submit(this.res).then(res => {
        // console.log(res.data.msg)
        if(res.data.msg == "success") {
          this.loading = false
          this.$Message.success('提交成功');
        }else {
          this.$Message.error('提交失败');
        }
      })
    },

    // 关闭确定之后回调
    asyncOK() {
      console.log("关闭成功")
    },

    // 查活
    state() {
      console.log("当前状态为：！！！！")
    }
  },
  // components: {
  //   Add
  // }
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
    margin-right: 80px;
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

  ul {
    margin: 10px 25px;
    border-bottom: 1px solid #eee;

  }
  ul li {
    padding: 10px 0;
  }
  .Tips {
    text-align: center;
  }
   .title {
    display: flex;
    justify-content: space-between;
  }
  .title h3 {
    font-size: 20px;
    line-height: 30px;
  }
  .title a {
    padding: 5px 20px;
    background: rgb(92, 174, 241);
    color: #fff;
    /* border: 1px solid chartreuse; */
    border-radius: 5px;
  }
  /* 主题 */
  .warp-subject {
    position: relative;
  }
  .subject {
    border-bottom: 1px solid #eee;
    
  }
  /* 主题表单 */
  .form {
    /* position: absolute; */
    /* top: 55px; */
    /* left: 0; */
    padding: 30px  20px 0;
    width: 100%;
    text-align: center;
  }
  .form-box {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

  }
  .form .cont {
    padding-bottom: 10px;
    display: flex;
    /* justify-content: space-around; */
  }
  .form input {
    width: 70px;
  }
  .form span {
    padding: 0 10px;
  }
  .form .btn {
    padding: 10px 0;
    text-align: right;
    margin-right: 40px;
  }
  .form .btn a {
    padding: 5px 10px;
    background: #34dc7f;
    color: #fff;
    margin: 0 5px;
    border-radius: 5px;
  }

  .email input {
    width: 200px;
  }
  .Authorization input{
    width: 200px;
  }
  /* 条件编辑和删除部分 */
  .condition {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 10px 0;
  }
  .table-btn a {
    margin: 0 5px;
  } 
  /* .condition  */
  
  /* 接收结果邮箱 */
  .res-form li {
    display: flex;

  }
  .res-form li .title {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #333;
    border-radius: 50%;
    margin-right: 20px;
    
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