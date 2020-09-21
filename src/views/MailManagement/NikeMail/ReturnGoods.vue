<template>
  <div class="box">
    <div class="title">
      <h2>退货邮件处理功能</h2>
      <div class="state-box">
        <Button @click="modal2('查活')">查活</Button>
        <div class="state" ref="state"></div>
      </div>
    </div>
    <!-- to部分 -->
    <To :res="res"></To>
    <!-- /to部分 -->
    <!-- 主题部分 -->
    <Subject :res="res"></Subject>
    <!-- /主题部分 -->
    <!-- from部分 -->
    <From :res="res"></From>
    <!-- /from部分 -->
    <!-- 目标邮件时间区间部分 -->
    <TimeInterval :res="res"></TimeInterval>
    <!-- /目标邮件时间区间部分 -->
    <!-- 接收结果邮箱部分 -->
    <ResEmail :res="res"></ResEmail>
    <!-- /接收结果邮箱部分 -->
    <footer>
      <div class="footer-btn">
        <!-- <a @click="Submit" :loading="loading">提交</a> -->
        <Button type="primary" @click="Submit" :loading="loading">启动</Button>
        <Button @click="modal2('关闭')">关闭</Button>
        <!-- <Modal
          v-model="modal"
          @on-ok="asyncOK"
          title="关闭">
          <p>关闭之后将不能提交邮件了！</p>
        </Modal>-->

        <Button @click="modal2('邮箱查询')">邮箱查询</Button>
        <Modal
          v-model="modal"
          :title="title"
          :loading="selectLoading"
          @on-ok="select"
          @on-visible-change="aaa"
        >
          <input ref="emailInput" type="email" v-model="email" placeholder="请输入邮箱号！" />
        </Modal>
      </div>
    </footer>
  </div>
</template>

<script>
// 请求函数
import {
  Submit,
  end,
  state,
  select,
} from "@/api/MailManagement/ReturnGoods.js";

// 组件
import Subject from "@/components/MailManagement/ReturnGoods/Subject.vue";
import From from "@/components/MailManagement/ReturnGoods/From.vue";
import To from "@/components/MailManagement/ReturnGoods/To.vue";
import TimeInterval from "@/components/MailManagement/ReturnGoods/TimeInterval.vue";
import ResEmail from "@/components/MailManagement/ReturnGoods/ResEmail.vue";

