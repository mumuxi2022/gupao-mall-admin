import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/mall-service-context/prefrenceArea/listAll',
    method:'get',
  })
}
