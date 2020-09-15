<template>
<div class="app">

  <div class="box">
    <router-link tag="div" class="img" :to="{name:'introduce', params:{type:'物流'}}">
      <img src="@/assets/img/wuliu.png" alt="">
    </router-link>
      
    
    <div class="title">物流</div>
  </div>

  <div class="box">
    <router-link tag="div" class="img" :to="{name:'introduce', params:{type:'商贸流'}}">
      <img src="@/assets/img/shangmaoliu.png" alt="">
    </router-link>
    <div class="title">商贸流</div>
  </div>
  <div class="box">
    <router-link tag="div" class="img" :to="{name:'introduce', params:{type:'资金流'}}">

      <img src="@/assets/img/zijinliu.png" alt="">
    </router-link>
    <div class="title">资金流</div>
  </div>
  <div class="box">
    <router-link tag="div" class="img" :to="{name:'introduce', params:{type:'信息流'}}">

      <img src="@/assets/img/xinxiliu.png" alt="">
    </router-link>
    <div class="title">信息流</div>
  </div>

</div>
  
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods: {

  } 
}
</script>

<style scoped>
.app {
  display: flex;
  padding: 20px;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
.box {
  width: 45%;
}
.box .img {
  width: 85%;
  margin: 0 auto;
}
.box .img img {
  width: 100%; 
  /* height: 80%;  */
}
.box .title {
  text-align: center;
  color: #666;
  font-size: 20px
}
</style>