export default {
  data() {
    return {
      // 结果
      res: {
        //功能名称
        emailfunctionname: "tuihuo",
        // 主题
        subjectFormRes: [],
        // from  改成 发件人邮箱号
        fromFormRes: [],
        // to  改成  目标邮箱
        toFormRes: [],
        // 时间区间  改成  邮件查询周期
        timeFormRes: [],
        // 接收结果邮箱
        resFormRes: [],
        //功能选项   start:启动   close:关闭   search:查询   activate_status:查活
        status: "",
      },

      // resFlag: {
      //   subjectFormRes: false,
      //   fromFormRes: false,
      //   toFormRes: false,
      //   timeFormRes: false,
      //   resFormRes: false
      // },
      // 提交的loding
      loading: false,
      // 关闭按钮里面取消隐藏弹出来的窗口
      // modal: false,
      // 邮箱查询按钮里面取消隐藏弹出来的窗口
      selectLoading: true,
      modal: false,
      email: "",
      title: "",
    };
  },
  methods: {
    // modal2模态宽的显示
    modal2(data) {
      this.modal = true;
      this.title = data;
      if (data == "邮箱查询") {
        this.res.status = "search";
      } else if (data == "关闭") {
        this.res.status = "close";
      } else if (data == "查活") {
        this.res.status = "activate_status";
      }
    },
    // 清空res里面的条件数据
    clerat() {
      for (let key in this.res) {
        if (key != "emailfunctionname" && key != "status") {
          // console.log(key)
          this.res[key] = [];
        }
      }
    },
    //提交
    Submit() {
      this.loading = true;
      this.res.status = "start";
      Submit({ res: this.res })
        .then((res) => {
          // console.log(res.data)
          if (res.data.status == "success") {
            // console.log(this.res)
            this.clerat();
            this.loading = false;
            this.$Message.success("启动成功");
            // console.log(this.$refs.state)
            this.$refs.state.style.background = "#62ff00";
          } else {
            if (res.data.missing_item.length) {
              this.loading = false;
              res.data.missing_item.forEach((item) => {
                if (item == "toFormRes") {
                  this.$Notice.error({
                    title: "目标邮箱条件缺少",
                    desc: "请去添加却少的条件",
                    duration: 10,
                  });
                } else if (item == "subjectFormRes") {
                  this.$Notice.error({
                    title: "主题条件缺少",
                    desc: "请去添加却少的条件",
                    duration: 10,
                  });
                } else if (item == "fromFormRes") {
                  this.$Notice.error({
                    title: "发件人邮箱号条件缺少",
                    desc: "请去添加却少的条件",
                    duration: 10,
                  });
                } else if (item == "timeFormRes") {
                  this.$Notice.error({
                    title: "邮件查询周期条件缺少",
                    desc: "请去添加却少的条件",
                    duration: 10,
                  });
                } else if (item == "resFormRes") {
                  this.$Notice.error({
                    title: "接收结果邮箱条件缺少",
                    desc: "请去添加却少的条件",
                    duration: 10,
                  });
                }
              });
            } else {
              this.$Message.error("启动失败");
              this.loading = false;
              // console.log(this.$refs.state)
              this.$refs.state.style.background = "#f40";
            }
          }
        })
        .catch((err) => {
          this.$Notice.error({
            title: "请求错误请重新启动",
            desc: err,
          });
          this.loading = false;
        });
    },

    // 关闭确定之后回调
    // asyncOK() {
    //   end({res:{emailfunctionname: 'tuihuo',end: 'end'}}).then(res =>{
    //     console.log(res)
    //   })
    //   console.log("关闭成功")
    // },

    // 查活
    // state() {
    //   console.log("当前状态为：！！！！")
    //   state({res:{emailfunctionname: 'tuihuo',state: 'state'}}).then(res => {
    //     console.log(res)
    //   })
    // },

    //查询
    select() {
      var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
      if (!reg.test(this.email)) {
        this.$refs.emailInput.style.border = "1px solid red";
        this.$Message.error("邮箱格式错误");
        this.selectLoading = false;
      } else {
        this.clerat();
        this.res.toFormRes.push({ email: this.email });
        select({ res: this.res })
          .then((res) => {
            this.selectLoading = false;
            this.$refs.emailInput.style.border = "1px solid #333";
            console.log(res.data.res)
            // console.log(Object.keys(res.data.res).length)
            if (!Object.keys(res.data.res).length) {
              this.modal = false;
              this.$Message.error("程序处理失败!或者不知道status是什么状态");
            } else {
              if (res.data.res.status == "close") {
                if (res.data.status == "success") {
                  this.$Message.success("关闭成功");
                  this.$refs.state.style.background = "#f40";
                  this.modal = false;
                  this.clerat();
                }
              } else if (res.data.res.status == "search") {
                if (res.data.status == "success") {
                  this.$Message.success("查询成功");
                  this.res = res.data.res;
                  this.modal = false;
                } else {
                  this.$Message.error("查询失败");
                  this.modal = false;
                  this.clerat();
                }
              } else if (res.data.res.status == "activate_status") {
                if (res.data.online_status == "live") {
                  this.$refs.state.style.background = "#62ff00";
                  this.$Message.success("当前状态是启动状态");
                  this.modal = false;
                  this.clerat();
                } else {
                  this.$refs.state.style.background = "#f40";
                  this.$Message.error("当前状态异常");
                  this.modal = false;
                  this.clerat();
                }
              }
            }
          })

          .catch((err) => {
            this.$Notice.error({
              title: "请求错误请!",
              desc: err,
            });
            this.modal = false;
            this.selectLoading = false;
            this.clerat();
          });
      }
    },



    aaa(a) {
      if (!a) {
        this.email = "";
      }
    },
  },
  components: {
    Subject,
    From,
    To,
    TimeInterval,
    ResEmail,
  },
};
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
  background: red;
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
.ivu-btn {
  margin: 0 10px;
}
</style>