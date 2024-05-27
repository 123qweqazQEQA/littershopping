// axios
import request from '@/utils/axios'
 
//1. 获取轮播图片,get请求，无参数
export function getImgs() {
  return request({
    url: '/imglist',
    method: 'get'
  })
}

//2. 获取商品分类，get请求，有参数
export function getGoodsList(data) {
  return request({
    url: '/goodslist',
    method: 'get',
    params: data
  })
}

 
 
export function category() {
  return request({
    url: '/category',
    method: 'get',
   
  })
}
  
export function detail(data) {
  return request({
    url: '/goodsinfo',
    method: 'get',
    params: data
  })
}
 
  
//输出三个方法
export default {
  getImgs,
  getGoodsList,
  category,
  detail
}
