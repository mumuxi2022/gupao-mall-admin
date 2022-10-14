import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'//mall-service-order/companyAddress/list',
    method:'get'
  })
}
