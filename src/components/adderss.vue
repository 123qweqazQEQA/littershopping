<template>
  <div>
    <van-nav-bar
  title="新增地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
    <van-address-edit
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
 const onClickLeft = () => history.back();
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
      addressd.detail=a.addressDetail
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
</script>

<style scoped>

</style>
