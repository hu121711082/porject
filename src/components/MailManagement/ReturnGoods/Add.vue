<template>
    <a class="add" @click="add(obj)">添加</a>
</template>

<script>
export default {
    props: {
        obj: {
            type: Object
        }
            
    },
    data() {
        return{
            flag: false
        }
    },
    methods: {
        add(obj) {
            if(obj.title == '主题'){
                this.subjectFormFlag = obj.flag
                for(var val in this.subjectForm){
                    this.subjectForm[val] = ''
                }
            }else if(obj.title == "from") {
                this.flag = obj.flag
                this.$emit("send",this.flag)
            }
        },
    }
}
</script>

<style scoped>
.add {
   padding: 5px 20px;
    background: chartreuse;
    color: #fff;
    border: 1px solid chartreuse;
    border-radius: 5px;
}
</style>