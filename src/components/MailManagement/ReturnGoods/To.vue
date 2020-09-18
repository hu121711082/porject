<template>
 <!-- to部分 -->
   <div class="warp-to">
      <ul class="to">
        <li class="title">
          <h3>to</h3>
          <a class="add" @click="add(true)">添加</a>
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
              <input ref="emailInput" type="email" @blur="email()" v-model="toForm.email">
              <!-- <Input type="email" v-model="toForm.mailbox" /> -->
            </div>
            <div class="Authorization">
              <span>授权码：</span>
              <input type="text" v-model="toForm.Authorization">
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
           // to数据部分
        // to 表单显示与不显示
        toFormFlag: false,
        // to里面的邮箱是否正确
        toEmailFlag: false,
        // to 编辑数据
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

        }
    },
    methods: {
        //添加
        add(flag) {
            this.toFormFlag = flag
             for(var val in this.toForm){
                this.toForm[val] = ''
            }
        },
        //保存
        preservation() {
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
        },
        // 取消
        cancel(){
            this.toFormFlag = false
        },
        // 删除
        toRmove(index) {
            // console.log(this.res)
            this.res.toFormRes.splice(index,1)
        },
        //编辑
        toEdit(index){
            this.toFormFlag = true
            this.toForm = this.res.toFormRes[index]
            this.toEditIndex = index
            this.toEditFlag = true
        },
         // 邮箱失去焦点市检测
        email() {
            var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
            if(!reg.test(this.toForm.email)){
                alert("邮箱格式不正确");
                this.toEmailFlag = false
            }else {
                this.toEmailFlag = true
            }
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
  /* .form input {
    width: 70px;
  } */
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
  .email input {
    width: 200px;
  }
  .Authorization input{
    width: 200px;
  }
</style>