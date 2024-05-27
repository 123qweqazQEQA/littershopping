<template>
  <div class="container">
    <div class="a">
      <van-nav-bar title="登录" />
      <van-form>
        <van-field v-model="user.username" name="用户名" placeholder="用户名" />
        <van-field v-model="user.password" type="password" name="密码" placeholder="密码" />
        <div style="margin: 16px;">
          <van-button block native-type="submit" type="primary" @click="login()">
            登录
          </van-button>
          <br>
          <van-button block native-type="submit" type="primary" @click="res()">
            注册
          </van-button>
          <br>
         
        </div>
      </van-form>

    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import usercode from '@/api/usercode';


const router = useRouter()
const user = reactive({
  username: '',
  password: ''
})
 async function login() {
  console.log(usercode)
 await usercode.login(user).then(res => {
  console.log(res)
    if(res.code==0){
      alert(res.msg)
    }else{
    window.localStorage.setItem('token', res.data.session_id)
    console.log(window.localStorage.getItem('token'))
    router.push("/shopping")
    }
  })

}
 function res(){
  router.push("/register")
 }

</script>

<style></style>
<!-- login(){
  this.$axios.post('http://1.94.14.36/api/login',{
     username:this.name,
    password:this.password
  }).then(res=>{
      if(res.data.code==0){
        this.$message.error('密码或用户名错误')
      }else{

sessionStorage.setItem('session', res.data.data.session_id);
console.log( res.data.session_id)
console.log(sessionStorage.getItem('session'))

        this.$router.push('/Sy')
      }
  })
} -->
<style>
.container {
  background-image: url(@/assets/1.jpg);
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: fixed;


}
</style>