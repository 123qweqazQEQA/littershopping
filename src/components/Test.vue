<template>
  <div>
    <h1>{{ store.state.count }}</h1>
    <button @click="add">+2</button>
    <button @click="sub">-1</button>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const add = () => {
  // store.commit("increase",2)
  store.dispatch('increment', 2)
}
const sub = () => {
  // store.commit("increase",-1)
  store.dispatch('increment', -1)
}
</script>

<style lang="scss" scoped></style>
