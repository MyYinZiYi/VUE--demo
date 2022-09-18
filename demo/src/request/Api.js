import http from './request.js'

export const querySignin = (a) => http.post('lejuAdmin/index/login', a)


export const queryInitMenus = () => http.get('admin/sysAuth/index/getInitMenus')
