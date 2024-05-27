<template>
  <div>
    <van-nav-bar
        title="订单列表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    <div v-for="item in orderdeail " :key="item.id">
      <van-list>
        <van-cell v-for="item2 in item.user_order_goods" ::key="item2.id">
          <template #title>
            <div class="order-item">
              <div class="order-info">
                <div>订单号: {{ item2.id }}</div>
                <div>创建时间: {{ item2.create_time }}</div>
              </div>
              <div class="order-goods">
                <van-image :src="item2.goods_goods.image" />

                <div>价格 ¥{{ item2.price }}</div>
                <div>数量{{ item2.count }}</div>
                <van-button type="primary" size="mini" @click=delet(item.id)>删除</van-button>
              </div>
            </div>
          </template>
        </van-cell>
      </van-list>


    </div>
    <div>订单总数：{{ orderdeail.length }} </div>
    <div>


    </div>
  </div>
</template>



<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import order from '@/api/order';
import HomeTabberVue from './HomeTabber.vue';
import { showToast } from 'vant';

let orderdeail = ref("")
const router = useRouter()
function getorder() {
  order.getorderlist().then(res => {
    console.log(res)
    orderdeail.value = res.data
    console.log(orderdeail)
  })
}
function delet(data) {
  let d = { id: data }
  order.delorder(d).then(res => {
    console.log(res)
    console.log(d)
    getorder()
  })
}
const onClickLeft = () => history.back();
getorder()
</script>



<style scoped>
.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.order-goods {
  display: flex;
  align-items: center;
}

.order-goods>* {
  margin-right: 8px;
}

.order-count {
  margin-top: 16px;
  text-align: right;
}
</style>