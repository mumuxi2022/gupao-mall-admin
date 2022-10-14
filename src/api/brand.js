import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/mall-service-goods/brand/list',
    method:'get',
    params:params
  })
}
export function createBrand(data) {
  return request({
    url:'/mall-service-goods/brand/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/mall-service-goods/brand/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/mall-service-goods/brand/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deleteBrand(id) {
  return request({
    url:'/mall-service-goods/brand/delete/'+id,
    method:'get',
  })
}

export function getBrand(id) {
  return request({
    url:'/mall-service-goods/brand/'+id,
    method:'get',
  })
}

export function updateBrand(id,data) {
  return request({
    url:'/mall-service-goods/brand/update/'+id,
    method:'post',
    data:data
  })
}

