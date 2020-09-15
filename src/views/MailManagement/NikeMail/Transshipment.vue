<template>
  <div class="box">
    <h2>转货邮件处理功能</h2>
    <fieldset>
      <legend>查询条件</legend>
      <tbody>
        <tr>
          <td class="TableColumnTitle">系统运单号</td>
          <td>
             <Input v-model="value1" type="textarea" placeholder="Enter something..." />
          </td>
          <td class="TableColumnTitle">客户运单号</td>
          <td>
            <Input v-model="value2" type="textarea" placeholder="Enter something..." />
          </td>
          <td class="TableColumnTitle">运单状态</td>
          <td>
            <Select v-model="model1" style="width:100px">
              <Option v-for="item in state" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </td>
        </tr>
        <tr>
          <td class="TableColumnTitle">客户</td>
          <td>
            <Select v-model="model2" style="width:100px">
              <Option v-for="item in customer" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </td>
          <td class="TableColumnTitle">承运商</td>
          <td>
            <Input v-model="value2" placeholder="Enter something..." />
          </td>
          <td class="TableColumnTitle"></td>
          <td></td>
        </tr>
        <tr>
          <td class="TableColumnTitle">客户简称</td>
          <td>
            <Input v-model="value3" placeholder="Enter something..." />
          </td>
          <td class="TableColumnTitle">起运客户名称</td>
          <td>
            <Input v-model="value4" placeholder="Enter something..." />
          </td>
          <td class="TableColumnTitle">总单号</td>
          <td>
            <Input v-model="value5" placeholder="Enter something..." />
          </td>
        </tr>
        <tr>
          <td class="TableColumnTitle">结算月份</td>
          <td>
            <Input v-model="value6" placeholder="Enter something..." />
          </td>
          <td class="TableColumnTitle">实际提货日期</td>
          <td>
             <DatePicker type="date" v-model="value7" placeholder="Select date" style="width: 100px"></DatePicker>~
             <DatePicker type="date" v-model="value8" placeholder="Select date" style="width: 100px"></DatePicker>
          </td>
          <td class="TableColumnTitle">CRD要求日期</td>
          <td>
             <DatePicker type="date" v-model="value9" placeholder="Select date" style="width: 100px"></DatePicker>~
             <DatePicker type="date" v-model="value10" placeholder="Select date" style="width: 100px"></DatePicker>
          </td>
        </tr>
        <tr>
          <td class="TableColumnTitle">运输类型</td>
          <td>
            <Select v-model="model3" style="width:100px">
              <Option v-for="item in TransportType" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </td>
          <td class="TableColumnTitle">运单类型</td>
          <td>
            <Select v-model="model4" style="width:100px">
              <Option v-for="item in WaybillType" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </td>
          <td class="TableColumnTitle">整车/零担</td>
          <td>
            <Select v-model="model5" style="width:100px">
              <Option v-for="item in Vehicle" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </td>
        </tr>
         <tr>
          <td class="TableColumnTitle">起运城市</td>
          <td>
            <Input v-model="value11" placeholder="Enter something..." />
            <div class="tbn-Departure">
              <span class="sls">选择</span>
              <span class="creat">清空</span>
            </div>
          </td>
          <td class="TableColumnTitle">目的城市</td>
          <td>
            <Input v-model="value12" placeholder="Enter something..." />
            <div class="tbn-objective">
              <span class="sls">选择</span>
              <span class="creat">清空</span>
            </div>
          </td>
          <td class="TableColumnTitle">发货日期</td>
          <td>
             <DatePicker type="date" v-model="value13" placeholder="Select date" style="width: 100px"></DatePicker>~
             <DatePicker type="date" v-model="value14" placeholder="Select date" style="width: 100px"></DatePicker>
          </td>
        </tr>
      </tbody>
      <div class="actionButtonDiv">
         <Button>查询</Button>
         <Button>导出运单</Button>
         <Button>导出全部运单</Button>
         <Button>导出箱明细</Button>
         <Button>导出跟踪</Button>  
         <Button>附件下载</Button>
         <Button>导出全部异常</Button>
         <Button>打印运单</Button>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return{
      //系统运单号
      value1: '',
      // 客户运单号
      value2: '',
      // 运单状态
      state: [
          {
              value: '待审核',
              label: '待审核'
          },{
              value: '待调度',
              label: '待调度'
          },{
              value: '待发运',
              label: '待发运'
          },{
              value: '待中转',
              label: '待中转'
          },{
              value: '待配送',
              label: '待配送'
          },{
              value: '待签收',
              label: '待签收'
          },{
              value: '待结案',
              label: '待结案'
          },{
              value: '待结算',
              label: '待结算'
          },{
              value: '待开票',
              label: '待开票'
          },{
              value: '待付款',
              label: '待付款'
          },{
              value: '完成',
              label: '完成'
          },
      ],
      model1: '',
      // 客户
      customer:[
        {
          value: '太仓-耐克-运输',
          label: '太仓-耐克-运输'
        },
      ],
      model2: '',
      // 客户简称
      value3: '',
      // 起运客户名称
      value4: '',
      // 总单号
      value5: '',
      // 结算月份
      value6: '',
      // 实际提货日期
      value7: '',
      value8: '',
       // CRD要求日期
      value9: '',
      value10: '',
      // 运输类型
      TransportType:[
        {
          value: '公路',
          label: '公路'
        },
      ],
      model3: '',
      // 运单类型
      WaybillType:[
        {
          value: '出货运单',
          label: '出货运单'
        },
      ],
      model4: '',
      // 整车/零担
      Vehicle:[
        {
          value: 'LTL',
          label: 'LTL'
        },{
          value: 'FTL',
          label: 'FTL'
        },
      ],
      model5: '',
      // 起运城市
      value11: '',
      //目的城市
      value12: '',
      // 发货日期
      value13: '',
      value14: ''

    }
  }
}
</script>

<style scoped>
fieldset legend {
  margin-left: 30px;
}
</style>