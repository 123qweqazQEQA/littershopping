<template>
    <div class="register-page">
      <van-nav-bar title="注册" />
  
      <van-form @submit="onSubmit">
        <van-field
          v-model="data.username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
  
        <van-field
          v-model="data.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
  
        <van-field
          v-model="data.email"
         
          name="邮箱"
          label="邮箱"
       
          placeholder="请输入邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        />
  
        <div style="margin: 16px;">
          <van-button round block type="primary"  @click="onSubmit"  >注册</van-button>
        </div>
      </van-form>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import usercode from '@/api/usercode';
  import { useRouter } from 'vue-router'
  import { showNotify, closeNotify } from 'vant';
   
   const router = useRouter()
  let data=reactive({
    username:"",
    password : "",
    email : ""
  }
  )
 
  
  function onSubmit  () {
    // 处理注册逻辑
    usercode.register(data).then(res=>{
        
        console.log(data)
        if(res.code==0){
            showNotify({ type: 'success', message: res.msg  });
        }else{
         router.push("/longin")
        }
    })
  }
  </script>
  
  <style scoped>
  .register-page {
    padding-top: 16px;
  }
  </style>
  