import request from '@/utils/axios'
//3. 用户登录，post请求，有参数
export function login(data) {
    return request({
      url: '/login',
      method: 'post',
      data: data
    })
  }
  export function   register(data) {
    return request({
      url: "/register" ,
      method: 'post',
   data:data
    })
  }
  export function user1() {
    return request({
      url: '/user',
      method: 'get',
      
     
    })
  }
  export default{
    login,
    register,
    user1
  }