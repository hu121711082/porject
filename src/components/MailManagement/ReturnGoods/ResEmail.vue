<template>
   <!-- 接收结果邮箱部分 -->
    <div class="warp-res">
      <ul class="res">
        <li class="title">
          <h3>接收结果邮箱</h3>
          <a class="add" @click="add(true)">添加</a>
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
              <input ref="emailInput" type="email" @blur="email()" v-model="resForm.email">
            </div>
          </div>
          <div class="btn">
            <a class="preservation" @click="preservation()">保存</a>
            <a class="cancel" @click="cancel()">取消</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /接收结果邮箱部分 -->
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
            // 接收结果邮箱数据部分
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

        }
    },
    methods: {
        //添加
        add(flag) {
            this.resFormFlag = flag
             for(var val in this.resForm){
                this.resForm[val] = ''
            }
        },
        //保存
      preservation() {
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
        },
        // 取消
        cancel(){
            this.resFormFlag = false
        },
        // 删除
        resRmove(index) {
            // console.log(this.res)
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
        email() {
            var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
            if(!reg.test(this.resForm.email)){
                alert("邮箱格式不正确");
                this.resEmailFlag = false

            }else {
                this.resEmailFlag = true
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
  
</style>