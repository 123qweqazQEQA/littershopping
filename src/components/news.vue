<template>
    <div>
        <van-nav-bar
    title="新闻"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
      <van-list>
        <van-cell
          v-for=" item  in newsList "
          :key="item.id"
          :title="item.title"
          :label="item.zhaiyao"
          @click="newdea(item.id)"
          is-link
        >
         
            <van-image
              :src="item.img_url"
              width="80"
              height="60"
              fit="cover"
            />
          
        </van-cell>
      </van-list>
    </div>
  </template>

<script setup>
 import {onMounted, reactive, ref} from 'vue'
 import newscode from '@/api/newscode';
 import { useRoute } from 'vue-router';
 import { useRouter } from 'vue-router';
 const router=useRouter()
 let newsList = ref("")
 function news1(){
    newscode.news().then(res=>{
    console.log(res)
    newsList.value=res.message
    console.log(newsList.value )
})
 }
 function newdea(a){
    router.push({
        path:"/newsdetail",
        query: {id:a }
    })
 }
 const onClickLeft = () => history.back();
    
news1()
   
</script>

<style scoped>

</style>
