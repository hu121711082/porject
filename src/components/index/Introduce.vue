<template>
  <div class="box">
      <Row>
            <Col span="15">
                <div class="img" @click="ReturnSuperior">
                    <img v-if="typeCont.imgsrc == 'wuliu'" src="@/assets/img/wuliu.png" alt="">
                    <img v-else-if="typeCont.imgsrc == 'shangmaoliu'" src="@/assets/img/shangmaoliu.png" alt="">
                    <img v-else-if="typeCont.imgsrc == 'zijinliu'" src="@/assets/img/zijinliu.png" alt="">
                    <img v-else src="@/assets/img/xinxiliu.png" alt="">
                </div>
            </Col>
            <Col span="6">
                <div class="cont">
                    <h5><{{typeCont.title}}></h5>
                    <p>{{typeCont.content}}</p>
                </div>
            </Col>
        
      </Row>
  </div>
</template>

<script>
export default {
    props:{
        typeCont: {
            type: Object
        }

    },
    data() {
        return{
            
        }
    },
    methods: {
        ReturnSuperior() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .box {
        display: flex;
        padding-top: 80px;
        padding-left: 10%;
        min-width: 800px;
    }
    /* .box .img {
        width: 500px;
    } */
    .box .cont {
        margin-top: 40px;
        width: 230px;
        margin-left: -15%;
        color: #666;
        font-size: 17px;
        /* margin-right: 15%; */
    }
</style>