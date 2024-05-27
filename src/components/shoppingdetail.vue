<template>
  <div id="app">
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell>
          <div class="product-info">
         <img :src="album.img" >
            <div> 
              <div>
              <p>{{ product.sell_point }}</p>
              <p>价格: {{ product.price }}</p>
              <p>库存: {{ product.num }}</p>
            </div>
            </div>
          </div>
        
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      
    </van-cell-group>
  
  </div>
</template>

 <script setup>
 import { ref ,reactive} from 'vue';
 import { useRoute } from 'vue-router';
 import shop3 from '@/api/shop3';
 import order from '@/api/order';
 const route=useRoute()
 const product = ref([]);
 const album=ref("")
 const onClickLeft = () => history.back();
 function getdrtail(){
let a={id:route.query.id}
  shop3.detail( a).then(res=>{
    console.log(res)
    product.value=res.data
    album.value=res.data.album[0]
    console.log( album.value  )
  })
  console.log(route.query.id)
 }
 
 const addToCart = () => {
   // 添加到购物车的逻辑
 };
 
 const buyNow = () => {
   // 立即购买的逻辑
 };
 getdrtail()
 </script>
 
 <style scoped>
 .product-info {
   display: flex;
   align-items: center;
 }
 
 .product-info img {
   width: 80px;
   height: 80px;
   margin-right: 16px;
 }
 </style>