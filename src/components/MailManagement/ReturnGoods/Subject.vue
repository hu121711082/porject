<template>
    <div class="warp-subject">
      <ul class="subject">
        <li class="title">
          <h3>主题</h3>
          <a class="add" @click="add(true)">添加</a>
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
          <Table border :columns="subjectTitle" :data="subjectForm">
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
            <div class="aaa">
              <span>必 要 条 件：</span>
              <span>①</span>
              <input type="text" class="One" v-model="mnlt_existence.vlaOne">
              <span>②</span>
              <input type="text" class="Two" v-model="mnlt_existence.vlaTwo">
              <span>③</span>
              <input type="text" class="Three" v-model="mnlt_existence.vlaThree">
            </div>
            <div class="aaa">
              <span>非必要条件：</span>
              <span>①</span>
              <input type="text" class="Four" v-model="mnlt_nonExistent.vlaOne">
              <span>②</span>
              <input type="text" class="Five" v-model="mnlt_nonExistent.vlaTwo">
              <span>③</span>
              <input type="text" class="Six" v-model="mnlt_nonExistent.vlaThree">
            </div>
            
          </div>
          <div class="btn">
            <a class="preservation" @click="preservation()">保存</a>
            <a class="cancel" @click="cancel()">取消</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
         res: {
            type: Object
         }   
    },
    data() {
        return{
             // 主题 表单显示与不显示
            subjectFormFlag: false,
            //主题编辑数据
            subjectEditFlag: false,
            subjectEditIndex: 0,
            // 主题添加条件数据
            subjectTitle: [
                {
                    title: '必要条件',
                    key: 'mnlt_existence' 
                },{
                    title: '非必要条件',
                    key: 'mnlt_nonExistent'
                },{
                    title: '操作',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],

            mnlt_existence: {
              vlaOne: '',
              vlaTwo: '',
              vlaThree: '',
            },
            mnlt_nonExistent: {
              vlaOne: '',
              vlaTwo: '',
              vlaThree: ''
            }
        }
    },
    methods: {
        //添加
        add(flag) {
            // console.log(this.subjectForm)
            this.subjectFormFlag = flag
            this.subjectEditFlag = false
            for(var val in this.mnlt_existence){
              this.mnlt_existence[val] = ''
            }
            for(var val in this.mnlt_nonExistent){
              this.mnlt_nonExistent[val] = ''
            }
        },
        //保存
        preservation() {
            // console.log(this.res)
            // let obj = JSON.parse(JSON.stringify(this.subjectForm)) 
            let obj = {mnlt_existence:this.mnlt_existence,mnlt_nonExistent:this.mnlt_nonExistent}
            if(this.subjectEditFlag) {
                this.res.subjectFormRes[this.subjectEditIndex] = obj
                this.subjectFormFlag = false
                this.subjectEditFlag = false
            }else{
                this.res.subjectFormRes.push(obj)
                this.subjectFormFlag = false
                this.subjectEditFlag = false
            }
        },
        // 取消
        cancel(){
            this.subjectFormFlag = false
        },
        // 删除
        subjectRmove(index) {
            // console.log(this.res)
            this.res.subjectFormRes.splice(index,1)
        },
        //编辑
        subjectEdit(index){
            this.subjectFormFlag = true
            this.mnlt_existence = this.res.subjectFormRes[index].mnlt_existence
            this.mnlt_nonExistent =  this.res.subjectFormRes[index].mnlt_nonExistent
            this.subjectEditIndex = index
            this.subjectEditFlag = true
        },
    },
    computed:{
      subjectForm() {
         let obj = []
       
        this.res.subjectFormRes.forEach(item => {
          obj.push({mnlt_existence:
            `① ${this.mnlt_existence.vlaOne}
            ② ${this.mnlt_existence.vlaTwo}
            ③ ${this.mnlt_existence.vlaThree}`
            ,mnlt_nonExistent:
            `① ${this.mnlt_nonExistent.vlaOne}
            ② ${this.mnlt_nonExistent.vlaTwo}
            ③ ${this.mnlt_nonExistent.vlaThree}`})
        });  
        return obj
      }
    }
}
</script>

<style scoped>
 ul {
    margin: 10px 25px;
    border-bottom: 1px solid #eee;

  }
  ul li {
    padding: 10px 0;
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
    text-align: left;
    /* display: flex; */
    /* justify-content: space-around; */
  }
  .form .cont div {
    margin: 8px;
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
  .table-btn a {
    margin: 0 5px;
  }
</style>