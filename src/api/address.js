import request from '@/utils/axios'
export function  addersscreate(data) {
    return request({
      url: '/address/save',
      method: 'post',
      data: data
    })
  }
  export function  addresslist(data) {
    return request({
      url: '/address',
      method: 'get',
      
    })
  }
  export function   getaddress(data) {
    return request({
      url: '/address/def?id='+data,   
      method: 'get',
       
      
    })
  }
  export function   delgetaddress(data) {
    return request({
      url: '/address/del',
      method: 'post',
       data:data
      
    })
  }
  export function ordercreate(data) {
    return request({
      url: '/order/create',
      method: 'post',
      data: data
    })
  }
  export default {
    addersscreate,
    addresslist,
    getaddress,
    delgetaddress,
    ordercreate
  }