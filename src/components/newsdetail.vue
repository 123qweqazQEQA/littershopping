<template>
    <div>
      <van-nav-bar
        :title="newsData[0].title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="news-content">
        <div class="news-header">
          <div class="news-info">
            <span>点击量: {{ newsData[0].click }}</span>
            <span>发布时间: {{ newsData[0].add_time }}</span>
          </div>
        </div>
        <div class="news-body" v-html="newsData[0].content"></div>
      </div>
    </div>
  </template>
  
  <script  setup>
   import {onMounted, reactive, ref} from 'vue'
 import newscode from '@/api/newscode';
 import { useRoute } from 'vue-router';
 const route=useRoute()
 let newsData = ref()
 
 function news1(){
    newscode.newsdetail(route.query.id).then(res=>{
    console.log(res)
    newsData.value=res.message
    console.log(newsData.value )
})
 }
 const onClickLeft = () => history.back();
    
news1()
  </script>
  
  <style scoped>
  .news-content {
    padding: 16px;
  }
  .news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .news-info span {
    margin-right: 8px;
    color: #999;
    font-size: 14px;
  }
  .news-body {
    font-size: 16px;
    line-height: 1.6;
  }
  </style>