import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url: '/mall-service-user/memberLevel/list',
    method:'get',
    params:params
  })
}
