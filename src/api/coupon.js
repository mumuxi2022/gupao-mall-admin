import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/mall-service-ad/coupon/list',
    method:'get',
    params:params
  })
}

export function createCoupon(data) {
  return request({
    url:'/mall-service-ad/coupon/create',
    method:'post',
    data:data
  })
}

export function getCoupon(id) {
  return request({
    url:'/mall-service-ad/coupon/'+id,
    method:'get',
  })
}

export function updateCoupon(id,data) {
  return request({
    url:'/mall-service-ad/coupon/update/'+id,
    method:'post',
    data:data
  })
}

export function deleteCoupon(id) {
  return request({
    url:'/mall-service-ad/coupon/delete/'+id,
    method:'post',
  })
}
