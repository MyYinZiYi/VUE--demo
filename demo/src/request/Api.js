import http from './request.js'

export const querySignin = (a) => http.post('index/login',a)
export default querySignin
