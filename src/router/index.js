import { createRouter, createWebHistory } from 'vue-router'
import Test from '@/components/Test.vue'
import GoodsList from '@/components/GoodsList.vue'
import ShopCart from '@/components/ShopCart.vue'
import Long from  '@/components/Longin.vue'
import Sp from '@/components/Sp.vue'
import ShoppingList from "@/components/ShoppingList.vue"
import address from "@/components/adderss.vue"
import addresslist from "@/components/addresslist.vue"
import user from "@/components/user.vue"
import addressdetail from "@/components/addressdetail.vue"
import orderlist from "@/components/orderlist.vue"
import  register  from "@/components/register.vue"
import  news  from "@/components/news.vue"
import  newsdetail  from "@/components/newsdetail.vue"
import shoppingdetail from '@/components/shoppingdetail.vue'
const routes = [
  {
    path: '/',
    component: Long
  },
  {
    path: '/goodslist',
    component: GoodsList
  },
  {
    path: '/shopcart',
    component: ShopCart
  },{
    path :'/longin',
    component: Long
  },
  {
    path :'/shopping',
    component:Sp
  },
  {
    path :'/shoppinglist',
    component:ShoppingList
  },
  {
    path :'/address',
    component:address
  },
  {
    path :'/addresslist',
    component: addresslist
  },
  {
    path :'/user',
    component:  user
  },
  {
    path :'/addressdetail',
    component:  addressdetail
  },
  {
    path :'/orderlist',
    component: orderlist
  },
  {
    path :'/register',
    component: register
  },
  {
    path :'/news',
    component: news
  },
  {
    path :'/newsdetail',
    component: newsdetail
  },
  {
    path: '/shoppingdetail',
    component: shoppingdetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
