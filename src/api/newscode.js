import request from '@/utils/axios'
//新闻
export function   news( ) {
    return request({
      url: "/news/list" ,
      method: 'get',
   
    })
  }
  //新闻详情
  export function   newsdetail( data) {
    return request({
      url: "/news/show?id="+data ,
      method: 'get',
   
    })
  }
  export default{
    news,
    newsdetail
  }