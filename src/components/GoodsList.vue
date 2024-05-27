<template>
  <div>
    <van-list>
      <van-nav-bar
        title="商品列表"
        class="goods-list"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-swipe-cell
        v-for="(goods, index) in store.state.goodslist.goodsList"
        :key="index"
        right-width="110"
      >
        <van-card
          :num="goods.num"
          tag="new"
          :price="goods.price"
          :desc="goods.sell_point"
          :title="goods.name"
          :thumb="goods.image"
          class="goods-card"
        />
        <template #right>
          <van-button
            square
            text="加入购物车"
            type="primary"
            class="delete-button"
            @click="addToCart(goods)"
          />
        </template>
      </van-swipe-cell>

      <van-back-top />
    </van-list>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const fetchGoodsList = async () => {
  await store.dispatch('goodslist/initGoodsList')
}
onMounted(async () => {
  await fetchGoodsList()
  console.log(store.state.goodslist)
})
</script>

<style lang="scss" scoped></style>
