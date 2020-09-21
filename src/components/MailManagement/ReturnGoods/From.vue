<template>
  <div class="warp-from">
    <ul class="from">
      <li class="title">
        <h3>发件人邮箱号</h3>
        <a class="add" @click="add(true)">添加</a>
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
        </div>-->
        <Table border  :columns="fromTitle" :data="res.fromFormRes">
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
          <div class="email">
            <span>邮箱：</span>
            <input ref="emailInput" type="email" @blur="email()" v-model="fromForm.value" />
            <!-- <Input type="email" v-model="toForm.mailbox" /> -->
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
      type: Object,
    },
    // resFlag: {
    //   type: Object
    // },
  },
  data() {
    return {
      // 主题 表单显示与不显示
      fromFormFlag: false,
      //主题编辑数据
      fromEditFlag: false,
      fromEditIndex: 0,
      // 主题添加条件数据
      // name: "test-name",
      fromTitle: [
        {
          type: "index",
          width: 60,
          align: "center",
        },
        {
          title: "邮箱",
          key: "value",
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],

      fromForm: {
        value: "",
      },
    };
  },
  created() {
    // this.fromTitle.forEach((item) => {
    //           // console.log(item)
    //           item.className = 'test-name';
    //         });
  },
  methods: {
    //添加
    add(flag) {
      this.fromFormFlag = flag;
      this.fromEditFlag = false;
      for (var val in this.fromForm) {
        this.fromForm[val] = "";
      }
    },
    //保存
    preservation() {
      if (!this.fromEmailFlag) {
        this.$refs.emailInput.style.border = "1px solid red";
        // alert("邮箱格式不正确");
        return;
      }
      let obj = JSON.parse(JSON.stringify(this.fromForm));
      if (this.fromEditFlag) {
        this.res.fromFormRes[this.fromEditIndex] = obj;
        this.fromFormFlag = false;
        this.fromEditFlag = false;
      } else {
        this.res.fromFormRes.push(obj);
        this.fromFormFlag = false;
        this.fromEditFlag = false;
      }
    },
    // 取消
    cancel() {
      this.fromFormFlag = false;
    },
    // 删除
    fromRmove(index) {
      // console.log(this.res)
      this.res.fromFormRes.splice(index, 1);
    },
    //编辑
    fromEdit(index) {
      this.fromFormFlag = true;
      this.fromForm = this.res.fromFormRes[index];
      this.fromEditIndex = index;
      this.fromEditFlag = true;
    },
    // 邮箱失去焦点市检测
    email() {
      var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
      // console.log(this.fromForm.value)
      if (!reg.test(this.fromForm.value)) {
        alert("邮箱格式不正确");
        this.fromEmailFlag = false;
      } else {
        this.fromEmailFlag = true;
      }
    },

    //添加背景颜色
    // back() {
    //   if (this.resFlag.fromFormRes) {
    //         this.fromTitle.forEach((item) => {
    //           // console.log(item)
    //           item.className = 'test-name';
    //         });
    //      } else {
    //         this.fromTitle.forEach((item) => {
    //           // console.log(item)
    //           item.className = "";
    //         });
    //      }
    // }
  },
   watch: {
      // 'resFlag.fromFormRes'() {
      //   console.log(this.resFlag.fromFormRes)
      //   this.back()
      // }
    },
};
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
  padding: 30px 20px 0;
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
  width: 200px;
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

/* /deep/ .ivu-table th.test-name {
  background: #f40;
  border: #f40;
} */
</style>