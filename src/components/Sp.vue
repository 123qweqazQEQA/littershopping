<template>
    <div>

        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in imagedata" :key="item.id">
                <img :src=item.img height="150px" width="100%">
            </van-swipe-item>

        </van-swipe>

        <van-tabs swipeable @click-tab="onClickTab2">
            <van-tab v-for=" item,   in imagedata2" :key="item.id" :title="item.name">

                <van-tabs @click-tab="onClickTab">
                    <van-tab v-for=" (item2, index2) in item.sub " :key="item.sub[index2].id" :title="item2.name"
                        :name="item.sub[index2].id">






                        <van-card v-for="(item3, index3) in shoppinglist" :key="item3.id" :title="item3.name"
                            :thumb=item3.image>
                            <template #tags>
                                <van-tag plain type="primary">{{ item3.sell_point }}</van-tag>

                            </template>
                            <template #footer>
                                <van-button size="mini" @click="shoppingdetail(item3.id)">详情</van-button>
                                <van-button size="mini" @click="cuanc(item3)" v-show="xian(item3)" >加入购物车</van-button>
                                <van-button size="mini" @click="quxiao(item3)" v-show="!xian(item3)" >取消加入</van-button>
                            </template>
                        </van-card>












                        <!--  {{ item.sub[index2].id }} -->
                    </van-tab>
                </van-tabs>

                <!--    <van-card v-for="(i, index2) in item.sub  " :key=i.id num="0" :price='i.pid' desc="描述信息" :title="i.name"
                    :thumb="i.image">
                    <template #tags>
                        <van-tag plain type="primary">标签</van-tag>
                        <van-tag plain type="primary">标签</van-tag>
                    </template>
<template #footer>
                        <van-icon name="cart-o" color="#1989fa" size="30" @click="b(index, index2)"
                            v-show="gvc[a(index, index2)]" />
                        <van-stepper v-model="i.sub.pid" theme="round" button-size="22" v-show="!gvc[a(index, index2)]"
                            disable-input min="-1" @minus="g(i.sub.pid, index, index2)" />
                    </template>
<van-tabs v-model:active="active" scrollspy sticky>
    <van-tab v-for=" (item2, index2) in   imagedata2.sub " :key="item2.id" :title="item2.name"></van-tab>
</van-tabs>


</van-card> -->
            </van-tab>

        </van-tabs>

        <br>
        <br>
        <br>

        <HomeTabberVue></HomeTabberVue>

    </div>

</template>

<script setup>
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import shop3 from '@/api/shop3';
import HomeTabberVue from './HomeTabber.vue';
import { showToast } from "vant"
import { showNotify } from "vant"
import { useRouter } from 'vue-router';
 
import { inject } from 'vue'
const reload = inject("reload")
// 刷新页面
 function sx(){
    reload()
 }

const router = useRouter()
let cuan = reactive([])
const tot = ref(0)
const gvc = ref(0)

const imagedata = ref("")
const imagedata2 = ref('')
const shoppinglist = ref([])
let id = reactive(
    { category_id: 2 }
)
function shoppingdetail(a) {
    router.push({
        path: "/shoppingdetail",
        query: { id: a }
    })
}
function onClickTab2(name) {
    console.log(name)
    console.log(imagedata2.value[name.name].sub[0].id)
    id.category_id = imagedata2.value[name.name].sub[0].id;
    shop3.getGoodsList(id).then(res => {
        shoppinglist.value = res.data;
    })
}
async function onClickTab(name) {
    console.log(name)
    id.category_id = name.name;
    const res = await shop3.getGoodsList(id);
    console.log(res);
    shoppinglist.value = res.data;
    console.log(shoppinglist);

}

function getimage() {
    shop3.getImgs().then(res => {
        imagedata.value = res.data
        console.log(res)

    })
    shop3.getGoodsList(id).then(
        res => {
            shoppinglist.value = res.data
            console.log(shoppinglist)
        }

    )
    
}
async function getimage2() {
    await shop3.category().then(res => {
        imagedata2.value = res.data

        console.log(imagedata2.value)
        console.log(imagedata2.value[0].sub[0].pid)
    })
    const a = []
    console.log(imagedata2.value[1])
    for (let i = 0; i < imagedata2.value.length; i++) {
        for (let z = 0; z < imagedata2.value[i].sub.length; z++) {
            a.push(true)

        }
    }
    gvc.value = a
    console.log(gvc.value)
}
function a(a, b) {
    let totle = 0
    for (let i = 0; i <= a; i++) {
        totle += imagedata2.value[i].sub.length
    }
    totle -= imagedata2.value[a].sub.length
    totle += b
    return totle
}
async function b(a, b) {
    let totle = 0
    for (let i = 0; i <= a; i++) {
        totle += imagedata2.value[i].sub.length
    }
    totle -= imagedata2.value[a].sub.length
    totle += b
    gvc.value[totle] = !gvc.value[totle]



        .push(imagedata2.value[a].sub[b])
    console.log(JSON.stringify(cuan))
    window.localStorage.setItem("shopping", JSON.stringify(cuan))
    console.log(cuan)
    let bbbb = JSON.parse(window.localStorage.getItem("shopping"))
    console.log(bbbb)
}
function show() {
    let t = 0
    t++
    return gvc.value[t]
}
function g(q, w, e) {
    console.log(q, w, e)
    if (q == 1) {
        gvc.value[a(w, e)] = true
        imagedata2.value[w].sub[e].sub.pid = '1'
        cuan.forEach((item, index) => {
            if (item == imagedata2.value[w].sub[e]) {
                cuan.splice(index, 1)
                console.log(cuan)
            }
        });
    }
}
function cuanc(x) {
    if(window.localStorage.getItem("shopping")!=null){
    cuan=JSON.parse(window.localStorage.getItem("shopping"))
    cuan.push(x)
    let www = JSON.stringify(cuan)
    window.localStorage.setItem("shopping", www)
    console.log(window.localStorage.getItem("shopping"))
    showNotify({ type: 'success', message: "加入成功", duration: 250, });
    }else{
        cuan.push(x)
    let www = JSON.stringify(cuan)
    window.localStorage.setItem("shopping", www)
    console.log(window.localStorage.getItem("shopping"))
    showNotify({ type: 'success', message: "加入成功", duration: 250, });
    } 
    sx()
}
function xian(a) {
    let i = 0
    let w = JSON.parse(window.localStorage.getItem("shopping"))
 for(let c=0;c<w.length;c++){
 if(w[c].id==a.id){
    i++
 }
 }
    if (i != 0) {
        return false
    }else{
        return true
    }


}
function quxiao(a){
    console.log(a)
    cuan=JSON.parse(window.localStorage.getItem("shopping"))
    cuan.forEach((item, index) => {
        console.log(item)
            if (item.id==a.id) {
                console.log(item)
                cuan.splice(index, 1)
                console.log(cuan)
                let www = JSON.stringify(cuan)
    window.localStorage.setItem("shopping", www)
            }
        });
        sx()
    }




getimage(),
    getimage2()
  



</script>

<style scoped></style>