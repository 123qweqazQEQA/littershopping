import { createStore } from 'vuex'
import goodslist from './modules/goodslist'
import shopcart from './modules/shopcart'

const store = createStore({
  //1.响应式数据
  state() {
    return {
      count: 10
    }
  },
  //2.类似计算属性
  getters: {},
  //3.异步方法调用
  actions: {
    increment({ commit }, data) {
      commit('increase', data)
    }
  },
  //4.同步方法调用
  mutations: {
    increase(state, data) {
      state.count += data
    }
  },
  //5.可以工程化组织数据
  modules: { goodslist, shopcart }
})

export default store
