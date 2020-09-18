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
        }
    },
    methods: {
        //添加
        add(flag) {
            this.subjectFormFlag = flag
             for(var val in this.subjectForm){
                this.subjectForm[val] = ''
            }
        },
        //保存
        preservation() {
            // console.log(this.res)
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
            this.subjectForm = this.res.subjectFormRes[index]
            this.subjectEditIndex = index
            this.subjectEditFlag = true
        },
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
  .table-btn a {
    margin: 0 5px;
  } 
</style>