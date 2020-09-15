<template>
    <div class="warp">
        <div class="login-warp">
            <div class="img">
                <img src="@/assets/img/feng.png" alt="">
            </div>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user" :label-width="1">
                    <Input type="text" v-model="formInline.user" placeholder="账号">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>    
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" :style="{width: '100%'}" @click="Login">进入虹迪 GO</Button>
                </FormItem>
            </Form>
        </div>
        <div class="footer">©2015 Runbow-虹迪股份 上ICP证030173号</div>
    </div>
    
</template>

<script>
import { login } from '@/api/user/login'

export default {
    data() {
        return{
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: '账号不能为空！请输入账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空！请输入密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不够！最少6可字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        Login() {
            login(this.formInline).then(res => {
                console.log(res)
            })
        }
    },
    created() {
        console.log(process.env.VUE_APP_BASEURL)
    }
}
</script>

<style scoped>
    .warp {
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(rgb(112, 109, 109), rgb(50, 50, 51));
        padding-top: 150px;
        
    }
    .login-warp {
        width: 400px;
        height: 260px;
        background: rgb(53, 51, 51);
        margin: 0 auto;
        border-radius: 10px;
        padding: 15px;
    }
    .login-warp .img {
        text-align: center;
        padding: 15px 0;
    }
    .footer {
        height: 60px;
        line-height: 60px;
        font-size: 12px;
        text-align: center;
        color: #eea236;
        padding-top: 70px;

    }
</style>