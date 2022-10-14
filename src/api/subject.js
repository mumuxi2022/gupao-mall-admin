import request from '@/utils/request'
export function fetchListAll() {
  return request({
    url:'/mall-service-context/subject/listAll',
    method:'get',
  })
}

export function fetchList(params) {
  return request({
    url:'/mall-service-context/subject/list',
    method:'get',
    params:params
  })
}
