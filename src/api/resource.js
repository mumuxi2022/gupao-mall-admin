import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/mall-service-user/resource/list',
    method: 'get',
    params: params
  })
}

export function createResource(data) {
  return request({
    url: '/mall-service-user/resource/create',
    method: 'post',
    data: data
  })
}

export function updateResource(id, data) {
  return request({
    url: '/mall-service-user/resource/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteResource(id) {
  return request({
    url: '/mall-service-user/resource/delete/' + id,
    method: 'post'
  })
}

export function fetchAllResourceList() {
  return request({
    url: '/mall-service-user/resource/listAll',
    method: 'get'
  })
}
