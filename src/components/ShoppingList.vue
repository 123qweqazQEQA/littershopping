<template>
    <div>

        <van-nav-bar title="购物车" left-text="返回商品" right-text="地址" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
        <van-card v-for="(i, index2) in shoppinglist  " :key=i.id num="0" :price='i.pid' desc="描述信息" :title="i.name"
            :thumb="i.image"   v-show="show">
            <template #tags>
                <van-tag plain type="primary">{{ index2 }}</van-tag>
                <van-tag plain type="primary">标签</van-tag>
            </template>
            <template #footer>
                <van-stepper v-model="count[index2]" theme="round" button-size="22" disable-input min="-1" @minus="x(i,count[index2])"
                    @plus="x" />
            </template>
        </van-card>
        <van-submit-bar button-text="提交订单" @submit="submit" />
 
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import address from '@/api/address';
import HomeTabberVue from './HomeTabber.vue';
import { showToast } from 'vant';
import { useRoute } from 'vue-router'
import { showNotify } from 'vant';
import { inject } from 'vue'
const reload = inject("reload")
// 刷新页面
 function sx(){
    reload()
 }
let show=ref(true)
let addressd = ref()
const router = useRouter()
const route = useRoute()
let shoppinglist = reactive([])
let count = reactive([])
function a() {
    if(JSON.parse(window.localStorage.getItem("shopping"))!=null){
    shoppinglist = JSON.parse(window.localStorage.getItem("shopping"))
    console.log(shoppinglist)

    for (let i = 0; i <= shoppinglist.length; i++) {
        count.push(0)

    }
    console.log(count)
    address.getaddress().then(res => {
        if (route.query.address == null) {
            addressd.value = res.data.id
        } else {
            addressd.value = route.query.addressd
        }
    })
    }else{
        shoppinglist=null
    }
}
function x(ax,b) {
  console.log(ax)
    console.log(b)
    if(b==0){
        shoppinglist.forEach((item,index)=>{
           if(item.id==ax.id){
            console.log(11111111)
     shoppinglist.splice(index,1)
     window.localStorage.setItem("shopping",JSON.stringify(shoppinglist))
     console.log(shoppinglist)
           }
        })
    }
    sx()
}

function onClickLeft() {
    router.push("/shopping")
}


function onClickRight() {
    router.push("/addresslist")

}
function submit() {
    let shop = {
        address: addressd.value,
        note: "",
        goods: []
    }
     
    for (let i = 0; i < shoppinglist.length; i++) {
        let shopa = {
            id: "",
            count: "",
            selected: true
        }
        shopa.id = shoppinglist[i].id
        shopa.count = count[i]
        shop.goods.push(shopa)
        
    }

   
    console.log(shop)
    console.log(JSON.stringify(shop))
    address.ordercreate(JSON.stringify(shop)).then(res => {
        showNotify({ type: 'primary', message: res.msg });
        console.log(res)
       
    if(res.code!=0){
        show.value=false
    }
    })
    shoppinglist=""
    window.localStorage.removeItem("shopping")
}
a()

</script>

<style scoped></style>
