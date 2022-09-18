import axios from "axios";

const http = axios.create({
    baseURL: "http://leju.bufan.cloud/",
    timeout: 5000
})
http.interceptors.request.use(config => {
    config.headers.token = window.sessionStorage.getItem("token")
    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(res=>{
    return res.data
},error=>{
    return error
})

export default http
