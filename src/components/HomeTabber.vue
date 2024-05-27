<template>
    <div>
    <router-view></router-view>
    <van-tabbar v-model="active" route >
      <van-tabbar-item name="news" icon="home-o"    to="/shopping"> 商品</van-tabbar-item>
      <van-tabbar-item     to="/shoppinglist"><van-icon name="shopping-cart-o" size="25" /><br>购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png"   to="/user">我的</van-tabbar-item>
      
    </van-tabbar>
    </div>
   
  </template>
  
  <script>
  // @ is an alias to /src
   
  import { ref } from 'vue';
   
  
   
  
  export default {
   
    
    setup() {
      const active = ref(0);
      
      
      return {
        active,
       
      };
    },
  }
  </script>
  <style>
  .my-swipe .van-swipe-item {
    margin: 0%;
    padding: 0%;
  
  }
  </style>