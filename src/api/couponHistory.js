import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/mall-service-ad/couponHistory/list',
    method:'get',
    params:params
  })
}
