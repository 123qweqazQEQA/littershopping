<template>
  <div class="address-list">
    <van-nav-bar
  title="地址列表"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<van-swipe-cell  v-for="(item ,index) in list"> 
  <van-list>
      <van-cell
        :key="index"
        :title="item.name"
        :label="item.tel"
        :value="item.area+item.detail"
        is-link
        @click="onClick(item.id)"
      >
      </van-cell>
    </van-list>
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button"  @click="deladdress(item.id)"/>
    <van-button square text="使用" type="danger" class="delete-button"    @click="use(item.id)"/>
  </template>
</van-swipe-cell>

     
    <div class="a"> 
    <van-button round block type="primary" native-type="submit" @click="onAdd">
      新增地址
    </van-button>
  </div>
  </div>
</template>


          

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import address from '@/api/address';
import HomeTabberVue from './HomeTabber.vue';
import { showToast } from 'vant';
const router = useRouter()
    const list = ref("")
function getaddress(){       
  address.addresslist().then(res=>{       
  list.value=res.data
    console.log(res.data) 
        
  })       
  let a=18
  address.getaddress(a).then(res=>{
    console.log(res)
  })
}       
    function onAdd(){
        router.push("/address")
    }
    function deladdress(a){
      const data={id:a}
      address.delgetaddress(data).then(res=>{
       console.log(res)
      })
    }
    function use(a){
         router.push({
    path :"shoppinglist",
     query :{addressd:a}
   })
    }
    function onClick(a){
      router.push({
    path :"addressdetail",
     query :{addressd:a}
   })
    }
    const onEdit = (item, index) => showToast('编辑地址:' + index);
    const onClickLeft = () => history.back();
 getaddress()
</script>

<style scoped>
.a{
  margin: 0px;
  padding: 0px;
  width: 100%;
  position:fixed;
  top: 93%;
}
</style>
