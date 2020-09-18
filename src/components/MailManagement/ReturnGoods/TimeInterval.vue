<template>
  <!-- 目标邮件时间区间部分 -->
    <div class="warp-tiem">
      <ul class="tiem">
        <li class="title">
          <h3>目标邮件时间区间</h3>
           <a class="add" @click="add(true)">添加</a>
        </li>
        <li v-if="!timeFormFlag">
          <Table border :columns="timeTitle" :data="res.timeFormRes">
            <template v-slot:action="{ index}">
              <div class="table-btn">
                <a @click="timeRmove(index)">删除</a>
                <a @click="timeEdit(index)">编辑</a>
              </div>
            </template>
          </Table>
        </li>
      </ul>
      <div class="form" v-if="timeFormFlag">
        <ul>
            <li class="cycle">
                <span>周期</span>： <input type="number" placeholder="0" min="0" v-model="timeForm.day" > <span>天</span>
            </li>
            <li class="start-time">
                <span>时间</span>：<TimePicker confirm type="timerange" :value="Time" format="HH点mm分ss秒" @on-change="handleDatesChange" placeholder="请选择开始时间和结束时间" style="width: 250px"></TimePicker>
            </li>
            <li>
                <div class="btn">
                    <a class="preservation" @click="preservation()">保存</a>
                    <a class="cancel" @click="cancel()">取消</a>
                </div>
            </li>
        </ul>
      </div>
    </div>
    <!-- /目标邮件时间区间部分 -->
</template>

<script>
export default {
    props: {
         res: {
            type: Object
         }   
    },
    data() {
        return {
             // time数据部分
            // time 表单显示与不显示
            timeFormFlag: false,
            // time里面的邮箱是否正确
            
            timeEmailFlag: false,
            // time 编辑数据
            timeEditIndex: 0,
            // time添加条件数据
            timeTitle: [
            {
                title: '周期天数',
                key: 'day'
            },{
                title: '开始时间 - 结束时间',
                key: 'Time'
            },{
                title: '操作',
                slot: 'action',
                width: 150,
                align: 'center'
            }
            ],
            Time: [],
            timeForm: {
                day: 0,
                Time: ''
            },
        }
    },
    methods: {
        //添加
        add(flag) {
            this.timeFormFlag = flag
             for(var val in this.timeForm){
                this.timeForm[val] = ''
            }
        },
        //保存
        preservation() {
            if(this.timeForm.day == "") {
                this.timeForm.day = 0
            }
            let obj = JSON.parse(JSON.stringify(this.timeForm)) 
            if(this.timeEditFlag) {
                this.res.timeFormRes[this.timeEditIndex] = obj
                this.timeFormFlag = false
                this.timeEditFlag = false
            }else{
                this.res.timeFormRes.push(obj)
                this.timeFormFlag = false
                this.timeEditFlag = false
            }
        },
        // 取消
        cancel(){
            this.timeFormFlag = false
        },
        // 删除
        timeRmove(index) {
            console.log(this.res)
            this.res.timeFormRes.splice(index,1)
        },
        //编辑
        timeEdit(index){
            this.timeFormFlag = true
            this.timeForm = this.res.timeFormRes[index]
            this.timeEditIndex = index
            this.timeEditFlag = true
        },
        // 处理时间
         handleDatesChange(arr){
            let str = arr[0] + " - " + arr[1]
            this.timeForm.Time = str
        },

    },

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