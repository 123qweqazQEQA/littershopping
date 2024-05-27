<template>
  <div>
    <van-nav-bar
  title="新增地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
    <van-addressd-edit
  :area-list="areaList"
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
 
/>

 
  </div>

</template>

<script setup >
import { useRouter } from 'vue-router';
 import { ref ,reactive} from 'vue';
 import address from '@/api/address';
 import HomeTabber from './HomeTabber.vue';
 import { areaList } from '@vant/area-data';
 import { showNotify } from 'vant';
let addressd =reactive({
  name:"",
  tel:"",
  area:"",
  detail:"",
})
const router = useRouter()

    const searchResult = ref([]);
 
    function  onSave(a){
      addressd.name=a.name
      addressd.tel=a.tel
      addressd.area=a.city
      addressd.detail=a.addressdDetail
      console.log( a)
      console.log(addressd)
      address.addersscreate(addressd).then(res=>{
        console.log(res)
        showNotify({ type: 'primary', message: res.data.msg });
      })
    }
   function onDelete (){
     addressd={
      name:"",
  tel:"",
  area:"",
  detail:"",
     }
   }
    
    const onClickLeft = () => history.back();
  

</script>

<style scoped>

</style>
