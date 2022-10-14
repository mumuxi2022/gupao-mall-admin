import request from '@/utils/request'
export function getOrderSetting(id) {
  return request({
    url:'/mall-service-order/orderSetting/'+id,
    method:'get',
  })
}

export function updateOrderSetting(id,data) {
  return request({
    url:'/mall-service-order/orderSetting/update/'+id,
    method:'post',
    data:data
  })
}
