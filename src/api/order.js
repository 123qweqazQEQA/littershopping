import request from '@/utils/axios'
 

export function ordercreate(data) {
  return request({
    url: '/order/create',
    method: 'post',
    data: data
  })
}
export function   getorderlist(data) {
  return request({
    url: "/order/list" ,
    method: 'get',
 
  })
}
export function   delorder(data) {
  return request({
    url: "/order/cancel" ,
    method: 'post',
 data:data
  })
}
export default {
  ordercreate,
  getorderlist,
  delorder

}